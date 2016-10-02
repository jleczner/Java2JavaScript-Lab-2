" use strict ";

var Pet = function() {
    this.name = "";
    this.setName = function(name) {
        this.name = name;
    }
    this.getName = function() {
        return this.name;
    }
    this.speak = function() {
        display.innerHTML += "How?";
    }
}

var Dog = function() {
    Pet.call(this);
    this.name = "";
}

Dog.prototype = Object.create(Pet.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function() {
    display.innerHTML += "bark" + "<br /";
}

var Cat = function() {
    Pet.call(this);
    this.name = "";
}

Cat.prototype = Object.create(Pet.prototype);
Cat.prototype.constructor = Cat;

Cat.prototype.speak = function() {
    display.innerHTML += "meow" + "<br /";
}

function PetChat(){
  var display = document.getElementById("display");
  var numPets = null;

  var askHowMany = function(){
    return prompt("How many pets do you have?");
  };

  var askPetInfo = function(){
    for(var i=0; i<numPets; i++){
      var type = prompt("What is pet #" + (i+1) + "? (cat, dog, bird)");
      var name = prompt("What is pet #" + (i+1) + "'s name'?");
      var textOut = type + " " + name + "<br />";
      display.innerHTML += textOut;
    }
  };

  this.init = function(){
    while(numPets === null){
      numPets = askHowMany();
    }

    askPetInfo();
  }
};

var chat = new PetChat();
chat.init();
