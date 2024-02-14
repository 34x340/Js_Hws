// 1 ///

const categoriesEls = document.querySelectorAll('#categories > li.item');

console.log(`У списку ${categoriesEls.length} категорії.`);

categoriesEls.forEach(category => console.log(`Категорія: ${category.querySelector('h2')}Кількість елементів: ${category.querySelectorAll('ul li').length}`));

// 2 ///

const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];
   
   const ingredientsElemetn = document.querySelector('#ingredients');

// 3 /// 

const images = [
    {
     url:
      'https://static.posters.cz/image/750/%D0%9F%D1%80%D0%B8%D0%BD%D1%82%D0%B8-%D0%BD%D0%B0-%D0%BF%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D1%96-cars-sally-i111122.jpg',
     alt: 'SALLYYY',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'MCQUEEN',
    },
    {
     url:
      'https://cdn11.bigcommerce.com/s-5ylnei6or5/products/528/images/1025/1753_Mater_CarsRefresh_46__37747.1514658593.500.750.jpg?c=2',
     alt: 'Sirnik',
    },
   ];

   const gallery = document.querySelector('#gallery');

   const galleryEls = images.map(image => `
       <li class="gallery-item">
           <img src="${image.url}" alt="${image.alt}">
       </li>
   `).join('');
   
   gallery.insertAdjacentHTML('beforeend', galleryEls);
   
// 4 /////

let counterValue = 0;
const counterEl = document.querySelector('#value');
const plusBut = document.querySelector('button[data-action="plus"]');
const minusBut = document.querySelector('button[data-action="minus"]');
const counterDiv = document.querySelector('#counter');
const plus = () => counterValue -= 1;
const minus = () => counterValue += 1;
plusBut.addEventListener('click', plus);
minusBut.addEventListener('click', minus);
counterDiv.addEventListener('click', () => counterEl.innerHTML = counterValue);