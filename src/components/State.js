import React, { useState } from 'react';
import City from './City';

const State = ({ name, cities, id }) => {
    const [showState, setShowState] = useState(false);
    return showState ? (
        <>
            <li
                id={id}
                onClick={() => {
                    setShowState(!showState);
                }}>
                {name}
            </li>
            {cities.map((city, idx) => (
                <ul key={Math.random()}>
                    <City
                        id={'city' + (idx + 1)}
                        name={city.name}
                        towns={city.towns}
                    />
                </ul>
            ))}
        </>
    ) : (
        <li
            id={id}
            onClick={() => {
                setShowState(!showState);
            }}>
            {name}
        </li>
    );
};

export default State;