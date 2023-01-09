import React from 'react'
import "./style.css"
import  booksData  from "../../JsonData/books.json";
export default function BooksPage() {
    return (
        <>
            <div className="booksPage">

                <div className="top flex flex-col justify-center items-center w-[100%] h-[200px] pt-8 md:h-[300px]">
                    <div className="heading text-[19px] md:text-[40px] pt-[12px]">
                        BOOKS
                    </div>

                    <div className="line mt-[20px]"></div>

                    <div className="smallText pt-[12px] text-[20px]">
                        ksdf skdf s dsfskfs kfsdhfsdf skdfhs
                    </div>
                </div>

                <div>
                    <div className="booksContainer flex maxWidth justify-center md:justify-between items-center flex-wrap mt-4">
                        {
                            booksData.map((data) => {
                                return (
                                    <div className="bookBox flex flex-col justify-center items-center w-[310px] p-[10px]  shadow-2xl mt-2 mb-4 ">
                                        <div className="img w-[45%]  flex justify-center items-center">
                                            <img src={data.img} className='rounded-[10px]' alt="" />
                                        </div>
                                        <div className='py-2 w-[75%] text-center'>
                                           {data.bookName}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
        </>

    )
}
