// TODO: Move Enemy/Player classes into separate js files for better readability.

// Constants
// Defining assets globally to make sprites easier to swap out when necessary
//var playerSprite  = ['images/char-frog.png'],
// enemySprite = ['images/enemy-bug.png'];
var TILE_WIDTH = 101,
    TILE_HEIGHT = 83;

// Enemies our player must avoid
var Enemy = function(x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.startX = 0;                                // Enemy's starting x position
    this.startY = 230 * Math.random();              // 3 Enemies must have 3 y positions on 3 rows.
    this.speed = Math.floor(Math.random()*100 + 1);   // Trying a different method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
    // Current position of the enemy
    this.x = this.startX;
    this.y = this.startY;
    // Load the enemy sprites.
    this.sprite = 'images/enemy-bug.png';
    // Size of sprite
    //this.height = 150;
    //this.width = 150;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    // Smooth out enemy movement
    this.x += (this.speed * dt);

    // Repaint enemy to the left when enemy hits +10 right of canvas boundary
    if(this.x > 505) {
        this.x = this.x - 600;
        this.y = 230 * Math.random();
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y); // this.sprite (Enemy) still isn't rendering
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

//Defines Player object attributes
var Player = function(player) {
    // Storing starting x/y position of the frog
    this.startX = 205;
    this.startY = 460;
    // Defining vertical/horizontal steps frog makes
    // this.moveX = 200;
    // this.moveY = 180;
    // Current position of the frog
    this.x = this.startX;
    this.y = this.startY;
    // Load the player sprite.
    this.sprite = 'images/char-frog.png';

};
// Updates the player position.
// Parameter: dt, a time delta b/n ticks
Player.prototype.update = function(dt){
    // Reset when frog gets to 'y':'0' position
    if (this.y < TILE_HEIGHT) {
        alert("You saved the frog!");
        console.log("Player reached the water");
        // Only move player down, do not reset x position
        this.y = this.startY; // TODO: look for ways to D.R.Y. to save memory

    }
    this.collide();

};

// Draws the player on screen
Player.prototype.render = function(){
    // Leverages helper file (resources.js) to pull in sprite,
    // positions player at the starting location.
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Reset

Player.prototype.reset = function(x, y) {

  this.x = x || 205;
  this.y = y || 460;

};

// Move the player when eventListner triggers a movement
Player.prototype.handleInput = function(movement){
   // Wire up key-presses for movement
    if (movement === 'left' && this.x > 10) {
        this.x += - TILE_WIDTH;
    }
    if (movement === 'up' && this.y > -10) {
        this.y += - TILE_HEIGHT;
    }

    if (movement === 'right' && this.x < 400) {
        this.x += TILE_WIDTH;
    }

    if (movement === 'down' && this.y < 400) {
    this.y += TILE_HEIGHT;
}
};

Player.prototype.collide = function() {
    // Had to get some help from SO on this one
    // http://stackoverflow.com/questions/32570823/making-collision-detection-more-efficient

    allEnemies.forEach(function(enemy) {
        if(Math.abs(this.x - enemy.x) < 60 && Math.abs(this.y - enemy.y) < 50){
          this.reset();
        }
    },this);
};



// Now instantiate your objects.
// Refactor: Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy(0,(150 * Math.random())), new Enemy(-100,(150 * Math.random())), new Enemy(-10,(150 * Math.random()))];

// Place the player object in a variable called player
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
