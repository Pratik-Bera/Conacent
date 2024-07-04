// Static is a class level fields therefore that can be use without creating Object of the class.

class mathOperations{
    public static PI = Math.PI;
    private static _r: number|undefined;

    public static set r(value:number){
        this._r = value;
    }
    public static calculateCircumference(): number{
        if(this._r===undefined){
            throw new Error("Radius is not defined");
        }
        return (2*this.PI*this._r);
    }

}

function main():void{
    mathOperations.r=34;
    console.log("Pi: ", mathOperations.PI);  // Static variable can be accessed directly as it is not tied to any object.
    console.log("Circumference: ", mathOperations.calculateCircumference());
}

main();