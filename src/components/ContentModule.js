import React from 'react';

const ContentModule = ({ title, copy, image, imageDescriptor, orientation }) => (
    <div className='deacon-content-module'>
        {orientation === 'right' ?
            (
                <div className={`deacon-content-module__container ${title.split(' ')[0]}`}>
                    <div className={`deacon-content-module__text right ${title.split(' ')[0]}`}>
                        <div className={`deacon-content-module__text-title ${title.split(' ')[0]}`}>
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
                <div className={`deacon-content-module__container ${title.split(' ')[0]}`}>
                    <img
                        className='deacon-content-module__image left'
                        src={image}
                        alt={imageDescriptor}
                    />
                    <div className={`deacon-content-module__text left ${title.split(' ')[0]}`}>
                        <div className={`deacon-content-module__text-title ${title}`}>
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
