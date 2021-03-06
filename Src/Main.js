//Configure game to browser and include menu and play core scenes
//test
let config = {

    type: Phaser.AUTO,
    width: 740,
    height: 700,
    physics: {
        default: 'arcade',
        arcade: {
            //debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },

    scene: [Load, Menu, Text, Text2, Text3, Play, GameOver],
};

//apply configurations to new Phaser Game
let game = new Phaser.Game(config);

let centerX= game.config.width/2;
let centerY= game.config.height/2;

let degree;

let highScore;
let newHighScore= false;

let cursors;