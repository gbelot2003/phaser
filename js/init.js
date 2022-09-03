const config = {
    parent: "container",
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    scene: {
        preload: preload,
        create: create,
        update: update
    }
}

let game = new Phaser.Game(config);

function preload (){
    console.log("soy preload")
    this.load.image("pajaro", "./assets/bird.png");
}

function create (){
    console.log("soy create")
    this.add.image(50, 100, "pajaro");
}

function update (time, delta){
}