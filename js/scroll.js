function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
}

// deslizar 
document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('a.nav-link');

    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', function(event) {
        event.preventDefault();
        var targetId = this.getAttribute('href').substring(1);
        var targetSection = document.getElementById(targetId);

        window.scrollTo({
          top: targetSection.offsetTop - 70, // Ajusta el valor para tener en cuenta la altura de la barra de navegación
          behavior: 'smooth'
        });
      });
    }
  });
