(function ($) {
    "use strict";

    //PRELOADER
    $(window).on('load', function () { // makes sure the whole site is loaded 
        $('body').delay(50).css({ 'overflow': 'visible' });
    })


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    //title
    document.title = "Shagun Tyagi - Portfolio";
    document.addEventListener("visibilitychange", function () {
        if (document.hidden) {
            document.title = "Come Back😥😥";
        } else {
            document.title = "Welcome Back😊😊";
        }
    });



    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });

})(jQuery);

contact
document.getElementById("submit").addEventListener("click", () => {
    let Fname = document.getElementById("Fname").value;
    let Lname = document.getElementById("Lname").value;
    let Phone = document.getElementById("num").value;
    let mail = document.getElementById("mail").value;
    let des = document.getElementById("detail").value;
    var bodys = "Name: " + Fname + " " + Lname + "<br/> Phone no.: " + Phone + "<br/> Email Id.:  " + mail + "<br/> Description: " + des;

    Email.send({
        Host: "smtp.gmail.com",
        Username: "theshaguntyagi@gmail.com",
        Password: "shaguntyagi@2003",
        To: 'theshaguntyagi@gmail.com',
        From: mail,
        Subject: Fname + " Sent you a mail (Portfolio)",
        Body: bodys
    }).then(
        message => {
            if (message == 'OK') {
                progg.innerText = "Done";
                setInterval(() => {
                    location.reload();
                }, 2000)
            }
            else {
                alert('There is an error in sending message. Or you missed some area')
            }
        }
    );
})

