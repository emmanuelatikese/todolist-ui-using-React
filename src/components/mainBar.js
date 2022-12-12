import React from 'react'
import Image1 from "./Layer 6.png"

export default function MainBar(){

    return (
        <main>
            <div class='list-container'>
                <div className='list-content'>
                    <input type="checkbox" class='checkbox'/>
                    <p class='list-word'>listname</p>
                    <img src={Image1} alt="" id='delete-img'/>
                </div>
            </div>
        </main>
    )
}
