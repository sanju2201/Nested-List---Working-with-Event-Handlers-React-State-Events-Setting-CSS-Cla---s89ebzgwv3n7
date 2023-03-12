import React, { useState } from 'react';
import Town from './Town';

const City = ({ name, id, towns }) => {
    const [showCity, setShowCity] = useState(false);

    return showCity ? (
        <>
            <li
                onClick={() => {
                    setShowCity(!showCity);
                }}>
                {name}
            </li>
            {towns.map((town, idx) => (
                <ul key={Math.random()}>
                    <Town id={'town' + (idx + 1)} name={town.name} />
                </ul>
            ))}
        </>
    ) : (
        <li
            id={id}
            onClick={() => {
                setShowCity(!showCity);
            }}>
            {name}
        </li>
    );
};

export default City;