import fs from 'fs-extra'
import path from 'path'

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const booksPath = path.join(process.cwd(), 'app/data/books.json')
const userPath = path.join(process.cwd(), 'app/data/user.json')
const sellerPath = path.join(process.cwd(), 'app/data/seller.json')
const transactionPath = path.join(process.cwd(), 'app/data/transaction.json')

async function seed() {
    try {
        const books = await fs.readJSON(booksPath)
        const users = await fs.readJSON(userPath)
        const sellers = await fs.readJSON(sellerPath)
        const transactions = await fs.readJSON(transactionPath)

        // Delete all existing entries in the database
        await prisma.book.deleteMany({})
        await prisma.transaction.deleteMany({})
        await prisma.user.deleteMany({})
        await prisma.seller.deleteMany({})

        for (const user of users)
            await prisma.user.create({ data: user })

        for (const seller of sellers)
            await prisma.seller.create({ data: seller })

        // Seed departments
        for (const book of books)
            await prisma.book.create({ data: book })

        for (const transaction  of transactions)
            await prisma.transaction.create({ data: transaction })

        // Seed students
    

        console.log('Seeding completed successfully.')
    } catch (error) {
        console.error('Failed to seed:', error)
    }
}

seed()
