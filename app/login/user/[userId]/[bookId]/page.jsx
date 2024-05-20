import React from 'react'
import styles from '@/app/page.module.css'
import libraryrepo from "@/app/repo/libraryrepo";
import Link from 'next/link';
import Purchase from '@/app/login/user/[userId]/[bookId]/bookdetails'

//import logo from '../../images/IMG_9294.PNG'

export default async function page({params}) {
       const users = await libraryrepo.getUsers()
        const sellers = await libraryrepo.getSellers()
        const books = await libraryrepo.getBooks()
        const userid = Number(params.userId)
        const id = Number(params.bookId)
        const transactions = await libraryrepo.getTransactions()

        return (
            <>
              <Purchase users={users} books={books} transactions={transactions} id={id} userId={userid}></Purchase>
            </>
          );
}
   