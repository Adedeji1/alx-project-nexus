import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/?search=${query}`);
  };

  return (
    <header className="bg-black px-10 py-4 flex items-center justify-between sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-red-600 text-2xl font-bold cursor-pointer">
          MovieBox
        </h1>
      </Link>

      <nav className="flex items-center gap-6">
        <Link href="/" className="text-gray-300 hover:text-white">
          Home
        </Link>
        <Link href="/favorites" className="text-gray-300 hover:text-white">
          Watchlist
        </Link>

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search movies..."
            className="px-4 py-2 rounded bg-gray-800 text-sm outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </form>
      </nav>
    </header>
  );
}
