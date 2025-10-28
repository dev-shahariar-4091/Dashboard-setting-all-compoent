import React from 'react';
import { HiUsers } from "react-icons/hi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";


const Topbar = () => {
    return (
        <div className='my-10'>
            
            <div className='grid grid-cols-3 gap-10'>
                {/* user card  */}
                <div className='flex bg-black justify-between px-10 py-7 rounded-xl'>
                    <div className='text-2xl' >
                        <h1 className='text-white'>Total User</h1>
                        <p className='text-[#FFE6B9]'>50000</p>
                    </div>
                    <span>
                        <HiUsers className='text-6xl text-white' />
                    </span>
                </div>

                 {/* Vendors card  */}
                <div className='flex bg-black justify-between px-10 py-7 rounded-xl'>
                    <div className='text-2xl' >
                        <h1 className='text-white'>Total Vendors</h1>
                        <p className='text-[#FFE6B9]'>50000</p>
                    </div>
                    <span>
                        <RiCustomerService2Line className='text-6xl text-white' />
                    </span>
                </div>

                 {/* Customer card  */}
                <div className='flex bg-black justify-between px-10 py-7 rounded-xl'>
                    <div className='text-2xl' >
                        <h1 className='text-white'>Total Customers</h1>
                        <p className='text-[#FFE6B9]'>50000</p>
                    </div>
                    <span>
                        <FaRegUser className='text-6xl text-white' />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Topbar;