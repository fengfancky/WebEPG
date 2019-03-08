 /**
  *焦点映射关系 左上右下对应的标签
  *str 传入指定标签id
    */   

//home 页面
var nav_item_arr1 = new Array("","","nav_item2","img1");
var nav_item_arr2 = new Array("nav_item1","","nav_item3","");
var nav_item_arr3 = new Array("nav_item2","","nav_item4","");
var nav_item_arr4 = new Array("nav_item3","","nav_item5","");
var nav_item_arr5 = new Array("nav_item4","","","");

var img_arr1 = new Array("","nav_item1","img6","img2");
var img_arr2 = new Array("","img1","img3","img4");
var img_arr3 = new Array("img2","img1","img6","img5");
var img_arr4 = new Array("","img2","img5","");
var img_arr5 = new Array("img4","img3","img7","");
var img_arr6 = new Array("img1","nav_item1","img9","img7");
var img_arr7 = new Array("img5","img6","img8","");
var img_arr8 = new Array("img7","img6","img10","");
var img_arr9 = new Array("img6","nav_item1","","img10");
var img_arr10 = new Array("img8","img9","","");

//list 页面



 function FocusMap(){
    

}

FocusMap.prototype={

    getFocusMapById: function (str){
        var res =null;
        switch(str){
            case "nav_item1":
            res = nav_item_arr1;
            break;

            case "nav_item2":
            res = nav_item_arr2;
            break;

            case "nav_item3":
            res = nav_item_arr3;
            break;
            
            case "nav_item4":
            res = nav_item_arr4;
            break;

            case "nav_item5":
            res = nav_item_arr5;
            break;

            case "img1":
            res = img_arr1;
            break;

            case "img2":
            res = img_arr2;
            break;

            case "img3":
            res = img_arr3;
            break;

            case "img4":
            res = img_arr4;
            break;

            case "img5":
            res = img_arr5;
            break;

            case "img6":
            res = img_arr6;
            break;

            case "img7":
            res = img_arr7;
            break;

            case "img8":
            res = img_arr8;
            break;

            case "img9":
            res = img_arr9;
            break;

            case "img10":
            res = img_arr10;
            break;

        }
        return res;
    }

    

   


}


