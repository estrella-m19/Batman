

$(document).ready(function () {

   let tabsItem = $('.menu-item');

   tabsItem.on('click', function (event) {

       event.preventDefault();

       let activeContent = $(this).attr('href');
       $('.visible').toggleClass('visible');
       $(activeContent).toggleClass('visible');


   })

});