import React, { useState } from 'react'

function Reviews() {

    let date = new Date()
    const [input, setInput] = useState('')
    const [list, setList] = useState([])

    const reviewCard = (item, index) => {
        return (
            (item) &&
            <div className='reviewCard'>
                <div className="review">
                    <div className='reviewPara'>
                        <span className="spanReviewArea S">S</span>
                        <p>XXX | {date.toDateString()}</p>
                        <p>{date.toDateString}</p>
                    </div>
                    <p key={index} style={{color:"rgb(134, 131, 131)"}}>{item}</p>
                </div>
            </div>
        )
    }

    const addReview = () =>{
        setList(prev => [...prev, input])
        setInput('')
    }

    return (
        <div className='container my-5 py-3 d-flex flex-column w-70 '>
            <div className='reviewCard'>
                <div className='reviewTitle'>
                    <h1>Customer Reviews </h1>
                </div>
                <div className="innercontainer">
                    <span className="spanTextArea">S</span><input value={input} onChange={(e)=>setInput(e.target.value)} autoComplete="off" type="text" name="Add Comment" placeHolder="Add Your Review here..." />
                </div>
                <div className='btnDiv'>
                    <div className="sendBtn" >Cancel</div>
                    <div className="sendBtn" onClick={addReview}>Add</div>
                </div>
            </div>
            <ul>
                {
                    list.map(reviewCard)
                }
            </ul>
            <div className='reviewCard'>
                <div className="review">
                    <div className='reviewPara'>
                        <span className="spanReviewArea">H</span>
                        <p>Harshad Mehara |</p>
                        <p>Sept 28, 2022</p>
                    </div>
                    <p style={{color:"rgb(134, 131, 131)"}}>This product is the best!!</p>
                </div>
            </div>
            <div className='reviewCard'>
                <div className="review">
                    <div className='reviewPara'>
                        <span className="spanReviewArea S">S</span>
                        <p>Sonali Mishra |</p>
                        <p>May 8, 2022</p>
                    </div>
                    <p style={{color:"rgb(134, 131, 131)"}}>Good Product</p>
                </div>
            </div>
            <div className='reviewCard'>
                <div className="review">
                    <div className='reviewPara'>
                        <span className="spanReviewArea P">P</span>
                        <p>Pooja Bhutani |</p>
                        <p>March 18, 2022</p>
                    </div>
                    <p style={{color:"rgb(134, 131, 131)"}}>Amazing Product</p>
                </div>
            </div>
        </div>
    )
}

export default Reviews