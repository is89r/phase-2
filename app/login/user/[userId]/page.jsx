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

        return (
            <>
              <Book users={users} books={books} transactions={transactions} ID={id}></Book>
            </>
          );
}
   