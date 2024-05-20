import libraryrepo from "@/app/repo/libraryrepo.js";

//get books 
export async function GET(request) {
    response = await libraryrepo.getBooks()
    return Response.json(response, { status: 200 })
}
