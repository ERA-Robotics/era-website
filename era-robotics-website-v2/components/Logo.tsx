import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="ERA Robotics home">
      <span className="logo-symbol" aria-hidden="true">
        <i></i><i></i><i></i>
      </span>
      <span className="logo-copy">
        <b>ERA</b>
        <small>ROBOTICS</small>
      </span>
    </Link>
  );
}
