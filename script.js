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
		console.log( 'The Siamese makes a sound');
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();

const myDog = new Dog("Golden Retriever");
myDog.makeSound();
myDog.bark();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
