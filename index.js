//part 1
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        inventory: [],
        companion:{
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        },
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

//parts 2 & 3
class Character {
    static MAX_HEALTH = 100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }

class Adventurer extends Character {
    static ROLES = ['Fighter', 'Healer','Wizard', 'Sorcerer', 'Paladin'];
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      if (!Adventurer.ROLES.includes(role)){
        throw new Error(`Invalid role ${role}.`)
      }
        
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

class Companion extends Character{
    constructor (name, role) {
        super(name);
        this.role = role;
        //Every companion starts with 100 gold coins
        this.inventory.push("100 gold coins");
    }
    //Companions have the ability to immediately teleport back to their team
    reconvene () {
        console.log(`${this.name} is returning...`)
        super.roll();                  
    }
}

  const robin = new Adventurer("Robin", "Fighter");
  robin.inventory = ["sword", "potion", "artifact"];
  const leo = new Companion("Leo", "Companion");
  leo.type = "Cat";
  const frank = new Companion("Frank", "Companion");
  frank.type = "Flea";
  frank.inventory = ["small hat", "sunglasses"];

  console.log(robin);
  console.log(leo);
  console.log(frank);

//   robin.companion = new Character("Leo");
//   robin.companion.type = "Cat";
//   robin.companion.companion = new Character("Frank");
//   robin.companion.companion.type = "Flea";
//   robin.companion.companion.inventory = ["small hat", "sunglasses"];
