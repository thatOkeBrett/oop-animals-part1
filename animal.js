class Animal{
    constructor(name){
        this.name = name
    }
    
    eat(){
        console.log(this.name + ' eats')
    }
    sounds(){
        return('makes noise')
    }
}
class Dog extends Animal{
    constructor(name){
        super(name)
    }
    sounds(){
        console.log('Dog barks')
    }
}
// var dog = new Dog('Rax')
// dog.eat()
// dog.sounds()

class Cat extends Animal{
    constructor(name){
        super(name)
    }
    sounds(){
        console.log('Cat meows')
    }
}
// var cat = new Cat('Stormy')
// cat.eat()
// cat.sounds()

let adoptedAnimals = [];

class Home {
    adoptPet(pet){
        adoptedAnimals.push(pet);
    }

    makeAllSounds (){
        for(var i = 0; i < adoptedAnimals.length; i++){
            adoptedAnimals[i].sounds();
        }
    //        adoptPet.forEach(function(pet) {
    //            return pet.sounds()
               
    //        });
     }
           
}
var home = new Home();
var dog1 = new Dog();
var dog2 = new Dog();
var cat = new Cat();

home.makeAllSounds();

home.adoptPet(dog1);
home.makeAllSounds();

home.adoptPet(cat);
home.makeAllSounds();

home.adoptPet(dog2);
home.makeAllSounds();