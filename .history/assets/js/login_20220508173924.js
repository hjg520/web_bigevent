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
