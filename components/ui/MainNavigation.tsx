import Link from "next/link";

const MainNavigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/spots">Spots</Link>
        </li>
        <li>
          <Link href="/about-me">About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNavigation;
