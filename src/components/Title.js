import React from 'react';
import '../components-style/Title.css';

function Title({content}) {
    return (
        <div className='titleTxt'>
            {content}
        </div>
    )
};

export default Title;
