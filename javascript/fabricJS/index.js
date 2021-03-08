// const canvas = new fabric.Canvas("canvas", {
//   width: 500,
//   height: 500,
//   backgroundColor: "red",
// });

// canvas.renderAll();

// fabric.Image.fromURL("https://picsum.photos/500", (img) => {
//   canvas.backgroundImage = img;
//   canvas.renderAll();
// });

const initCanvas = (id) => {
  return new fabric.Canvas(id, {
    width: 500,
    height: 500,
    selection: false,
  });
};

const setBackground = (url, canvas) => {
  fabric.Image.fromURL(url, (img) => {
    canvas.backgroundImage = img;
    canvas.renderAll();
  });
};

const toggleMode = (mode) => {
  if (mode === modes.pan) {
    if (currentMode === modes.pan) {
      currentMode = "";
    } else {
      currentMode = modes.pan;
      canvas.isDrawingMode = false;
      canvas.renderAll();
    }
  } else if (mode === modes.drawing) {
    if (currentMode === modes.drawing) {
      currentMode = "";
      canvas.isDrawingMode = false;
      canvas.renderAll();
    } else {
      currentMode = modes.drawing;
      canvas.freeDrawingBrush.color = color;
      canvas.isDrawingMode = true;
      canvas.renderAll();
    }
  }
  // console.log(mode);
};

const setPanEvents = (canvas) => {
  // mouse move
  canvas.on("mouse:move", (event) => {
    // console.log(event.e);
    if (mousePressed && currentMode === modes.pan) {
      canvas.setCursor("grab");
      canvas.renderAll();
      const mEvent = event.e;
      const delta = new fabric.Point(mEvent.movementX, mEvent.movementY);
      canvas.relativePan(delta);
    }
  });

  // mouse down
  canvas.on("mouse:down", (event) => {
    mousePressed = true;
    if (currentMode === modes.pan) {
      canvas.setCursor("grab");
      canvas.renderAll();
    }
    /*
    else if (currentMode === modes.drawing) {
      let x = event.e.clientX - canvas._offset.left;
      let y = event.e.clientY - canvas._offset.top;

      let circle = new fabric.Circle({
        left: x,
        top: y,
        fill: "red",
        originX: "center",
        originY: "center",
        hasControls: false,
        hasBorders: false,
        lockMovementX: true,
        lockMovementY: true,
        radius: 5,
        hoverCursor: "default",
      });

      canvas.add(circle);

      if (point1 === undefined) {
        point1 = new fabric.Point(x, y);
      } else {
        canvas.add(
          new fabric.Line([point1.x, point1.y, x, y], {
            stroke: "blue",
            // hasControls: false,
            // hasBorders: false,
            // lockMovementX: true,
            // lockMovementY: true,
            hoverCursor: "default",
          })
        );
        point1 = undefined;
      }
    } */
  });

  // mouse up
  canvas.on("mouse:up", (event) => {
    mousePressed = false;
    canvas.setCursor("default");
    canvas.renderAll();
  });
};
const setColorListener = () => {
  const picker = document.getElementById("colorPicker");
  picker.addEventListener("change", (event) => {
    // console.log(event.target.value);
    color = event.target.value;
  });
};

const clearCanvas = (canvas) => {
  canvas.getObjects().forEach((obj) => {
    if (obj !== canvas.backgroundImage) {
      canvas.remove(obj);
    }
  });
};

const createLine = (canvas) => {
  console.log(200);
  const canvCenter = canvas.getCenter();
  const line = new fabric.Line([50, 100, 200, 200], {
    left: 170,
    top: 150,
    stroke: "red",
  });
  canvas.add(line);
  canvas.renderAll();
};

const createRect = (canvas) => {
  const canvCenter = canvas.getCenter();
  const rect = new fabric.Rect({
    width: 100,
    height: 100,
    fill: "green",
    left: canvCenter.left,
    top: canvCenter.top,
    originX: "center",
    originY: "center",
  });
  canvas.add(rect);
  canvas.renderAll();
};

const createCirc = (canvas) => {};

// ---------------------------- **** ---------------------
// Runtime
const canvas = initCanvas("canvas");
let mousePressed = false;
let color = "#000000";
let point1;

// Modes
let currentMode;
const modes = {
  pan: "pan",
  drawing: "drawing",
};

setBackground("https://picsum.photos/500", canvas);

setPanEvents(canvas);

setColorListener();
