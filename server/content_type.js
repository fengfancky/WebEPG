function ContentType(){

    this.getType = function(str){

        var type ='';
        if(str.endsWith('.html')){
            type = 'text/html;charset=UTF-8';
        }else if(str.endsWith('.css')){
            type = 'text/css;charset=UTF-8';
        }else if(str.endsWith('.js')){
            type = 'application/x-javascript;charset=UTF-8';
        }else if(str.endsWith('.png')){
           type = 'image/png;charset=UTF-8';
        }else if(str.endsWith('.jpg')){
            type = 'application/x-jpg;charset=UTF-8';
        }else{
           type = 'text/plain;charset=UTF-8';
        }

        return type;

    }
}
module.exports = ContentType;