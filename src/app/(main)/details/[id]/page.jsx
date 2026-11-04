import { getDoctorByID } from "@/lib/data";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";
import { LuArrowRight, LuBadgeCheck, LuBuilding2, LuClock, LuLightbulb, LuMapPin, LuMoon, LuSun } from "react-icons/lu";

const DoctorDetailsPage = async ({ params }) => {
    const { id } = await params;

    // console.log(id);
    const doctor = await getDoctorByID(id);
    // console.log(doctor);

    return (
        <div>
            <main className="min-h-screen bg-linear-to-b from-[#f1eff7] via-[#f8f7fc] to-[#f8f7fc] px-4 py-4 text-[#1c1a2e] sm:px-6">
                <div className="mx-auto flex max-w-275 flex-col gap-5">
                    <Card shadow="sm" radius="lg" className="bg-white">
                        <Card className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                                {/* Left: avatar + info */}
                                <div className="flex flex-col gap-5 sm:flex-row">
                                    <div className="relative h-40 w-40 shrink-0 sm:h-48 sm:w-48">
                                        <Image alt={doctor.name} src={doctor.image} fill sizes="(min-width: 640px) 192px, 160px" className="rounded-3xl object-cover shadow-md" />

                                        <span className="absolute -bottom-2 -right-2 flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#1f4d3a] text-white">
                                            <LuBadgeCheck className="h-5 w-5" />
                                        </span>
                                    </div>

                                    <div className="flex flex-col justify-center gap-2">
                                        <div className="flex flex-wrap items-center">
                                            <div className="pt-2 font-medium text-[#1f4d3a]">Accepting New Patients AccioDoc Premier Fellow</div>
                                        </div>

                                        <h1 className="font-serif text-3xl font-bold leading-tight">
                                            {doctor.name} <span className="font-sans text-base font-medium text-[#4a3a7a]">{doctor.specialty}</span>
                                        </h1>

                                        <p className="text-[15px] text-slate-800">{doctor.description}</p>

                                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-600">
                                            <span className="flex items-center gap-1">
                                                <FaStar className="h-3.5 w-3.5 text-amber-500" />
                                                <b className="text-sm text-[#1c1a2e]">{doctor.rating}</b>
                                            </span>
                                            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
                                            <span className="flex items-center gap-1">
                                                <LuBuilding2 className="h-3.5 w-3.5 text-[#6b5aa0]" />
                                                {doctor.location}
                                            </span>
                                            <span className="hidden h-1 w-1 rounded-full bg-gray-300 sm:block" />
                                            <span className="flex items-center gap-1 text-[#1f4d3a]">
                                                <LuClock className="h-3.5 w-3.5" />
                                                Chamber Open Today
                                            </span>

                                        </div>
                                            <p className="font-bold text-2xl">{doctor.experience} of experience</p>
                                    </div>
                                </div>
                            </div>

                            <hr className="my-3 border-gray-200" />
                        </Card>
                    </Card>

                    <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[1fr_420px]">
                        <div className="flex flex-col gap-5">
                            {/* About */}
                            <Card shadow="sm" radius="lg" className="bg-white">
                                <Card className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                                    <div className="flex items-center justify-between">
                                        <h2 className="font-bold text-xl">About &amp; Clinical Philosophy</h2>
                                        <div size="sm" variant="flat" className={{ base: "bg-[#ece9f6] h-6", content: "text-[11px] text-[#4a3a7a]" }}>
                                            Evidence-Based
                                        </div>
                                    </div>

                                    <p className="text-[15px] leading-7 text-gray-700">
                                        <span className="font-bold">{doctor.name}</span> is an internationally trained Orthopedic Surgeon &amp; Traumatologist serving as a Lead Consultant at NITOR
                                        (National Institute of Traumatology and Orthopaedic Rehabilitation). With over 15 years of dedicated surgical practice, he is widely recognized for his
                                        precision in complex fracture reconstruction, minimally invasive joint arthroplasty, and athletic ligament preservation.
                                    </p>

                                    {/* Quote box */}
                                    <div className="rounded-xl bg-[#ece9f6] p-5">
                                        <div className="mb-2 flex items-center gap-3">
                                            <LuLightbulb className="h-5 w-5 text-[#4a3a7a]" />
                                            <h3 className="font-semibold">Patient-First Mobility Restoration</h3>
                                        </div>
                                        <p className="pl-8 text-[13px] leading-6 text-gray-600">
                                            &ldquo;Surgical intervention is the final milestone in joint preservation. My practice emphasizes personalized biomechanical rehab, sub-millimeter
                                            prosthesis alignment, and post-operative rapid mobilization protocols so patients return to pain-free independent living.&rdquo;
                                        </p>
                                    </div>
                                </Card>
                            </Card>
                        </div>

                        <Card shadow="sm" radius="lg" className="bg-white lg:sticky lg:top-4">
                            <Card className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                                {/* Top row */}
                                <div className="flex items-center justify-between">
                                    <div className=" h-6 font-bold">Fast-Track Scheduling</div>
                                    <span className="flex items-center gap-1.5 text-[11px] font-medium text-[#1f4d3a]">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#1f4d3a]" />
                                        Live Availability
                                    </span>
                                </div>

                                {/* Price */}
                                <div className="flex items-end justify-between">
                                    <p className="text-xs text-gray-600">
                                        <span className=" text-xl font-bold text-[#4a3a7a]">৳{doctor.fee}</span> / Consultation
                                    </p>
                                    <p className="text-[11px] font-medium text-gray-700">No Advance Charge</p>
                                </div>

                                {/* Visit mode */}
                                <div className="flex flex-col gap-2">
                                    <p className="flex items-center gap-1.5 text-[11px] text-gray-600">
                                        <LuMapPin className="h-3.5 w-3.5 text-[#6b5aa0]" />
                                        {doctor.hospital}
                                    </p>
                                </div>

                                {/* Date picker */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[13px] font-semibold">Select Chamber Date</p>
                                        <span className="text-[11px] font-medium text-[#4a3a7a]">May 2025</span>
                                    </div>
                                </div>

                                {/* slots */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <p className="flex items-center gap-2 text-[13px] font-semibold">
                                            <LuSun className="h-4 w-4 text-amber-500" />
                                            Morning Chamber ({doctor.availability[0]})
                                        </p>
                                    </div>
                                </div>

                                {/* Evening slots */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <p className="flex items-center gap-2 text-[13px] font-semibold">
                                            <LuMoon className="h-4 w-4 text-[#4a3a7a]" />
                                            Evening Chamber ({doctor.availability[1]})
                                        </p>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className="flex flex-col items-center gap-2">
                                    <Button fullWidth radius="full" size="lg" className="h-12 bg-[#4a3a7a] text-base font-medium text-white" endContent={<LuArrowRight className="h-4 w-4" />}>
                                        Book Appointment
                                    </Button>
                                    <p className="text-center text-[11px] text-gray-600">Pay at chamber desk upon arrival • Free cancellation up to 2 hours prior</p>
                                </div>

                                <hr className="border-gray-200" />
                            </Card>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DoctorDetailsPage;
