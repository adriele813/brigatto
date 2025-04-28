const sections = $('section');
const nav_items = $('.nav_item');


$(window).on('scroll', function () {
    const header = $('header');   
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    let activeSectionIndex = 0;


    sections.each(function(i) {
        const section = $(this);
        const sectionTop = section.offset().top - 200;
        const sectionBottom = sectionTop+ section.outerHeight();

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            activeSectionIndex = i;
            return false;
        }

    });

    let sec_atual = nav_items[activeSectionIndex]

    nav_items.removeClass('ativa');
    $(sec_atual).addClass('ativa');

});
