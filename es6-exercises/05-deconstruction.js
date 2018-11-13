// The detectCollision function searches through an array of rectangles and
// returns the first rectangle that the given point is inside of.

// Use destructuring and a higher-order function to make this code cleaner.
// Hint: you might want to use a new array method called find, so look that up!

function detectCollision(objects, point) {
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i]
    if (point.x >= object.x && point.x <= object.x + object.width &&
        point.y >= object.y && point.y <= object.y + object.height)
      return object
  }
}

const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

console.log(detectCollision(myObjects, {x: 4, y: 2}))

// source: http://marijnhaverbeke.nl/talks/es6_falsyvalues2015/exercises/#Improve_this_code

detectCollision => (objects, point) {
    let pX = point.x;
    let pY = point.y;
    let oX = object.x;
    let oY = object.y
  for (let i = 0; i < objects.length; i++) {
    let object = objects[i]
    if (pX >= oX && pX <= `oX ${this.width}` && pY >= oY && pY <= `oY ${this.height}`)
      return object
  }
}

const myObjects = [
  {x:  10, y: 20, width: 30, height: 30},
  {x: -40, y: 20, width: 30, height: 30},
  {x:   0, y:  0, width: 10, height:  5}
]

let myObjectsFound = myObjects.find((element) => return element >10 )

console.log(detectCollision(myObjects, {x: 4, y: 2}))


//////////////////////////example .find() method

// var array1 = [5, 12, 8, 130, 44];

// var found = array1.find(function(element) {
//   return element > 10;
// });

// console.log(found);
// expected output: 12
