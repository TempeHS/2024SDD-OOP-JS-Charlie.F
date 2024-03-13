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

class Player {}

const hanSolo = new Player();
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));

function AnotherPlayer() {}

const darthVader = new AnotherPlayer();
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));