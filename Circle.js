class Circle{
    constructor(radius = 1,color = "red"){
       this.radius = radius;
       this.color = color;
    }
    
    get Radius(){
        return this.radius;
    }
    set Radius(radius){
        this.radius = radius;
    }
    get Color(){
        return this.color;
    }
    set Color(color){
        this.color = color;
    }
    getArea(){
        let radius = this.radius;
        let area = 3.14159265359*(radius*radius);
        return area.toFixed(2);
    }
    getCircumference(){
        let radius = this.radius;
        let circumference = 2*3.14159265359*radius;
        return circumference.toFixed(2);
    }
    toString(){
        return `Circle[radius = ${this.radius},color = ${this.color}]`;
    }
}
/*Test code

//Circle()
let circle1 = new Circle();
console.log(circle1);

//Circle(radius:Number)
let circle2 = new Circle(2);
console.log(circle2);

//Circle(radius:Number ,color:"string")
let circle3 = new Circle(3,"blue");
console.log(circle3);

console.log("\n");
//getRadius():Number
console.log(`circle1 radius is ${circle1.Radius}`);
console.log(`circle2 radius is ${circle2.Radius}`);
console.log(`circle3 radius is ${circle3.Radius}`);

console.log("\n");
//setRadius(radius:double):void
circle3.Radius = 5;
console.log("Modified circle3")
console.log(circle3);

console.log("\n");
//getColor():string
console.log(`circle1 color is ${circle1.Color}`);
console.log(`circle2 color is ${circle2.Color}`);
console.log(`circle3 color is ${circle3.Color}`);

console.log("\n");
//setColor(color:String):void
circle3.Color = "black";
console.log("Modified circle3")
console.log(circle3);

console.log("\n");
//getArea():double
let circle4 = new Circle();
circle4.Radius = 10;
console.log("circle4:")
console.log(`circle4 area is ${circle4.getArea()}`);

console.log("\n");
//getCircumference():double
console.log(`circle4 circumference is ${circle4.getCircumference()}`);

console.log('\n');
//toString():string
console.log(circle3.toString());
*/






