class Player {
    age = 20;
    constructor(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
        //this.age = 20;
    }

    speak(phrase) {
        console.log('${this.name} says: ${phrase}')
    }
}

const hanSolo = new Player("Han Solo", 100, 10, ["Blaster"]);
hanSolo.age = 50;
hanSolo.speak("Never tell me the odds!");
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
const Nader = new Player("Nader", 10, 5, ["Computer"]);
Nader.speak("Monkeys are the best animal!");
console.log(Nader);
console.log(Object.getOwnPropertyNames(Nader));
console.log(Object.getOwnPropertyNames(Nader.__proto__));

function AnotherPlayer(name, hp, mp, items) {
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
}

AnotherPlayer.prototype.speak = function(phrase) {
    console.log('${this.name} says: ${phrase}');
};

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));