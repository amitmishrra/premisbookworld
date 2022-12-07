import React from 'react'
import "./Awards.css"
import { MDBIcon } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import awardData from "../../JsonData/Awards.json";

export default function Awards() {

    return (
        <>
            <div className="awardsPage">

            <div className="top flex flex-col justify-center items-center w-[100%] h-[200px] pt-8 md:h-[300px]">
                <div className="heading text-[19px] md:text-[40px] pt-[12px]">
                AWARDS & RECOGNITION
                </div>

                <div className="line mt-[20px]"></div>

                <div className="smallText pt-[12px] text-[20px]">
                    ksdf skdf s dsfskfs kfsdhfsdf skdfhs
                </div>
            </div>



                <div className="awardsContainer flex maxWidth justify-center md:justify-between items-center flex-wrap mt-4">
                    {awardData.map((data) => {
                        return (
                            <>
                                <div className="awardBox flex justify-center items-center w-[350px] p-[10px]  mt-2 mb-4 ">
                                    <div className="img w-[25%]  flex justify-center items-center">
                                        <MDBIcon className='award' fas icon="award" />
                                    </div>

                                    <div className="text flex flex-col text-center justify-around w-[75%] items-center text-[15px]">
                                        <div className="awardName">
                                            {data.award}
                                        </div>
                                        <div className="year">
                                            {data.year}
                                        </div>

                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
