import menuTemplate from '../templates/menu-items.hbs';
import menuData from '../menu.json';

const markup = menuTemplate(menuData);
const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
