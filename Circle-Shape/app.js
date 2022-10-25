const w = window.innerWidth / 2;
const h = window.innerHeight / 2;

const stage = new Konva.Stage({
    container: "root",
    width: w,
    height: h
});

const layer = new Konva.Layer();

const circle = new Konva.Circle({
    x: 100,
    y: 100,
    radius: 50,
    fill: "yellow",
    stroke: "black"
});


layer.add(circle);
stage.add(layer);