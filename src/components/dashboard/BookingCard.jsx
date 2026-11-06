import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa6";
import { FiCalendar, FiClock, FiEdit3, FiRefreshCw, FiUser, FiVideo, FiXCircle } from "react-icons/fi";
import EditBookingModal from "./EditBookingModal";
import DeleteBTN from "./DeleteBTN";

const BookingCard = ({ booking }) => {
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
                            <span>
                                Phone: <strong className="text-[#211a38]">{booking.phone}</strong>
                            </span>

                            <span>•</span>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-3">
                    <EditBookingModal _id={booking._id} name={booking.name} phone={booking.phone} date={booking.appointmentDate} time={booking.appointmentTime}  ></EditBookingModal>

                    <DeleteBTN _id={booking._id} doctor={booking.doctor}></DeleteBTN>
                </div>
            </div>
        </Card>
    );
};

export default BookingCard;
