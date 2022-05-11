$(function() {

    var form = layui.form

    form.verify({

      nickname: function(){

        if (value.length > 6) {
            
            return '昵称长度必须在 1 ~ 6 之间！'

        }

      }  
      
    })

})