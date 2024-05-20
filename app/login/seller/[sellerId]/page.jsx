import React from 'react'
import styles from '@/app/page.module.css'
import libraryrepo from "@/app/repo/libraryrepo";
import Link from 'next/link';
import Book from '@/app/login/seller/[sellerId]/sellerb'

//import logo from '../../images/IMG_9294.PNG'

export default async function page({params}) {
       const users = await libraryrepo.getUsers()
        const sellers = await libraryrepo.getSellers()
        const books = await libraryrepo.getBooks()
        const transactions = await libraryrepo.getTransactions()
        const id = Number(params.sellerId)
        const sellerBooks = await libraryrepo.getSellerBooks(id)

        return (
            <>
              <Book sellers={sellers} books={sellerBooks} transactions={transactions} ID={id}></Book>
            </>
          );
}
   