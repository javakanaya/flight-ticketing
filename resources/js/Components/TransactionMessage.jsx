import React from "react";
import { Button, Dialog, DialogBody, DialogFooter } from "@material-tailwind/react";
import { Inertia } from "@inertiajs/inertia";

function TransactionMessage({ transactionId }) {
    const [open, setOpen] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const redirectToHome = () => {
        setOpen(false);
        // Redirect to the home page or handle as needed
        // Inertia.visit(route("home"));
    };

    const redirectToPayment = () => {
        setOpen(false);
        // Redirect to the payment page or handle as needed
        // Inertia.visit(route("payment.page"));
    };

    const redirectToUnpaidTransaction = () => {
        setOpen(false);
        // Redirect to the unpaid transaction page with the transaction_id
        Inertia.visit(`/profile/bookings/${transactionId}`);
    };

    return (
        <Dialog open={open} handler={() => setOpen(false)}>
            <DialogBody>
                {
                    <>
                        Transaction has been saved
                        <br />
                        Do you want to make a payment ?
                    </>
                }
            </DialogBody>
            <DialogFooter>
                <Button
                    variant="text"
                    onClick={redirectToHome}
                    className="mr-1 border-1 "
                >
                    <span>Pay Later</span>
                </Button>
                <Button
                    onClick={redirectToPayment}
                    className="bg-[#60cff4]"
                    disabled={loading}
                >
                    <span>Pay Now</span>
                </Button>
                <Button
                    onClick={redirectToUnpaidTransaction}
                    className="bg-[#ff5252] ml-1"
                    disabled={loading}
                >
                    <span>View Unpaid Transaction</span>
                </Button>
            </DialogFooter>
        </Dialog>
    );
}

export default TransactionMessage;
