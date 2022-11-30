$(document).ready(function() {
    $('div .YAF, #content tr').on('click', function() {
      var index = $(this).index();
      $('div .YAF:eq(' + index + '), #content tr:eq(' + index + ')')
        .addClass('active')
        .siblings()
        .removeClass('active');
    });
  });