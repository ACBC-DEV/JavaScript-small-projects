import Swal from "sweetalert2";
const pause =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" ><rect width="4" height="16" x="6" y="4"></rect><rect width="4" height="16" x="14" y="4"></rect></svg>';

const play =
  '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5" ><polygon points="5 3 19 12 5 21 5 3"></polygon> </svg>';

export function changeBackground() {
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const copy = document.getElementById("copy");
  const auto = document.getElementById("auto");

  let currentColor = "#242424";
  let colorHistory = ["#242424"];
  let currentIndex = -1;
  let autoChange = null;
  function getRandomColor() {
    function getRandomNumber() {
      return Math.floor(Math.random() * 256);
    }

    // Función para convertir un número decimal a hexadecimal
    function decimalToHex(decimal) {
      let hex = decimal.toString(16);
      if (hex.length < 2) {
        hex = "0" + hex;
      }
      return hex;
    }

    const red = getRandomNumber();
    const green = getRandomNumber();
    const blue = getRandomNumber();

    // Convertir los valores de rojo, verde y azul a hexadecimal y concatenarlos
    const hexColor =
      "#" + decimalToHex(red) + decimalToHex(green) + decimalToHex(blue);

    return hexColor;
  }
  next.addEventListener("click", () => {
    if (currentIndex < colorHistory.length - 1) {
      // Si no estamos al final del historial, avanzamos al siguiente color
      currentIndex++;
      currentColor = colorHistory[currentIndex];
    } else {
      // Si estamos al final del historial, generamos un nuevo color
      currentColor = getRandomColor();
      colorHistory.push(currentColor);
      currentIndex = colorHistory.length - 1;
    }
    document.body.style.backgroundColor = currentColor;
  });

  copy.addEventListener("click", () => {
    navigator.clipboard.writeText(currentColor);
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      title: "Color copiado",
      text: `El color ${currentColor} ha sido copiado al portapapeles`,
      icon: "success",
    });
  });

  prev.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      currentColor = colorHistory[currentIndex];
      document.body.style.backgroundColor = currentColor;
    }
  });

  auto.addEventListener("click", () => {
    if (autoChange) {
      // Si el cambio automático está activo, lo detenemos
      clearInterval(autoChange);
      autoChange = null;
      auto.innerHTML = play;
    } else {
      // Si el cambio automático no está activo, lo iniciamos
      autoChange = setInterval(() => {
        currentColor = getRandomColor();
        document.body.style.backgroundColor = currentColor;
        colorHistory.push(currentColor);
        currentIndex = colorHistory.length - 1;
      }, 1000);
      auto.innerHTML = pause;
    }
  });
}
