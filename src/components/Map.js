import React from 'react';
import Dictionary from '../dictionary';

const Map = () => (
    <div id='map' className='deacon__map'>
        <img
            className='deacon__map-image'
            src={Dictionary.map.image}
            alt={Dictionary.map.imageDescriptor}
        />
        <div className='deacon__map-copy-container'>
            <div className='deacon__map-copy-title'>
                {Dictionary.map.title}
            </div>
            <Category
                title={Dictionary.map.foodTitle}
                list={Dictionary.map.foodOptions}
            />
            <Category
                title={Dictionary.map.parksTitle}
                list={Dictionary.map.parkOptions}
            />
            <Category
                title={Dictionary.map.transportTitle}
                list={Dictionary.map.transportOptions}
            />
        </div>
    </div>
);

const Category = ({ title, list }) => (
    <div className='deacon__map-copy-category'>
        <div className='deacon__map-copy-category-title'>
            {title}
        </div>
        <div className='deacon__map-copy-category-list'>
            {list.map((option) => (
                <div className='deacon__map-copy-category-list-option'>
                    {option}
                </div>
            ))}
        </div>
    </div>
)

export default Map;
