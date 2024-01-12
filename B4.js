class Circle {
    constructor (x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    render (canvas) {
        let ctx = canvas.getContext("2d");
        let circle= new Circle(x, y, radius, color);
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}
let x=50;
let y=50;
let radius = 80;
let color = '#000000';

let newCanvas = new Circle(x, y, radius, color);
newCanvas.render(document.getElementById("myCanvas"));

