function toggleNavMenu(event) {
  const navBar = document.querySelector('nav');
  navBar.classList.toggle('nav-visible');
}

function toggleSideBar(event) {
  const sideBar = document.querySelector('.aside-section');
  const caret = document.querySelector('.aside-section i');

  if (caret.classList.contains('fa-caret-right')) {
    caret.classList.remove('fa-caret-right');
    caret.classList.add('fa-caret-left');
  } else {
    caret.classList.remove('fa-caret-left');
    caret.classList.add('fa-caret-right');
  }

  sideBar.classList.toggle('sidebar-visible');
}