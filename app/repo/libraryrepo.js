import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

class LibraryRepo {
getUsers(){
    try {
        return prisma.user.findMany()
    } catch (error) {
        return { error: error.message }
    }
}   

getBooks(){
    try {
        return prisma.book.findMany()
    } catch (error) {
        return { error: error.message }
    }
} 


getTransactions(){
    try {
        return prisma.transaction.findMany()
    } catch (error) {
        return { error: error.message }
    }
} 

getSellers(){
    try {
        return prisma.seller.findMany()
    } catch (error) {
        return { error: error.message }
    }
}  

addBook(Book){
    try {
        return prisma.book.create({ data: Book })
    } catch (error) {
        return { error: error.message }
    }
}       

deleteBook(id){
    try {
        return prisma.book.delete({ where: { id: id } })
    } catch (error) {
        return { error: error.message }
    }
}                   

getSellerBooks(id){
    try {
        return prisma.book.findMany({
            where: { sellerId: id }
        })
    } catch (error) {
        return { error: error.message }
    }
}             

addBook(book){
    try {
        return prisma.book.create({ data: book })
    } catch (error) {
        return { error: error.message }
    }
}                  

addTransaction(transaction){
    try {
        return prisma.transaction.create({ data: transaction })
    } catch (error) {
        return { error: error.message }
    }
}  
     
getBook(id){
    try {
        return prisma.book.findUnique({
            where: { id: id }
        })
    } catch (error) {
        return { error: error.message }
    }
}
updateBook(id, book){
    try {
        return prisma.book.update(
            {
                data: book,
                where: { id: id }
            }
        )
    } catch (error) {
        return { error: error.message }
    }
} 

updateUser(id, user){
    try {
        return prisma.user.update(
            {
                data: user,
                where: { id: id }
            }
        )
    } catch (error) {
        return { error: error.message }
    }
} 

getBooksByAuthor(authorName) {
    try {
        return prisma.book.findMany({
            where: { author: authorName }
        })
    } catch (error) {
        return { error: error.message }
    }

}

getBooksByName(name) {
    try {
        return prisma.book.findMany({
            where: { title: name }
        })
    } catch (error) {
        return { error: error.message }
    }

}
}
export default new LibraryRepo();
