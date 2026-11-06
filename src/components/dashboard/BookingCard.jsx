import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FiCalendar, FiClock, FiEdit3, FiMapPin, FiRefreshCw, FiUser, FiVideo, FiXCircle } from "react-icons/fi";

const BookingCard = ({booking}) => {
    return (
        <Card key={booking.id} className="rounded-3xl border-none p-5 shadow-md md:p-7">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                {/* Doctor Info */}
                <div className="flex gap-5">
                    <div className="relative shrink-0">
                        <Image src={booking.doctorImage} height={400} width={300} alt={booking.doctor} className="h-24 w-24 rounded-2xl object-cover" />
                    </div>

                    <div>
                        {/* Doctor Name */}
                        <div className="flex flex-wrap items-center gap-2">
                            <h2 className="text-xl font-bold text-[#211a38]">{booking.doctor}</h2>

                            <Chip size="sm" className="bg-[#e8dcff] text-[#60479b]">
                                {booking.hospital}
                            </Chip>

                            <Chip size="sm" className="bg-[#8ff0c7] text-green-950">
                                ● Confirmed
                            </Chip>
                        </div>

                        {/* Date + Time */}
                        <div className="mt-4 flex flex-wrap gap-5 text-gray-700">
                            <div className="flex items-center gap-2">
                                <FiCalendar className="text-[#6249a2]" />
                                {booking.appointmentDate}
                            </div>

                            <div className="flex items-center gap-2">
                                <FiClock className="text-[#6249a2]" />
                                {booking.appointmentTime}
                            </div>
                        </div>

                        {/* Patient */}
                        <div className="mt-3 flex flex-wrap items-center gap-2 text-gray-600">
                            <FiUser />

                            <span>
                                Patient: <strong className="text-[#211a38]">{booking.name}</strong>
                            </span>

                            <span>•</span>

                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                    {booking.video && (
                        <Button radius="full" className="bg-[#006b4f] text-white" startContent={<FiVideo />}>
                            Join Video Call
                        </Button>
                    )}

                    <Button radius="full" className="bg-[#6b54aa] text-white" startContent={<FiEdit3 />}>
                        {booking.video ? "Update" : "Update Details"}
                    </Button>

                    {!booking.video && (
                        <Button radius="full" className="bg-[#f0e7ff] text-[#211a38]" startContent={<FiRefreshCw />}>
                            Reschedule
                        </Button>
                    )}

                    <Button isIconOnly radius="full" className="bg-[#f4ebff] text-gray-600">
                        <FiXCircle size={21} />
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;
