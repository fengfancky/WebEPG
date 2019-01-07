// 时间控制类

function Control(){

}

Control.prototype = {


    updateTime:function(){
        that = this;
        that.showDateTime();
        setInterval(that.showDateTime,10000); 
    },

    timeFormat: function (str) {
        return str.length < 2 ? '0' + str : str;
    },
    
    showDateTime: function () {
        var weekArray = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
        var date = new Date();
        var year = (date.getFullYear()).toString();
        var month = (date.getMonth() + 1).toString();
        var day = date.getDate().toString();
        var hour = date.getHours().toString();
        var minutes = date.getMinutes().toString();
        var week = date.getDay();
        document.getElementById("current_time").innerHTML = that.timeFormat(hour) + ":" + that.timeFormat(minutes)+" "+year + "/" + that.timeFormat(month) + "/" + that.timeFormat(day)+" "+weekArray[week]
        
    },

    
}