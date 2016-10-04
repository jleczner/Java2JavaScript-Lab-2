" use strict ";
var display = document.getElementById("display");
function Pet() {
    this.name = "";
}
;
Pet.prototype.setName = function (name) {
    this.name = name;
};
Pet.prototype.getName = function () {
    return this.name;
};
Pet.prototype.speak = function () {
    return "How?";
};
function Dog() {
    Pet.call(this);
}
Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
    return "bark" + "<br />";
};
var Cat = function () {
    Pet.call(this);
};
Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.speak = function () {
    return "meow" + "<br />";
};
var Frog = function () {
    Pet.call(this);
};
Frog.prototype = Object.create(Pet.prototype);
Frog.prototype.constructor = Frog;
Frog.prototype.speak = function () {
    return "ribbit" + "<br />";
};
function PetChat() {
    var numPets = null;
    var petList;
    var petTypes;
    var petNames;
    var askHowMany = function () {
        return prompt("How many pets do you have?");
    };
    var askPetInfo = function () {
        for (var i = 0; i < numPets; i++) {
            var type = prompt("What is pet #" + (i + 1) + "? (cat, dog, frog)");
            var name = prompt("What is pet #" + (i + 1) + "'s name'?");
            petTypes[i] = type;
            petNames[i] = name;
        }
    };
    var makePets = function () {
        for (var i = 0; i < numPets; i++) {
            switch (petTypes[i]) {
                case "cat":
                    petList.push(new Cat());
                    break;
                case "dog":
                    petList.push(new Dog());
                    break;
                case "frog":
                    petList.push(new Frog());
                    break;
                default:
                    console.log("bad input: " + petTypes[i]);
                    break;
            }
        }
    };
    var namePets = function () {
        for (var i = 0; i < numPets; i++) {
            var p = petList[i];
            p.setName(petNames[i]);
        }
    };
    this.init = function () {
        while (numPets === null) {
            numPets = askHowMany();
        }
        petList = new Array();
        petTypes = new Array();
        petNames = new Array();
        askPetInfo();
        makePets();
        namePets();
    };
    this.print = function () {
        for (var i = 0; i < numPets; i++) {
            var p = petList[i];
            display.innerHTML += p.getName() + " " + p.speak();
        }
    };
}
;
var chat = new PetChat();
var dog = new Dog();
chat.init();
chat.print();
