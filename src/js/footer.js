const footerHTML =
  /* html */
  `<!-- Footer -->
  <footer id="footer">
    <p>Made with <i class="fas fa-heart" id="heart"></i> by me</p>
    <p>&#169; Héctor Martín López ${new Date().getFullYear()}</p>
  </footer>`;

/* Insertar FOOTER */
const footer = document.createRange().createContextualFragment(footerHTML);
document.querySelector("body").appendChild(footer);
