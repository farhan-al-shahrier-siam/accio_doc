"use client"
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";

const EditBookingModal = ({_id, name, phone, date, time}) => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

    const handleUpdateAppointment = async (data)=>{
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${_id}` , {
            method: "PATCH",
            headers:{
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        const result = await res.json()
        
    }

    return (
        <div>
            <Modal>
                <Button radius="full" className="bg-[#6b54aa] text-white" variant="secondary">
                    <FiEdit3 />
                    Update Appointment
                </Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Heading>Update Appointment</Modal.Heading>
                                <p className="mt-1.5 text-sm leading-5 text-muted">Fill out the form below and press save changes to update your appointment.</p>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleSubmit(handleUpdateAppointment)} className="flex flex-col gap-4">
                                        <TextField defaultValue={name} className="w-full" type="text" variant="secondary">
                                            <Label>Patient Name:</Label>
                                            <Input {...register("name", { required: "Name is required" })} placeholder="Enter your name" />
                                        </TextField>
                                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                                        <TextField defaultValue={phone} className="w-full" type="tel" variant="secondary">
                                            <Label>Phone:</Label>
                                            <Input {...register("phone", { required: "Phone is required" })} placeholder="Enter your phone number" />
                                        </TextField>
                                        {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
                                        <TextField defaultValue={date} className="w-full" type="text" variant="secondary">
                                            <Label>Appointment Date:</Label>
                                            <Input {...register("appointmentDate", { required: "Appointment Date is required" })} placeholder="Enter  date" />
                                        </TextField>
                                        {errors.appointmentDate && <p className="mt-1 text-sm text-red-500">{errors.appointmentDate.message}</p>}
                                        <TextField defaultValue={time} className="w-full" type="text" variant="secondary">
                                            <Label>Appointment Time:</Label>
                                            <Input {...register("appointmentTime", { required: "Appointment Time is required" })} placeholder="Enter time" />
                                        </TextField>
                                        {errors.appointmentTime && <p className="mt-1 text-sm text-red-500">{errors.appointmentTime.message}</p>}

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>
                                            <Button type="submit" slot="close">Save Changes</Button>
                                        </Modal.Footer>
                                    </form>
                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default EditBookingModal;
