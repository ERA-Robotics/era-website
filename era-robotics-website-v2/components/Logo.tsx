import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="logo" aria-label="ERA Robotics home">
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
