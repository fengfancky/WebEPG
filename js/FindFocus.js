(function (window) {
    if (!(typeof(window["FindFocus"]) === "object" && window["FindFocus"] !== undefined)) window["FindFocus"] = {};

    var beforeDown = null;
    var beforeUp = null;
    var beforeRight = null;
    var beforeLeft = null;
    var back = null;
    var className = ".item";

    /**
     * 寻找所需方向上最近或最合适的元素
     * @param {按键方向} direction 
     * @param {所有需要获取焦点元素的集合} list 
     */
    function findFocusId(direction,list){
               
        var currentEle = document.activeElement;
        var currentLoc = getPosition(currentEle);

        var locele = null;
        var minDistance = 99999999;

        switch(direction){
            case "left":
                var leftFocus = currentEle.getAttribute("nextLeftFocusId");//在html中指定特殊方向的下一个获取焦点元素的id
                if(leftFocus!=null&leftFocus != ""){
                    return leftFocus;
                }
                
                for(var i=0;i<list.length;i++){
                    var loc = getPosition(list[i]);
                    if(currentLoc.x >= (loc.x+list[i].offsetWidth)){
                        locele = Math.pow(Math.abs(currentLoc.x-loc.x-list[i].offsetWidth),2) +Math.pow(Math.abs(currentLoc.y-loc.y),2) > minDistance ? locele: list[i];                   
                        minDistance = Math.pow(Math.abs(currentLoc.x-loc.x-list[i].offsetWidth),2) +Math.pow(Math.abs(currentLoc.y-loc.y),2) > minDistance ? minDistance : Math.pow(Math.abs(currentLoc.x-loc.x-list[i].offsetWidth),2) + Math.pow(Math.abs(currentLoc.y-loc.y),2);
                    }
                }
               
                break;

            case "up":
                var upFocus = currentEle.getAttribute("nextUpFocusId");//在html中指定特殊方向的下一个获取焦点元素的id
                if(upFocus!=null&upFocus != ""){
                    return upFocus;
                }
                
                for(var i=0;i<list.length;i++){
                    var loc = getPosition(list[i]);
                    if(currentLoc.y >= (loc.y+list[i].offsetHeight)){ //当前元素一定在目标元素下面

                        var d1 = Math.sqrt(Math.pow(Math.abs(currentLoc.x-loc.x),2) + Math.pow(Math.abs(currentLoc.y-loc.y-list[i].offsetHeight),2));//左上角到左下角
                        var d2 = Math.sqrt(Math.pow(Math.abs(currentLoc.x+currentEle.offsetWidth-loc.x-list[i].offsetWidth),2) + Math.pow(Math.abs(currentLoc.y-loc.y-list[i].offsetHeight),2));//右上到右下
                        var mind = d1<d2 ? d1 : d2;//取最小值

                        locele = mind < minDistance ? list[i] : locele ;
                        minDistance = mind < minDistance ? mind : minDistance;
                   }
                    
                }
                
                break;

            case "right":
                var rightFocus = currentEle.getAttribute("nextRightFocusId");//在html中指定特殊方向的下一个获取焦点元素的id
                if(rightFocus!=null&rightFocus != ""){
                    return rightFocus;
                }
                
                for(var i=0;i<list.length;i++){
                    var loc = getPosition(list[i]);
                    if((currentLoc.x +currentEle.offsetWidth ) <= loc.x){
                        locele = Math.pow(Math.abs(currentLoc.x+currentEle.offsetWidth-loc.x),2) +Math.pow(Math.abs(currentLoc.y-loc.y),2) > minDistance ? locele: list[i];
                        minDistance = Math.pow(Math.abs(currentLoc.x+currentEle.offsetWidth-loc.x),2) +Math.pow(Math.abs(currentLoc.y-loc.y),2) > minDistance ? minDistance : Math.pow(Math.abs(currentLoc.x+currentEle.offsetWidth-loc.x),2) + Math.pow(Math.abs(currentLoc.y-loc.y),2);
                   }
                    
                }
                
                break;

            case "down":
                var downFocus = currentEle.getAttribute("nextDownFocusId");//在html中指定特殊方向的下一个获取焦点元素的id
                if(downFocus!=null&downFocus != ""){
                    return downFocus;
                }
                
                for(var i=0;i<list.length;i++){
                    var loc = getPosition(list[i]);
                    if((currentLoc.y +currentEle.offsetHeight) <= loc.y){
                        locele = Math.pow(Math.abs(currentLoc.x-loc.x),2) +Math.pow(Math.abs(currentLoc.y+currentEle.offsetHeight-loc.y),2) > minDistance ? locele: list[i];
                        minDistance = Math.pow(Math.abs(currentLoc.x-loc.x),2) +Math.pow(Math.abs(currentLoc.y+currentEle.offsetHeight-loc.y),2) > minDistance ? minDistance : Math.pow(Math.abs(currentLoc.x-loc.x),2) + Math.pow(Math.abs(currentLoc.y+currentEle.offsetHeight-loc.y),2);
                   }
                    
                }
                
                break;
        }

        if(locele != null){
            return locele.id;
        }else{
            return null;
        }
        
    }



    /**
     * 获取当前焦点元素在页面中的绝对位置
     * @param {当前获取的焦点的元素} e 
     */
    function getPosition(e){
        var x=0,y=0;
        while(e!=null){

            x += e.offsetLeft;
            y += e.offsetTop;
            e =  e.offsetParent;        
        }
        return {x:x,y:y};

    }

    window["FindFocus"].FocusKeyEvent = {
        
        /**
        *设置需要获取焦点的元素的类名默认为 ".item" ，不一致时需设置
        *
        */
        setClassName:function(name){
	    if(name !=null & name != ""){
		className = name;
	    }	
	},

         /**
         * 获取焦点之前的操作
         * @param {传入具体实现操作的函数} fun 
         */
        focusBefore:function(fun1,fun2,fun3,fun4){
            beforeLeft = fun1;
            beforeUp = fun2;
            beforeRight = fun3;
            beforeDown = fun4;
        },

        

        focusAfter:function(fun){
            after = fun;
        },

        /**
         * 返回
         * @param {} fun 
         */
        backEvent:function(fun){
            back = fun;
        }

    }

    
    function beforeFun(id,fun){
        if( id!=null){
            var view = document.getElementById(id);
            if(fun != null & (typeof fun) === "function"){
                fun(view);
            }else{
                if(view){
                    view.focus();
                }
            }  
        }
    }


    window.addEventListener("keydown",function(){
        
        var list = document.querySelectorAll(className);

        switch(event.keyCode){
            case 37://左 

                beforeFun(findFocusId("left",list),beforeLeft);

                break;
            case 38://上 
                beforeFun(findFocusId("up",list),beforeUp);
               
                break;
            case 39://右
                beforeFun(findFocusId("right",list),beforeRight);
               
                break;
            case 40://下
                beforeFun(findFocusId("down",list),beforeDown);
                
                break;  

            case 8://back
                if(back != null & (typeof back) === "function"){
                    back();
                }
                break;

        }
        
    })


})(window)
