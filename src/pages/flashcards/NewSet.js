import React from 'react'
import './NewSet.css'

const NewSet = () => {
    const cardData = [
        {
            term: <>
                    <input className='termInput'
                        type={"text"}
                        placeholder="Enter the term here..."
                    />
                </>
        },{
            definition: <>
                            <input className='termInput'
                                type={"textarea"}
                                placeholder="Enter the definition here..."
                            />
                        </>
        }
    ]


  return (
    <div className='newSetContainer'>
        {cardData.term}
    </div>
  )
}

export default NewSet