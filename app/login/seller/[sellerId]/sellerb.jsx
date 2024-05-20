'use client'
import libraryrepo from "@/app/repo/libraryrepo";
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css'
import Link from 'next/link';
import page from '@/app/page.jsx'
import img from '@/app/images/IMG_9294.PNG'
import { useRouter, useSearchParams } from 'next/navigation'


export default function Book({users, books, transactions, ID}) {
//   const router = useRouter();
//   const { username } = router.query;
  const searchParams = useSearchParams()
  const [id, setId] = useState(Object.fromEntries(searchParams) || {})
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
)

const filteredTrans = transactions.filter(transaction => transaction.sellerId == ID)


const handleSearch = (event) => {
    setSearchQuery(event.target.value);
}

const purchaseBookPage = (id) => {
    router.push(`/login/seller/${ID}/${id}`);
}


    const handleGoBack = () => {
        window.location.href = 'http://localhost:3000';
      };

      const handleAddBook = () => {
        window.location.href = `http://localhost:3000/login/seller/${ID}/addbook`;
      };

     return(
        <>
        <body>
        <div className={styles.header}>
        <div className={styles.head}>
            {/* <img src={logo} alt="" className={styles.logo} width="150rem" height="150rem"></img> */}
            {/* <img src="../../images/IMG_9294.PNG" alt="" className={styles.logo} width="150rem" height="150rem"></img> */}
            <h1>NextPage</h1>
        </div>
        <div className={styles.login}>
            <button className={styles.searchbtn} onClick={handleAddBook}>Add Book</button>
            <button className={styles.searchbtn} onClick={handleGoBack}>Login</button>
        <div className={styles.balance} id="balance">
            {/* <p>{usr.balance}</p> */}
                {/* <p>Balance</p>
                <p>{
                users[users.findIndex(u => u.username == username)].balance}</p>` */}
            {/* <!-- <p>Balance</p> --> */}
        </div>
        </div>
    </div>
        <div className={styles.main}>
            <div id="shop">
                <div id="book-search" className={styles.booksearch}>
                <input type="text" id="search" placeholder="Search for book" size="50rem" className={styles.inputs} onkeydown="search(this)" onChange={handleSearch}></input>
                </div>
                <div id="content" className={styles.content}>
                <div className={styles.booklist}>
                {filteredBooks.map(book => <div className={styles.card}>
                <img src={book.img}></img>
                <p> {book.title}</p>
                <p><i>By {book.author}</i></p>
                <div className={styles.buttons}>
                 <button className={styles.purchasebtn} onClick={() => purchaseBookPage(book.id)}>View Details</button>
                </div>
                </div>)}
                </div>
                </div>
            </div>
            <div className={styles.pHistory}>
                <h2>Sale History</h2>
                <div id="purchaseHistory">
                {filteredTrans.map(book => <div>
                    <h4>Transaction</h4>
                    <p>Book ID: {book.bookId}</p>
                    <p>User ID: {book.userId}</p>
                    <p>Total quantity purchased: {book.quantity}</p>
    </div>)}
            </div>
            </div>
        </div>
        <div>
            <footer></footer>
        </div>
        </body> 
    </>
)
}


