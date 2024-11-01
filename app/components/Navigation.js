import Link from "next/link";

function Navigation() {
  return (
    <div className="flex justify-center ">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="cabins">Cabins</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
        <li>
          <Link href="account">Accounts</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
