//complete this code
class Animal {
	constructor (species) {
		this._species = species;
	}

	makeSound() {
		console.log(`the ${this._species} makes a sound `);
	}
}



class Dog extends Animal {
	constructor (species) {
		super(species);
	}
	bark() {
		console.log("bark");
	}
}

class Cat extends Animal {
	constructor (species) {
		super(species);
	}
	purr() {
		console.log("purr");
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
