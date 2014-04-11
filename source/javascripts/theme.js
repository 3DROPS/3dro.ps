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
          title,
          $like  = $el.find('.js-like'),
          $reblog = $el.find('.js-reblog');

      if ($title.get(0)) {
        title = $title.get(0);
        $title.remove();
        $el.find('.js-post-title').text(title.innerText);
      }

      $el.find('.js-share').on('click', function() {
        $el.find('.js-buttonlist').toggleClass('is-flipped');
      });

      $el.find('.like_button')
        .on('mousedown', function() {
          $like.addClass('active');
        })
        .on('mouseup', function() {
          $like.removeClass('active');
        })
        .on('mouseenter', function() {
          $like.addClass('hover');
        })
        .on('mouseleave', function() {
          $like.removeClass('hover');
        });

      $el.find('.reblog_button')
        .on('mousedown', function() {
          $reblog.addClass('active');
        })
        .on('mouseup', function() {
          $reblog.removeClass('active');
        })
        .on('mouseenter', function() {
          $reblog.addClass('hover');
        })
        .on('mouseleave', function() {
          $reblog.removeClass('hover');
          $reblog.removeClass('active');
        });

    });
  });

})();
