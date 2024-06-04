import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full">
      <Link className="text-center text-blue-500 underline" href="/todo">Todo dApp</Link>
    </div>
  );
}
