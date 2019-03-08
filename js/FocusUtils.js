(function (window) {
    if (!(typeof(window["FocusUtils"]) === "object" && window["FocusUtils"] !== undefined)) window["FocusUtils"] = {};

    var eleArray = null;
    var specialArray = null;

    /**
     * 获取对应id在二位数组中的位置
     * @param {} id 
     */

    function getLocation(id){
        var loc = [];
        for(var i=0;i<eleArray.length;i++){
            for(var j =0;j<eleArray[i].length;j++){
                if(eleArray[i][j] == id){
                    loc[0]=i;
                    loc[1]=j;
                    return loc;
                }
            }
        }
    }

    function getSpecialNav(id,nav){
        var res = "";

        for(var i=0;i<specialArray.length;i++){
            if(specialArray[i].id == id && specialArray[i].nav == nav){
                res = specialArray[i].target;
                break;
            }
            
        }

        // specialArray.forEach(element => {
        //     if(element.id == id && element.nav == "top"){
        //         res = element.target;
        //     }
        //     return;
        // });
        if(res!=null && res!=""){
            console.log(res);
            return res;
        }
    }
            
    window["FocusUtils"].FindElement = {
        
        initEle:function(array){
            eleArray = array;
        },

        addSpecialFocusNav:function(sarray){
            specialArray = sarray;            
        },

        getNextTopEle: function(id){

            var res = getSpecialNav(id,"top");

            if(res!=null && res!=""){
                return res;
            }

            var arr = getLocation(id);
            if(arr[0] == 0){
                return "";
            }else{
                var i = arr[0]-1;
                var j = arr[1];
                return eleArray[i][j];
            }
    
        },
    
        getNextLeftEle: function(id){

            var res = getSpecialNav(id,"left");

            if(res!=null && res!=""){               
                return res;
            }

            var arr = getLocation(id);
            if(arr[1] == 0){
                return "";
            }else{
                var i = arr[0];
                var j = arr[1]-1;
                return eleArray[i][j];
            }
        },
    
        getNextBottomEle: function(id){

            var res = getSpecialNav(id,"bottom");

            if(res!=null && res!=""){           
                return res;
            }

            var arr = getLocation(id);
    
            if(arr[0] == (eleArray.length-1)){
                return "";
            }else{
                var num = arr[0]+1;
                for(var b = num;b < eleArray.length;b++){
    
                    if(eleArray[b][arr[1]] == id){
                        continue;
                    }else{
                        return eleArray[b][arr[1]];
                    }
                }
            }
    
        },
    
        getNextRightEle: function(id){

            var res = getSpecialNav(id,"right");

            if(res!=null && res!=""){
                return res;
            }

            var arr = getLocation(id);
            if(arr[1] == (eleArray[0].length-1)){
                return "";
            }else{
                var num = arr[1]+1;
                for(var b = num;b <eleArray[0].length;b++){
    
                    if(eleArray[arr[0]][b] == id){
                        continue;
                    }else{
                        return eleArray[arr[0]][b];
                    }
                }
            }
        },


    }

    window.addEventListener("keydown",function(){
       
            switch(event.keyCode){
                case 37://左 
  
                    view = document.getElementById(FocusUtils.FindElement.getNextLeftEle(document.activeElement.id));
                    if(view){
                        view.focus();
                    }
                    break;
                case 38://上

                    view = document.getElementById(FocusUtils.FindElement.getNextTopEle(document.activeElement.id));
                    if(view){
                        view.focus();
                    }
                  
                    break;
                case 39://右
                   
                    view = document.getElementById(FocusUtils.FindElement.getNextRightEle(document.activeElement.id));
                    if(view){
                        view.focus();
                    }
                
                    break;
                case 40://下
                    
                    view = document.getElementById(FocusUtils.FindElement.getNextBottomEle(document.activeElement.id));
                    if(view){
                        view.focus();
                    }
                    
                    break;  

            }
            
        
    })

})(window)