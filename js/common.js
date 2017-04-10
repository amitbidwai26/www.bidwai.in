jQuery(document).ready(function() {
    function e() {
       var u = jQuery("#pull");
        e = jQuery("#nav"), jQuery(u).on("click", function(u) {
             u.preventDefault(), e.slideToggle();
       }), jQuery(document).on('click', "#companymenu1", function() {
        	jQuery("#menu2,#menu3,#menu4,#menu5").slideUp();
            jQuery("#companymenu2,#companymenu3,#companymenu4,#companymenu5").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).click(function () {       	
                var $t = jQuery('#menu1');
                 if(!$t.is(':hidden')) {                	
                     $t.slideUp(); 
                     jQuery(this).removeClass("active");
                     return false;
                  } else { 
                     $t.slideDown();  
                    jQuery(this).addClass("active");
                     return false;
                  }
            });
        }), jQuery(document).on('click', "#companymenu2", function() {
        	jQuery("#menu1,#menu3,#menu4,#menu5").slideUp();
            jQuery("#companymenu1,#companymenu3,#companymenu4,#companymenu5").removeClass("active");
            jQuery(this).addClass("active");
        	 var $t = jQuery('#menu2');
             if(!$t.is(':hidden')) {                	
                 $t.slideUp(); 
                 jQuery(this).removeClass("active");
                 return false;
              } else { 
                 $t.slideDown();  
                 jQuery(this).addClass("active");
                 return false;
              }
        	
//            jQuery(this).click(function () {  
//            	
//                
//            });
         }), jQuery(document).on('click', "#companymenu3", function() {
        	 jQuery("#menu1,#menu2,#menu4,#menu5").slideUp();
             jQuery("#companymenu1,#companymenu2,#companymenu4,#companymenu5").removeClass("active");
             jQuery(this).addClass("active");
        	 var $t = jQuery('#menu3');
             if(!$t.is(':hidden')) {                	
                 $t.slideUp(); 
                 jQuery(this).removeClass("active");
                 return false;
              } else { 
                 $t.slideDown();  
                 jQuery(this).addClass("active");
                 return false;
              }
        	
//             jQuery(this).click(function () {       	
//                 
//             })
        }), jQuery(document).on('click', "#companymenu4", function() {
            jQuery("#menu1,#menu2,#menu3,#menu5").slideUp();
            jQuery("#companymenu1,#companymenu2,#companymenu3,#companymenu5").removeClass("active");
            jQuery(this).addClass("active");
            jQuery(this).click(function () {       	
                 var $t = jQuery('#menu4');
                 if(!$t.is(':hidden')) {                	
                     $t.slideUp(); 
                     jQuery(this).removeClass("active");
                     return false;
                  } else { 
                     $t.slideDown();  
                     jQuery(this).addClass("active");
                     return false;
                  }
            }); 
        }), 
        
        jQuery(document).on('click', "#companymenu5", function() {
        	 jQuery("#menu1,#menu2,#menu3,#menu4").slideUp();
             jQuery("#companymenu1,#companymenu2,#companymenu3,#companymenu4").removeClass("active");
            jQuery(this).addClass("active");
        	 var $t = jQuery('#menu5');
             if(!$t.is(':hidden')) {                	
                $t.slideUp(); 
                jQuery(this).removeClass("active");
                return false;
             } else { 
                $t.slideDown();  
                jQuery(this).addClass("active");
                return false;
             }
           
//            jQuery(this).click(function () {       	
//                
//            })            
        });
    }
    var u = jQuery(window).width();
    1024 >= u ? (jQuery(".home-page-banner").addClass("home_mobile_banner"), jQuery("#nav").addClass("mobile-nav"), jQuery(".home-page-banner").removeClass("home_mobile_banner"), jQuery("#nav").removeClass("mobile-nav"), jQuery("#nav").css("display", "none"), e()) : jQuery("#nav").css("display", "block"), jQuery(window).resize(function() {
        var u = jQuery(window).width();
        1024 >= u ? (jQuery(".home-page-banner").addClass("home_mobile_banner"), jQuery("#nav").addClass("mobile-nav"), jQuery(".home-page-banner").removeClass("home_mobile_banner"), jQuery("#nav").removeClass("mobile-nav"), jQuery("#nav").css("visibility", "visible"), e()) : jQuery("#nav").css("display", "block");
    });
});
//( jQuery("#nav").css("visibilty", "hidden"), e()) : jQuery("#nav").css("display", "none");
(function($) {
    $.support.placeholder = ('placeholder' in document.createElement('input'));
})(jQuery);
$(function() {
    if (!$.support.placeholder) {
        $("[placeholder]").focus(function() {
            if ($(this).val() == $(this).attr("placeholder")) $(this).val("");
        }).blur(function() {
            if ($(this).val() == "") $(this).val($(this).attr("placeholder"));
        }).blur();
        $("[placeholder]").parents("form").submit(function() {
            $(this).find('[placeholder]').each(function() {
                if ($(this).val() == $(this).attr("placeholder")) {
                    $(this).val("");
                }
            });
        });
    }
});