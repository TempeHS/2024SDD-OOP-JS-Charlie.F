alert("hello alert"); //Output to windows alert box
document.getElementById("ScriptThisDIV").innerHTML = "i am going to script this div"; //Output to the DOM (Document Object Module) with the id="ScriptThisDIV"
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

/*class Player {
    xPos = 500;
    yPos = 500;
    constructor(playerName, ammunition, hp, lives, playerDamage) {
        this.playerName = playerName;
        this.ammunition = ammunition;
        this.hp = hp;
        this.lives = lives;
        this.playerDamage = playerDamage;
    }
    
    shoot() {
        //shooting method
    }

    updateAlienCount() {
        for (const enemyAliens of this.alienCount) {
            console.log(enemyAliens)
            // update alien count when player kills an alien
        }
    }

    updateScore() {
        //update player score
    }
}

class obstacles {
    constructor (obstacleHealth, obstacleCount) {
        this.obstacleHealth = obstacleHealth;
        this.obstacleCount = obstacleCount;
    }
}

class enemyAliens {
    hp = 1;
    xPox;
    yPox;
    constructor(alienCount, yPos, xPos) {
        this.alienCount = alienCount;
        this.yPos = yPos;
        this.xPos = xPos;
    }
}

const Player1 = new Player("Player 1", 250, 100, 3, 10);
console.log(Player1);
console.log(Object.getOwnPropertyNames(Player));

const Aliens = new enemyAliens(44);
console.log(Aliens);
console.log(Object.getOwnPropertyNames(enemyAliens));

const spaceObstacle = new obstacles(85, 4);
console.log(spaceObstacle);
console.log(Object.getOwnPropertyNames(spaceObstacle));*/

/*class EnemyFactory {
    generateFlyingEnemy(name) {
        return new (class FlyingEnemy {
            constructor(flyingEnemyName) {
                this.name = flyingEnemyName;
            }
            fly() {
                console.log(this.name + " is flying");
            }
        }
    })(name);
}  

EnemyFactory.generateSwimmingEnemy = function(name) {
    class SwimmingEnemy {
        name = name;

        swim() {
            console.log(this.name + " is swimming");
        }
    }
    return new SwimmingEnemy(name)
};

const factory = new EnemyFactory();
const flying = factory.generateFlyingEnemy("batman");
flying.fly(); //batman can fly

const swimming = EnemyFactory.generateSwimmingEnemy("aquaman");
swimming.swim(); //aquaman can swim

console.log(Object.getGetOwnPropertyNames(EnemyFactory));
console.log(Object.getGetOwnPropertyNames(factory));
console.log(Object.getGetOwnPropertyNames(factory.__proto__));
console.log(Object.getGetOwnPropertyNames(flying.__proto__));
console.log(Object.getGetOwnPropertyNames(swimming.__proto__));*/

// inheritence and polymorphism

/*class Warrior {
    constructor(
        name,
        hp,
        items,
        shield) {
            
        this.name = name;
        this.hp = hp;
        this.items = items;
        this.shield = shield;
    }
}

class Wizard {
    constructor(
        name,
        hp,
        items,
        wand) {
            
        this.name = name;
        this.hp = hp;
        this.items = items;
        this.wand = wand;
    }
}

class Bartender {
    constructor(
        name,
        hp,
        items,
        mug) {
            
        this.name = name;
        this.hp = hp;
        this.items = items;
        this.mug = mug;
    }
}*/

//super class
class Player {
    
    constructor(
        name,
        hp,
        mp,
        items) {
            
        this.name = name;
        this.hp = hp;
        this.mp = mp;
        this.items = items;
    }
}

//sub class
class Warrior extends Player {
    
    constructor(
        name,
        hp,
        mp,
        items,
        shield) {
        super(name,hp,mp,items);

        this.shield = shield;
    }
}

const player = new Player("Player", 100, 10, []);
console.log(player);

const warrior = new Warrior("Gengis Khan", 300, 30, ["Sabre"], ["Leather Shield"]);
console.log(warrior);