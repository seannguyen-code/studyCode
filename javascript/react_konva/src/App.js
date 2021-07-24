import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Stage, Layer } from "react-konva";
import { ChromePicker } from "react-color";

import DummyImage from "./image/ImageCanvas";
import Lines from "./objects/Line";

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

const App = () => {
	const [lines, setLines] = useState([]);
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
