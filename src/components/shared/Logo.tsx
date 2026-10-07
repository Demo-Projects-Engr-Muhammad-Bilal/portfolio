"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Logo({ onClick }: { onClick?: () => void }) {
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href="/"
      onClick={onClick}
      aria-label="Muhammad Bilal - home"
      className="inline-flex items-center rounded-full font-display text-[19px] font-semibold tracking-tight outline-none focus-visible:ring-[3px] focus-visible:ring-ring/60"
    >
      {failed ? (
        <span>MBilal</span>
      ) : (
        <Image
          src="/logo-clay.png"
          alt="MBilal"
          width={120}
          height={40}
          priority
          onError={() => setFailed(true)}
          className="h-9 w-auto object-contain md:h-10"
        />
      )}
    </Link>
  );
}