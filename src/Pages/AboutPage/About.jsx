import React from 'react'
import "./About.css"
export default function About() {
    return (
        <>
            <div className="aboutPage flex flex-col md:flex-col  justify-between items-center  pb-8">

                <div className="top flex flex-col justify-center items-center w-[100%] h-[200px] pt-8 md:h-[300px]">
                    <div className="heading text-[19px] md:text-[40px] pt-[12px]">
                        Dr. Subhash Chander Aima
                    </div>

                    <div className="line mt-[10px]"></div>

                    <div className="smallText pt-[12px] text-[20px]">
                        Meet the man behind the works.
                    </div>
                </div>

                <div className="mid flex flex-row md:flex-row justify-center items-center w-[100%] pt-8">
                    <img src="assets/aboutPageImage.png" className='w-[200px] md:w-[400px] ' alt="" />
                    <div className="quote smallText w-[70%] md:w-[30%] text-[17px]">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                    </div>
                </div>
                <div className="bottom flex flex-col justify-center items-center w-[100%] p-4">
                    <div className="heading text-[20px]">
                        Read more about the Author..
                    </div>

                    <div className="text text-justify mt-8 md:w-[50%]">
                       <div className='mt-2'>
                       Born and raised in Srinagar, Dr. Subhash Chander Aima also know as Dr. Premi Romani, a renowned poet and writer and son of  Dr. Brij Kishen Aima (Brij Premi). He is qualified in M.A, M.Phil., PhD.
                       </div>
                          
                       <div className='mt-2'>
                       He wrote about 50 books in Hindi, Urdu and his mother tongue Kashmiri.
                        About 300 Research papers, book reviews and Poetic Compositions published in reputed Urdu. Hindi and English Journals of India and subcontinent
                       </div>
                        <div className='mt-2'>
                        He has received several National awards for his writings. Associated with many Literary Organizations.
                        </div>

                        <div className='mt-2'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'sLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                        </div>
                    </div>
                </div>






                {/* <div className="left_side w-[100%] md:w-1/2 p-8">

                   

                    <div className='mt-2'>
                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                    </div>

                    <div className='mt-4'>
                        typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </div>

                    <div className='mt-4'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type spe
                    </div>
                </div>

                <div className="imageSide w-[100%] md:w-1/2 flex justify-center items-center pb-8">
                    
                </div> */}
            </div>
        </>
    )
}
