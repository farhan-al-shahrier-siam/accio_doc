import React from "react";
import { getBookingsByID } from "@/lib/data";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import BookingCard from "./BookingCard";

const MyBookings = async () => {

    const session = await auth.api.getSession({
            headers: await headers(),
        });

    const myBookings = await getBookingsByID(session.user.id);
    // console.log(myBookings);
    
    return (
        <div className="bg-[#fcf6ff] p-4 md:p-8">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-[#211a38]">My Bookings ✨</h1>

                <p className="text-gray-600">Review scheduled clinical sessions, manage dates, or launch telehealth.</p>
            </div>
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between"></div>

            <div className="space-y-6">
                {myBookings.length > 0 ? myBookings.map((booking) => (
                    <BookingCard booking={booking} key={booking._id}></BookingCard>
                )) : <div className="font-bold text-4xl text-center p-8"> You have no bookings </div>}
            </div>
        </div>
    );
};

export default MyBookings;
