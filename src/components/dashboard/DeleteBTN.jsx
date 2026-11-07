"use client"
import { AlertDialog, Button } from "@heroui/react";
import { redirect } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const DeleteBTN = ({doctor, _id}) => {

    const handleDelete = async()=>{

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/appointments/${_id}`, {
            method: "DELETE",
            headers:{
                "content-type": "application/json",
            }
        })
        const data = await res.json()
        toast.success("Appointment deleted successfully!")
        redirect("/dashboard")

    }

    return (
        <div>
            <AlertDialog>
                <Button radius="full" className="bg-[#f0e7ff] text-red-500 font-bold" variant="danger">
                    <FaTrash></FaTrash>
                    Delete
                </Button>
                <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                        <AlertDialog.Dialog className="sm:max-w-100">
                            <AlertDialog.CloseTrigger />
                            <AlertDialog.Header>
                                <AlertDialog.Icon status="danger" />
                                <AlertDialog.Heading>Delete Appointment permanently?</AlertDialog.Heading>
                            </AlertDialog.Header>
                            <AlertDialog.Body>
                                <p>
                                    This will permanently delete appointment with <strong>{doctor}</strong>. This action cannot be undone.
                                </p>
                            </AlertDialog.Body>
                            <AlertDialog.Footer>
                                <Button slot="close" variant="tertiary">
                                    Cancel
                                </Button>
                                <Button onClick={handleDelete} slot="close" variant="danger">
                                    Delete
                                </Button>
                            </AlertDialog.Footer>
                        </AlertDialog.Dialog>
                    </AlertDialog.Container>
                </AlertDialog.Backdrop>
            </AlertDialog>
        </div>
    );
};

export default DeleteBTN;
