$(function () {
    // или (document).ready(function ()
    $('.single-item').slick({
        prevArrow: $('.custom_prev'),
        nextArrow: $('.custom_next')
    });

    //
    // $('.accordion__arrow svg').click(function () {
    //     $('.accordion-section h3').next(".content").slideToggle();
    //     $('.accordion-section h3').toggleClass("active");
    //     $(this).siblings(".accordion__arrow").toggleClass("accordion-arrow--open");
    // });


    $('.accordion-section').each(function() {
        $(this).find('.accordion__arrow').click(function() {
            var $this = $(this).closest('.accordion-section');
            var $content = $this.find('.content');

            $('.accordion-section').not($this).find('.content').slideUp();
            $content.slideToggle();

            $(this).toggleClass('accordion__arrow-open');
        });
    });

    // $('.accordion-section').each(function() {
    //     const $section = $(this); // Сохраняем `this` для повышения производительности
    //     const $arrow = $section.find('.accordion__arrow'); // Находим элемент стрелки
    //     const $content = $section.find('.content'); // Находим элемент контента
    //
    //     // Обработчик события на всем div `.accordion__arrow`
    //     $arrow.on('click', function() {
    //         // Проверяем, не открыт ли уже выбранный раздел
    //         if (!$section.hasClass('active')) {
    //             // Закрываем все остальные разделы аккордеона
    //             $('.accordion-section').not($section).removeClass('active').find('.content').slideUp();
    //
    //             // Переключаем состояние активности и контент текущего раздела
    //             $section.toggleClass('active');
    //             $content.slideToggle();
    //         }
    //     });
    // });

    $("#phone-input").inputmask("+7(999)999-9999")

    $("#create-order").click(function (event) {
        event.preventDefault();

        const name = $("#validationCustom01").val().trim();
        const lastName = $("#validationCustom02").val().trim();
        const phone = $("#phone-input").val().trim();
        const country = $("#validationCustom03").val().trim();
        const postalCode = $("#validationCustom05").val().trim();

        if (!name || !lastName || !phone || !country || !postalCode) {
            alert("Пожалуйста, заполните все поля.");
            return;
        }

        if (!/^\d{6}$/.test(postalCode)) {
            alert("Индекс должен содержать 6 цифр.");
            return;
        }

        $(".needs-validation").addClass("d-none");
        $(".order-confirmation").removeClass("d-none");
    });
    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $('.card_animate').magnificPopup({
        type: 'image'
    });

})






