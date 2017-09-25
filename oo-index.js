class Unicorn {
  constructor(name, occupation) {
    this.name = name;
    this.occupation = occupation;
    this.health = 1000
    this.listeners()

  }

    listeners(){
      this.eventArea = document.getElementById('event_area')
      this.imageArea = document.getElementById('image_area')
      this.restartButton = document.getElementById('restart').addEventListener("click",()=> this.restart())
      this.attackButton = document.getElementById('attack').addEventListener("click",()=> this.attack())
      this.defendButton = document.getElementById('defend').addEventListener("click",()=> this.defend())
      this.healButton = document.getElementById('heal').addEventListener("click",()=> this.heal())
      this.breakdanceButton = document.getElementById('breakdance').addEventListener("click",()=> this.breakdance())
      this.eatButton = document.getElementById('eat').addEventListener("click",()=> this.eatCronut())
    }
    restart() {
    while (this.eventArea.hasChildNodes()) {
        this.eventArea.removeChild(this.eventArea.lastChild);
    }
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("Out on the street, ready to go!"));
  this.eventArea.prepend(div);
    this.imageArea.className = 'new';
  }

    attack() {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode("'ATTAAAAAAAAAK!''"));
  this.eventArea.prepend(div);
    this.imageArea.className = 'attack';
  }

      defend() {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode("You put sunglasses on."));
    this.eventArea.prepend(div);
      this.imageArea.className = 'defend';
    }

      heal() {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode("You feel refreshed after yoga."));
    this.eventArea.prepend(div);
      this.imageArea.className = 'heal';
    }

      breakdance() {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode("It's really spinning class"));
    this.eventArea.prepend(div);
      this.imageArea.className = 'breakdance';
    }

      eatCronut() {
      var div = document.createElement("div");
      div.appendChild(document.createTextNode("You've gained 1000 health points."));
    this.eventArea.prepend(div);
      this.imageArea.className = 'eat';
    }

  }

  let a = new Unicorn("David", "Poogamer")
