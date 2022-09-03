const config = {
    parent: "container",
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: {
        preload: preload,
        create: create,
        update: update
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 500
            }
        }
    }
}

let game = new Phaser.Game(config);

function preload (){
    this.load.image("bird", "./assets/bird.png");
}

function create (){
    this.pajaro = this.add.image(50, 100, "bird");
    // this.pajaro.setScale(2);
    // this.pajaro.flipX = false;
    //this.pajaro.setAngle(0);
    // this.pajaro.setOrigin(0)
    //this.pajaro.setCollideWorldBounds(true);
    //this.pajaro.setBounce(0.5);
    //this.pajaro.setVelocity(50, 0)

    // this.input.keyboard.on('keydown-RIGHT', (event) => {
    //     console.log(event)
    //     this.pajaro.setAngle(0);
    //     this.pajaro.flipX = false;
    //     this.pajaro.x++ * 2;
    // });

    // this.input.keyboard.on('keydown-LEFT', (event) => {
    //     console.log(event)
    //     this.pajaro.flipX = true;
    //     this.pajaro.setAngle(0);
    //     this.pajaro.x--
    // });

    // this.input.keyboard.on('keydown-UP', (event) => {
    //     console.log(event)
    //     this.pajaro.flipX = false;
    //     this.pajaro.y--
    //     this.pajaro.setAngle(-90);
    // });

    // this.input.keyboard.on('keydown-DOWN', (event) => {
    //     console.log(event)
    //     this.pajaro.flipX = false;
    //     this.pajaro.y++
    //     this.pajaro.setAngle(90);
    // });

    //this.cursor = this.input.keydown.createCursorKeys();
}

function update (time, delta){
 
}