"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { Authenticated, Unauthenticated } from "convex/react";
import { BarLoader } from "react-spinners";
import { useStoreUser } from "@/hooks/use-store-user";

const Headers = () => {

   const { isLoading } = useStoreUser();

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
            <Authenticated>
              <UserButton />
            </Authenticated>
            <Unauthenticated>
              <SignInButton mode="modal">
              <Button size="sm">Sign In</Button>
              </SignInButton>
            </Unauthenticated>
          </div>

        </div>

        {/* Mobile search and location - below header */}

        {/* Loader */}
        {isLoading && (
          <div className="absolute bottom-0 left-0 w-full">
            <BarLoader width={"100%"} color="#a855f7" />
          </div>
        )}
      </nav>
    </>
  );
};

export default Headers;
