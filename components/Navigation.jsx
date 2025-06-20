import Link from "next/link";

export default function Navigation() {
  return (
    <header className="grid grid-cols-2">
      <div className="">thapa Logo</div>
      <nav>
        <ul className="flex gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/service">Service</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
            <li>
            <Link href="/client">Client</Link>
          </li>
            <li>
            <Link href="/server">Server</Link>
          </li>
            <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
