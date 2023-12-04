import React, {useEffect} from 'react'
import { bouncyArc } from 'ldrs'
import { router } from '@inertiajs/react'

const LoadingScreen = () => {

  useEffect(() => {
    console.log("Running");

    try {
      setTimeout(async () => {
        // Make a post request to the server
        await router.post(route("bookings.edit"), {
          isPaid: true
        });
      }, 2000);
    } catch (error) {

    }
  }, []);

  bouncyArc.register()

  return (
    <>
      <div className="gap-3 flex flex-col items-center justify-center h-screen">
      <l-bouncy-arc
        size="200"
        speed="1.65" 
        color="#60cff4" 
      ></l-bouncy-arc>
        <h1 className='text-xl font-medium text-gray-500 '>Processing Payment...</h1>
      </div>
    </>
  )
}

export default LoadingScreen;