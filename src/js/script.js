console.log("soy el script.js");
const navbar = document.querySelector('.navbar-collapse');
const searchIcon = document.getElementById('icon');
const searchInput = document.getElementById('search');

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
  })
  
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
  
  searchInput.addEventListener('blur', onBlur);
  
  function onBlur() {
    if (searchInput.classList.contains('active')) {
      hideSearch();
    }
  }
  