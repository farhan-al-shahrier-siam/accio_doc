import { Spinner } from "@heroui/react";
import React from "react";

const loading = () => {
    return (
        <div className=" text-center mx-auto my-auto">
            <div className="flex items-center gap-8">
                <div className="flex flex-col items-center gap-2">
                    <Spinner color="success" />
                    <span className="text-xs text-muted">Success</span>
                </div>
            </div>
        </div>
    );
};

export default loading;
