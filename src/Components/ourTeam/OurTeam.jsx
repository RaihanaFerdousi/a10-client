import React from 'react';

const OurTeam = () => {
    return (
        <div>
            <div className='flex flex-col items-center '>
                <h1 className='text-4xl font-bold mt-20 mb-3'>Meet Our Team</h1>
                <p className='w-full md:w-[760px] text-center '>
                    Meet the talented individuals who make up the heart of Reelify. Each team member brings their unique skills and passion, working together to achieve our shared goals and deliver exceptional results. Get to know the people who make it all happen!
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
                <div className='text-left shadow-xl p-5 w-[273px]'>
                    <div>
                        <img className='w-full h-[300px] rounded-md' src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-lg font-bold'>Sophia Green</h1>
                        <h1 className='text-md font-semibold text-gray-800'>Project Manager</h1>
                    </div>
                </div>
                <div className='text-left shadow-xl p-5 w-[273px]'>
                    <div>
                        <img className='w-full h-[300px] rounded-md' src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-lg font-bold'>James Clark</h1>
                        <h1 className='text-md font-semibold text-gray-800'>Lead Developer</h1>
                    </div>
                </div>
                <div className='text-left shadow-xl p-5 w-[273px]'>
                    <div>
                        <img className='w-full h-[300px] rounded-md' src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-lg font-bold'>Emma Johnson</h1>
                        <h1 className='text-md font-semibold text-gray-800'>UI/UX Designer</h1>
                    </div>
                </div>
                <div className='text-left shadow-xl p-5 w-[273px]'>
                    <div>
                        <img className='w-full h-[300px] rounded-md' src="https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Team Member" />
                    </div>
                    <div className='p-3'>
                        <h1 className='text-lg font-bold'>Michael Brown</h1>
                        <h1 className='text-md font-semibold text-gray-800'>Marketing Specialist</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;
