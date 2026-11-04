export const getDoctors = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/doctors`);
    const doctors = await res.json();
    return doctors;
};

export const getDoctorByID = async (id) => {
    const res = await fetch(`${process.env.SERVER_URL}/doctors/${id}`);
    const doctor = await res.json();
    return doctor;
};


