/**
*
* @ author:LHT
* @ email:buct_cs_207@163.com
* @ data: 2020-07-01 09:50
*/

let isGameover=false
let isStart=false
export default class BirdCtrl extends Laya.Script {

    constructor() {
        super();
    }

    static getGameover(){
        return isGameover
    }
    onAwake() {
        //鼠标监听按下
        Laya.stage.on(Laya.Event.MOUSE_DOWN, this, this.mouseDowm)
        Laya.stage.on("Again", this, this.againGame)
        this.owner.getComponent(Laya.RigidBody).type="static"

        Laya.stage.on("Start", this, function(){
            this.owner.getComponent(Laya.RigidBody).type="dynamic"
            isStart=true
        })
    }

    //当再一次游戏时，这边会收到事件派发
    againGame(){
        isGameover=false
        this.owner.pos(300, 402)
        this.owner.rotation=0
        this.owner.autoAnimation="Idle"
        this.owner.getComponent(Laya.RigidBody).linearVelocity={x:0, y:0}
    }
    mouseDowm(){
        if(isStart==false)return
        if(isGameover)
            return
        //施加一个向上的力
        this.owner.getComponent(Laya.RigidBody).linearVelocity={x:0, y:-10}
        this.owner.autoAnimation="Fly"
        this.owner.loop=false
        Laya.SoundManager.playSound("Audio/fly.mp3", 1)
    }

    onUpdate(){
        if(this.owner.isPlaying==false){
            this.owner.autoAnimation="Idle"
        }
    }


    //碰撞检测，游戏结束判断
    onTriggerEnter(other){
        //判断是否是顶层阻挡判断，忽略点顶层，其他碰撞都会死亡
        if (other.owner.name == "top"){
            return 
        }
        this.owner.autoAnimation="Die"
        isGameover=true
        Laya.stage.event("Gameover")
        Laya.SoundManager.playSound("Audio/hit.mp3", 1)
    }
}