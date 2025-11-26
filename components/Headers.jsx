import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Headers = () => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-background/80 z-20 border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/spott.png"
              width={500}
              height={500}
              className="w-full h-11"
              alt="Planify Logo"
              priority
            />
          </Link>

          {/* Search and location (Desktop only) */}

          {/* Right side actions */}
          <div className="flex items-center">
            <SignedOut>
              <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

        </div>

        {/* Mobile search and location - below header */}
      </nav>
    </>
  );
};

export default Headers;
