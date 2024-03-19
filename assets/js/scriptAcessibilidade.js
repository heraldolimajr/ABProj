const btn = document.getElementById("contraste");
var logo = document.querySelector('.navbar-brand img');
btn.addEventListener("click", function() {
  if (document.body.classList.contains("light")) {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    logo.src = 'assets/images/logo/white-logo.svg';
    
  } else {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    logo.src = 'assets/images/logo/logo.svg';
  }
});

const btn2 = document.getElementById("aumenta-texto");

btn2.addEventListener("click", function() {
  if (document.body.classList.contains("normal")) {
    document.body.classList.remove("normal");
    document.body.classList.add("grande");
    //manipulando cor do botão
    btn2.classList.replace('bi-plus-circle', 'bi-dash-circle');
  } else {
    document.body.classList.remove("grande");
    document.body.classList.add("normal");
    //manipulando cor do botão
    btn2.classList.replace('bi-dash-circle', 'bi-plus-circle');
  }
});


