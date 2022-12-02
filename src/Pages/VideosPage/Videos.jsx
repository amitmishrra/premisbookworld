import React, { useEffect, useState } from 'react'
import videosData from "../../JsonData/Videos.json";
import "./Videos.css"

export default function Videos() {

    const [isMobile, setMobile] = useState(false)

    useEffect(() => {
        window.innerWidth < 600 ?
            setMobile(true) :
            setMobile(false)
    })

    return (

        <div className="videosPage maxWidth pt-[100px]">

            

            <div className="top flex flex-col justify-center items-center w-[100%] h-[200px] md:h-[300px]">
                <div className="heading text-[19px] md:text-[40px] pt-[12px]">
                Songs, Interviews and Releases
                </div>

                <div className="line mt-[20px]"></div>

                <div className="smallText pt-[12px] text-[20px]">
                    ksdf skdf s dsfskfs kfsdhfsdf skdfhs
                </div>
            </div>


            <div className="vidContainer flex justify-center md:justify-between items-center flex-wrap">
                {
                    videosData.map((data) => {
                        return (
                            <>
                                <div class="smallcontainer rounded-[10px] mt-4 mb-4">
                                    <iframe className='rounded-[10px]' width={isMobile ? "320" : "560"} height={isMobile ? "190" : "315"} src={data}
                                        title="YouTube video player" frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowfullscreen></iframe>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}
