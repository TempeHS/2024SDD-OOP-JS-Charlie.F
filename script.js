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

/*class Player {
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
console.log(Object.getOwnPropertyNames(darthVader.__proto__));*/

/*class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const Giraffe = new Animal("Geoffrey", "mammal");
console.log(Giraffe);
console.log(Object.getOwnPropertyNames(Giraffe));

function AnotherAnimal(name, type) {
    this.name = name;
    this.type = type;
}

const Horse = new Animal("Horse", "mammal");
console.log(Horse);
console.log(Object.getOwnPropertyNames(Horse));

Giraffe.name = "Grace";
console.log(Giraffe);
console.log(Object.getOwnPropertyNames(Giraffe));

Horse.name = "Harry";
console.log(Horse);
console.log(Object.getOwnPropertyNames(Horse));*/

/*class Students {
    constructor(name, major, grade) {
        this.name = name;
        this.major = major;
        this.grade = grade;
    }
    addGrade(result) {
        this.grade.push(result)
    }

    calcGPA() {
        let total = 0;
        for (let i = 0; i<this.grade.length; i++) {
            total += this.grade[i]
        }
        return(total / this.grade.length)
    }
}

const Chris = new Students("Chris", "Software Engineering", [95, 75, 83]);
console.log(Chris);
console.log(Chris.calcGPA())*/

/*class Bookstore {
    constructor(books) {
        this.books = books;
    }
    
    listBooks() {
        for (const book of this.books) {
            //console.log(`${book.name} by ${book.author}`);
            book.displayBook();
        }
    }
}

class Book {
    constructor(name, author) {
        this.name = name;
        this.author = author;
    }
    
    displayBook() {
        console.log(`${this.name} by ${this.author}`);
    }
}

const nineteen84 = new Book("1984", "George Orwell");
const hp = new Book ("Harry Potter", "J.K Rowling");

const bookstore = new Bookstore( [nineteen84, hp] )

bookstore.listBooks();*/

class Player {
    constructor(spaceship, flyingAliens, playerLives, spaceshipAmmo) {
        this.spaceship = spaceship;
        this.flyingAliens = flyingAliens;
        this.playerLives = playerLives;
        this.spaceshipAmmo = spaceshipAmmo;
    }
}