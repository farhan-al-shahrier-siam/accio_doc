export const getDoctors = async () => {
    const res = await fetch(`${process.env.SERVER_URL}/doctors`);
    const doctors = await res.json();
    return doctors;
};
