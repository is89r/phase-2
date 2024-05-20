import libraryrepo from "@/app/repo/libraryrepo";

export async function GET(request) {
    const users = await libraryrepo.getUsers();
    const sellers = await libraryrepo.getSellers();
    const loggers = [users, sellers]
    return Response.json( loggers, { status: 200 })
}