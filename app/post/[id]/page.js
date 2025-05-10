import React from 'react';

const Page = ({params}) => {
    return (
        <div>
            <p>{params.id}</p>
        </div>
    );
};

export default Page;