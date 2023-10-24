'use strict';

fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => { 
        if (!data.ok) throw Error(data.status);

        return data.json(); 
    })
    .then(post => { console.log(post.title); })
    .catch((e) => console.log(`[E] ===> ${e}`));

///*    
const updateData = {
    title: 'Clarence White Techniques',
    body: 'Amazing',
    userId: 1,
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'appliction/json',
    },
    body: JSON.stringify(updateData),
};

fetch('https://jsonplaceholder.typicode.com/posts', options)
    .then(data => {
        if (!data.ok) throw Error(data.status);

        return data.json();
    })
    .then(update => {
        console.log(update);
    })    
    .catch(error => {
        console.log(error);
    })
    .finally(console.log('end...'));
//*/    