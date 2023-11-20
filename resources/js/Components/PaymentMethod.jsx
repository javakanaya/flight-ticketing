import { Tab } from '@headlessui/react'

function PaymentMethod() {
  return (
    <Tab.Group>
      <Tab.List className="w-[40%] grid grid-cols-3 gap-5">
        <Tab className="py-10  border-2 border-slate-400">
        <div className=''>
          
        </div>
        </Tab>
        <Tab className="py-10  border-2 border-slate-400">Tab 2</Tab>
        <Tab className="py-10 border-2 border-slate-400">Tab 3</Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className='flex flex-col'>
            <label htmlFor="" className='py-3'>
              Phone Number
            </label>
            <input type="text" className='w-1/2' />
          </div>
        </Tab.Panel>
        <Tab.Panel className='my-5'>
          <div className='flex flex-col w-[60%] gap-6'>
            <div className='flex flex-col w-1/3 gap-3'>
              <label htmlFor="">
                Cardholder's Name
              </label>
              <input type="text" className='h-10 rounded-lg'/>
            </div>
            <div className='flex flex-col w-1/3 gap-3'>
              <label htmlFor="">Card Number</label>
              <input type="text" className='rounded-lg h-10'/>
            </div>
            <div className='flex gap-5'>
              <div className="flex flex-col gap-2 w-1/4">
                <label htmlFor="">Expiry</label>
                <input type="text" className='rounded-lg'/>
              </div>
              <div className='flex flex-col gap-2 w-1/4'>
                <label htmlFor="">
                  CVC
                </label>
                <input type="text" className='rounded-lg' />
              </div>

            </div>
          </div>
        </Tab.Panel>
        <Tab.Panel>Content 3</Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  )
}

export default PaymentMethod;