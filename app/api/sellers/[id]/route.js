import libraryrepo from "@/app/repo/libraryrepo";

//get books 
export async function GET(request, { params }) {
    response = await libraryrepo.getSellerBooks(Number(params.id))
    const sellers = await libraryrepo.getSellers();
    return Response.json(sellers, { status: 200 })
}

export async function PUT(request, { params }) {
    const id = Number(params.id)
    const book = await request.json();
    const newBook = await libraryrepo.updateBook(id, book)
    return Response.json(newBook, { status: 201 })
}