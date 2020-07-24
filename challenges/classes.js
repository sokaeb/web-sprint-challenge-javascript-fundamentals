// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker{
    constructor(attributes){
        this.len = attributes.len;
        this.wid = attributes.wid;
        this.hei = attributes.hei;
    }
    volume(){
        return this.len * this.wid * this.hei;
    };
    surfaceArea(){
        return 2 * (this.len * this.wid + this.len * this.hei + this.wid * this.hei);
      };
  };
  
  const cuboid = new CuboidMaker({
      len: 4, 
      wid: 5, 
      hei: 5,
    });
  
// Test your volume and surfaceArea methods by uncommenting the logs below:
// console.log(cuboid.volume()); // 100
// console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

// cube volume = side * side * side
// cube surface area = side squared * 6

class CubeMaker extends CuboidMaker{
    constructor(attributes){
        super(attributes); 
    };
    cubeVol(){
        return Math.pow(this.len, 3); // power method returns value of length to the power of 3
    };
    cubeSurfArea(){
       return (Math.pow(this.len, 2) * 6); // pow method squares the value of length and * 6(sides of a cube)
    };
};

const cube = new CubeMaker({
    len: 4, 
    wid: 4, 
    hei: 4,
});

console.log(cube.cubeVol());
console.log(cube.cubeSurfArea());