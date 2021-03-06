$(function() {

    // 调用 getUserInfo 获取用户的基本信息
    
    getUserInfo()

})

// 获取用户的基本信息

function getUserInfo() {

    $.ajax({

        method: 'GET',

        url: '/my/userinfo',

        // headers 就是请求头配置对象
        headers: {

            Authorization: localStorage.getItem('token') || ''

        },

        success: function(res) {

            if (res.status !== 0) {

                return layui.layer.msg('获取用户信息失败')

            }

            // 调用 renderAvatar 渲染用户的头像

            renderAvatar(res.data)

        }

    })

}

// 渲染用户的头像

function renderAvatar(user) {

    // 1. 获取用户的名称

    var name = user.nickname || user.username

    // 2. 设置欢迎的文本

    $('#welcome').html('欢迎&nbsp;&nbsp;' + name)

    // 3. 按需渲染用户头像

    if (user.user_pic !== null) {

        // 3.1 渲染图片头像
        

    }
}