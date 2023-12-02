import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";
import { router } from '@inertiajs/react'

function ConfirmationButton({ priceBar, travellers, facilities }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleOpen = async () => {
        // Call handleSubmit to post data to the server
        await handleSubmit();

        // Open the dialog
        setOpen(!open);
    };

    const handleSubmit = async () => {
        setLoading(true);

        try {
            // Make a post request to the server
            router.post(route("bookings.store"), {
                data: {
                    priceBar: priceBar,
                    travellers: travellers,
                    facilities: facilities,
                }
            });

            // Simulate loading for a couple of seconds
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        } catch (error) {
            // Handle errors if needed
            setLoading(false);
        }
    };

    return (
        <>
            <div
                className="flex items-center justify-center text-lg font-bold w-[20%] text-white h-14 absolute left-[80%] bg-[#60cff4] rounded-xl hover:text-[#60cff4] hover:bg-[#f8f8f8] hover:cursor-pointer"
                onClick={handleOpen}
            >
                <h1>Continue</h1>
            </div>

            <Dialog open={open} handler={() => setOpen(false)}>
                <DialogBody>
                    {loading ? (
                        <>
                            <p>Saving Transaction...</p>
                            {/* You can also include a spinner or any other loading indicator */}
                        </>
                    ) : (
                        <>
                            Transaction has been saved
                            <br />
                            Do you want to make a payment ?
                        </>
                    )}
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color=""
                        onClick={handleOpen}
                        className="mr-1 border-1 "
                    >
                        <span>Pay Later</span>
                    </Button>
                    <Button onClick={handleOpen} className="bg-[#60cff4]"  disabled={loading}>
                        <span>Pay Now</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}

export default ConfirmationButton;
