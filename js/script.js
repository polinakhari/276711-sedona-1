    var navMain = document.querySelector('.nav');
    var navToggle = document.querySelector('.nav__toggle');

    navMain.classList.remove('nav--nojs');
    navMain.classList.add('nav--closed');

    navToggle.addEventListener('click', function() {
      if (navMain.classList.contains('nav--closed')) {
        navMain.classList.remove('nav--closed');
        navMain.classList.add('nav--active');
      } else {
        navMain.classList.add('nav--closed');
        navMain.classList.remove('nav--active');
      }
    });
