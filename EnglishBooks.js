const levels = {
   A1: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/A1-level.json',
   A2: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/A2-level.json',
   B1: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/B1-level.json',
   B2: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/B2-level.json',
   C1: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/C1-level.json',
   C2: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/C2-level.json'
};

const buttons = Object.keys(levels).map(level => document.getElementById(`level${level}`));
function ChoiseLevel(link) {
   fetch(link)
       .then(response => response.json())
       .then(data => {
           const Books = document.querySelector('.books');
           Books.innerHTML = ''; // Очищаємо вміст контейнера книг перед завантаженням нових
           data.forEach(book => {
               const Book = document.createElement('div');
               const img = document.createElement('img');
               const a = document.createElement('a');

               Book.classList.add('book');

               img.src = book.photo;
               a.href = 'Book.html' ;

               a.appendChild(img);
               Book.appendChild(a);
               Books.appendChild(Book);
           });
       });
}

buttons.forEach(button => {
   button.addEventListener('click', () => {
       const level = button.id.replace('level', ''); // Отримуємо рівень з ідентифікатора кнопки
       setTimeout(() => ChoiseLevel(levels[level]), 500);
   });
});

