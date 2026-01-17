const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

//Atualizar a imagem da logo quango muda o background do header
function updateImage() {
  const headerImg = document.getElementById("header_logo");
  if (window.innerWidth >= 760) {
    headerImg.src = "midia/Logo_preta.png";
  } else {
    headerImg.src = "midia/Logo_branca.png";
  }
}
window.addEventListener("resize", updateImage);
updateImage();

function abraCadabra1() {
  const jantar = window.document.getElementById("img_jantar");
  const w = window.innerWidth;
  if (w < 768) {
    if (jantar.style.display == "none") {
      jantar.style.display = "block";
    } else {
      jantar.style.display = "none";
    }
  } else {
    jantar.style.display = "none";
  }
}

function abraCadabra2() {
  const office = window.document.getElementById("img_office");
  const w = window.innerWidth;
  if (w < 768) {
    if (office.style.display == "none") {
      office.style.display = "block";
    } else {
      office.style.display = "none";
    }
  } else {
    office.style.display = "none";
  }
}

function abraCadabra3() {
  const design = window.document.getElementById("design_ul");
  if (design.style.display == "none") {
    design.style.display = "block";
  } else {
    design.style.display = "none";
  }
}

function abraCadabra4() {
  const outros = window.document.getElementById("outros_ul");
  if (outros.style.display == "none") {
    outros.style.display = "block";
  } else {
    outros.style.display = "none";
  }
}

//-------------------------CONTATO-------------------------

const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");
const max = mensagem.maxLength;

function atualizar() {
  contador.textContent = `${mensagem.value.length}/${max}`;
}
mensagem.addEventListener("input", atualizar);
atualizar();
