function validateEmail(t) {
	var a = !0,
        e = /^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	
    return "" == $.trim(t) ? a = !1 : e.test(t) || (a = !1), a
}

function validatePhone(t) {
    var a = !0,
        e = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    return "" == $.trim(t) ? a = !1 : e.test(t) || (a = !1), a
}

function validateName(t) {
    var a = !0,
        e = /^[A-Za-z][A-Za-z\ \.]{3,30}$/;
    return "Name*" == t && (a = !1), "" == $.trim(t) && (a = !1), "" == isNaN(t) && (a = !1), e.test(t) || (a = !1), a
}

function validateQuoteName(t) {
    var a = !0,
        e = /^[A-Za-z ]{3,30}$/;
    return "Your Name" == t && (a = !1), "" == $.trim(t) && (a = !1), "" == isNaN(t) && (a = !1), e.test(t) || (a = !1), a
}

function validateMessage(t) {
    var a = !0,
        e = /\w/g;
    return "" == $.trim(t) && (a = !1), "" == isNaN(t) && (a = !1), e.test(t) || (a = !1), a
}

function validateQuoteMessage(t) {
    var a = !0,
        e = /^[A-Za-z0-9.,?;:!@#$%^&*() ]{3,30}$/;
    return "" == $.trim(t) && (a = !1), "" == isNaN(t) && (a = !1), e.test(t) || (a = !1), a
}

function addErrorClass(t) {
    0 == $(t).hasClass("text-cont-error") && $(t).addClass("text-cont-error")
}

function getBlogContent(t) {
    $.ajax({
        type: "post",
        url: "includes/blogdetails.php",
        data: "type=" + t,
        beforeSend: function() {
            $(".ajaxCon").html("")
        },
        success: function(t) {
            $(".ajaxCon").html(t)
        }
    })
}
var CaptchaCallback = function() {
    $("#recaptcha-up").length > 0 && grecaptcha.render("recaptcha-up", {
        sitekey: "6LcWCAQTAAAAAJRxkVz2KkGxKE9QJcdXkX0qUMQh"
    }), $("#recaptcha-down").length > 0 && grecaptcha.render("recaptcha-down", {
        sitekey: "6LcWCAQTAAAAAJRxkVz2KkGxKE9QJcdXkX0qUMQh"
    })
};