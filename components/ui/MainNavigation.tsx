import Link from "next/link";

const MainNavigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/search">Search</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
