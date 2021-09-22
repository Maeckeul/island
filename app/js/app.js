var app = {
  init: function() {
    console.log('init');

    const sun = document.querySelector('.sun');
    const body = document.querySelector('body');
    sun.onclick = function() {
      body.classList.toggle('dark');
    }
  }
};

$(app.init);
