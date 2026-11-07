"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";

import { Button, Input, Label, Modal, TextField } from "@heroui/react";

import { LuArrowRight, LuCalendarDays, LuCalendarCheck, LuX, LuUser, LuMail, LuPhone } from "react-icons/lu";
import toast from "react-hot-toast";

const BookingModal = ({ doctor }) => {
    const { data: session } = authClient.useSession();

    // console.log(session);

    const { name, image, hospital, availability, fee } = doctor;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        values: {
            name: session?.user?.name || "",
            email: session?.user?.email || "",
            phone: "",
            gender: "Female",
            appointmentDate: "",
            appointmentTime: "",

        },
    });

    const onSubmit = async (data) => {
        const bookingData = {
            ...data,
            doctor: name,
            doctorImage: image,
            hospital: hospital,
            userID: session?.user?.id,
        };

        // console.log("Booking Data:", bookingData);
        const {data: tokenData} = await authClient.token()

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(bookingData)
        })
        const result = res.json();

        toast.success('Appointment booked successfully!')


    };

    return (
        <Modal>
            <Button fullWidth radius="full" size="lg" className="h-12 bg-[#4a3a7a] text-base font-medium text-white shadow-md hover:bg-[#3c2e67]">
                Book Appointment
                <LuArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Modal.Backdrop className="bg-black/50 backdrop-blur-sm">
                <Modal.Container placement="auto">
                    <Modal.Dialog className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
                        {/* Header */}
                        <Modal.Header className="flex items-center justify-between border-b border-gray-100 px-6 py-5 sm:px-7">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#eee5ff] text-[#4a3a7a]">
                                    <LuCalendarDays size={23} />
                                </div>

                                <div>
                                    <Modal.Heading className="text-lg font-bold text-[#252039] sm:text-xl">Confirm Appointment Booking</Modal.Heading>
                                </div>
                            </div>

                            <Modal.CloseTrigger className="rounded-full bg-[#f6f1ff] p-2 text-gray-600 hover:bg-[#eee5ff]">
                                <LuX size={21} />
                            </Modal.CloseTrigger>
                        </Modal.Header>

                        {/* Body */}
                        <Modal.Body className="max-h-[75vh] overflow-y-auto p-5 sm:p-7">
                            {/* Doctor Information */}
                            <div className="mb-7 flex items-center gap-4 rounded-2xl bg-[#f6f0ff] p-4">
                                <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-gray-200">
                                    <img src={image} alt={name} className="h-full w-full object-cover" />
                                </div>

                                <div className="min-w-0 flex-1">
                                    <h3 className="text-lg font-bold text-[#252039]">{name}</h3>

                                    <p className="truncate text-sm text-gray-600">{hospital}</p>

                                    <div className="mt-1.5 flex flex-wrap items-center gap-2">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4a3a7a] px-3 py-1 text-xs font-medium text-white">
                                            <LuCalendarCheck size={13} />
                                            {availability[0]} & {availability[1]}
                                        </span>

                                        <span className="rounded-full bg-[#91f3cb] px-3 py-1 text-xs font-medium text-[#145c43]">In-Person Visit</span>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form id="booking-form" onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
                                {/* Patient Name */}
                                <TextField defaultValue={session?.user?.name} name="name" className="w-full">
                                    <Label className="mb-1.5 block text-sm font-semibold text-[#252039]">Patient Full Name</Label>

                                    <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-100 px-4 shadow-sm focus-within:border-[#6856f5]">
                                        <LuUser className="text-gray-500" size={20} />

                                        <Input
                                            {...register("name", {
                                                required: "Name is required",
                                            })}
                                            placeholder="Enter your full name"
                                            className="w-full border-0 bg-transparent text-base outline-none"
                                        />
                                    </div>

                                    {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                                </TextField>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <TextField defaultValue={session?.user?.email} name="email" className="w-full">
                                        <Label className="mb-1.5 block text-sm font-semibold text-[#252039]">Email Address</Label>

                                        <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-100 px-4 shadow-sm focus-within:border-[#6856f5]">
                                            <LuMail className="shrink-0 text-gray-500" size={20} />

                                            <Input
                                                type="email"
                                                {...register("email", {
                                                    required: "Email is required",
                                                })}
                                                placeholder="Enter your email"
                                                className="w-full border-0 bg-transparent text-sm outline-none"
                                            />
                                        </div>

                                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                                    </TextField>

                                    <TextField name="phone" className="w-full">
                                        <Label className="mb-1.5 block text-sm font-semibold text-[#252039]">Phone Number</Label>

                                        <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-100 px-4 shadow-sm focus-within:border-[#6856f5]">
                                            <LuPhone className="shrink-0 text-gray-500" size={20} />

                                            <Input
                                                type="tel"
                                                {...register("phone", {
                                                    required: "Phone number is required",
                                                })}
                                                placeholder="+880 1XXX-XXXXXX"
                                                className="w-full border-0 bg-transparent text-sm outline-none"
                                            />
                                        </div>

                                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                                    </TextField>
                                </div>
                                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                                    <TextField name="appointmentDate" className="w-full">
                                        <Label className="mb-1.5 block text-sm font-semibold text-[#252039]">Appointment Date</Label>

                                        <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-100 px-4 shadow-sm focus-within:border-[#6856f5]">
                                            <LuMail className="shrink-0 text-gray-500" size={20} />

                                            <Input
                                                type="text"
                                                {...register("appointmentDate", {
                                                    required: "Date is required",
                                                })}
                                                placeholder="Enter date"
                                                className="w-full border-0 bg-transparent text-sm outline-none"
                                            />
                                        </div>

                                        {errors.appointmentDate && <p className="mt-1 text-xs text-red-500">{errors.appointmentDate.message}</p>}
                                    </TextField>

                                    <TextField name="appointmentTime" className="w-full">
                                        <Label className="mb-1.5 block text-sm font-semibold text-[#252039]">Appointment Time</Label>

                                        <div className="flex h-14 items-center gap-3 rounded-xl border border-gray-100 px-4 shadow-sm focus-within:border-[#6856f5]">
                                            <LuPhone className="shrink-0 text-gray-500" size={20} />

                                            <Input
                                                type="text"
                                                {...register("appointmentTime", {
                                                    required: "Time is required",
                                                })}
                                                placeholder="Enter time"
                                                className="w-full border-0 bg-transparent text-sm outline-none"
                                            />
                                        </div>

                                        {errors.appointmentTime && <p className="mt-1 text-xs text-red-500">{errors.appointmentTime.message}</p>}
                                    </TextField>
                                </div>

                                <div>
                                    <Label className="mb-2 block text-sm font-semibold text-[#252039]">Gender</Label>

                                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                                        {["Female", "Male", "Other / Prefer not to say"].map((gender, index) => (
                                            <label key={gender} className="flex cursor-pointer items-center gap-2 text-sm text-[#302b43]">
                                                <input
                                                    type="radio"
                                                    value={gender}
                                                    {...register("gender", {
                                                        required: true,
                                                    })}
                                                    className="h-4.75 w-4.75 accent-[#4a3a7a]"
                                                />
                                                {gender}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </form>
                        </Modal.Body>

                        <Modal.Footer className="flex flex-row items-center justify-end gap-4 border-t border-[#eee5ff] px-5 py-4 sm:px-7">
                            <Button slot="close" variant="ghost" className="font-semibold text-gray-600">
                                Cancel
                            </Button>

                            <Button type="submit" slot={"close"} form="booking-form" className="h-12 rounded-full bg-[#4a3a7a] px-6 font-semibold text-white shadow-md hover:bg-[#3c2e67] sm:px-8">
                                Confirm Booking (৳{fee})
                                <LuArrowRight className="ml-2" size={18} />
                            </Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
};

export default BookingModal;
