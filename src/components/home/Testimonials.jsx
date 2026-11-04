import Link from "next/link";
import { FaQuoteLeft } from "react-icons/fa6";
import { FiCalendar, FiStar } from "react-icons/fi";

const reviews = [
    {
        name: "Evelyn Reed",
        role: "Cardiology Patient · Brooklyn",
        image: "https://i.pravatar.cc/100?img=47",
        review: "Finding a cardiologist who took my insurance and had open slots within 48 hours used to take weeks of phone tag. AccioDoc booked me in literally two minutes.",
    },
    {
        name: "Julian Hayes",
        role: "Parent & Telehealth User",
        image: "https://i.pravatar.cc/100?img=12",
        review: "The telehealth experience with Dr. Sterling was seamless. The video room launched immediately inside my browser, and my follow-up prescription was already at my pharmacy.",
    },
    {
        name: "Maya Patel",
        role: "Dermatology Patient · Queens",
        image: "https://i.pravatar.cc/100?img=44",
        review: "Clear pricing upfront with zero hidden fees. Dr. Thorne listened with such empathy and solved a chronic skin issue I had battled for years. A truly magical platform.",
    },
];

const Testimonials = () => {
    return (
        <section className="bg-[#fdf7ff] px-5 py-16 md:px-10 lg:px-16">
            <div className="mx-auto max-w-[1440px]">
                {/* Section Heading */}
                <div className="mb-10 text-center">
                    <p className="mb-2 flex items-center justify-center gap-2 text-sm font-semibold tracking-wide text-[#60499f]">
                        <FaQuoteLeft />
                        REAL EXPERIENCES
                    </p>

                    <h2 className="font-serif text-3xl font-bold text-[#201a32] md:text-4xl">Stories of Better Health</h2>

                    <p className="mt-3 text-sm leading-6 text-gray-600 md:text-base">See how our platform simplifies care coordination for people from all walks of life.</p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="flex flex-col justify-between rounded-2xl bg-[#f5effd] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                            <div>
                                {/* Stars */}
                                <div className="mb-3 flex gap-0.5 text-lg text-[#6853a6]">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FiStar key={star} className="fill-current" />
                                    ))}
                                </div>

                                {/* Review */}
                                <p className="text-[15px] italic leading-[1.65] text-[#29213d]">{review.review}</p>
                            </div>

                            {/* User Info */}
                            <div className="mt-7 flex items-center gap-3 border-t border-[#e7ddf5] pt-3">
                                <img src={review.image} alt={review.name} className="h-10 w-10 rounded-full border-2 border-white object-cover" />

                                <div>
                                    <h3 className="text-sm font-semibold text-[#201a32]">{review.name}</h3>

                                    <p className="mt-0.5 text-xs text-gray-600">{review.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call To Action */}
                <div className="relative mt-10 overflow-hidden rounded-[30px] bg-[#e9ddff] px-6 py-12 text-center shadow-xl md:px-12 md:py-10">
                    {/* Decorative Gradient Circles */}
                    <div className="absolute -left-20 -top-24 h-64 w-64 rounded-full bg-purple-300/20 blur-3xl" />

                    {/* Content */}
                    <div className="relative z-10 mx-auto max-w-2xl">
                        <div className="mb-3 flex justify-center text-3xl text-[#60499f]">✣</div>

                        <h2 className="font-serif text-3xl font-bold leading-tight text-[#241544] md:text-4xl lg:text-[42px]">Your Health Deserves the Best Care.</h2>

                        <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-[#514477] md:text-base">
                            Take the first step towards better healthcare today. Search hundreds of accredited doctors and schedule within minutes.
                        </p>

                        <Link
                            href="/all-appointment"
                            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#6853a6] px-9 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#514087]"
                        >
                            Book an Appointment
                            <FiCalendar size={19} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
