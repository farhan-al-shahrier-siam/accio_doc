"use client";
import EditModal from "@/components/dashboard/EditModal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { FiCheck, FiChevronLeft, FiPlus } from "react-icons/fi";

const DashBoard = () => {
    const { data: session } = authClient.useSession();

    return (
        <div className="bg-[#fcf8ff]">
            <h2 className="font-serif text-center text-[38px] font-bold leading-tight text-[#211b36] p-4">Dashboard</h2>

            <section className="min-h-66 p-5">
                <div className="grid grid-cols-1 gap-5 lg:grid-cols-[295px_1fr]">
                    <div className="rounded-2xl bg-white p-6 shadow-md">
                        <div className="flex items-center gap-3">
                            <div className="relative">
                                <Image src={session?.user.image} height={90} width={90} alt={session?.user.name} className="h-20 w-20 rounded-full object-cover" />

                                <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-[#006b55] text-white">
                                    <FiCheck size={11} strokeWidth={3} />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-[17px] font-semibold text-[#211b36]">{session?.user.name}</h3>

                                <p className="text-[12px] font-medium text-[#665c8b]">ID #AC-8921</p>

                                <p className="text-[12px] text-gray-500">Primary Care Member</p>
                            </div>
                        </div>

                        <div className="mt-5 rounded-xl bg-[#f4edff] px-4 py-3">
                            <div className="flex items-center justify-between">
                                <span className="text-[11px] font-medium tracking-wide text-[#51466e]">CARE SCORE</span>

                                <span className="flex items-center gap-0.5 text-sm font-bold text-[#08745d]">
                                    <FiChevronLeft size={16} />
                                    98%
                                </span>
                            </div>

                            <div className="mt-2 h-7 w-full">
                                <svg viewBox="0 0 190 35" className="h-full w-full" fill="none" preserveAspectRatio="none">
                                    <path
                                        d="M2 28 C20 25, 32 21, 47 20 C61 19, 70 24, 82 21 C97 18, 108 12, 125 13 C143 14, 153 9, 166 9 C176 9, 184 8, 188 4"
                                        stroke="#5f4ba3"
                                        strokeWidth="2.2"
                                        strokeLinecap="round"
                                    />

                                    <circle cx="188" cy="4" r="3.5" fill="#08745d" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex min-h-55 flex-col justify-between rounded-2xl bg-white px-10 py-9 shadow-md lg:flex-row lg:items-center">
                        <div>
                            <div className="mb-3 flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.08em] text-[#5b4a99]">
                                <span>PATIENT SANCTUARY</span>

                                <span>•</span>
                            </div>

                            <h1 className="font-serif text-[38px] font-bold leading-tight text-[#211b36]">
                                Welcome back, {session?.user.name}
                                <span className="ml-2">✨</span>
                            </h1>

                            <p className="mt-3 max-w-162.5 text-[16px] leading-7 text-gray-600">
                                Here is an overview of your medical consultations, personalized therapy regimens, and upcoming visits.
                            </p>
                        </div>

                        <EditModal name={session?.user.name} photo={session?.user.image}></EditModal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DashBoard;
