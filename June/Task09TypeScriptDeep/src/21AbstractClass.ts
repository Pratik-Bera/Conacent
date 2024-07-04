export{}

abstract class Shape{
    constructor(protected color:string){};
    abstract calculateArea(): number;
    abstract calculatePerimeter(): number;
}

class Circle extends Shape{
    constructor(color:string,public radius:number){
        super(color);
    }
    public calculateArea(): number{
        return Math.PI * Math.pow(this.radius, 2);
    } 

    public calculatePerimeter(): number{
        return 2*Math.PI *this.radius;
    }
}

function main(){
    const circle = new Circle("red", 5);
    console.log(`Circle area: ${circle.calculateArea()}`, `Circle perimeter: ${circle.calculatePerimeter()}`);
}

main();