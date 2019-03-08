//将页面所有元素的相对位置及关系使用二位数组表示出来

var eleArray = null;

function FindElement(array){
    eleArray = array;
}

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

FindElement.prototype = {

    getNextTopEle: function(id){
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
    }

}
