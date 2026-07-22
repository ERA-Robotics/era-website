import Link from "next/link";
import Image from "next/image";

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
        sizes="220px"
        priority
        fetchPriority="high"
        className="logo-image"
      />
    </Link>
  );
}
