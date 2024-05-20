import React from 'react'
import styles from '@/app/page.module.css'
import libraryrepo from "@/app/repo/libraryrepo";
import Link from 'next/link';
import Purchase from '@/app/login/seller/[sellerId]/[bookId]/bookdetails'

//import logo from '../../images/IMG_9294.PNG'

export default async function page({params}) {
       const users = await libraryrepo.getUsers()
        const sellers = await libraryrepo.getSellers()
        const books = await libraryrepo.getBooks()
        const sellerid = Number(params.sellerId)
        const id = Number(params.bookId)
        const transactions = await libraryrepo.getTransactions()

        return (
            <>
              <Purchase users={users} books={books} transactions={transactions} id={id} sellerId={sellerid}></Purchase>
            </>
          );
}
   