"use client"
import React from 'react'
import  Link  from "next/link";
import Image from 'next/image';
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

const Header = () => {

    const path =usePathname();
    if(path.includes("/editor")){
        return null;
    }


  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap ">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-0 flex items-center justify-between gap-8">
        <Link href="/" className="mr-10 md:mr-20" >
        <Image
        src ="/logo.png"
        alt="app logo"
        className="min-w-24 object-cover"
        width={80}
        height={20}
        
        
        />
        </Link>

        {path==="/" && (
            <div className="hidden md:flex space-x-6" >
                <Link
                href="#features"
                className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                >
                    Features
                </Link>

                <Link
                href="#features"
                className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                >
                   Pricing
                </Link>

                <Link
                href="#features"
                className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
                >
                    Contact
                </Link>

            </div>
        )}

        {/* AUTH SERVICES */}



        <div className="flex items-center gap-3 ml-10 md:ml-20">
           <SignedOut>
                <SignInButton>
                    <Button variant="glass"  >Sign In</Button>
                </SignInButton>
                <SignUpButton>
                  <Button variant="primary">Get Started</Button>
                </SignUpButton>
              </SignedOut>
              {/* Show the user button when the user is signed in */}
              <SignedIn>
                <UserButton
                appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg border border-white/20",
                  userButtonPopoverCard:
                    "shadow-xl backdrop-blur-md bg-slate-900/90 border border-white/20",
                  userPreviewMainIdentifier: "font-semibold text-white",
                },
              }}

            //   may cause problem
            //   callbackUrl = '/'
                />
              </SignedIn>
        </div>

        </div>

        

        

    </header>
  )
}

export default Header
