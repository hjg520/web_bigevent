$(function() {

    var form = layui.form

    form.verify({

      nickname: function(value){

        if (value.length > 6) {
            
            return '昵称长度必须在 1 ~ 6 之间！'

        }

      }  

    })

    // 初始化用户的基本信息

    function initUserInfo() {

        $.ajax

    }

})