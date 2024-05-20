'use client'
import libraryrepo from "@/app/repo/libraryrepo";
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css'
import Link from 'next/link';
import page from '@/app/page.jsx'
import { useRouter, useSearchParams } from 'next/navigation'


export default function Purchase({users, books, transactions, userId, id}) {
    const [quantity, setQuantity] = useState('');
    const [ship, setShip] = useState('');
    const index = books.findIndex(book => book.id==  Number(id))
    const book = books[index]
  
    const indx = users.findIndex(user => user.id== userId)
    const usr = users[indx]
    
    const handleLogin = () => {
        window.location.href = 'http://localhost:3000'
      }

    const handleGoBack = () => {
        window.location.href = `http://localhost:3000/login/user/${userId}`
      }
      const filteredTrans = transactions.filter(transaction => transaction.userId == userId)

    
      const handlePurchase = async () => {
        const totalCost = quantity * book.price;
        if (usr.balance < totalCost) {
            alert('Insufficient balance')
            return
          }
          try {
              const newBook = {...book}
              newBook['quantity']=book.quantity-quantity
              const newUser = {...usr}
              newUser['balance']=usr.balance-totalCost
            const response = await fetch(`/api/users/${id}`, {
                    method: 'PUT',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      newBook: newBook,
                      newUser: newUser,
                      trans: {
                        "id": transactions.length,
                        "userId": usr.id,
                        "sellerId": book.sellerId,
                        "bookId":book.id,
                        "quantity":quantity
                      }
                    }),
                  });
              
                  if (response.ok) {
                    console.log('Data updated successfully');
                  } else {
                    console.error('Failed to update data');
                  }
          } catch (error) {
            console.error('Error purchasing item:', error);
          }
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
            <button className={styles.searchbtn} onClick={handleLogin}>Login</button>
        <div className={styles.balance} id="balance">
            <p>Balance</p>
            <p>{usr.balance}</p>
                {/* <p>Balance</p>
                <p>{
                users[users.findIndex(u => u.username == username)].balance}</p>` */}
            {/* <!-- <p>Balance</p> --> */}
        </div>
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
              </div>
              <div className={styles.ship}>
              <label for="ship" >Shipping address</label>
              <input type="textarea" id="ship" placeholder="Enter shipping address here"  className={styles.inputs} onChange={(e) => setShip(e.target.value)} ></input>
              </div>
               <div className={styles.buttons}>
               <button className={styles.purchasebtn} onClick={handlePurchase}>Purchase</button>
                   <button className={styles.backbtn} onClick={handleGoBack}>Back</button>
               </div>
               <div id="message" className={styles.errormessage}></div>
               </div>
               <div className={styles.pHistory}>
                <h2>Purchase History</h2>
                <div id="purchaseHistory">
                {filteredTrans.map(book => <div>
                        <h4>Transaction</h4>
                    <p>Book ID: {book.bookId}</p>
                    <p>Seller ID: {book.sellerId}</p>
                    <p>Total quantity purchased: {book.quantity}</p>
    </div>)}
                </div>
            </div>
        </div>
       
            </div>
        </div>
    )</>
    )   
}
