" use strict ";
var Pet = function () {
    var display = document.getElementById("display");
    this.name = "";
    this.setName = function (name) {
        this.name = name;
    };
    this.getName = function () {
        return this.name;
    };
    this.speak = function () {
        display.innerHTML += "How?";
    };
    this.print = function () {
        display.innerHTML += this.name + "<br />" +
            this.speak + "<br />";
    };
};
var Dog = function () {
    Pet.call(this);
    this.name = "";
};
Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.speak = function () {
    this.display.innerHTML += "bark" + "<br /";
};
var Cat = function () {
    Pet.call(this);
    this.name = "";
};
Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.speak = function () {
    this.display.innerHTML += "meow" + "<br /";
};
var Frog = function () {
    Pet.call(this);
    this.name = "";
};
Frog.prototype = Object.create(Pet.prototype);
Frog.prototype.constructor = Frog;
Frog.prototype.speak = function () {
    this.display.innerHTML += "ribbit" + "<br /";
};
function PetChat() {
    var display = document.getElementById("display");
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
                    petList.add(new Cat());
                    break;
                case "dog":
                    petList.add(new Dog());
                    break;
                case "frog":
                    petList.add(new Frog());
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
            p.print();
        }
    };
}
;
var chat = new PetChat();
chat.init();
chat.print();
