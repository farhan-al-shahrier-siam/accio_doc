import { Spinner } from "@heroui/react";

const loading = () => {
    return (
        <div className=" mx-auto my-auto p-5">
            
                <div className="flex flex-col items-center gap-2">
                    <Spinner color="success" />
                    <span className="text-xs text-muted">Success</span>
                </div>
        </div>
    );
};

export default loading;
