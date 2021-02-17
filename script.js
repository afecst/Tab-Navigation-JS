const listMenu = document.querySelectorAll('.js-tabmenu li');
const listContent = document.querySelectorAll('.js-tabcontent li');
listContent[0].classList.add('ativo')

function activeTab(index) { // callback function
  listContent.forEach((content) => {
    content.classList.remove('ativo');
  });
  listContent[index].classList.add('ativo');
}

listMenu.forEach((item, index) => { 
  item.addEventListener('click', () => {
    activeTab(index);
  });
});
