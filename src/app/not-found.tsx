import Link from "next/link";

export default function NotFound() {
  return (
    <div className="no-found">
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link href="/" className="home-button">
        Go Back Home
      </Link>
    </div>
  );
}
