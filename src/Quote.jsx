import React, { useEffect, useState } from 'react'
import './quote.css'
import axios from 'axios';


function Quote() {
    const [quotes, setquotes] = useState("")

    const authorImages = {
        "Rumi": "/image/rumi.jpg",
        "Albert Einstein": "/image/Albert_Einstein.jpg",
         "Abdul Kalam":"/image/abdul kalam.jpg",
         "Bill Gates":"/image/bill-gates.webp",
         "Abraham Lincoln":"/image/abrahamlincoln.jpg",
         "Oprah Winfrey":"/image/oprah.jpg",
         "Muhammad Ali":"/image/muhammadali.jpg",
         "William Shakespeare":"image/William Shakespeare.jpg",
         "Mother Teresa":"image/Mother Teresa.jpg",
         "Nelson Mandela":"image/Nelson Mandela.jpg",
         "Walt Disney":"image/Walt Disney.jpg",
         "Aristotle":"image/Aristotle.jpg"


       
    };



    const fetchdata = async () => {
        const { data } = await axios.get('https://dummyjson.com/quotes')
        const res = data.quotes[Math.floor(data.quotes.length * Math.random())]
        setquotes(res)
    }

    useEffect(() => {
        fetchdata()
    }, [])
    console.log(quotes)
    return (
        <>

            <div className="vh-100 d-flex justify-content-center "style={{ backgroundColor: "#384B70" }}>
                <div className="text-center" style={{ marginTop: '100px',   }}>
                    <h3 className='random' style={{ color: 'white' }} >RANDOM QUOTES GENERATOR</h3>

                    <div className="bo  justify-content-center mt-3">
                        <h6 className='quo mt-4' >"{quotes.quote}"</h6>
                        <br />
                        <p className='author' mt-4 >- {quotes.author}</p>
                        {quotes.author && (
                            <img
                                src={authorImages[quotes.author] || "https://via.placeholder.com/100"}
                                alt={quotes.author}
                                className="image mt-4"
                                 
                            />
                        )}
                   

                    </div>
                    <button className='click mt-3 p-1' onClick={fetchdata}>NEXT QUOTE</button>
                </div>
                
            </div>
            









        </>
    )
}

export default Quote
