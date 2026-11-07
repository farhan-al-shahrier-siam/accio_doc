import { headers } from "next/headers";
import { auth } from "./auth";

const getTokenFunc = async () => {
    const { token } = await auth.api.getToken({
        headers: await headers(),
    });
    return token;
};

export const getDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const doctors = await res.json();
    return doctors;
};

export const getDoctorByID = async (id) => {
    const token = await getTokenFunc();
    // console.log(token);

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const doctor = await res.json();
    return doctor;
};

export const getDoctorsByName = async (name) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/search?name=${name}`);

    const data = await res.json();

    return data;
};

export const getBookingsByID = async (id) => {
    const token = await getTokenFunc();

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${id}`, {
        headers: {
            authorization: `Bearer ${token}`,
        },
    });
    const data = await res.json();
    return data;
};
