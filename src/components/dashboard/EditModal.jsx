"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";

const EditModal = ({ photo, name }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleUpdateUser = async (data) => {
        const { name, photo } = data;
        // Later:
        await authClient.updateUser({
            name: name,
            image: photo,
        });
    };

    return (
        <div>
            <Modal>
                {/* Edit Profile Button */}
                <Button className="mt-6 flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#6952ad] px-7 py-4 text-[16px] font-semibold text-white shadow-sm transition hover:bg-[#59459a] lg:ml-8 lg:mt-0">
                    <FiEdit3 size={17} />
                    Edit Profile
                </Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />

                            {/* Header */}
                            <Modal.Header>
                                <Modal.Heading className="text-2xl font-bold">Edit Profile</Modal.Heading>

                                <p className="mt-1.5 text-sm leading-5 text-muted">Fill out the form below to update your profile.</p>
                            </Modal.Header>

                            {/* Body */}
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleSubmit(handleUpdateUser)} className="flex flex-col gap-4">
                                        {/* Name */}
                                        <TextField defaultValue={name} className="w-full" name="name" type="text" variant="secondary">
                                            <Label>Name</Label>

                                            <Input
                                                {...register("name", {
                                                    required: "Name is required",
                                                })}
                                                
                                                placeholder="Enter your name"
                                            />
                                        </TextField>

                                        {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}

                                        {/* Photo URL */}
                                        <TextField defaultValue={photo} className="w-full" name="photo" type="url" variant="secondary">
                                            <Label>Photo URL</Label>

                                            <Input
                                                {...register("photo", {
                                                    required: "Photo URL is required",
                                                })}
                                                
                                                placeholder="Enter your photo URL"
                                            />
                                        </TextField>

                                        {errors.photo && <p className="mt-1 text-sm text-red-500">{errors.photo.message}</p>}

                                        {/* Footer */}
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>

                                            <Button type="submit" slot="close">
                                                Save Changes
                                            </Button>
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

export default EditModal;
