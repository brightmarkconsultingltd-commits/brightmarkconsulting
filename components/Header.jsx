import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label="Brightmark Consulting home">
          <img src="/brightmark_logo.jpeg" alt="Brightmark Consulting" className="brand-logo" />
          <span className="brand-tag">Strategy | Training | Projects | Systems</span>
        </Link>
        <nav className="nav" aria-label="Main">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="btn btn-sm">Start a Conversation</Link>
        </nav>
      </div>
    </header>
  );
}
