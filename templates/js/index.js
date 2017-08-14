(function() {
    var popup = $('.popup')
    var popClose = $('.pop-close')
    var subscribe = $('.btn-subscribe')
    var email = $('.subscribe-input')
    var subscribeLink = $('.subscribe-link')
    subscribeLink.click(function() {
        $('html,body').animate({
            scrollTop: subscribe.offset().top - 300
        }, 700)
        subscribe.offset().top
    })
    popClose.click(function() {
        popup.fadeOut(200)
    })

    subscribe.click(function() {
        // to do
        // 后台交互
        if (!email.val()) {
            alert('Please enter your email address')
            return;
        } else if (!isEmail(email.val())) {
            alert('Please enter the valid email address')
            return;
        }
        $.post('dev/subscriber', { email: email.val() }, function(data) {
            if (data.success) {
                popup.fadeIn(200)
                popup.css('display', 'flex')
                email.val('')
            } else {
                alert('Subscriber failed')
            }
        })
    })
    function isEmail(str){
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/
        return reg.test(str)
    }
})()