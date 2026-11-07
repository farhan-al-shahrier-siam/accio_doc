"use client";

import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { Avatar, Button } from "@heroui/react";
import { FiBell, FiLogOut, FiPlus } from "react-icons/fi";
import { FaUserDoctor, FaWandMagicSparkles } from "react-icons/fa6";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import toast from "react-hot-toast";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Appointment", href: "/all-appointment" },
    { name: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
    const pathname = usePathname();
    // Replace these values with your actual user data.

    const { data: session } = authClient.useSession();

    const handleLogout = async () => {
        await authClient.signOut();
        toast.success("Logout successful...")
        redirect("/")

    };

    return (
        <header className="sticky top-0 z-50 w-full border border-[#eee8fa] bg-white">
            <nav className="mx-auto flex min-h-22 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="flex shrink-0 items-center gap-1.5 text-[#4d3593]" aria-label="AccioDoc home">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4efff]">
                        <FaUserDoctor size={17} strokeWidth={2.5} />
                    </span>

                    <span className="font-serif text-2xl font-bold tracking-tight">AccioDoc</span>

                    <FaWandMagicSparkles className="ml-0.5" size={15} />
                </Link>

                {/* Navigation Links */}
                <div className="hidden items-center gap-1 rounded-full bg-[#f7f1ff] p-1.5 md:flex">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`rounded-full px-5 py-2 text-base font-medium transition-colors ${
                                    isActive ? "bg-[#e8ddff] text-[#4d3593] shadow-sm" : "bg-transparent text-[#45404f] hover:bg-[#eee5ff]"
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Side: Notifications and Profile */}
                <div className="flex shrink-0 items-center gap-3 sm:gap-5">
                    {/* User Profile */}
                    {session?.user ? (
                        <div className="flex items-center gap-2 rounded-full bg-[#f7f1ff] py-1.5 pl-2 pr-2 sm:gap-2.5 sm:pl-2.5 sm:pr-3">
                            <Image alt={session?.user.name} height={90} width={90} src={session?.user.image} className="h-10 w-10 shrink-0 rounded-full" />

                            <div className="hidden min-w-0 sm:block">
                                <p className="max-w-32.5 truncate text-sm font-semibold leading-5 text-[#30263d]">{session?.user.name}</p>
                            </div>

                            <Button isIconOnly variant="light" radius="full" size="sm" aria-label="Log out" onPress={handleLogout} className="min-w-8 text-[#494454]">
                                <FiLogOut size={18} />
                            </Button>
                        </div>
                    ) : (
                        <div className="flex gap-2">
                            <Link href={"/login"}>
                                <Button className={"bg-[#4d3593] text-white hover:bg-[#6e50ca]"}>Login</Button>
                            </Link>
                            <Link href={"/register"}>
                                <Button className={"bg-[#4d3593] text-white hover:bg-[#6e50ca]"}>Register</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center justify-center gap-1 border-t border-[#f0eafa] bg-white px-2 py-2 md:hidden">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex-1 rounded-full px-2 py-2 text-center text-xs transition-colors sm:text-sm ${
                                isActive ? "bg-[#e8ddff] font-semibold text-[#4d3593]" : "text-[#45404f] hover:bg-[#eee5ff]"
                            }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>
        </header>
    );
}
