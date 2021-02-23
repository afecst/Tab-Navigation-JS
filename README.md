
 <h1 align="center">Tab Navigation - Vanilla JS 📋</h1>
</br>

```js
// 1 - Copie o arquivo script.js e cole em seu arquivo de script

// 2 - link o arquivo no seu documento html
<script src="./script.js"></script>

// 3 - personalize e faça modificações no arquivo de script de acordo com as classes e configurações do seu projeto

// 4 - adicione o css essencial em seguida

/* leia com atenção o código de exemplo do funcionamento 
do accordion list, não tente copiar apenas. */
```

```html
<!-- HTML -->

<ul class="list-menu js-tabmenu">
    <li>🐵</li>
    <li>🙈</li>
    <li>🙉</li>
    <li>🙊</li>
  </ul>
  <ul class="list-content js-tabcontent">
    <li>🐵</li>
    <li>🙈</li>
    <li>🙉</li>
    <li>🙊</li>
  </ul>

```
```js
/*JavaScript*/

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

```

```css
/* CSS */

.js .list-content li {
  display: none;
}

.js .list-content li.ativo {
  display: block !important;
}
```