
import libraryrepo from "@/app/repo/libraryrepo";

//get books 
export async function GET(request) {
    let filterType = [...searchParams.keys()][0]
    let value = searchParams.get(filterType)
    console.log(`The filter is ${filterType} and the value is ${value}`);

    let response
    // this switch case will filter the books based on the filter type
    switch (filterType) {
        case 'name':
            response = await bookRepo.getBooksByName(value)
            break;
        case 'author':
            response = await bookRepo.getBooksByAuthor(value)
            break;
        default:
            response = await libraryrepo.getBooks()
    }
    
    return Response.json(response, { status: 200 })
}

export async function PUT(request, { params }) {
    const id = Number(params.bookId)
    const { trans, user, book } = await request.json()
    const newTrans = await libraryrepo.addTransaction(trans)
    const newUser = await libraryrepo.updateUser(user.id, user)
    const newBook = await libraryrepo.updateBook(id, book)
    return Response.json(newBook, { status: 201 })
}