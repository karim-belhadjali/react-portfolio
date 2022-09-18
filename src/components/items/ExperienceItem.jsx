import React from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs'


function ExpItem() {
    return (<article className='text-start flex gap-4' >
        <BsFillPatchCheckFill className='dark:text-primary mt-1' />
        <div>
            <h4>CSS</h4>
            <small className='dark:text-light' >Experienced</small>
        </div>
    </article>);
}

export default ExpItem;