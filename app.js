const Application = PIXI.Application;

const app = new Application({
    width: 800,
    height: 600,
    transparent: false,
    antialias: true,
});

app.renderer.background.color = 0xaaaaaa;

app.renderer.resize(window.innerWidth, window.innerHeight);

app.renderer.view.style.position = "absolute";

document.body.appendChild(app.view);

const Graphics = PIXI.Graphics;

//grid
let point = new Graphics();
let dist = 50;
let pointSize = 10;
let gridSize = 10;

const lineGrid = (y) => {
    point.beginFill(1000).drawCircle(200, 200, pointSize).endFill();
    for (let i = 0; i < gridSize; i++) {
        let sep = dist * i;
        console.log("dist", dist);
        point.beginFill(1000).drawCircle(200 + sep, y, pointSize);
    }
    app.stage.addChild(point);
};

const makegrid = () => {
    for (let i = 0; i < gridSize; i++) {
        sep = dist * i;
        lineGrid(sep + 200);
    }
};
makegrid();

//circles growings
let circle = new Graphics();
let circle1 = new Graphics();
let circle2 = new Graphics();
let circle3 = new Graphics();

circle.beginFill(0xaa33bb).drawCircle(200, 200, 100).endFill();

app.stage.addChild(circle);
app.stage.addChild(circle1);
app.stage.addChild(circle2);
app.stage.addChild(circle3);


let maxGrow = 30;
let velocity = 1;
let maxSteps = 200;
let direction = true;
let growScale = 0;
let stepCounter = 0;

const Grow = (i, x, y, obj) => {
    if (stepCounter <= maxSteps) {
        stepCounter += i;
        if (direction == true) {
            growScale = growScale + 1;
        } else {
            growScale = growScale - 1;
        }
        obj.clear();
        obj
            .beginFill(1000)
            .drawCircle(200 + x * dist, 200 + y * dist, growScale / maxGrow);
    }
    if (stepCounter > maxSteps) {
        stepCounter = 0;
        direction = false;
    }
    if (growScale < 0) {
        direction = true;
    }
};

let instancesAmount = 3;

const setInstances = () => {
    for (let i = 0; i < 3; i++) {
        //  let graphIns+i =
    }
};

app.ticker.add((i) => {
    Grow(i, 3, 3, circle);
    Grow(i, 2, 2, circle1);
    //Grow(i, 6, 8, circle2);
  //  Grow(i, 8, 4, circle3);

});

app.stage.addChild(circle);
