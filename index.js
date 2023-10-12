window.addEventListener("scroll", () => {
  const navbar = document.querySelector("#topHeader");
  const scrollY = window.scrollY;

  if (scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function scrollToContato() {
  const contato = document.querySelector("#contato");
  contato.scrollIntoView({ behavior: "smooth" });
}

//Envio de email do Formulario

const btn = document.getElementById("button");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();
  btn.innerText = "A enviar ...";

  //   btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "template_qza8fms";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btn.innerText = "Enviado!";
      document.getElementById("form").reset();
    },
    (err) => {
      console.log(err);
      submitBtn.innerText = "Ocorreu um erro";
    }
  );
});

//menu hamburguer
