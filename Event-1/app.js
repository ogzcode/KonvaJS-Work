const w = window.innerWidth / 2;
const h = window.innerHeight / 2;

const stage = new Konva.Stage({
    container: "container",
    width: w,
    height: h
});

const layer = new Konva.Layer();

const circle = new Konva.Circle({
    x: w / 2,
    y: h / 2,
    radius: 30,
    fill: "red",
    shadowBlur: 4
});

const circle1 = new Konva.Circle({
    x: w / 2 + 100,
    y: h / 2 + 100,
    radius: 30,
    fill: "red",
    shadowBlur: 4,
    name: "Circle-1"
});

circle.on("click", () => {
    console.log("circle");
    circle.destroy();
});

circle1.on("click", () => {
    console.log(circle1.name());
    circle1.destroy();
});

layer.add(circle);
layer.add(circle1);

stage.add(layer);


