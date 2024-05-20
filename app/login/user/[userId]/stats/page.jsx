import React from 'react'
import styles from '@/app/page.module.css'
import libraryrepo from "@/app/repo/libraryrepo";
import Link from 'next/link';
import Book from '@/app/login/user/[userId]/Book'

//import logo from '../../images/IMG_9294.PNG'

export default async function page({params}) {
       const users = await libraryrepo.getUsers()
        const sellers = await libraryrepo.getSellers()
        const books = await libraryrepo.getBooks()
        const id = Number(params.userId)
        const transactions = await libraryrepo.getTransactions()
        const s1 = await libraryrepo.getSellerBooks(12)
        const s2 = await libraryrepo.getSellerBooks(13)

        return (
            <>
            <div className={styles.header}>
            <div className={styles.head}>
            {/* <img src={logo} alt="" className={styles.logo} width="150rem" height="150rem"></img> */}
            {/* <img src="../../images/IMG_9294.PNG" alt="" className={styles.logo} width="150rem" height="150rem"></img> */}
            <h1>NextPage</h1>
        </div>
           
            </div>
            <h1 className={styles.titl}>Statistics</h1>
            <div className={styles.data}>
              <p>Number of sellers</p>
              <p>{sellers.length}</p>
              </div>
              <div className={styles.data}>
              <p>Number of users</p>
              <p>{users.length}</p>
              </div>
              <div className={styles.data}>
              <p>Number of transactions</p>
              <p>{transactions.length}</p>
              </div>
              <div className={styles.data}>
              <p>Number of Books being sold</p>
              <p>{books.length}</p>
              </div>
              <div className={styles.data}>
              <p>Number of books sold by seller 1</p>
              <p>{s1.length}</p>
              </div>
              <div className={styles.data}>
              <p>Number of books sold by seller 2</p>
              <p>{s2.length}</p>
              </div>
            </>
          )
        }