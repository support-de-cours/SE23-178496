const api = "https://jsonplaceholder.typicode.com/posts";

async function getData(url)
{
    const response = await httpGet(url);
    const posts = response;

    return posts;
    // console.log(posts);
}

async function httpGet(url)
{
    const response = await fetch(url);
    const json = await response.json();

    return json;
}


// getData(api).then(r => console.log(r));

// (async ()=> {
//     const data = await getData(api);
//     console.log(data);
// })();


(async (w) => {
    const data = await getData(api);
    console.log(data);
    console.log(w);
})(window);