import { Skeleton } from "@heroui/react";
import DoctorCard from "./DoctorCard";
import { getDoctors } from "@/lib/data";

export default async function DoctorList() {

    const doctors = await getDoctors();
  
  return (
    <section className="grid grid-cols-1 gap-6 bg-[#f8f7fc] p-6 md:grid-cols-2 xl:grid-cols-3">
      {doctors.map((doctor) => (
            <DoctorCard
              key={doctor._id}
              doctor={doctor}
            />
          ))}
    </section>
  );
}