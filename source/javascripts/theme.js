/*
 *= require zepto
 *= require_self
*/

(function() {

  Modernizr.addTest('preserve3d', Modernizr.testAllProps('transformStyle', 'preserve-3d'));

  $(document).on('ready', function() {
    $('.js-post').each(function() {
      var $el    = $(this),
          $title = $el.find('.js-post-caption h1'),
          title;

      if ($title.get(0)) {
        title = $title.get(0);
        $title.remove();
        $el.find('.js-post-title').text(title.innerText);
      }

      $el.find('.js-share').on('click', function() {
        $el.find('.js-buttonlist').toggleClass('is-flipped');
      });
    });

  });

})();
