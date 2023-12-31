// Función para la barra de búsqueda
function setupSearchHandler() {
  const searchHandler = new SearchHandler();
}

// Función para la imagen de fondo
function setupBackgroundImage() {
  const heroImg = document.getElementById('hero-img');
  backgroundImage(heroImg);
}

// Objeto que maneja la barra de búsqueda
function SearchHandler() {
  const navbar = document.querySelector('.navbar-collapse');
  const searchIcon = document.getElementById('icon');
  const searchInput = document.getElementById('search');

  function toggleSearch() {
    searchIcon.classList.toggle('active');
    searchInput.classList.toggle('d-none');
    searchInput.classList.toggle('active');

    const searchIconContainer = searchIcon.parentNode;

    searchIconContainer.classList.toggle('bg-transparent');

    if (searchIcon.classList.contains('active')) {
      searchInput.focus();
    } else {
      hideSearch();
    }
  }

  function hideSearch() {
    const searchIconContainer = searchIcon.parentNode;
    searchInput.classList.add('d-none');
    searchInput.value = '';
    searchInput.removeEventListener('blur', onBlur);
    searchIconContainer.classList.add('bg-transparent');
  }

  function onBlur() {
    if (searchInput.classList.contains('active')) {
      hideSearch();
    }
  }

  // Event listeners
  navbar.addEventListener('click', (e) => {
    if (e.target.id === 'icon') {
      toggleSearch();
    }
  });

  searchInput.addEventListener('blur', () => {
    setTimeout(() => {
      if (!searchInput.contains(document.activeElement)) {
        hideSearch();
      }
    }, 0);
  });

  searchInput.addEventListener('blur', onBlur);
}

// Función para establecer la imagen de fondo
function backgroundImage() {
  const element = arguments[0];
  const image = arguments[1] || "https://via.placeholder.com/1200x600";
  const size = arguments[2] || "cover";
  const position = arguments[3] || "center";

  const background = {
    image: image,
    size: size,
    position: position,

    setBackground() {
      element.style.backgroundImage = `url(${this.image})`;
      element.style.backgroundSize = `${this.size}`;
      element.style.backgroundPosition = `${this.position}`;
    }
  };

  background.setBackground();
}

// Llamadas a las funciones
setupSearchHandler();
setupBackgroundImage();
