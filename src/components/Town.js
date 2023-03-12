import React from 'react';

const Town = ({ name, id }) => {
    return <li id={'town' + (id + 1)}>{name}</li>;
};

export default Town;