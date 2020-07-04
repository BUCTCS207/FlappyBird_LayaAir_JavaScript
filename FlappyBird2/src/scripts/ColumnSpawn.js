/**
*
* @ author:LHT
* @ email:buct_cs_207@163.com
* @ data: 2020-07-01 10:40
*/

import Column from "./Column";

let runTime = 2000, timer=0
let columnParent
let isGameover = true
let columnArr=[]

export default class ColumnSpawn extends Laya.Script {

    constructor() {
        super();
        /** @prop {name:columnPre, tips:"提示文本", type:Prefab, default:null}*/
        this.columnPre=null;
    }

    onAwake(){
        columnParent = this.owner.getChildByName("ColumnParent")
        Laya.stage.on("Gameover", this, function(){
            isGameover=true
        })
        Laya.stage.on("Again", this, function(){
            isGameover=false
            columnArr.forEach(element => {
                element.removeSelf()
            });
            columnArr=[]
        })
        Laya.stage.on("Start",this,function(){
            isGameover=false
        })
    }

    onUpdate(){
        if (isGameover){
            timer = 0
            return 
        }
        timer += Laya.timer.delta
        if(timer>=runTime){
            timer=0
            runTime=this.getRandom(3000, 4500)
            this.spawn()
        }
    }

    //生成柱子的方法
    spawn(){
        //bottom
        //300-660
        //var bottomColumn=this.columnPre.create()
        var bottomColumn=Laya.Pool.getItemByCreateFun("Column", this.creatFun, this)
        columnParent.addChild(bottomColumn)
        bottomColumn.rotation=0
        var bottomY=this.getRandom(300, 660)
        bottomColumn.pos(1920, bottomY)
        bottomColumn.getComponent(Column).canAddScore=true
        columnArr.push(bottomColumn)

        //底部和顶部柱子之间的距离差值：
        var chazhi = this.getRandom(245, 348)
        var topY = bottomY - chazhi

         //top
        var topColumn=Laya.Pool.getItemByCreateFun("Column", this.creatFun, this)
        columnParent.addChild(topColumn)
        topColumn.rotation=180
        topColumn.pos(2176, topY)
        topColumn.getComponent(Column).canAddScore=false
        columnArr.push(topColumn)
    }


    creatFun(){
        var temp=this.columnPre.create()
        return temp
    }
    //获取随机值
    getRandom(min, max){
        var randomvalue = 0
        if (max > min){
            randomvalue=Math.random()*(max-min)
            randomvalue+=min
        }
        else{
            randomvalue=Math.random()*(min-max)
            randomvalue+=max
        }
        return  randomvalue
    }
}