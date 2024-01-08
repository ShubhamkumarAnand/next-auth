"use client";

import Link from "next/link";
import type { FC } from "react";
import { Button } from "~/components/ui/button";

interface BackButtonProps {
  href: string;
  label: string;
}

const BackButton: FC<Readonly<BackButtonProps>> = ({ href, label }) => {
  return (
    <Button variant="link" size="sm" className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

export default BackButton;
