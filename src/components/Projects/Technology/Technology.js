import React from 'react';

const Technology = ({technology}) => {
    return (
        <button className="bg-dark text-white shadow rounded mr-3 mb-3 p-2 border-0">
            {technology}
        </button>
    );
};

export default Technology;
