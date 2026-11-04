import { Card, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaCheck } from "react-icons/fa";
import { FiMapPin, FiArrowRight } from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi2";

export default function DoctorCard({ doctor }) {
    const { name, specialty, hospital, image, rating, experience, location, fee, availability, _id } = doctor;

    return (
        <Card shadow="sm" radius="lg" className="w-full border border-transparent bg-white p-2 space-y-4">
            <Card className="rounded-2xl border border-white bg-white p-4 shadow-sm">
                {/* Header */}
                <div className="flex items-start gap-3">
                    <div className="relative shrink-0">
                        <Image src={image} alt={name} height={400} width={300} className="h-30 fit rounded-full w-30" />
                        <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-emerald-700 text-white">
                            <FaCheck className="h-2.5 w-2.5" />
                        </span>
                    </div>

                    <div className="min-w-0 pt-1">
                        <h3 className="flex items-center gap-1.5 text-xl font-semibold text-slate-900">
                            <span className="truncate">{name}</span>
                            <HiOutlineSparkles className="h-4 w-4 shrink-0 text-indigo-300" />
                        </h3>
                        <p className="text-[15px] font-medium text-[#4b3f9e]">{specialty}</p>
                        <p className="truncate text-sm text-slate-600">{hospital}</p>
                    </div>
                </div>

                {/* Rating + experience */}
                <div className="flex items-center justify-between rounded-lg bg-[#f1effa] px-3 py-2 text-sm">
                    <span className="flex items-center gap-1.5 font-semibold text-slate-900">
                        <FaStar className="h-3.5 w-3.5 text-orange-400" />
                        {rating}
                    </span>
                    <span className="text-slate-600">{experience} exp.</span>
                </div>

                {/* Location + fee */}
                <div>
                    <div className="flex items-center justify-between gap-2">
                        <span className="flex min-w-0 items-center gap-1.5 text-sm text-slate-600">
                            <FiMapPin className="h-4 w-4 shrink-0" />
                            <span className="truncate">{location}</span>
                        </span>
                        <span className="shrink-0 text-slate-500">
                            <span className="text-xl font-bold text-slate-900">৳{fee}</span> <span className="text-sm">/ consult</span>
                        </span>
                    </div>
                    <div className=" text-green-600 font-bold rounded-full">Available Today</div>
                </div>

                {/* Slots */}
                <div>
                    <p className="mb-2 text-xs font-medium tracking-wider text-slate-600">FAST-BOOK SLOTS</p>
                    <div className="flex justify-between">
                        <Button variant="flat" className="h-10 min-w-0 bg-[#f1effa] p-3 text-sm font-medium text-slate-800 data-[hover=true]:bg-[#e4e0f6]">
                            {availability[0]}
                        </Button>
                        <Button variant="flat" className="h-10 min-w-0  bg-[#f1effa] p-3 text-sm font-medium text-slate-800 data-[hover=true]:bg-[#e4e0f6]">
                            {availability[1]}
                        </Button>
                    </div>
                </div>

                {/* CTA */}
                <Link href={`/details/${_id}`}>
                <Button
                    fullWidth
                    radius="full"
                    size="lg"
                    className="bg-[#62559f] text-base font-semibold text-white shadow-md data-[hover=true]:bg-[#51458a]"
                >
                    View Details
                    <FiArrowRight className="h-4 w-4" />
                </Button>
                </Link>
            </Card>
        </Card>
    );
}
