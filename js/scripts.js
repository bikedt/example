// Empty JS for your own code to be here
$('.dropdown-toggle').click(function(e) {
  e.preventDefault();
  setTimeout($.proxy(function() {
    if ('ontouchstart' in document.documentElement) {
      $(this).siblings('.dropdown-backdrop').off().remove();
    }
  }, this), 0);
});