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
function backgroundImage(element, options) {
  const defaultOptions = {
    image: "https://via.placeholder.com/1200x600",
    size: "cover",
    position: "center"
  };

  const mergedOptions = { ...defaultOptions, ...options };

  const background = {
    image: mergedOptions.image,
    size: mergedOptions.size,
    position: mergedOptions.position,

    setBackground() {
      element.style.backgroundImage = `url(${this.image})`;
      element.style.backgroundSize = `${this.size}`;
      element.style.backgroundPosition = `${this.position}`;
    }
  };

  background.setBackground();
}

function customizeCircles(options) {
  const defaultOptions = {
    width: '100px',
    height: '100px',
    parentClases: ['text-center', 'py-3'],
    circleClases: ['d-flex', 'justify-content-center', 'align-items-center', 'py-3'],
    childClases: ['fs-2', 'text-primary', 'border', 'border-primary', 'rounded-circle', 'd-flex', 'justify-content-center', 'align-items-center']
  };

  const mergedOptions = {...defaultOptions, ...options};

  const circles = document.querySelectorAll('.circle');

  circles.forEach(circle => {
    circle.firstElementChild.style.width = mergedOptions.width;
    circle.firstElementChild.style.height = mergedOptions.height;

    circle.parentNode.classList.add(...mergedOptions.parentClases);
    circle.classList.add(...mergedOptions.circleClases);
    circle.firstElementChild.classList.add(...mergedOptions.childClases);
  });
}

// Llamadas a las funciones
setupSearchHandler();
setupBackgroundImage();
customizeCircles();
