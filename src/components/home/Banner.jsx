import { FiCalendar, FiSearch, FiMapPin, FiBriefcase, FiArrowUpRight, FiCheckCircle, FiStar, FiZap } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";

const Banner = () => {
    return (
        <section className="relative overflow-hidden bg-[#fdf7ff] px-5 py-16 md:px-10 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-[1440px]">
                {/* Main Hero Content */}
                <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Left Content */}
                    <div className="relative z-10">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[#eee5ff] px-5 py-2 text-sm font-semibold tracking-wide text-[#59439a]">✦ WELCOME TO ACCIODOC</span>

                        <h1 className="mt-7 font-serif text-5xl font-bold leading-[1.15] tracking-tight text-[#201a32] md:text-6xl xl:text-[68px]">
                            Your Health, Just a <span className="font-normal italic text-[#60499f]">Spell Away.</span>
                        </h1>

                        <p className="mt-6 max-w-[690px] text-base leading-8 text-gray-600 md:text-lg">
                            Discover vetted healthcare specialists and secure your clinical appointment with seamless precision. Compassionate, premier medicine tailored around your schedule.
                        </p>

                        {/* CTA Buttons */}
                        <div className="mt-7 flex flex-wrap gap-4">
                            <a
                                href="/doctors"
                                className="inline-flex items-center gap-2 rounded-full bg-[#6853a6] px-7 py-3.5 font-semibold text-white shadow-md transition hover:bg-[#514087] hover:shadow-lg"
                            >
                                Find a Doctor
                                <FiCalendar size={19} />
                            </a>

                            <a href="/doctors" className="inline-flex items-center gap-2 rounded-full bg-[#eee5ff] px-7 py-3.5 font-semibold text-[#55418e] transition hover:bg-[#e3d6ff]">
                                Explore Specialists
                                <FiArrowUpRight size={20} />
                            </a>
                        </div>

                        {/* Statistics */}
                        <div className="mt-11 flex flex-wrap gap-x-10 gap-y-6">
                            <div className="flex items-center gap-2.5">
                                <FaCheckCircle className="text-xl text-emerald-700" />
                                <div>
                                    <h3 className="text-xl font-bold text-[#241d37]">500+</h3>
                                    <p className="text-sm text-gray-600">Verified Doctors</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <FiZap className="text-2xl text-[#60499f]" />
                                <div>
                                    <h3 className="text-xl font-bold text-[#241d37]">Instant</h3>
                                    <p className="text-sm text-gray-600">1-Click Booking</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <FiStar className="text-2xl fill-[#6853a6] text-[#6853a6]" />
                                <div>
                                    <h3 className="text-xl font-bold text-[#241d37]">4.9 / 5</h3>
                                    <p className="text-sm text-gray-600">Patient Trust</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mx-auto w-full max-w-[550px] lg:ml-auto">
                        <div className="relative h-[430px] overflow-hidden rounded-[40px] shadow-2xl md:h-[570px]">
                            <img
                                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1000&auto=format&fit=crop&q=85"
                                alt="Professional female doctor"
                                className="h-full w-full object-cover object-center"
                            />

                            {/* Image overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#32214b]/20 to-transparent" />

                            {/* Availability Badge */}
                            <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2.5 text-sm font-semibold text-emerald-700 shadow-lg backdrop-blur">
                                <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" />
                                Immediate Care Open
                            </div>

                            {/* Rating Badge */}
                            <div className="absolute right-5 top-5 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
                                <p className="text-sm font-semibold text-[#29213d]">Doctor Champions</p>
                                <div className="flex gap-0.5 text-[#6853a6]">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FiStar key={i} className="fill-current" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Appointment Card */}
                        <div className="absolute -bottom-6 left-1/2 flex w-[270px] -translate-x-1/2 items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-0 sm:translate-x-0">
                            <div className="rounded-xl bg-[#eee5ff] p-3 text-[#60499f]">
                                <FiCalendar size={25} />
                            </div>

                            <div>
                                <h3 className="font-semibold text-[#241d37]">Dr. Alistair Finch</h3>
                                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-emerald-700">
                                    <FiCheckCircle />
                                    Confirmed · 10:30 AM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Section */}
                <div className="relative z-20 mt-16 rounded-[22px] bg-white p-4 shadow-xl md:mt-20 md:p-7">
                    <form className="grid gap-4 lg:grid-cols-[1.35fr_1fr_1fr_195px]">
                        {/* Doctor Search */}
                        <div className="flex items-center gap-3 rounded-2xl bg-[#f7f1ff] px-4 py-3">
                            <FiSearch className="shrink-0 text-xl text-gray-600" />
                            <div className="w-full">
                                <label className="block text-xs font-medium text-gray-600">Doctor or Condition</label>
                            </div>
                        </div>

                        {/* Specialty */}
                        <div className="flex items-center gap-3 rounded-2xl bg-[#f7f1ff] px-4 py-3">
                            <FiBriefcase className="shrink-0 text-xl text-gray-600" />
                            <div className="w-full">
                                <label className="block text-xs font-medium text-gray-600">Specialty</label>
                                
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-3 rounded-2xl bg-[#f7f1ff] px-4 py-3">
                            <FiMapPin className="shrink-0 text-xl text-gray-600" />
                            <div className="w-full">
                                <label className="block text-xs font-medium text-gray-600">Location</label>
                                
                            </div>
                        </div>

                        {/* Search Button */}
                        <button
                            className="flex items-center justify-center gap-2 rounded-2xl bg-[#6853a6] px-6 py-4 font-semibold text-white shadow-md transition hover:bg-[#514087] hover:shadow-lg"
                        >
                            Search
                            <span>✦</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Banner;
