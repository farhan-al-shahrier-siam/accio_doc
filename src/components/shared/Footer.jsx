import Link from "next/link";
import { FaUserDoctor, FaWandMagicSparkles, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { FiShield } from "react-icons/fi";

const quickLinks = [
    { name: "Find Doctors", href: "/doctors" },
    { name: "Specialties", href: "/specialties" },
    { name: "Telehealth", href: "/telehealth" },
    { name: "How It Works", href: "/how-it-works" },
];

const specialties = ["Cardiology", "Neurology", "Pediatrics", "Dermatology"];

const patientCare = [
    { name: "My Appointments", href: "/appointments" },
    { name: "Health Records", href: "/health-records" },
    { name: "Insurance", href: "/insurance" },
    { name: "FAQs", href: "/faqs" },
];

export default function Footer() {
    return (
        <footer className="mx-auto w-full max-w-[1600px] rounded-b-2xl bg-white px-6 py-12 sm:px-10 lg:px-10">
            {/* Main Footer */}
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.7fr_0.8fr_0.8fr_0.8fr] lg:gap-12">
                {/* Brand Section */}
                <div>
                    <Link href="/" className="mb-5 inline-flex items-center gap-2 text-[#4d3593]">
                        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4efff]">
                            <FaUserDoctor size={20} />
                        </span>

                        <span className="font-serif text-2xl font-bold">AccioDoc</span>

                        <FaWandMagicSparkles size={17} />
                    </Link>

                    <p className="max-w-[460px] text-[16px] leading-7 text-[#55515f]">
                        Connecting patients with trusted, world-class medical specialists seamlessly. Your health journey, guided with care and precision.
                    </p>

                    {/* Medical Disclaimer */}
                    <div className="mt-5 flex max-w-[470px] items-start gap-2 rounded-xl bg-[#f6f0ff] p-3 text-sm leading-5 text-[#494454]">
                        <FiShield size={17} className="mt-0.5 shrink-0 text-[#563b9c]" />

                        <p>
                            <span className="font-semibold">Medical Disclaimer:</span> AccioDoc facilitates appointments with registered independent practitioners and does not replace emergency
                            clinical facilities.
                        </p>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="mb-5 text-lg font-semibold text-[#211c31]">Quick Links</h3>

                    <ul className="space-y-3">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-[16px] text-[#55515f] transition-colors hover:text-[#563b9c]">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Specialties */}
                <div>
                    <h3 className="mb-5 text-lg font-semibold text-[#211c31]">Specialties</h3>

                    <ul className="space-y-3">
                        {specialties.map((specialty) => (
                            <li key={specialty}>
                                <Link href={`/doctors?specialty=${specialty.toLowerCase()}`} className="text-[16px] text-[#55515f] transition-colors hover:text-[#563b9c]">
                                    {specialty}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Patient Care */}
                <div>
                    <h3 className="mb-5 text-lg font-semibold text-[#211c31]">Patient Care</h3>

                    <ul className="space-y-3">
                        {patientCare.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-[16px] text-[#55515f] transition-colors hover:text-[#563b9c]">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Social Links */}
                    {/* Social Links */}
                    <div className="mt-5 flex items-center gap-2">
                        <Link
                            href="https://x.com"
                            target="_blank"
                            aria-label="X"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eaff] text-[#494454] transition-colors hover:bg-[#e8ddff]"
                        >
                            <FaXTwitter size={15} />
                        </Link>

                        <Link
                            href="https://linkedin.com"
                            target="_blank"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eaff] text-[#494454] transition-colors hover:bg-[#e8ddff]"
                        >
                            <FaLinkedinIn size={15} />
                        </Link>

                        <Link
                            href="https://instagram.com"
                            target="_blank"
                            aria-label="Instagram"
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f2eaff] text-[#494454] transition-colors hover:bg-[#e8ddff]"
                        >
                            <FaInstagram size={15} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="mt-12 flex flex-col gap-5 border-t border-[#eee8f7] pt-5 text-sm font-medium text-[#55515f] lg:flex-row lg:items-center lg:justify-between">
                <p className="text-center lg:text-left">© 2025 AccioDoc Inc. All rights reserved. Your Health, Just a Spell Away.</p>

                <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
                    <Link href="/privacy" className="transition-colors hover:text-[#563b9c]">
                        Privacy Policy
                    </Link>

                    <span className="text-[#c9c1d4]">•</span>

                    <Link href="/terms" className="transition-colors hover:text-[#563b9c]">
                        Terms of Service
                    </Link>

                    <span className="text-[#c9c1d4]">•</span>

                    <Link href="/hipaa" className="transition-colors hover:text-[#563b9c]">
                        HIPAA Security
                    </Link>
                </div>
            </div>
        </footer>
    );
}
