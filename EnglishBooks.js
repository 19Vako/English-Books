/* const levels = {
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
        var books = document.getElementById('books').style.display = 'ruby'
        var Box = document.getElementById('Box').style.display = 'none'
        const contentBook = document.getElementById('fileContent').style.display = 'none'
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
     const buttonText = document.createElement('p')


     const buttonAudio = document.createElement('button')
     const buttonAudioImg = document.createElement('img')
     const buttonTextAudio = document.createElement('p')

     const buttonsConteiner = document.createElement('div')
     const buttonImg = document.createElement('img');
    
 
     const authorBox = document.createElement('div');
     const authorImg = document.createElement('img');
     const authorH1 = document.createElement('h1');
 
     const textBox = document.createElement('div');
     const text = document.createElement('p');

     const ReadBook = document.createElement('div')
     
 



     photo.classList.add('photo');
 
     description.classList.add('Description');
 
     NameBook.classList.add('NameBook');
     button.classList.add('ReadButton');
     buttonAudio.classList.add('buttonAudio')
     buttonsConteiner.classList.add('buttonsConteiner')
     buttonAudioImg.classList.add('buttonAudioImg')
 
     authorBox.classList.add('authorBox');
     authorH1.classList.add('author');
 
     textBox.classList.add('textBox');
     text.classList.add('text');

     ReadBook.classList.add('ReadBook')
 
     img.src = Book.photo;
     NameBookH1.innerHTML = Book.namebook;

    

     buttonText.innerHTML = 'Read online'
     buttonTextAudio.innerHTML = "Audio Book"
     buttonAudioImg.src = 'photos/playIcon.com (2).png'
     buttonImg.src = 'photos/Book.png'
     button.addEventListener('click', () => loadFileContent(Book.Booklink))
     buttonAudio.addEventListener('click', () => {
        
     })
     authorH1.innerHTML = Book.author;
     authorImg.src = 'photos/author.png';
     text.innerHTML = Book.text;
 

    

     photo.appendChild(img);
 
     NameBook.appendChild(NameBookH1);
     button.append(buttonImg,buttonText);
     buttonAudio.append(buttonAudioImg, buttonTextAudio)
     buttonsConteiner.append(button, buttonAudio)
     authorBox.appendChild(authorImg);
     NameBook.appendChild(buttonsConteiner)
     authorBox.appendChild(authorH1)
 
     textBox.appendChild(text);
 
     description.appendChild(NameBook);
     description.appendChild(authorBox);
     description.appendChild(textBox);
 
     BoxD.appendChild(photo);
     BoxD.appendChild(description); 
 }


   
   
// Функция для загрузки содержимого текстового файла
async function loadFileContent(linkBook) {
    const contentBook = document.getElementById('fileContent').style.display = 'block'
    try {
        // Используем Fetch API для получения содержимого файла
        const response = await fetch(linkBook);
        // Проверяем, был ли запрос успешным
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        // Читаем текстовое содержимое файла
        let content = await response.text();
        // Удаляем пустые строки
        content = removeEmptyLines(content);
        // Находим элемент <pre> и вставляем в него содержимое файла
        document.getElementById('fileContent').textContent = content;
    } catch (error) {
       
    }

    // Функция для удаления пустых строк
    function removeEmptyLines(text) {
    return text
        .split('\n') // Разделяем текст на строки
        .filter(line => line.trim() !== '') // Фильтруем пустые строки
        .join('\n'); // Объединяем строки обратно
    }
}

 */





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
        document.getElementById('books').style.display = 'block'; // Changed 'ruby' to 'block'
        document.getElementById('Box').style.display = 'none';
        document.getElementById('fileContent').style.display = 'none';
        ChoiseLevel(levels[level]);
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

function renderBook(Book) {
    document.getElementById('books').style.display = 'none';
    document.getElementById('Box').style.display = 'flex';

    const BoxD = document.querySelector('.BoxD');
    BoxD.style.backgroundColor = 'silver';
    BoxD.innerHTML = '';

    const photo = document.createElement('div');
    const img = document.createElement('img');

    const description = document.createElement('div');
    const NameBook = document.createElement('div');
    const NameBookH1 = document.createElement('h1');
    const button = document.createElement('button');
    const buttonText = document.createElement('p');

    const buttonAudio = document.createElement('button');
    const buttonAudioImg = document.createElement('img');
    const buttonTextAudio = document.createElement('p');

    const buttonsConteiner = document.createElement('div');
    const buttonImg = document.createElement('img');

    const authorBox = document.createElement('div');
    const authorImg = document.createElement('img');
    const authorH1 = document.createElement('h1');

    const textBox = document.createElement('div');
    const text = document.createElement('p');

    const ReadBook = document.createElement('div');

    photo.classList.add('photo');
    description.classList.add('Description');
    NameBook.classList.add('NameBook');
    button.classList.add('ReadButton');
    buttonAudio.classList.add('buttonAudio');
    buttonsConteiner.classList.add('buttonsConteiner');
    buttonAudioImg.classList.add('buttonAudioImg');
    authorBox.classList.add('authorBox');
    authorH1.classList.add('author');
    textBox.classList.add('textBox');
    text.classList.add('text');
    ReadBook.classList.add('ReadBook');

    img.src = Book.photo;
    NameBookH1.innerHTML = Book.namebook;

    buttonText.innerHTML = 'Read online';
    buttonTextAudio.innerHTML = "Audio Book";
    buttonAudioImg.src = 'photos/playIcon.com (2).png';
    buttonImg.src = 'photos/Book.png';
    button.addEventListener('click', () => loadFileContent(Book.Booklink));
    buttonAudio.addEventListener('click', () => {});

    authorH1.innerHTML = Book.author;
    authorImg.src = 'photos/author.png';
    text.innerHTML = Book.text;

    photo.appendChild(img);
    NameBook.appendChild(NameBookH1);
    button.append(buttonImg, buttonText);
    buttonAudio.append(buttonAudioImg, buttonTextAudio);
    buttonsConteiner.append(button, buttonAudio);
    authorBox.appendChild(authorImg);
    NameBook.appendChild(buttonsConteiner);
    authorBox.appendChild(authorH1);
    textBox.appendChild(text);
    description.appendChild(NameBook);
    description.appendChild(authorBox);
    description.appendChild(textBox);
    BoxD.appendChild(photo);
    BoxD.appendChild(description);
}

async function loadFileContent(linkBook) {
    document.getElementById('fileContent').style.display = 'block';
    try {
        const response = await fetch(linkBook);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        let content = await response.text();
        content = removeEmptyLines(content);
        document.getElementById('fileContent').textContent = content;
    } catch (error) {
        console.error('Error fetching book content:', error);
    }

    function removeEmptyLines(text) {
        return text.split('\n').filter(line => line.trim() !== '').join('\n');
    }
}
