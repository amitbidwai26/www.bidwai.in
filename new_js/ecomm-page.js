 $(function() {
	    $( "#features-tabs" ).tabs({hide: 300, show: 200,});
	    	/* $("#projects_slides").slidesjs({
	    		play: {
	  		      active: false,
	  		      auto: true,
	  		      interval:5000,
	  		      swap: true,
	  		      pauseOnHover: true,
	  		      restartDelay:3500
	  		   },
	      		navigation: {active: true}
	           }); */
	    	$( "#accordion" ).accordion(
	                {
	                   heightStyle: "content",
	                   collapsible: true
	                });
	        });
 
 $(function() {
     var t = document.createElement("script");
     t.type = "text/javascript", t.async = !0, t.src = "new_js/jquery.slides.min.js";
     var e = !1;
     t.onload = t.onreadystatechange = function() {
         e || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (e = !0, $("#loading-banner").hide(), $("#mobile-banners").slidesjs({
             play: {
                 active: !0,
                 effect: "fade",
                 interval: 5e3,
                 auto: !0,
                 pauseOnHover: !0
             },
             
             navigation: {
                 active: true,
                 effect: "slide",
                 auto: !0
             },
             pagination: {
                 active: !1
             },
             effect: {
                 fade: {
                     speed: 1300,
                     crossfade: !0
                 }
             }
         }), $("#top-banners").show(), $("#digital-development, #digital-development1").slidesjs({
             navigation: {
                 active: !1
             },
             effect: {
                 slide: {
                     speed: 1e3
                 }
             }
         }))
     };
     var a = document.getElementsByTagName("script")[0];
     a.parentNode.insertBefore(t, a)
 });