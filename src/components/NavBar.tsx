import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed z-10 w-full pt-home-padding">
      <div className="flex justify-between m-auto w-screen-65">
        <Link href="/">halcyon.id</Link>
        <ul className="flex-row hidden sm:flex sm:gap-16">
          <li>
            <Link href="/blog">blog</Link>
          </li>
          <li>
            <Link href="/project">project</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
        </ul>
        <Link href="mailto:hello@halcyon.id">hello@halcyon.id</Link>
      </div>
    </nav>
  );
}
