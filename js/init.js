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
    this.load.image("pajaro", "./assets/bird.png");
}

function create (){
    this.pajaro = this.physics.add.image(50, 100, "pajaro");
    this.pajaro.setScale(2);
    this.pajaro.flipX = false;
    this.pajaro.setAngle(0);
    this.pajaro.setOrigin(0)
    this.pajaro.setCollideWorldBounds(true);
    this.pajaro.setBounce(0.5);
    this.pajaro.setVelocity(50, 0)

}

function update (time, delta){
    //this.pajaro.x++
}