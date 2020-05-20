// $('#bannerServiceCat').select2({
//     theme: "default"
// });
// $('#bannerService').select2();

require('bootstrap/js/src/carousel');
require('bootstrap/js/src/modal');
require('bootstrap/js/src/tab');
require('bootstrap/js/src/collapse');
//require('bootstrap/js/src/scrollspy');

function changeCallSectionPos(resize = false) {
    let callSection = $('.orange-call-section .container');

    if(callSection.length > 0) {
        let topToSet = (0 - (callSection.innerHeight() / 2));
        if(resize == true) {
            topToSet = (0 - (callSection.innerHeight() / 2));
        }
        callSection.css('top', topToSet);
    }
    return;
}

$(window).on('load', function() {
    changeCallSectionPos();
    $(window).resize(() => {
        changeCallSectionPos(true);
    })

    let aboutSectionVideo = $('.orange-about-section .orange-about-video .video-main video');
    let aboutSectionVideoPlay = $('.orange-about-section .container .orange-about-video .video-main .play-icon');
    let aboutSectionVideoOverlay = $('.orange-about-section .container .orange-about-video .video-main .overlay');

    aboutSectionVideoPlay.click(() => {
        aboutSectionVideoOverlay.fadeOut();
        aboutSectionVideoPlay.fadeOut();
        aboutSectionVideo.attr('controls', true);
        aboutSectionVideo.get(0).play();
        aboutSectionVideoPlay.remove();
        aboutSectionVideoOverlay.remove();
    });

    // Banner Query Form 

    // $('#bannerService input').focus(function() {
    //     $(this).siblings('.servicece-list').fadeIn('fast');
    // });

    // $('#bannerService input').blur(function() {
    //     $(this).siblings('.servicece-list').fadeOut('fast');
    // });

    // UpdateBannerCat($('#bannerServiceCat'));
    // $('#bannerServiceCat').change(function() {
    //     UpdateBannerCat($(this));
    // });

    // Book Cover Section
    $('.new-book-cat-title a').click(function(event) {
        event.preventDefault();
        let bookCatId = $(this).data("book");

        $('.new-book-cat-title').removeClass('active');
        $(this).parents('.new-book-cat-title').addClass('active');

        $('.orange-new-book-cat-content .books').hide();
        $(bookCatId).css('display', 'flex');
    });

    // Footer
    $('.footer-map .icon').click(function() {
        $(this).siblings('.overlay').remove()
        $(this).remove();
    })

});

// function UpdateBannerCat(thisElem, search = "") {
//     let catId = thisElem.children('option:selected').attr('value');
//     let url = `${baseURL}/wp-json/wp/v2/pages?per_page=100&service_cat=${catId}&search=${search}`;

//     $.ajax({
//         url: url
//     }).done(function(data) {
//         $('.servicece-list').children('li').remove();

//         if(data[0] != undefined) {
//             data.forEach(element => {
//                 let title = "";

//                 if(element.acf.home_page_menu_name !== null) {
//                     title = element.acf.home_page_menu_name;
//                 }else {
//                     title = element.title.rendered;
//                 }

//                 $('.servicece-list').append(`<li><a href="${element.link}"> ${title}</a></li>`)
//             });
//         }
//     })
// }
