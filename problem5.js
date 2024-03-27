class EnemyFactory {
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
console.log(Object.getGetOwnPropertyNames(swimming.__proto__));