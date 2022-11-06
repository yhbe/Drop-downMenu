const dropdownButton = document.querySelectorAll('.dropdown-button');

dropdownButton.forEach((button) => button.addEventListener('click', showMenu));

function showMenu() {
  this.nextElementSibling.classList.toggle('hide');
}

window.addEventListener('click', function clickOffMenu(e) {
  if (!e.target.classList.contains('dropdown-button')) {
    dropdownButton.forEach((button) =>
      button.nextElementSibling.classList.add('hide')
    );
  }
});
