"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineLockClosed, HiOutlineLogin, HiOutlineShieldCheck, HiOutlineUserAdd, HiSparkles } from "react-icons/hi";

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleRegister = async (data) => {
        console.log("FORM DATA:", data);

        const { name, email, photo, password } = data;

        try {
            setLoading(true);

            const { data: res, error } = await authClient.signUp.email({
                name: name,
                email: email,
                password: password,
                image: photo,
                callbackURL: "/login",
            });

            // console.log("SIGN UP RESPONSE:", res);
            // console.log("SIGN UP ERROR:", error);

            if (error) {
                toast.error(error.message)
                return;
            }

            if (res) {
                toast.success("Sign up successful!")
                // eslint-disable-next-line react-hooks/immutability
                window.location.href = "/login";
            }
        } catch (error) {
            // console.error("SIGN UP ERROR:", error);
            toast.error("Something went wrong. Please try again.")
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
        toast.success("Sign up successful!")
    };

    return (
        <div className="min-h-screen bg-[#faf7ff] p-4 lg:p-8">
            <div className="mx-auto max-w-2xl">
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                    {/* Tabs */}
                    <div className="mx-auto flex w-fit gap-2 rounded-full bg-[#f4efff] p-1.5">
                        <Link href="/login" className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium text-gray-600">
                            <HiOutlineLogin />
                            Sign In
                        </Link>

                        <Link href="/register" className="flex items-center gap-2 rounded-full bg-[#62549f] px-6 py-2 text-sm font-semibold text-white">
                            <HiOutlineUserAdd />
                            Create Account
                        </Link>
                    </div>

                    {/* Heading */}
                    <div className="mt-8 text-center">
                        <h2 className="font-serif text-3xl font-bold text-[#1c1633]">Create your AccioDoc Account</h2>

                        <p className="mx-auto mt-2 max-w-sm text-sm text-gray-600">Create an account to access your dashboard and appointments.</p>
                    </div>

                    {/* Google Sign Up */}
                    <div className="mt-8">
                        <Button onClick={handleGoogleSignin} variant="outline" className="w-full bg-[#bda5e8] font-semibold text-white" type="button">
                            <FcGoogle size={20} />
                            Sign Up with Google
                        </Button>
                    </div>

                    {/* Divider */}
                    <div className="my-6 flex items-center gap-4 text-xs font-medium text-gray-500">
                        <hr className="flex-1 border-gray-200" />
                        OR CONTINUE WITH EMAIL
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    {/* Register Form */}
                    <form onSubmit={handleSubmit(handleRegister)}>
                        <div className="space-y-5">
                            {/* Name */}
                            <div>
                                <p className="p-1 text-sm font-bold">Name:</p>

                                <Input
                                    {...register("name", {
                                        required: "Name is required",
                                    })}
                                    label="Name"
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full"
                                />

                                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <p className="p-1 text-sm font-bold">Email:</p>

                                <Input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Enter a valid email address",
                                        },
                                    })}
                                    label="Email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="w-full"
                                />

                                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                            </div>

                            {/* Photo */}
                            <div>
                                <p className="p-1 text-sm font-bold">Photo URL:</p>

                                <Input
                                    {...register("photo", {
                                        required: "Photo URL is required",
                                    })}
                                    label="Photo URL"
                                    type="url"
                                    placeholder="Enter photo URL"
                                    className="w-full"
                                />

                                {errors.photo && <p className="mt-1 text-sm text-red-500">{errors.photo.message}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <div className="relative">
                                    <p className="p-1 text-sm font-bold">Password:</p>

                                    <Input
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: {
                                                value: 6,
                                                message: "Password must be at least 6 characters",
                                            },
                                            pattern: {
                                                value: /^(?=.*[A-Z])(?=.*[a-z]).+$/,
                                                message: "Password must contain at least one uppercase and one lowercase letter",
                                            },
                                        })}
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="w-full"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-13 z-10 -translate-y-1/2 text-gray-500"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                                    </button>

                                    {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password.message}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button type="submit" isLoading={loading} disabled={loading} className="mt-5 h-12 w-full bg-[#62549f] text-base font-semibold text-white" radius="full">
                            {loading ? "Creating Account..." : "Sign Up"}
                        </Button>
                    </form>

                    {/* Security Badges */}
                    <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-700">
                        <span className="flex items-center gap-1.5 rounded-full bg-[#f4efff] px-4 py-2">
                            <HiOutlineLockClosed />
                            256-Bit SSL Encrypted
                        </span>

                        <span className="flex items-center gap-1.5 rounded-full bg-[#f4efff] px-4 py-2">
                            <HiOutlineShieldCheck />
                            HIPAA Compliant Healthcare Portal
                        </span>

                        <span className="flex items-center gap-1.5 rounded-full bg-[#f4efff] px-4 py-2">
                            <HiSparkles />
                            AccioDoc Verified
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
