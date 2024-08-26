import React from 'react';
import notfound from "../Pics/404-error-not-found-1.png"

const NotFound = () => {
    return (
        <div className='flex justify-center'>
            <img src={notfound.src}/>
        </div>
    );
}

export default NotFound 