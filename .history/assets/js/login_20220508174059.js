$(function(){

    // 点击"去注册账号的链接"

    $('#link_reg').on('click', function(){

        $('.login-box').hide()

        $('.reg-box').show()
    })

    // 点击"去登陆"的链接
    $('#link_login').on('click',function(){

        $('.login-box').show()

        $('.reg-box').hide()
    })
})

// 从 layui 中获取 form 对象
var form = layui.form
// 通过 form.verify() 函数自定义检验规则
from.verify({

    // 自定义了一个叫做 pwd 检验规则

    pwd

})