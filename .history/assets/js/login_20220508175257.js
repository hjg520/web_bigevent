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

    // 从 layui 中获取 form 对象
var form = layui.form
// 通过 form.verify() 函数自定义检验规则
form.verify({

    // 自定义了一个叫做 pwd 检验规则

    pwd: [/^[\S]{6,12}$/,'密码必须6到12位，且不能出现空格'],
    // 校验两次密码是否一致的规则
    repwd: function (value) {
        // 通过形参拿到的是确认密码框中的内容
        // 还需要拿到密码框中的内容
        // 然后进行yi'ci
    }

})
})

