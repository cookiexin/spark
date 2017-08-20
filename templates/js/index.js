(function() {
    var popup = $('.popup')
    var smsPop = popup.find('.pop-sms-wrap')
    var bookPop = popup.find('.pop-booking-wrap')
    var popClose = $('.pop-close')
    var popOk = $('.pop-ok')
    var subscribe = $('.btn-subscribe')
    var email = $('.subscribe-input')
    var subscribeLink = $('.subscribe-link')
    var bookBtn = $('.btn-book')
    
    bookBtn.click(function(e) {
        e.preventDefault()
        e.stopPropagation()
        smsPop.hide()
        bookPop.show()
        popup.fadeIn(200)
        popup.css('display', 'flex')
    })

    subscribeLink.click(function() {
        $('html,body').animate({
            scrollTop: subscribe.offset().top - 300
        }, 700)
        subscribe.offset().top
    })
    popClose.click(function() {
        popup.fadeOut(200)
    })
    popOk.click(function() {
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
                smsPop.show()
                bookPop.hide()
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