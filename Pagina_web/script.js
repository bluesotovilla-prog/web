/* ==============================
   🌙 MODO OSCURO
   ============================== */

const toggle = document.getElementById("darkToggle");
const body = document.body;

// Click en botón
toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});

// Cargar tema guardado
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
});


/* ==============================
   📱 MENÚ RESPONSIVE
   ============================== */

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".navbar ul");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

function cambiarFoto(btn, direccion) {
    const cardImg = btn.parentElement;
    const imagenes = cardImg.querySelectorAll("img");
    let index = 0;

    imagenes.forEach((img, i) => {
        if (img.classList.contains("img-activa")) {
            index = i;
            img.classList.remove("img-activa");
        }
    });

    let nuevoIndex = index + direccion;
    if (nuevoIndex < 0) nuevoIndex = imagenes.length - 1;
    if (nuevoIndex >= imagenes.length) nuevoIndex = 0;

    imagenes[nuevoIndex].classList.add("img-activa");
}

document.querySelectorAll('.galeria-producto').forEach(galeria => {
  const imgs = galeria.querySelectorAll('img');
  let index = 0;

  const actualizar = () => {
    imgs.forEach((img, i) => {
      img.classList.toggle('img-activa', i === index);
      img.style.display = i === index ? 'block' : 'none';
    });
  }

  actualizar();

  galeria.querySelector('.prev').addEventListener('click', () => {
    index = (index - 1 + imgs.length) % imgs.length;
    actualizar();
  });

  galeria.querySelector('.next').addEventListener('click', () => {
    index = (index + 1) % imgs.length;
    actualizar();
  });
});
