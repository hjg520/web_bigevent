$(function() {

    var form = layui.form

    var layer = layui.layer

    form.verify({

      nickname: function(value){

        if (value.length > 6) {
            
            return '昵称长度必须在 1 ~ 6 之间！'

        }

      }  

    })

    // 初始化用户的基本信息

    function initUserInfo() {

        $.ajax({

            method: 'GET',

            url: '/my/userinfo',

            success: function(res) {

                if (res.status !== 0) {

                    return layer.msg('获取用户信息失败')

                }

            }

        })

    }

})