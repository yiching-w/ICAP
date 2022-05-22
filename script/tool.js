const steps = document.querySelectorAll('.item .hasStep a');
steps.forEach((step) => {
  step.addEventListener('click', function (e) {
    e.preventDefault();
    let s = step;
    if (step.classList.contains('show')) {
      step.classList.remove('show');
      $('.stepCard#' + step.getAttribute('data-target')).removeClass('show');
    } else {
      steps.forEach((step) => {
        if (s !== step) {
          step.classList.remove('show');
          $('.stepCard#' + step.getAttribute('data-target')).removeClass('show');
        }
      });
      step.classList.add('show');
      $('.stepCard#' + step.getAttribute('data-target')).addClass('show');
    }
  });
});