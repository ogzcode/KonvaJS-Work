const stage = new Konva.Stage({
    container: "container",
    width: 400,
    height: 400
});

const layer = new Konva.Layer();

const circle = new Konva.Circle({
    x: 70,
    y: 70,
    radius: 70,
    fill: "red"
});

layer.add(circle);
stage.add(layer);
layer.draw();