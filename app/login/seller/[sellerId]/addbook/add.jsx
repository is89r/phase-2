'use client'
import libraryrepo from "@/app/repo/libraryrepo";
import React, { useState, useEffect } from 'react';
import styles from '@/app/page.module.css'
import Link from 'next/link';
import page from '@/app/page.jsx'
import { useRouter, useSearchParams } from 'next/navigation'


export default function Add({users, books, transactions, sellerId, id}) {
    const [ID, setId] = useState('');
    const [seller, setSeller] = useState('');
    const [quantity, setQuantity] = useState('');
    const [title, setTitle] = useState('');
    const [genre, setGenre] = useState('');
    const [author, setAuthor] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageURL, setImage] = useState('');
    const router = useRouter()

    const book = {
        "id": ID,
        "quantity":quantity,
         "sellerId":seller,
        "title": title,
        "genre": genre,
         "author": author,
        "price": price,
        "description": description,
        "img":imageURL
    }

    const handleGoBack = () => {
        window.location.href = `http://localhost:3000/`
      }
      const handleAddBook = () => {
        window.location.href = `http://localhost:3000/login/seller/${sellerId}/addbook`;
      }
      async function handleAdd(e) {
        e.preventDefault()
        try {
            const response = await fetch('/api/sellers', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(book)
            });
            if (!response.ok) {
                throw new Error('Failed to add book');
            }
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
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
        <div className={styles.add}>
    <div className={styles.quantity}>
      <label for="id">ID</label>
      <input type="number" id="id" className={styles.inputs}onChange={(e) => setId(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
        <label for="seller">Seller ID</label>
        <input type="number" id="seller" className={styles.inputs}onChange={(e) => setSeller(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
    <label for="quantty">Quantity</label>
    <input type="number" id="quantty" className={styles.inputs} onChange={(e) => setQuantity(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
        <label for="ttle">Title</label>
        <input type="text" id="ttle"className={styles.inputs}onChange={(e) => setTitle(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
        <label for="genre">Genre</label>
        <input type="text" id="genre" className={styles.inputs} onChange={(e) => setGenre(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
        <label for="author" >Author</label>
        <input type="text" id="author"  className={styles.inputs} onChange={(e) => setAuthor(e.target.value)}></input>
    </div>
    <div cclassName={styles.quantity}>
        <label for="price">Price</label>
        <input type="number" id="price" className={styles.inputs} onChange={(e) => setPrice(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
        <label for="description">Description</label>
        <input type="textArea" id="description"className={styles.inputs} onChange={(e) => setDescription(e.target.value)}></input>
    </div>
    <div className={styles.quantity}>
        <label for="img" >Image URL</label>
        <input type="text" id="img" placeholder="Enter image URL here"  className={styles.inputs} onChange={(e) => setImage(e.target.value)}></input>
    </div>
    <button className={styles.purchasebtn} onClick={handleAdd}>Add Book</button>
    <div id="message" className={styles.errormessage}></div>
</div>
        </>
    )
}