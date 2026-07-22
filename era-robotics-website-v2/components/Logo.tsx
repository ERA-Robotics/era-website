import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="logo"
      aria-label="Go to ERA Robotics homepage"
    >
      <Image
        src="/era-logo.svg"
        alt="ERA Robotics"
        width={220}
        height={63}
        priority
        className="logo-image"
      />
    </Link>
  );
}
