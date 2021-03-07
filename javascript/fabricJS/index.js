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
      // console.log(1);
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
  });

  // mouse up
  canvas.on("mouse:up", (event) => {
    mousePressed = false;
    canvas.setCursor("default");
    canvas.renderAll();
  });
};

const canvas = initCanvas("canvas");
let mousePressed = false;

// Modes
let currentMode;
const modes = {
  pan: "pan",
  drawing: "drawing",
};

setBackground("https://picsum.photos/500", canvas);

setPanEvents(canvas);
