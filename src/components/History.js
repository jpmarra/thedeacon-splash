import React from 'react';


const History = ( { title, copy, image, wideImage, imageDescriptor }) => (
    <div className='deacon__history'>
        <div className='deacon__history-container'>
        {window.innerWidth < 1250 ?
            <img
                className='deacon__history-image'
                src={wideImage}
                alt={imageDescriptor}
            />
        :
            <img
                className='deacon__history-image'
                src={image}
                alt={imageDescriptor}
            />
        }
            <div className='deacon__history-text'>
                <div className='deacon__history-text-title'>
                    {title}
                </div>
                <div className='deacon__history-text-copy'>
                    {copy}
                </div>
            </div>
        </div>
    </div>
);

export default History;
