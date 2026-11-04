import { FiShield, FiLock, FiList } from "react-icons/fi";
import { LuHand, LuBrainCog } from "react-icons/lu";

const features = [
    {
        icon: FiShield,
        title: "Verified Doctors",
        description: "Rigorous credential authentication, license audits, and peer performance tracking for every registered physician.",
    },
    {
        icon: LuHand,
        title: "Easy 1-Click Booking",
        description: "Instant live slot synchronization. Reserve an in-person or telehealth appointment in fewer than three simple taps.",
    },
    {
        icon: FiLock,
        title: "Secure Patient Data",
        description: "HIPAA-compliant architectural encryption safeguarding your medical history, notes, and digital payment data.",
    },
    {
        icon: LuBrainCog,
        title: "Personalized Care",
        description: "Intelligent symptom mapping matches you with specialists aligned to your clinical requirements and insurance coverage.",
    },
];

const steps = [
    {
        title: "Find Your Doctor",
        description: "Filter by clinical discipline, geographical proximity, user ratings, or insurance provider in seconds.",
    },
    {
        title: "Choose Your Appointment",
        description: "Select an in-person hospital consult or instant secure virtual video appointment that suits your day.",
    },
    {
        title: "Get The Care You Need",
        description: "Receive automated SMS reminders, digital prescription delivery, and comprehensive follow-up guidance.",
    },
];

export default function WhyHowSection() {
    return (
        <section className="w-full">
            {/* Why Choose AccioDoc */}
            <div className="bg-[#fcf7ff] px-5 py-12 md:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    {/* Heading */}
                    <div className="mb-10 text-center">
                        <div className="mb-2 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-[#59449e]">
                            <FiShield size={15} />
                            <span>The AccioDoc Standard</span>
                        </div>

                        <h2 className="font-serif text-3xl font-bold text-[#211b35] md:text-4xl">Why Thousands Choose AccioDoc</h2>

                        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-gray-600 md:text-base">
                            Clinical rigor married with effortless scheduling. We empower your health journey every step of the way.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;

                            return (
                                <div key={index} className="rounded-2xl border border-[#f1ebf5] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9ddff] text-[#291b50]">
                                        <Icon size={23} />
                                    </div>

                                    <h3 className="mb-1.5 text-lg font-semibold text-[#211b35]">{feature.title}</h3>

                                    <p className="text-sm leading-[1.55rem] text-gray-600">{feature.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* How AccioDoc Works */}
            <div className="bg-[#f6f0ff] px-5 py-12 md:px-8 lg:px-10">
                <div className="mx-auto max-w-7xl">
                    {/* Heading */}
                    <div className="mb-10 text-center">
                        <div className="mb-2 flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wide text-[#59449e]">
                            <FiList size={15} />
                            <span>Effortless Sequence</span>
                        </div>

                        <h2 className="font-serif text-3xl font-bold text-[#211b35] md:text-4xl">How AccioDoc Works</h2>

                        <p className="mt-2 text-sm text-gray-600 md:text-base">Connecting with leading medical practitioners is as quick and clear as magic.</p>
                    </div>

                    {/* Steps Cards */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center rounded-2xl border border-[#f1ebf5] bg-white px-6 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="mb-4 flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[#6c56ac] text-lg font-semibold text-white shadow-md">{index + 1}</div>

                                <h3 className="mb-1 text-xl font-normal text-[#211b35] font-serif md:text-2xl">{step.title}</h3>

                                <p className="max-w-md text-sm leading-relaxed text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
