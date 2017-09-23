    // Closes the sidebar menu
    $("#menu-close").click(function(e) {
        //e.preventDefault();
        //$("#sidebar-wrapper").toggleClass("active");
    });

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    
    //Classes para transição das imagens
    setInterval(function(){
        var $header = $("header");

        if ($header.hasClass("bg1") == true)
        {
            $header.removeClass("bg1");
            $header.fadeOut("fast");
            $header.fadeIn("fast");
            $header.addClass("bg2");
        }
        else if ($header.hasClass("bg2") == true)
        {
            $header.removeClass("bg2");
            $header.fadeOut("fast");
            $header.fadeIn("fast");
            $header.addClass("bg3");
        }
        else if ($header.hasClass("bg3") == true)
        {
            $header.removeClass("bg3");
            $header.fadeOut("fast");
            $header.fadeIn("fast");
            $header.addClass("bg4");
        }
        else if ($header.hasClass("bg4") == true)
        {
            $header.removeClass("bg4");
            $header.fadeOut("fast");
            $header.fadeIn("fast");
            $header.addClass("bg5");
        }
        else if ($header.hasClass("bg5") == true)
        {
            $header.removeClass("bg5");
            $header.fadeOut("fast");
            $header.fadeIn("fast");
            $header.addClass("bg6");
        }
        else if ($header.hasClass("bg6") == true)
        {
            $header.removeClass("bg6");
            $header.fadeOut("fast");
            $header.fadeIn("fast");
            $header.addClass("bg1");
        }
    }, 4000);