import SceneC from "./sceneC.js";

export default class SceneA extends Phaser.Scene {

    constructor() {
        super({
            key: "SceneA"
        });
    }

    preload(){

    }

    create(){
        let graphics = this.add.graphics();
        graphics.fillStyle(0xff33);
        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(120, 110, "A", {
            font: "96px Courier",
            fill: "black"
        })

        this.scene.add("SceneC", new SceneC)
        //this.scene.start("SceneC")

        //this.scene.bringToTop("SceneA")
        this.scene.sendToBack("SceneC")


    }

    update(time, delta){

    }
}