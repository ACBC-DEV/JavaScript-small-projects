import "./style.css";
import { swiper } from "./swiper";

document.querySelector("#app").innerHTML = `
<div  class="swiper-container">
<div class="swiper-wrapper">
  <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" class="swiper-slide">
  <img src="https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="swiper-slide">
  <img src="https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg" class="swiper-slide">
  <img src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg" class="swiper-slide">
  <img src="https://images.pexels.com/photos/1633522/pexels-photo-1633522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="swiper-slide">
  <img src="https://as01.epimg.net/diarioas/imagenes/2022/05/29/actualidad/1653826510_995351_1653826595_noticia_normal_recorte1.jpg" class="swiper-slide">
</div>
<!-- Añade la paginación -->
<div class="swiper-pagination"></div>
</div>
`;
swiper.init();
