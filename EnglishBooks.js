

const levels = {
    A1: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/A1-level.json',
    A2: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/A2-level.json',
    B1: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/B1-level.json',
    B2: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/B2-level.json',
    C1: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/C1-level.json',
    C2: 'https://raw.githubusercontent.com/19Vako/Json-Data/main/C2-level.json'
 };
 
 const buttons = Object.keys(levels).map(level => document.getElementById(`level${level}`));


 buttons.forEach(button => {
    button.addEventListener('click', () => {
        const level = button.id.replace('level', ''); // Get the level from the button's ID
        const books = document.getElementById('books').style.display = 'ruby'
        const Box = document.getElementById('Box').style.display = 'none'
        ChoiseLevel(levels[level])
    });
 });


function ChoiseLevel(link) {
    fetch(link)
        .then(response => response.json())
        .then(data => {
            const Books = document.querySelector('.books');
            Books.innerHTML = ''; // Clear the container before loading new books
            data.forEach(book => {
                const Book = document.createElement('div');
                const img = document.createElement('img');
                const a = document.createElement('a');
 
                Book.classList.add('book');
 
                img.src = book.photo;
                a.addEventListener('click', () => {
        
                    console.log('A link clicked'); // Log a message to verify if the event listener is triggered
                    renderBook(book);
                });
                
                
 
                a.appendChild(img);
                Book.appendChild(a);
                Books.appendChild(Book);
             });
         });
 }
 
 
 function renderBook(Book){
     const books = document.getElementById('books').style.display = 'none'
     const Box = document.getElementById('Box').style.display = 'flex'
     

     const BoxD = document.querySelector('.BoxD');
     BoxD.style.backgroundColor = 'silver'
     BoxD.innerHTML = ''; 
 
     const photo = document.createElement('div');
     const img = document.createElement('img');
 
     const description = document.createElement('div');
     
     const NameBook = document.createElement('div');
     const NameBookH1 = document.createElement('h1');
     const button = document.createElement('button');
     const buttonImg = document.createElement('img');
 
     const authorBox = document.createElement('div');
     const authorImg = document.createElement('img');
     const authorH1 = document.createElement('h1');
 
     const textBox = document.createElement('div');
     const text = document.createElement('p');
 
     photo.classList.add('photo');
 
     description.classList.add('Description');
 
     NameBook.classList.add('NameBook');
     button.classList.add('ReadOnline');
 
     authorBox.classList.add('authorBox');
     authorH1.classList.add('author');
 
     textBox.classList.add('textBox');
     text.classList.add('text');
 
     img.src = Book.photo;
     NameBookH1.innerHTML = Book.namebook;
 
     buttonImg.src = 'photos/Book.png';
     authorH1.innerHTML = Book.author;
     authorImg.src = 'photos/author.png';
     text.innerHTML = Book.text;
 
     photo.appendChild(img);
 
     button.appendChild(buttonImg);
     NameBook.appendChild(NameBookH1,button);
 
     authorBox.appendChild(authorImg);
     authorBox.appendChild(authorH1)
 
     textBox.appendChild(text);
 
     description.appendChild(NameBook);
     description.appendChild(authorBox);
     description.appendChild(textBox);
 
     BoxD.appendChild(photo);
     BoxD.appendChild(description); // Append description to BoxD
 }

 
 