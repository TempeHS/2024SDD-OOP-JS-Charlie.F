alert("hello alert"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "i am going to script this giv"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
console.log("Hello console"); //Output to the console (Open dev tools and look at the console)

// comment
// i am going to code here someday.......


//badjs

/*const player = {
    name: '?',
    hp: 100,
    mp: 0,
    items: [],
};

const hanSolo = player;
hanSolo.name = "Han Solo";
hanSolo.hp = 80;
hanSolo.mp = 20;
hanSolo.items = ["Blaster"];

const darthVader = player;

console.log(hanSolo);
console.log(darthVader);*/



//slightly better js

/*const createPlayer = (name, hp, mp, items) => {
    return {
        name: name,
        hp: hp,        
        mp: mp,
        items: items,
    };
};

const hanSolo = createPlayer("Han Solo", 100, 10, ["Blaster"]);
console.log(hanSolo);

const darthVader = createPlayer("Darth Vader", 200, 50, ["Saber"]);
console.log(darthVader);
*/

// Manual Class

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

const darthVader = new AnotherPlayer("Darth Vader" 200, 50, ["Saber"]);
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));