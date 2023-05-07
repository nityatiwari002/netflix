import React from 'react';
import '../components-style/Description.css';

function Description({content}) {
    return (
        <div className='desc'>
            {content}
        </div>
    )
};

export default Description;
