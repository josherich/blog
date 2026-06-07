document.querySelectorAll('[data-expand]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var open = btn.getAttribute('data-expand') === 'open';
    document.querySelectorAll('details').forEach(function (el) {
      el.open = open;
    });
  });
});
