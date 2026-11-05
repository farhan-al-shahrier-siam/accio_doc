import React from "react";
import { Button, Card } from "@heroui/react";
import { FiEdit3, FiMail, FiUser, FiImage } from "react-icons/fi";
import EditModal from "./EditModal";

const ProfileCard = ({ name, email, photo, onUpdate }) => {
    return (
        <Card className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6 md:p-8">
            {/* Header */}
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-xl font-bold text-[#241f3d] sm:text-2xl">Profile Information</h2>

                    <p className="mt-1 text-sm text-gray-500">Manage your personal information</p>
                </div>
                <EditModal name={name} photo={photo}></EditModal>

            </div>

            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-[#f0e7ff] sm:h-32 sm:w-32">
                    <img src={photo || "/default-avatar.png"} alt={name || "Profile"} className="h-full w-full object-cover" />
                </div>
            </div>

            {/* Profile Information */}
            <div className="grid w-full grid-cols-1 gap-5">
                {/* Name */}
                <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-500">
                        <FiUser />
                        <span>Name</span>
                    </div>

                    <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-[#faf8ff] px-4 py-4 sm:px-6">
                        <p className="truncate text-lg text-gray-800 sm:text-xl">{name || "Not provided"}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-500">
                        <FiMail />
                        <span>Email</span>
                    </div>

                    <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-[#faf8ff] px-4 py-4 sm:px-6">
                        <p className="break-all text-base text-gray-800 sm:text-xl">{email || "Not provided"}</p>
                    </div>
                </div>

                {/* Photo URL */}
                <div className="min-w-0">
                    <div className="mb-2 flex items-center gap-2 text-lg font-semibold text-gray-500">
                        <FiImage />
                        <span>Photo URL</span>
                    </div>

                    <div className="w-full min-w-0 overflow-hidden rounded-2xl bg-[#faf8ff] px-4 py-4 sm:px-6">
                        <p className="break-all text-sm text-gray-800 sm:text-base">{photo || "No photo URL provided"}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default ProfileCard;
