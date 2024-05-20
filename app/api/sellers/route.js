import libraryrepo from "@/app/repo/libraryrepo";

//get books 
export async function GET(request) {
    const sellers = await libraryrepo.getSellers();
    return Response.json(sellers, { status: 200 })
}

export async function POST(request) {
    const book = await request.json();
    const newBook = await libraryrepo.addBook(book)
    return Response.json(newBook, { status: 201 })
}