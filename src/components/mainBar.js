import React from 'react'
import Image1 from "./Layer 6.png"

export default function MainBar(){

    return (
        <main>
            <div class='list-container'>
                <div className='list-content'>
                    <input type="checkbox" class='checkbox'/>
                    <p class='list-word' id='check-id'>Check emails</p>
                    <img src={Image1} alt="" id='delete-img'/>
                </div>
                <div className='list-content'>
                    <input type="checkbox" class='checkbox'/>
                    <p class='list-word' id='git-id'>Update Github</p>
                    <img src={Image1} alt="" id='delete-img'/>
                </div>
                <div className='list-content'>
                    <input type="checkbox" class='checkbox' id='content3'/>
                    <p class='list-word' id='doc-id'>Submit documentation</p>
                    <img src={Image1} alt="" id='delete-img'/>
                </div>
                <div className='list-content' id='content4'>
                    <input type="checkbox" class='checkbox' />
                    <p class='list-word' id='study-id'>Study</p>
                    <img src={Image1} alt="" id='delete-img'/>
                </div>
                <div className='list-content' id='content5'>
                    <input type="checkbox" class='checkbox'/>
                    <p class='list-word' id='shop-id'>Shopping</p>
                    <img src={Image1} alt="" id='delete-img'/>
                </div>
            </div>
        </main>
    )
}
