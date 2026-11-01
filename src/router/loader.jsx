export async function postsLoader () {
    const promise = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = promise.json();
    return json;
}

export async function detailsLoader ({params}) {
    const promise = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const json = promise.json();
    return json;
}