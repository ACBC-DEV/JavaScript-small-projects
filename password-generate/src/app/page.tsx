import { FormPassGenerate } from "@components/form-pass-generate";
async function getWordList() {
  const res = await fetch("http://localhost:3000/api/data", { method: "GET" });
  return await res.json();
}
export default async function Home() {
  const wordList = await getWordList();
  return (
    <main className="grid place-content-center h-screen ">
      <FormPassGenerate wordList={wordList} />
    </main>
  );
}
