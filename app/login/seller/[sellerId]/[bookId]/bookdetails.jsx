'use client'
import libraryrepo from "@/app/repo/libraryrepo";
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css'
import Link from 'next/link';
import page from '@/app/page.jsx'
import { useRouter, useSearchParams } from 'next/navigation'


export default function Purchase({users, books, transactions, sellerId, id}) {
    // const searchParams = useSearchParams()
    // const [id, setId] = useState(Object.fromEntries(searchParams) || {})
    const index = books.findIndex(book => book.id==  Number(id))
    const book = books[index]
    const [quantity, setQuantity] = useState('');

    const filteredTrans = transactions.filter(transaction => transaction.sellerId == sellerId)
  
    const handleGoBack = () => {
        window.location.href = `http://localhost:3000/login/seller/${sellerId}`
      }

      const handleLogin = () => {
        window.location.href = 'http://localhost:3000';
      }

      const handleAddBook = () => {
        window.location.href = `http://localhost:3000/login/seller/${ID}/addbook`;
      };

      async function handleQ(e) {
        
        e.preventDefault()
        const newBook = {...book}
        newBook['quantity']=book.quantity+quantity
            const response = await fetch(`/api/sellers/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                }
            )
        }
    
    return(
        <>
        <div className={styles.header}>
        <div className={styles.head}>
            {/* <img src={logo} alt="" className={styles.logo} width="150rem" height="150rem"></img> */}
            {/* <img src="../../images/IMG_9294.PNG" alt="" className={styles.logo} width="150rem" height="150rem"></img> */}
            <h1>NextPage</h1>
        </div>
        <div className={styles.login}>
            <button className={styles.searchbtn} nClick={handleAddBook}>Add Book</button>
            <button className={styles.searchbtn} onClick={handleLogin}>Login</button>
            </div>
            </div>
        <div id="shop">
            <div>
            <div className={styles.details}>
      <div class="poster">
      <img src={book.img} ></img>
      </div>
      <div className={styles.bookinfo}>
               <p id="title">{book.title}</p>
              <p><i>By {book.author}</i></p>
              <p>{book.genre}</p>
              <p><b> {book.price}</b></p>
              <p>{book.description}</p>
              <div className={styles.quantity}>
              <label for="quantty">Quantity</label>
              <input type="number" id="quantty" className={styles.inputs} onChange={(e) => setQuantity(e.target.value)}></input>
              <div className={styles.buttons}>
             <button className={styles.purchasebtn} onClick={handleQ}>Add Quantity</button>
                 <button className={styles.backbtn} onClick={handleGoBack}>Back</button>
             </div>
               <div id="message" className={styles.errormessage}></div>
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
        </div>
        </div>
        </>
    )
}
