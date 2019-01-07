import React from 'react';

const ContentModule = ({ copy, image, imageDescriptor }) => (
    <div className='deacon-content-module'>
        <div className='deacon-content-module__copy'>
            {copy}
        </div>
        <img src={image}
             alt={imageDescriptor}
             className='deacon-content-module__image'
        />
    </div>
);

export default ContentModule;
