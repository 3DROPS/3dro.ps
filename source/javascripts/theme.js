/*
 *= require zepto
 *= require_self
*/

(function() {

  $(document).on('ready', function() {
    $('.post').each(function() {
      var $el    = $(this),
          $title = $el.find('.post__caption h1'),
          title;

      if ($title.get(0)) {
        title = $title.get(0);
        $title.remove();
        $el.find('.post__title').text(title.innerText);
      }
    });

    $('.js-share').on('click', function() {
      $('.js-buttonlist').toggleClass('is-flipped');
    });

  });

})();
