(function() {
    var popup = $('.popup')
    var popClose = $('.pop-close')
    var subscribe = $('.btn-subscribe')
    var eamil = $('.subscribe-input')
    var subscribeLink = $('.subscribe-link')
    subscribeLink.click(function() {
        $('html,body').animate({
            scrollTop: subscribe.offset().top - 300
        }, 700);
        subscribe.offset().top
    })
    popClose.click(function() {
        popup.fadeOut(200)
    })

    subscribe.click(function() {
        // to do
        // 后台交互
        if (!isEmail(eamil.val())) {
            alert('请输入输入正确的邮箱')
            return;
        }
        popup.fadeIn(200)
        popup.css('display', 'flex')
        eamil.val('')
    })
    function isEmail(str){
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        return reg.test(str);
    }
})()