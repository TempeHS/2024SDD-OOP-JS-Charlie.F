class Player {
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
console.log(Object.getOwnPropertyNames(spaceObstacle));