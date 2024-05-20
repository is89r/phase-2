import Login from '@/app/login/page'
import libraryrepo from "@/app/repo/libraryrepo";

export default async function Home() {
  const users = await libraryrepo.getUsers()
  const sellers = await libraryrepo.getSellers()
  const books = await libraryrepo.getBooks()
  return (
    <>
      <Login users={users} sellers={sellers} books={books}></Login>
    </>
  );
}
