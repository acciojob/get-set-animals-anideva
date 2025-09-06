class Animal {
	constructor(species) {
		this.species = species;
		
	}
	makeSound() {
		console.log(`The ${this.species} makes a sound`)
	}
}

//cat ka class ka kam chalu karte hai abb
class Cat extends Animal {
	constructor(species) {
		super(species);
	}
	makeSound() {
		console.log(`The ${this.species} makes a sound`);
	}
	purr() {
		console.log("purr");
	}
}

//ab dog ka class ka kam chalu karte hai

class Dog extends Animal {
	constructor(species) {
		super(species);
	}
	makeSound() {
		console.log(`The ${this.species} makes a sound`);
	}
	bark() {
		console.log("woof");
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
