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
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        return result;
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
    //part 6
    duel(adventurer){
        console.log(`${this.name} has intitiated a duel with ${adventurer.name}!`);
        while(this.health > 50 && adventurer.health > 50){
            let roll1 = super.roll();
            let roll2 = super.roll();
            console.log(`${this.name} rolls a ${roll1}. ${adventurer.name} rolls a ${roll2}.`);
        
        if(roll1 > roll2) {
            adventurer.health -= 1;
            console.log(`${this.name} wins the round! ${adventurer.name}'s health goes down to ${adventurer.health}.`);
        }else if (roll2 > roll1){
            this.health -= 1;
            console.log(`${adventurer.name} wins the round! ${this.name}'s health goes down to ${this.health}.`);
        }else{
            console.log("This round is a tie.")
        }
    }
    if(this.health > 50) {
        console.log(`${this.name} wins the duel! Winner winner chicken dinner!`)
    }else{
        console.log(`${adventurer.name} wins the duel! Winner winner chicken dinner!`)

    }
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

//part 5
class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const fighters = new AdventurerFactory("Fighter");
  healers.generate("Robin");
  fighters.generate("Frank");
  const robin = healers.findByName("Robin");
  const frank = fighters.findByName("Frank");
//   console.log(robin);
//   console.log(frank);
  robin.duel(frank);
  

