(function() {
    var popup = $('.popup')
    var popClose = $('.pop-close')
    var subscribe = $('.btn-subscribe')
    var eamil = $('.subscribe-input')
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
        if (!eamil.val()) {
            alert('Please enter your email address')
            return;
        } else if (!isEmail(eamil.val())) {
            alert('Please enter the valid email address')
            return;
        }
        $.post('dev/subscriber', { eamil: eamil.val() }, function(data) {
            if (data.success) {
                popup.fadeIn(200)
                popup.css('display', 'flex')
                eamil.val('')
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