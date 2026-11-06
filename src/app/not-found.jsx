import Link from "next/link";
import { FiHome, FiActivity } from "react-icons/fi";

const NotFound = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#fcf8ff] px-5 py-10 text-[#211b36]">
            <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-5xl flex-col items-center justify-center">
                {/* Top Error Badge */}
                <div className="mb-8 rounded-full bg-[#f2eaff] px-5 py-2 text-sm font-medium text-[#59428f] shadow-sm">✨ Error 404 • Page Wandered Off •</div>

                {/* Illustration */}
                <div className="relative mb-8 h-77.5 w-125 max-w-full">
                    {/* Soft purple glow */}
                    <div className="absolute left-1/2 top-23.75 h-37.5 w-87.5 -translate-x-1/2 rounded-[50%] bg-[#eee4ff] opacity-80 blur-[1px]" />

                    {/* Big faded 404 */}
                    <div className="absolute left-1/2 top-25 -translate-x-1/2 text-[190px] font-bold leading-none tracking-[-20px] text-[#f2eaff]">404</div>

                    {/* Document */}
                    <div className="absolute left-1/2 top-6.25 z-20 h-36.25 w-26.25 -translate-x-1/2 rotate-[-7deg] rounded-xl bg-white p-4 shadow-md">
                        {/* Plus */}
                        <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 rotate-[7deg] items-center justify-center rounded-md bg-[#6048a0] text-xl font-bold text-white">+</div>

                        {/* Lines */}
                        <div className="mt-3 space-y-2">
                            <div className="h-2 rounded-full bg-[#e8ddff]" />
                            <div className="h-2 w-[85%] rounded-full bg-[#e8ddff]" />
                            <div className="h-2 w-[90%] rounded-full bg-[#e8ddff]" />
                            <div className="h-2 w-[72%] rounded-full bg-[#e8ddff]" />
                        </div>

                        {/* Question mark */}
                        <div className="absolute bottom-5 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-[#f1e9ff] text-sm font-bold text-[#6048a0]">?</div>
                    </div>

                    {/* Stethoscope */}
                    <div className="absolute left-1/2 top-11.25 z-30 h-45 w-65 -translate-x-1/2">
                        {/* Left tube */}
                        <div className="absolute left-6.25 top-0 h-28.75 w-18.75 rounded-bl-[70px] rounded-br-[70px] border-b-[7px] border-l-[7px] border-[#6048a0]" />

                        {/* Right tube */}
                        <div className="absolute right-6.25 top-3.75 h-26.25 w-17.5 rounded-bl-[60px] rounded-br-[60px] border-b-[7px] border-r-[7px] border-[#6048a0]" />

                        {/* Connecting tube */}
                        <div className="absolute left-16.25 top-26.25 h-15 w-33.75 rounded-b-[70px] border-b-[7px] border-[#6048a0]" />

                        {/* Chest piece */}
                        <div className="absolute bottom-4.5 left-1/2 h-7 w-7 -translate-x-1/2 rounded-full bg-[#6048a0] shadow-[0_0_0_7px_#eee4ff]" />
                    </div>

                    {/* Sparkles */}
                    <span className="absolute left-26.25 top-26.25 text-2xl text-[#6048a0]">+</span>

                    <span className="absolute left-17.5 top-41.25 text-2xl text-[#6048a0]">✦</span>

                    <span className="absolute right-26.25 top-28.75 text-3xl text-[#008866]">✦</span>

                    <span className="absolute right-16.25 top-51.25 text-2xl text-[#6048a0]">✦</span>

                    <span className="absolute right-17.5 top-33.75 text-xl text-[#6048a0]">+</span>
                </div>

                {/* Heading */}
                <h1 className="text-center font-serif text-[42px] font-bold leading-tight tracking-[-1.5px] text-[#211b36] md:text-[46px]">Even the Best Spells Can&apos;t Locate This Page</h1>

                {/* Description */}
                <p className="mt-4 max-w-170 text-center text-[18px] leading-8 text-[#5d566c]">
                    The practitioner profile, consultation slot, or clinical record you are searching for might have been updated, rescheduled, or temporarily taken off-duty.
                    <br />
                    Let&apos;s guide you safely back.
                </p>

                {/* Navigation Buttons */}
                <div className="mt-7 flex flex-wrap items-center justify-center gap-5">
                    <Link href="/" className="flex items-center gap-2 rounded-full bg-[#584097] px-8 py-3.5 text-[17px] font-semibold text-white shadow-sm transition hover:bg-[#493583]">
                        <FiHome size={19} />
                        Return to Homepage
                        <span className="sr-only">Return to Homepage</span>
                    </Link>

                    <Link href="/all-appointment" className="flex items-center gap-2 rounded-full bg-[#f0e7ff] px-8 py-3.5 text-[17px] font-semibold text-[#574095] transition hover:bg-[#e7dbff]">
                        <FiActivity size={19} />
                        Browse All Specialists
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default NotFound;
