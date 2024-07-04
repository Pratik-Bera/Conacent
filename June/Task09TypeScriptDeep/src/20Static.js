// Static is a class level fields therefore that can be use without creating Object of the class.
var mathOperations = /** @class */ (function () {
    function mathOperations() {
    }
    Object.defineProperty(mathOperations, "r", {
        set: function (value) {
            this._r = value;
        },
        enumerable: false,
        configurable: true
    });
    mathOperations.calculateCircumference = function () {
        if (this._r === undefined) {
            throw new Error("Radius is not defined");
        }
        return (2 * this.PI * this._r);
    };
    mathOperations.PI = Math.PI;
    return mathOperations;
}());
function main() {
    mathOperations.r = 34;
    console.log("Pi: ", mathOperations.PI); // Static variable can be accessed directly as it is not tied to any object.
    console.log(2 * Math.PI * 34); // Static variable can be accessed directly as it
    console.log("Circumference: ", mathOperations.calculateCircumference());
}
main();
