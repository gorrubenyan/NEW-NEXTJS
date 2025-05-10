import React from 'react';

const Page = async () => {

    async function fetchData() {
        const res =  await fetch("https://jsonplaceholder.typicode.com/posts");
        const result = await res.json();
        return result;
    }

    const  posts = await fetchData();
    console.log(posts);
    return (
        <div>
            
        </div>
    );
};

export default Page;