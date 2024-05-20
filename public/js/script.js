// document.getElementById('loginForm').addEventListener('submit', function(event) {
//     event.preventDefault();
    // console.log(event)
    document.addEventListener("DOMContentLoaded", async () => {
        const books = await loadContentFromServer('/api/books');
        if (books) {
            await handleLoadBookCards(books);
        }
    });

    async function handleLoadBookCards(books) {
        if (!books || !Array.isArray(books)) {
            console.error("Invalid or empty books array");
            return;
        }
        const cardsHTML = books.map(book => bookToHTML(book)).join('');
        document.querySelector("booklist").innerHTML = cardsHTML;
    }
    

    function clickLogin(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    fetch('user.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(userData => {
            if(!username){
                document.getElementById('message').innerHTML = 'Login failed: Enter username';
            }
            else if(!password){
                document.getElementById('message').innerHTML = 'Login failed: Enter password';
            }
            else{
            // Find the user in the data array
            const user = userData.find(user => user.username === username && user.password === password)
            if (user) {
                document.getElementById('message').innerHTML = 'Login successful!';
                // window.location.href = 'main.html';
                if(user.type == 'customer' || user.type == 'admin'){
                    if(!localStorage.user){
                        localStorage.user = JSON.stringify(user)
                        localStorage.users = JSON.stringify([user])}
                    else{
                        //const user = JSON.parse(localStorage.users)
                        const users = JSON.parse(localStorage.users)
                        let available = 0
                        for (u in users){
                            if(u.username == user.username)
                            available = 1
                        }
                        if(available == 0){
                            users.push(user)
                        }
                    
                    localStorage.user = JSON.stringify(user)
                    localStorage.users = JSON.stringify(users)
                }
                    body.innerHTML = mainHTML()
                    showBooks()
                }
                if(user.type == 'seller'){
                    // if(!localStorage.seller)
                    localStorage.seller = JSON.stringify(user)
                    body.innerHTML = sellerHTML()
                    displaySellerBook()
                }
                
            } else {
                document.getElementById('message').innerHTML = 'Login failed: Incorrect username or password.';
            }}
        })
        .catch(error => {
            console.error('Error loading user data:', error);
            document.getElementById('message').innerHTML = 'Error loading user data. Please try again later.';
        });
    }

function mainHTML(){
    return `
<body>
    <div class="header">
        <div class="head">
            <img src="./images/IMG_9294.PNG" alt="" class="logo" width="150rem" height="150rem">
            <h1>NextPage</h1>
        </div>
        <div class="login">
        <button class="search-btn" onclick="login()">Login</button>
        <div class="balance" id="balance">
            <!-- <p>Balance</p> -->
        </div>
        </div>
    </div>
        <div class="main">
            <div id="shop">
                <div id="book-search" class="book-search">
                    <input type="text" id="search" placeholder="Search for book" size="50rem" class="inputs" onkeydown="search(this)">
                </div>
                <div id="content" class="content">

                </div>
            </div>
            <div class="pHistory">
                <h2>Purchase History</h2>
                <div id="purchaseHistory">

                </div>
            </div>
        </div>
        <div>
            <footer></footer>
        </div>
    </div>
</body>
</html>
    `
}

function sellerHTML(){//difference is sale history instead of purchase history
    return `
<body>
    <div class="header">
        <div class="head">
            <img src="./images/IMG_9294.PNG" alt="" class="logo" width="150rem" height="150rem">
            <h1>NextPage</h1>
        </div>
        <div class="login">
        <button class="search-btn" onclick="addBook()">Add Book</button>
        <button class="search-btn" onclick="login()">Login</button>
        </div>
    </div>
        <div class="main" id="main">
            <div id="shop">
                <div id="book-search" class="book-search">
                    <input type=" text" id="search" placeholder="Search for book" size="50rem" class="inputs" onkeydown="search(this)>
                </div>
                <div id="content" class="content">

                </div>
            </div>
            <div class="pHistory">
                <h2>Sale History</h2>
                <div id="purchaseHistory">

                </div>
            </div>
        </div>
        <div>
            <footer></footer>
        </div>
    </div>
</body>
</html>
    `
}

function bookToHTML(book) {
    return `<div class="card">
    <img src="${book.img}">
             <p> ${book.title}</p>
            <p><i>By ${book.author}</i></p>
             <div class="buttons">
                 <button class="purchase-btn" onclick="purchaseBookPage(${book.id})">Purchase</button>
             </div>
    </div>`
  }
  
  function purchaseBookPage(id){
    console.log(id)
    if(!localStorage.books)
    books = []
  else{
      const books = JSON.parse(localStorage.books)
      const index = books.findIndex(book => book.id== id)
      console.log(books[index])
      const detailHTML = detailsHTML(books[index])
      shop.innerHTML = `<div >${detailHTML}</div>`
    
  }
}

  function detailsHTML(book){
      return `<div class="details">
      <div class="poster">
      <img src="${book.img}" >
      </div>
      <div class="bookinfo">
               <p id="title">${book.title}</p>
              <p><i>By ${book.author}</i></p>
              <p>${book.genre}</p>
              <p><b> $ ${book.price}</b></p>
              <p>${book.description}</p>
              <div class="quantity">
              <label for="quantty">Quantity</label>
              <input type="number" id="quantty" class="inputs">
              </div>
              <div class="ship">
              <label for="ship" >Shipping address</label>
              <input type="textarea" id="ship" placeholder="Enter shipping address here"  class="inputs" >
              </div>
               <div class="buttons">
               <button class="purchase-btn" onclick="purchaseBook(${book.id})">Purchase</button>
                   <button class="back-btn" onclick="back()">Back</button>
               </div>
               <div id="message" class="error-message"></div>
               </div>
        </div>
      `
  }

function purchaseBook(id){
    if(!localStorage.books){
    books = []
    }
    else if(!localStorage.purchaseHist){
        purchaseHist = []
    } 
    else if(!document.getElementById('quantty').value){
        //check if quantity entered
        document.getElementById('message').innerHTML = 'Please enter desired quantity';
    }
    else if(!document.getElementById('ship').value){
        //check if shipping address entered
        document.getElementById('message').innerHTML = 'Please enter shipping address';
    }
    else{
        //pulling data from local storage
        const books = JSON.parse(localStorage.books)
        const purchaseHist = JSON.parse(localStorage.purchaseHist)
        const user = JSON.parse(localStorage.user)
        const users = JSON.parse(localStorage.users)
        const uindex = users.findIndex(u => u.username == user.username)
        //getting quantity value
        const quantityVal = document.getElementById('quantty').value;
        //finding the book that is currently being purchased
        const index = books.findIndex(book => book.id== id)
        // console.log(user.balance )
        // console.log(books[index].price*quantityVal)
        //checking if quantity available and user has sufficient funds
    if (quantityVal <= books[index].quantity && user.balance >= books[index].price*quantityVal) {
        //updating quantity and saving it to local storage
        books[index]['quantity'] = books[index].quantity - quantityVal
        localStorage.books = JSON.stringify(books)
        const purchasHTML = purchaseHTML(books[index], quantityVal)
        //updating user balance
        user['balance'] = user.balance - books[index].price*quantityVal
        //writing this purchase in purchase history
        purchaseHistory.innerHTML = `<div class="purchases">${purchasHTML}</div>`
        purchaseHist.push([books[index],user])
        localStorage.purchaseHist = JSON.stringify(purchaseHist)
        localStorage.user = JSON.stringify(user)
        users[uindex] = user
        localStorage.users = JSON.stringify(users)
        console.log(user.balance)
        //A message about the status of the purchase is shown to the customer
        document.getElementById('message').innerHTML = 'Purchase successful!';
    } else {//purchase has failed
        //book quantity unavailable
        if(quantityVal > books[index].quantity)
        document.getElementById('message').innerHTML = 'Purchase failed: Not enough quantity';
        else
        //insufficient funds
        document.getElementById('message').innerHTML = 'Purchase failed: Insufficient funds';
    }}
  }

  function purchaseHTML(book, quantity){//writing the purchase history
    return `<div>
    <p>${book.title}</p>
    <p>Total quantity purchased: ${quantity}</p>
    </div>
    `
}

async function showBooks(){//show books
    const books = await loadContentFromServer('/api/users/books');
    if (books) {
        await handleLoadBookCards(books);
    }
}

function sellerBookToHTML(book){
    return `<div class="card">
    <img src="${book.img}">
             <p> ${book.title}</p>
            <p><i>By ${book.author}</i></p>
             <div class="buttons">
                 <button class="purchase-btn" onclick="bookDetailsPage(${book.id})">View Details</button>
             </div>
    </div>`
}

function bookDetailsPage(id){
    console.log(id)
    if(!localStorage.books)
    books = []
    else{
        const books = JSON.parse(localStorage.books)
        const index = books.findIndex(book => book.id== id)
        console.log(books[index])
        const detailHTML = detailsSellerHTML(books[index])
        shop.innerHTML = `<div >${detailHTML}</div>`
        if(!localStorage.purchaseHist || localStorage.purchaseHist == []){
        purchaseHist = []}
        else{
        const purchaseHist = JSON.parse(localStorage.purchaseHist)
        // const purchaseHist = JSON.parse(localStorage.purchaseHist)
        // console.log(purchaseHist)
        const bookSold = purchaseHist.filter(p => p[0].title == books[index].title)
        // console.log(bookSold)
        // purchaseHistory.innerHTML = `<div class="purchases">${pHTML}</div>`
        const pHTML = bookSold.map(p => soldHTML(p[0],50-p[0].quantity,p[0].price,p[1].username)).join(' ')
        // purchaseHist.map(p => console.log(p[1]))
        purchaseHistory.innerHTML = `<div class="purchases">${pHTML}</div>`
        }
    
  }
}

function detailsSellerHTML(book){
    return `<div class="details">
    <div class="poster">
    <img src="${book.img}">
    </div>
    <div class="bookinfo">
             <p id="title">${book.title}</p>
            <p><i>By ${book.author}</i></p>
            <p>${book.genre}</p>
            <p><b> $ ${book.price}</b></p>
            <p>Quantity: ${book.quantity}</p>
            <p>${book.description}</p>
             <div class="buttons">
             <div class="quantity">
             <label for="quantty">Quantity</label>
             <input type="number" id="quantty" class="inputs">
             </div>
             <button class="purchase-btn" onclick="addQuantity(${book.id})">Add Quantity</button>
                 <button class="back-btn" onclick="sellerBack()">Back</button>
             </div>
             <div id="message" class="error-message"></div>
             </div>
      </div>
    `
}

async function displaySellerBook(){//without passing the seller
    if(!localStorage.sellerBooks){
        try{// we need to load books and save them to localStorage
            const data = await fetch('books.json')
            const books = await data.json()
            const user = JSON.parse(localStorage.seller)

            //filter to display only the book by this seller
            const sellerBooks = books.filter(book => book.seller == user.username)
            // console.log(sellerBooks)
            // localStorage.sellerBooks = JSON.stringify(sellerBooks)
            // localStorage.seller = JSON.stringify(user)
            const booksHTML = sellerBooks.map(book => sellerBookToHTML(book)).join(' ')
            shop.innerHTML = `<div id="book-search" class="book-search">
        <input type=" text" id="search" placeholder="Search for book" size="50rem" class="inputs" >
    </div>
    <div id="content" class="content">
    <div class="book-list">${booksHTML}</div>
    </div>`
            if(!localStorage.purchaseHist)
            purchaseHist = []
            else{
            const purchaseHist = JSON.parse(localStorage.purchaseHist)
            const sellerBooksHist = purchaseHist.filter(p => p[0].seller == user.username)
            const pHTML = sellerBooksHist.map(p => soldHTML(p[0],50-p[0].quantity,p[0].price,p[1].username)).join(' ')
            purchaseHistory.innerHTML = `<div class="purchases">${pHTML}</div>`
        }
            } catch (error) {
                console.error("Failed to load books:", error);
            }
    }
    else{
        const user = JSON.parse(localStorage.seller)
        const books = JSON.parse(localStorage.books)
        const sellerBooks = books.filter(book => book.seller == user.username)
        const booksHTML = sellerBooks.map(book => sellerBookToHTML(book)).join(' ')
        shop.innerHTML = `<div id="book-search" class="book-search">
        <input type=" text" id="search" placeholder="Search for book" size="50rem" class="inputs" >
    </div>
    <div id="content" class="content">
    <div class="book-list">${booksHTML}</div>
    </div>`
    if(!localStorage.purchaseHist)
        purchaseHist = []
        else{
        const purchaseHist = JSON.parse(localStorage.purchaseHist)
        console.log("hi")
        console.log(user.username)
        const sellerBooksHist = purchaseHist.filter(p => p[1].seller == user.username)
        const pHTML = sellerBooksHist.map(p => soldHTML(p[0],50-p[0].quantity,p[0].price,p[1].username)).join(' ')
        purchaseHistory.innerHTML = `<div class="purchases">${pHTML}</div>`
        }
    }
const searchInput = document.querySelector("#search")
searchInput.addEventListener("change", searchSeller)
}

function soldHTML(book, quantity,price,user){//writing the sale history
    return `<div>
    <p>${book.title}</p>
    <p>Total quantity purchased: ${quantity}</p>
    <p>Price: $ ${price}</p>
    <p>User: ${user}</p>
    </div>`
}

function sellerBack(){//seller back button
    displaySellerBook()
}

  function back(){//purchase back button
    showBooks()
  }

  function login(){//back to login page
    body.innerHTML = ` <div class="bodyDiv">
    <div class="container">
      <input type="checkbox" id="flip" />
      <div class="cover">
        <div class="front">
          <img src="./images/image1_0 (1).jpg" alt="" />
          <div class="text">
            <span class="text-1">Every book reading is a <br />new adventure</span>
            <span class="text-2">Let's dive into</span>
          </div>
        </div>
        <div class="back">
        </div>
      </div>
      <div class="forms">
        <div class="form-content"><div class="login-form">
            <div class="title">Login</div>
            <!-- <form  id="loginForm"> -->
              <div class="input-boxes">
                <div class="input-box">
                  <i class="fas fa-envelope"></i>
                  <input type="text"  id="username" placeholder="Enter your username" required />
                </div>
                <div class="input-box">
                  <i class="fas fa-lock"></i>
                  <input type="password" id="password" placeholder="Enter your password" required />
                </div>
                <div class="text"><a href="#">Forgot password?</a></div>
                <br>
                <div id="message" class="error-message"></div>
                <div class="button input-box">
                  <!-- <input type="submit" value="Login"/> -->
                  <button class="input" onclick="clickLogin()">Login</button>
                </div>
              </div>
            <!-- </form> -->
          </div>
        </div>
      </div>
    </div>
    </div>`
  }

  function addBook(){
      shop.innerHTML = addBookHTML()
  }

  function addBookHTML(){
      return `<div class="add">
    <div class="quantity">
      <label for="id">ID</label>
      <input type="number" id="id" class="inputs">
    </div>
    <div class="quantity">
        <label for="seller">Seller</label>
        <input type="text" id="seller" class="inputs">
    </div>
    <div class="quantity">
    <label for="quantty">Quantity</label>
    <input type="number" id="quantty" class="inputs">
    </div>
    <div class="quantity">
        <label for="ttle">Title</label>
        <input type="text" id="ttle" class="inputs">
    </div>
    <div class="quantity">
        <label for="genre">Genre</label>
        <input type="text" id="genre" class="inputs" >
    </div>
    <div class="quantity">
        <label for="author" >Author</label>
        <input type="text" id="author"  class="inputs" >
    </div>
    <div class="quantity">
        <label for="price">Price</label>
        <input type="number" id="price" class="inputs">
    </div>
    <div class="quantity">
        <label for="description">Description</label>
        <input type="textArea" id="description" class="inputs">
    </div>
    <div class="quantity">
        <label for="img" >Image URL</label>
        <input type="text" id="img" placeholder="Enter image URL here"  class="inputs" >
    </div>
    <button class="purchase-btn" onclick="addBookSeller()">Add Book</button>
    <div id="message" class="error-message"></div>
</div>

      `
  }

  function addBookSeller(){
      const idVal =  document.getElementById('id').value;
      const sellerVal =  document.getElementById('seller').value;
      const quantityVal = document.getElementById('quantty').value;
      const titleVal =  document.getElementById('ttle').value;
      const genreVal =  document.getElementById('genre').value;
      const authorVal = document.getElementById('author').value;
      const priceVal =  document.getElementById('price').value;
      const descriptionVal =  document.getElementById('description').value;
      const imgVal = document.getElementById('img').value;
      if(!idVal || !sellerVal || !quantityVal || !titleVal || !genreVal || !authorVal || !priceVal || !descriptionVal || !imgVal){
        document.getElementById('message').innerHTML = 'Enter missing data'; 
      }
      else{
          const books = JSON.parse(localStorage.sellerBooks)
          const allBooks = JSON.parse(localStorage.books)
          const book = {
            "id": idVal,
            "seller":sellerVal,
            "quantity":quantityVal,
            "title": titleVal,
            "genre": genreVal,
            "author": authorVal,
            "price": priceVal,
            "description": descriptionVal,
            "img": imgVal
          }
          books.push(book)
          allBooks.push(book)
          localStorage.sellerBooks = JSON.stringify(books)
          localStorage.books = JSON.stringify(allBooks)
          document.getElementById('message').innerHTML = 'Book added'; 
          displaySellerBook()
      }
  }

  function addQuantity(id){
    if(!localStorage.books)
    books = []
    else{
        const quantityVal = document.getElementById('quantty').value
        if(!quantityVal){
            //check if quantity entered
            document.getElementById('message').innerHTML = 'Please enter desired quantity';
        }
        else{
        const books = JSON.parse(localStorage.books)
        const index = books.findIndex(book => book.id== id)
        books[index]['quantity'] = books[index].quantity + Number(quantityVal)
        console.log(books[index].quantity)
        localStorage.books = JSON.stringify(books)
        document.getElementById('message').innerHTML = 'Quantity successfully updated';
        }
    }
  }

function search(){
    const search = document.querySelector('#search')
    console.log(search.value)
    const books = JSON.parse(localStorage.books)

    const searched = books.filter(b => b.title.toUpperCase().includes(search.value.toUpperCase()) || b.author.toUpperCase().includes(search.value.toUpperCase()))

    const booksHTML = searched.map(book => bookToHTML(book)).join(' ')
    content.innerHTML = `
    <div class="book-list">${booksHTML}</div>`
}

function searchSeller(){
    const search = document.querySelector('#search')
    console.log(search.value)
    const books = JSON.parse(localStorage.sellerBooks)

    const searched = books.filter(b => b.title.toUpperCase().includes(search.value.toUpperCase()) || b.author.toUpperCase().includes(search.value.toUpperCase()))

    const booksHTML = searched.map(book => sellerBookToHTML(book)).join(' ')
    content.innerHTML = `
    <div class="book-list">${booksHTML}</div>`
}

