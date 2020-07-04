/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import AutoMove from "./scripts/AutoMove"
import Repeating from "./scripts/Repeating"
import BirdCtrl from "./scripts/BirdCtrl"
import ColumnSpawn from "./scripts/ColumnSpawn"
import UICtrl from "./scripts/UICtrl"
import Column from "./scripts/Column"

export default class GameConfig {
    static init() {
        //注册Script或者Runtime引用
        let reg = Laya.ClassUtils.regClass;
		reg("scripts/AutoMove.js",AutoMove);
		reg("scripts/Repeating.js",Repeating);
		reg("scripts/BirdCtrl.js",BirdCtrl);
		reg("scripts/ColumnSpawn.js",ColumnSpawn);
		reg("scripts/UICtrl.js",UICtrl);
		reg("scripts/Column.js",Column);
    }
}
GameConfig.width = 1920;
GameConfig.height = 1080;
GameConfig.scaleMode ="showall";
GameConfig.screenMode = "horizontal";
GameConfig.alignV = "middle";
GameConfig.alignH = "center";
GameConfig.startScene = "main.scene";
GameConfig.sceneRoot = "";
GameConfig.debug = false;
GameConfig.stat = false;
GameConfig.physicsDebug = false;
GameConfig.exportSceneToJson = true;

GameConfig.init();
