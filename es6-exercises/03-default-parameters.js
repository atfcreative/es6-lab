// Convert the driveTo method below to use ES6 default parameters.

const myRide = {
  make: "Ford",
  model: "Model T",
  year: 1959,
  location: "the Office",
  driveTo: place => { this.location = place || "Home" }
}

myRide.driveTo("Walmart")
myRide.location // "Walmart"

// vs...

myRide.driveTo()
myRide.location // "Home"
