import { Fragment, useRef, useEffect, useState, useLayoutEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Image, Stage, Layer, Transformer, Line } from "react-konva";
import { ChromePicker } from "react-color";
import useImage from "use-image";
import Magnifier from "react-magnifier";

const DummyImage = ({ shapeProps, isSelected, onSelect, onChange }) => {
  const [image] = useImage("https://picsum.photos/500");
  const shapeRef = useRef();
  const trRef = useRef();

  useLayoutEffect(() => {
    shapeRef.current.cache();
  }, [image]);

  useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      trRef.current.setNode(shapeRef.current);
      trRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  return (
    <Fragment>
      <Image
        image={image}
        onClick={onSelect}
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
          const node = shapeRef.current;

          onChange({
            ...shapeProps,
            x: node.x(),
            y: node.y(),
            scaleX: node.scaleX(),
            scaleY: node.scaleY(),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={trRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </Fragment>
  );
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
    <Fragment>
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
    </Fragment>
  );
};

const initialImage = [
  {
    x: 10,
    y: 10,
    // width: 500,
    // height: 500,
    scaleX: 1,
    scaleY: 1,
    id: "img1",
  },
];

const initialLines = [
  // { id: "line1", points: [50, 50, 250, 50], strokeWidth: 5, stroke: "green" },
  // {
  //   id: "line2",
  //   points: [100, 100, 350, 100],
  //   strokeWidth: 15,
  //   stroke: "blue",
  // },
];

const App = () => {
  const [lines, setLines] = useState(initialLines);
  const [images, setImages] = useState(initialImage);
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
      <Row className="mb-2 mt-2">
        <Button
          variant="dark"
          onClick={() => {
            const newLines = [
              ...lines,
              {
                id: `line${Math.floor(Math.random() * 1000) + 1}`,
                points: [100, 100, 350, 100],
                strokeWidth: parseInt(stokeWidth),
                stroke: color,
              },
            ];
            console.log(newLines);
            setLines(newLines);
          }}
        >
          Add A Line
        </Button>

        <input
          value={stokeWidth}
          onChange={(e) => {
            var newVal = e.target.value;
            if (newVal > 20) newVal = 10;
            setStokeWidth(newVal);
          }}
          type="number"
        />

        <Col>
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
        </Col>

        <Button
          variant="warning"
          onClick={() => {
            const newLines = lines.filter((line) => line.id !== selectedId);
            setLines(newLines);
          }}
        >
          Delete selected Line
        </Button>
        <Button
          variant="danger"
          onClick={() => {
            setLines([]);
          }}
        >
          Clear Canvas
        </Button>
      </Row>

      <Row>
        <Stage
          style={{ backgroundColor: "#F0E3CA" }}
          // opacity={0.8}
          width={window.outerWidth}
          height={window.outerHeight}
          onMouseDown={checkDeselect}
          onTouchStart={checkDeselect}
        >
          <Layer>
            {images.map((img, i) => {
              return (
                <DummyImage
                  key={i}
                  shapeProps={img}
                  isSelected={img.id === selectedId}
                  onSelect={() => {
                    selectShape(img.id);
                  }}
                  onChange={(newAttrs) => {
                    const imgs = images.slice();
                    imgs[i] = newAttrs;
                    setImages(imgs);
                  }}
                />
              );
            })}

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
