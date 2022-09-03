import SceneA from "./scenes/sceneA.js";
import SceneB from "./scenes/sceneB.js";
import SceneC from "./scenes/sceneC.js";

const config = {
    width: 800,
    height: 600,
    parent: "container",
    type: Phaser.AUTO,
    backgroundColor: '#392542',
    scene: [SceneA, SceneB]
}

new Phaser.Game(config);
