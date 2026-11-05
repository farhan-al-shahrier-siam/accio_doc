export const getDoctors = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);
    const doctors = await res.json();
    return doctors;
};

export const getDoctorByID = async (id) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`);
    const doctor = await res.json();
    return doctor;
};

export const getDoctorsByName = async (name) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/search?name=${name}`
    );

    const data = await res.json();

    return data;
};


