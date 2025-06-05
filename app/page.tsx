import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href='projects/list'>ProjectList</Link>
      <h1>Home</h1>
    </main>
  );
}
