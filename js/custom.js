/******************************************
    Version: 1.0
/****************************************** */

(function ($) {
  "use strict";

  /* ==============================================
    Fixed menu
    =============================================== */

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".header_style_01").addClass("fixed-menu");
    } else {
      $(".header_style_01").removeClass("fixed-menu");
    }
  });

  /* ==============================================
    BACK TOP
    =============================================== */
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 1) {
      jQuery(".dmtop").css({
        bottom: "75px",
      });
    } else {
      jQuery(".dmtop").css({
        bottom: "-100px",
      });
    }
  });

  /* ==============================================
       LOADER -->
        =============================================== */

  $(window).load(function () {
    $("#preloader").on(500).fadeOut();
    $(".preloader").on(600).fadeOut("slow");
  });

  /* ==============================================
		Scroll to top  
	============================================== */

  if ($("#scroll-to-top").length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $("#scroll-to-top").addClass("show");
        } else {
          $("#scroll-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function () {
      backToTop();
    });
    $("#scroll-to-top").on("click", function (e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        700
      );
    });
  }

  /* ==============================================
     FUN FACTS -->
     =============================================== */

  function count($this) {
    var current = parseInt($this.html(), 10);
    current = current + 50; /* Where 50 is increment */
    $this.html(++current);
    if (current > $this.data("count")) {
      $this.html($this.data("count"));
    } else {
      setTimeout(function () {
        count($this);
      }, 30);
    }
  }
  $(".stat_count, .stat_count_download").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("0");
    count($(this));
  });

  /* ==============================================
     TOOLTIP -->
     =============================================== */
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="popover"]').popover();

  /* ==============================================
     CONTACT -->
     =============================================== */
  // jQuery(document).ready(function() {
  //     $('#contactform').submit(function() {
  //         var action = $(this).attr('action');
  //         $("#message").slideUp(750, function() {
  //             $('#message').hide();
  //             $('#submit')
  //                 .after('<img src="images/ajax-loader.gif" class="loader" />')
  //                 .attr('disabled', 'disabled');
  //             $.post(action, {
  //                     first_name: $('#first_name').val(),
  //                     last_name: $('#last_name').val(),
  //                     email: $('#email').val(),
  //                     phone: $('#phone').val(),
  //                     select_service: $('#select_service').val(),
  //                     select_price: $('#select_price').val(),
  //                     comments: $('#comments').val(),
  //                     verify: $('#verify').val()
  //                 },
  //                 function(data) {
  //                     document.getElementById('message').innerHTML = data;
  //                     $('#message').slideDown('slow');
  //                     $('#contactform img.loader').fadeOut('slow', function() {
  //                         $(this).remove()
  //                     });
  //                     $('#submit').removeAttr('disabled');
  //                     if (data.match('success') != null) $('#contactform').slideUp('slow');
  //                 }
  //             );
  //         });
  //         return false;
  //     });
  // });
  // document
  //   .getElementById("contactform")
  //   .addEventListener("submit", function (event) {
  //     event.preventDefault();

  //     // Validate form
  //     var firstName = document.getElementById("first_name").value;
  //     var lastName = document.getElementById("last_name").value;
  //     var email = document.getElementById("email").value;
  //     var phone = document.getElementById("phone").value;
  //     var comments = document.getElementById("comments").value;

  //     if (!firstName || !lastName || !email || !comments) {
  //       alert("Please fill in all required fields.");
  //       return;
  //     }

  //     // Submit form using AJAX
  //     var xhr = new XMLHttpRequest();
  //     xhr.open("POST", "contact.php", true);
  //     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === 4 && xhr.status === 200) {
  //         document.getElementById("message").innerText = xhr.responseText;
  //       }
  //     };
  //     var data = `first_name=${firstName}&last_name=${lastName}&email=${email}&phone=${phone}&comments=${comments}`;
  //     xhr.send(data);
  //   });

  /* ==============================================
     CODE WRAPPER -->
     =============================================== */

  $(".code-wrapper").on("mousemove", function (e) {
    var offsets = $(this).offset();
    var fullWidth = $(this).width();
    var mouseX = e.pageX - offsets.left;

    if (mouseX < 0) {
      mouseX = 0;
    } else if (mouseX > fullWidth) {
      mouseX = fullWidth;
    }

    $(this).parent().find(".divider-bar").css({
      left: mouseX,
      transition: "none",
    });
    $(this)
      .find(".design-wrapper")
      .css({
        transform: "translateX(" + mouseX + "px)",
        transition: "none",
      });
    $(this)
      .find(".design-image")
      .css({
        transform: "translateX(" + -1 * mouseX + "px)",
        transition: "none",
      });
  });
  $(".divider-wrapper").on("mouseleave", function () {
    $(this).parent().find(".divider-bar").css({
      left: "50%",
      transition: "all .3s",
    });
    $(this).find(".design-wrapper").css({
      transform: "translateX(50%)",
      transition: "all .3s",
    });
    $(this).find(".design-image").css({
      transform: "translateX(-50%)",
      transition: "all .3s",
    });
  });
})(jQuery);
