import React, { useEffect, useState } from 'react'
import videosData from "../../JsonData/Videos.json";
export default function Videos() {

    const [isMobile , setMobile] = useState(false)

    useEffect(()=>{
        window.innerWidth < 600 ?
        setMobile(true) :
        setMobile(false)
    })

    return (
       
        <div className="videosPage maxWidth pt-[100px]">
            <div className="heading text-center text-[35px]">
                Songs, Interviews and Releases
            </div>

            <div className="awardsContainer flex justify-center md:justify-between items-center flex-wrap mt-4">
                {
                    videosData.map((data) => {
                        return (
                            <>
                                <div class="smallcontainer rounded-[10px] mt-4 mb-4">
                                    <iframe className='rounded-[10px]' width={isMobile ? "360" : "560"} height={isMobile ? "215" : "315"} src={data}
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
