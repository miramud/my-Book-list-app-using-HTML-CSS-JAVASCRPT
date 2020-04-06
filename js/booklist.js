// BOOK CLASS: HANDLES THE BOOK OBJECTS
class Book {
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

// UI CLASS: HANDLES THE UI
class UI {
    /* static displayBook(){
        const StoredBooks = [
            {
                title: 'Book One',
                author: 'John Bloock',
                isbn: '3334553'
            },
            {
                title: 'Book Two',
                author: 'John Breeze',
                isbn: '44563'
            },
        ];


        StoredBooks.forEach((book)=> UI.addBookToList(book));
    } */
    

    static addBookToList(book){
        const list = document.querySelector('#bookList');
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#"><span class="fa fa-trash delete"></span></a></td>
        `;
        list.appendChild(row);
    }

    static clearField(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static deleteInput(item){
        if(item.classList.contains('delete')){
            item.parentElement.parentElement.parentElement.remove();
        }
    }

    static showMessage(message, className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const content = document.querySelector('.content');
        const form = document.querySelector('.formList');
        content.insertBefore(div, form);

        // Message Disappears within 4 seconds
        setTimeout(()=> document.querySelector(`.alert`).remove(), 4000)

    }
}
// STORE CLASS: HANDLES THE LOCAL STORAGE TO THE BROWSER

// EVENT: DISPLAY A BOOK
// document.addEventListener('DOMContentLoader', UI.displayBook());


// EVENT: ADD A BOOK
document.querySelector('.formList').addEventListener('submit', (e)=>{
    // Prevent Form from submitting
    e.preventDefault();

    // Get Input values
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const isbn = document.querySelector('#isbn').value;

    // Validate form
    if(title === '' || author === '' || isbn === ''){

        // Display Warning Alert Message    
        UI.showMessage('Please fill in the required fields', 'danger');
        /* const msg = document.querySelector('#msg');
        const span = document.createElement('span')
        msg.classList.add('alert-danger');
        span.innerHTML = `
            <h4>Please fill in the neccessary fields</h4>
        `;
        msg.appendChild(span)
        setTimeout(()=>{
            span.remove()
            msg.classList.remove('alert-danger')
        }, 4000)
        */

        /* setInterval(() => {
            document.querySelector('#msg').innerHTML = `
            <span class="alert-danger"><h4>Please fill in the neccessary fields</h4></span>
        `
        }, 3000); */
        
        
    }
    else{
        // Instantiate Book
        const book = new Book(title, author, isbn);
        
        // Add Book to list
        UI.addBookToList(book);

        // Display Success Message
        UI.showMessage(`${book.title} was added successfully`, 'success')
        /* const msg = document.querySelector('#msg');
        const span = document.createElement('span')
        msg.classList.add('alert-success');
        span.innerHTML = `
            <h4>"${book.title}" was Added Successfully</h4>
        `;
        msg.appendChild(span)
        setTimeout(()=>{
            span.remove();
            msg.classList.remove('alert-success')
        }, 5000); */

        // Clear fields
        UI.clearField()
    }
    

});


// EVENT: REMOVE A BOOK 
document.querySelector('#bookList').addEventListener('click', (e)=>{
    UI.deleteInput(e.target);
    // console.log(e.target)

    UI.showMessage(`Book was removed Successfully`, 'success')

})