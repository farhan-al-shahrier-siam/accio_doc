import { getDoctors } from "@/lib/data";
import { Card, Button, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaCheckCircle, FaStar } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { FiBriefcase, FiMapPin } from "react-icons/fi";

const TopThreeDoctors = async () => {
    const doctors = await getDoctors();
    // console.log(doctors);

    // Get the 3 highest-rated doctors
    const topDoctors = [...doctors].sort((a, b) => Number(b.rating) - Number(a.rating)).slice(0, 3);

    return (
        <section className="bg-[#f7f2ff] px-5 py-16 md:px-8 lg:px-12">
            <div className="mx-auto max-w-7xl">
                {/* Section Heading */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-sm font-semibold tracking-wider text-[#604ca5]">ACCREDITED CARE</p>

                    <h2 className="mb-3 font-serif text-3xl font-bold text-[#211a35] md:text-4xl lg:text-[40px]">Meet Our Trusted Specialists</h2>

                    <p className="mx-auto max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
                        Book consultations with renowned clinicians with validated medical board credentials and patient satisfaction.
                    </p>
                </div>

                {/* Doctor Cards */}
                {topDoctors.length > 0 ? (
                    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
                        {topDoctors.map((doctor) => (
                            <Card key={doctor._id || doctor.id} shadow="sm" className="rounded-2xl border border-white bg-white p-0">
                                <Card className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                                    {/* Doctor Image */}
                                    <div className="relative mb-4 h-64 overflow-hidden rounded-xl bg-gray-100">
                                        {doctor.image ? (
                                            <Image
                                                src={doctor.image}
                                                alt={doctor.name}
                                                height={400}
                                                width={300}
                                                className=" w-full object-cover transition-transform duration-500 hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center text-gray-400">
                                                <FaUserDoctor size={65} />
                                            </div>
                                        )}
                                    </div>

                                    {/* Doctor Information */}
                                    <div className="mb-3">
                                        <div className="flex items-center justify-between gap-2">
                                            <h3 className="text-xl font-semibold text-[#211a35]">{doctor.name}</h3>
                                            <span className="shrink-0 rounded-full bg-emerald-100 p-2 text-emerald-600" title="Verified Doctor">
                                                <FaCheckCircle size={17} />
                                            </span>
                                        </div>

                                        <p className="mt-1 text-sm text-[#604ca5]">
                                            {doctor.specialization}
                                            {doctor.hospital && ` · ${doctor.hospital}`}
                                        </p>
                                    </div>

                                    {/* Experience & Location */}
                                    <div className="mb-3 flex items-center justify-between gap-2 text-sm text-gray-600">
                                        <div className="flex items-center gap-1.5">
                                            <FiBriefcase className="text-[#7158b1]" />
                                            {doctor.experience} Exp.
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <FiMapPin className="text-[#7158b1]" />
                                            {doctor.location}
                                        </div>
                                    </div>

                                    <div className="mb-5 border-t border-[#eee8f7]" />

                                    {/* Consultation Fee & Button */}
                                    <div className="flex items-center justify-between gap-3">
                                        <div>
                                            <p className="text-xs text-gray-600">Consultation</p>
                                            <p className="mt-1 text-xl font-bold text-[#211a35]">৳{doctor.fee}</p>
                                        </div>

                                        <Link href={`/details/${doctor._id}`}>
                                            <Button className="rounded-full bg-[#6953a8] px-5 font-semibold text-white transition-colors hover:bg-[#514087]" endContent={<FaArrowRight size={13} />}>
                                                View Details
                                            </Button>
                                        </Link>
                                    </div>
                                </Card>{" "}
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 text-center text-gray-500">No specialists available right now.</div>
                )}
            </div>
        </section>
    );
};

export default TopThreeDoctors;
