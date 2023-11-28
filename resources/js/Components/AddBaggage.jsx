import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import BaggageTab from "./BaggageTab";
 

const AddBaggage = ({
  source_city,
  source_IATA,
  destination_city,
  destination_IATA,
  traveler,
  passengerCount
}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
       <div className="w-full h-[130px] border-2 p-3" onClick={handleOpen} variant="gradient">
        <h1 className="text-md">Baggage</h1>
        <hr  className="mt-2 border-1 border-gray-300" />
        <h1 className="mt-2 text-gray-400">
        Pack your bags! You can bring 2x23kg baggage per passenger.
        </h1>
      </div>
      <Dialog open={open} handler={handleOpen} size="lg">
        <DialogBody className="">
          <BaggageTab 
            source_IATA={source_IATA}
            destination_IATA={destination_IATA}
            source_city={source_city}
            destination_city={destination_city}
            traveler = {traveler}
            passengerCount={passengerCount}
          />
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button className="bg-[#60cff4]" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}

export default AddBaggage;