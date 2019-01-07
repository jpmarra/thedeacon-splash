import React from 'react';

const ContentModule = ({ title, copy, image, imageDescriptor, orientation }) => (
    <div className='deacon-content-module'>
        {orientation === 'right' ?
            (
                <div className='deacon-content-module__container'>
                    <div className='deacon-content-module__text  right'>
                        <div className='deacon-content-module__text-title'>
                            {title}
                        </div>
                        <div className='deacon-content-module__text-copy'>
                            {copy}
                        </div>
                    </div>
                    <img
                        className='deacon-content-module__image right'
                        src={image}
                        alt={imageDescriptor}
                    />
                </div>
            ) :
            (
                <div className='deacon-content-module__container'>
                    <img
                        className='deacon-content-module__image left'
                        src={image}
                        alt={imageDescriptor}
                    />
                    <div className='deacon-content-module__text left'>
                        <div className='deacon-content-module__text-title'>
                            {title}
                        </div>
                        <div className='deacon-content-module__text-copy'>
                            {copy}
                        </div>
                    </div>
                </div>
            )
        }
    </div>
);

export default ContentModule;
