import React from 'react'

export default function About() {
    return (
        <>
            <div className="aboutPage flex flex-col md:flex-row maxWidth justify-between items-center pt-[100px] h-[90vh] pb-8">
                <div className="left_side w-[100%] md:w-1/2 p-8">

                    <div className="heading text-[25px]">
                        About Dr. Subhash Chander Aima
                    </div>

                    <div className='mt-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </div>

                    <div className='mt-4'>
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>

                    <div className='mt-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe
                    </div>
                </div>

                <div className="imageSide w-[100%] md:w-1/2 flex justify-center items-center pb-8">
                    <img src="assets/midimg.jpg" className='w-[70%] rounded-[10px] shadow-xl shadow-gray-400' alt="" />
                </div>
            </div>
        </>
    )
}
