"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input } from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { HiOutlineLockClosed, HiOutlineLogin, HiOutlineUserAdd, HiOutlineShieldCheck, HiSparkles } from "react-icons/hi";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleLogin = async (data) => {
        const { email, password } = data;
        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            callbackURL: "/",
        });
        if (res) {
            alert("Login successfull...");
        }
        if (error) {
            alert(error.message);
        }
    };

    const handleGoogleSignin = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="min-h-screen bg-[#faf7ff] p-4 lg:p-8">
            <div className="mx-auto  max-w-2xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                {/* Right panel */}
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                    {/* Tabs */}
                    <div className="mx-auto flex w-fit gap-2 rounded-full bg-[#f4efff] p-1.5">
                        <Link href={"/login"} className="flex items-center gap-2 rounded-full bg-[#62549f] px-6 py-2 text-sm font-semibold text-white">
                            <HiOutlineLogin /> Sign In
                        </Link>
                        <Link href={"/register"} className="flex items-center gap-2 rounded-full px-6 py-2 text-sm font-medium text-gray-600">
                            <HiOutlineUserAdd /> Create Account
                        </Link>
                    </div>

                    <div className="mt-8 text-center">
                        <h2 className="font-serif text-3xl font-bold text-[#1c1633]">Sign in to AccioDoc</h2>
                        <p className="mx-auto mt-2 max-w-sm text-sm text-gray-600">Enter your registered credentials to access your dashboard and appointments.</p>
                    </div>

                    <div className="mt-8">
                        <Button onClick={handleGoogleSignin} variant="outline" className="w-full text-white bg-[#bda5e8] font-semibold">
                            <FcGoogle />
                            Continue with Google
                        </Button>
                    </div>

                    <div className="my-6 flex items-center gap-4 text-xs font-medium text-gray-500">
                        <hr className="flex-1 border-gray-200" />
                        OR CONTINUE WITH EMAIL
                        <hr className="flex-1 border-gray-200" />
                    </div>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="space-y-5">
                            <div>
                                <p className="font-bold text-sm p-1">Email:</p>
                                <Input {...register("email", { required: "Email is required" })} label="Email Address" placeholder="name@example.com" className={"w-full"} />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <div className="relative">
                                    <p className="font-bold text-sm p-1">Password:</p>

                                    <Input
                                        {...register("password", {
                                            required: "Password is required",
                                        })}
                                        label="Password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter password"
                                        className="w-full"
                                    />

                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-12.5 z-10 -translate-y-1/2 text-gray-500"
                                        aria-label={showPassword ? "Hide password" : "Show password"}
                                    >
                                        {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                                    </button>

                                    {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                                </div>
                            </div>
                        </div>
                        <Button type="submit" className="mt-5 h-12 w-full bg-[#62549f] text-base font-semibold text-white" radius="full">
                            Sign In
                        </Button>
                    </form>

                    <p className="mt-6 text-center text-xs text-gray-600">
                        Don&apos;t have an AccioDoc account?{" "}
                        <Link href="/register" className="font-semibold text-[#62549f]">
                            Create an account
                        </Link>
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-3 text-xs font-medium text-gray-700">
                        <span className="flex items-center gap-1.5 rounded-full bg-[#f4efff] px-4 py-2">
                            <HiOutlineLockClosed /> 256-Bit SSL Encrypted
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-[#f4efff] px-4 py-2">
                            <HiOutlineShieldCheck /> HIPAA Compliant Healthcare Portal
                        </span>
                        <span className="flex items-center gap-1.5 rounded-full bg-[#f4efff] px-4 py-2">
                            <HiSparkles /> AccioDoc Verified
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
