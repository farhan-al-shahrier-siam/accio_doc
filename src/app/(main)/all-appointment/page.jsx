import DoctorList from "@/components/all-appointment/DoctorList";
import Searchfield from "@/components/all-appointment/Searchfield";
import React from "react";
import { FiAward, FiShield, FiZap } from "react-icons/fi";

export const metadata = {
  title: "AccioDoc || All Appointments",
  description: "A Doctor Appointment Booking System.",
};

const AllAppointmentPage = () => {
    return (
        <div>
            <section className="bg-[#fcf7ff] px-5 py-12 md:px-8 lg:px-12">
                <div className="mx-auto max-w-7xl">
                    {/* Heading */}
                    <div className="mb-9">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e7dcff] px-4 py-1 text-[10px] font-semibold tracking-widest text-[#59449a]">
                            <FiZap size={13} />
                            OUR SPECIALISTS
                        </div>

                        <h2 className="font-serif text-3xl font-bold tracking-tight text-[#211a35] md:text-4xl">Find Your Perfect Specialist</h2>

                        <p className="mt-2 max-w-155 text-sm leading-6 text-[#625c6c] md:text-base">
                            Explore over 500+ board-certified medical doctors, clinical researchers, and department heads. Filter by specialty, real-time availability, and instant verified telehealth
                            or in-person visits.
                        </p>

                        {/* Trust Features */}
                        <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-[#454052]">
                            <div className="flex items-center gap-1.5">
                                <FiAward className="text-emerald-700" size={15} />
                                100% Board Certified
                            </div>

                            <div className="flex items-center gap-1.5">
                                <FiZap className="text-[#7357bd]" size={15} />
                                Instant Confirmation
                            </div>

                            <div className="flex items-center gap-1.5">
                                <FiShield className="text-[#7357bd]" size={15} />
                                HIPAA Secure Platform
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Searchfield></Searchfield>

            <DoctorList></DoctorList>
        </div>
    );
};

export default AllAppointmentPage;
