const w = window.innerWidth;
const h = window.innerHeight;

const stage = new Konva.Stage({
    container: "container",
    width: w / 2,
    height: h / 2
});

const layer = new Konva.Layer();

const rectOne = new Konva.Rect({
    x: 20,
    y: 20,
    width: 100,
    height: 50,
    fill: "green",
    stroke: "black",
    strokeWidth: 4
});

const rectTwo = new Konva.Rect({
    x: 150,
    y: 40,
    width: 100,
    height: 40,
    fill: "red",
    shadowBlur: 5,
    cornerRadius: 10
});

const rectThree = new Konva.Rect({
    x: 50,
    y: 120,
    width: 100,
    height: 100,
    fill: "blue",
    cornerRadius: [0,10,0,20]
});
stage.add(layer);

layer.add(rectOne);
layer.add(rectTwo);
layer.add(rectThree);
layer.draw();