'use strict';

(function ($, window) {
    
    /* User Service Definition */

    var userService = {

        init: function () {

            this.initSlides();
            this.onArticleHover();
            this.onArticleClick();

        },

        onArticleHover: function () {

            $(".main-article-item").hover(

                function () {

                    $(this).find(".main-article-title").css("color", "#e7ba2f");
                    $(this).find(".main-article-image").css("background-image", "url('images/article-item-hover.png')");

                },

                function () {

                    $(this).find(".main-article-title").css("color", "black");
                    $(this).find(".main-article-image").css("background-image", "url('images/article-item.png')");

                });

        },

        onArticleClick: function () {

            $(".main-article-item").click(function () {

                window.location.href = "dummypage.html";

            });

        },

        onScrollTop: function () {

            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

        },

        slideIndex: 1,

        initSlides: function () {

            this.showSlides(this.slideIndex);

        },

        plusSlides: function (n) {

            this.showSlides(this.slideIndex += n);

        },

        currentSlide: function (n) {

            this.showSlides(this.slideIndex = n);

        },

        showSlides: function (n) {

            var i;
            var slides = $(".slider-item");
            var sliderPage = $(".slider-page");

            if (n > slides.length) {
                this.slideIndex = 1
            }

            if (n < 1) {
                this.slideIndex = slides.length
            }

            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            for (i = 0; i < sliderPage.length; i++) {
                sliderPage[i].className = sliderPage[i].className.replace(" active", "");
            }

            slides[this.slideIndex - 1].style.display = "block";
            sliderPage[this.slideIndex - 1].className += " active";
        }

    };

    /* User Service Initialization */
    userService.init();

    /* Declare User Service to Window Object */
    window.userService = userService;

}(jQuery, window));