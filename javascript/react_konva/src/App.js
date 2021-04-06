import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Button, ToggleButton } from "react-bootstrap";
import { Image, Stage, Layer, Transformer, Line } from "react-konva";
import { ChromePicker } from "react-color";
import useImage from "use-image";

const BackGroundImage = () => {
  const [image] = useImage("https://picsum.photos/500");
  return <Image draggable image={image} />;
};

const Lines = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const shapeRef = useRef();
  const trRef = useRef();

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.nodes([shapeRef.current]);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <React.Fragment>
      <Line
        onClick={onSelect}
        onTap={onSelect}
        ref={shapeRef}
        {...shapeProps}
        draggable
        onDragEnd={(e) => {
          onChange({
            ...shapeProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // transformer is changing scale of the node
          // and NOT its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = shapeRef.current;
          // we will reset it back
          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          enabledAnchors={["middle-right", "middle-left", "bottom-center"]}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
};

const initialLines = [
  { id: "line1", points: [50, 50, 250, 50], strokeWidth: 5, stroke: "green" },
  {
    id: "line2",
    points: [100, 100, 350, 100],
    strokeWidth: 15,
    stroke: "blue",
  },
];

const App = () => {
  const [lines, setLines] = useState(initialLines);
  const [selectedId, selectShape] = useState(null);
  const [stokeWidth, setStokeWidth] = useState(5);
  const [color, setColor] = useState("#fff");
  const [showColorPicker, setshowColorPicker] = useState(false);

  const checkDeselect = (e) => {
    // deselect when clicked on empty area
    const clickedOnEmpty = e.target === e.target.getStage();
    if (clickedOnEmpty) {
      selectShape(null);
    }
  };

  return (
    <Container fluid>
      <Row>
        <Button
          variant="dark"
          onClick={() => {
            const newLines = [
              ...lines,
              {
                id: `line${lines.length + 1}`,
                points: [100, 100, 350, 100],
                strokeWidth: parseInt(stokeWidth),
                stroke: color,
              },
            ];
            console.log(newLines);
            setLines(newLines);
            // console.log(newLines);
          }}
        >
          Add A Line
        </Button>

        <input
          value={stokeWidth}
          onChange={(e) => setStokeWidth(e.target.value)}
          type="number"
        />
        <Button
          variant="secondary"
          onClick={() =>
            setshowColorPicker((showColorPicker) => !showColorPicker)
          }
        >
          {showColorPicker ? "Close Picker" : "Pick a color"}
        </Button>
        {showColorPicker && (
          <ChromePicker
            color={color}
            onChange={(updatedColor) => {
              setColor(updatedColor.hex);
            }}
          />
        )}

        <Button variant="primary">Clear Canvas</Button>
      </Row>
      <Row>
        <Stage
          style={{ backgroundColor: "#ffe6e6" }}
          // opacity={0.8}
          width={window.outerWidth}
          height={window.outerHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer>
            <BackGroundImage />
            {lines.map((line, i) => {
              return (
                <Lines
                  key={i}
                  shapeProps={line}
                  isSelected={line.id === selectedId}
                  onSelect={() => {
                    selectShape(line.id);
                  }}
                  onChange={(newAttrs) => {
                    const aLine = lines.slice();
                    aLine[i] = newAttrs;
                    setLines(aLine);
                  }}
                />
              );
            })}
          </Layer>
        </Stage>
      </Row>
    </Container>
  );
};

export default App;
