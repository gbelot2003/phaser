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
}

function create (){
    console.log("soy create")
}

function update (time, delta){
}