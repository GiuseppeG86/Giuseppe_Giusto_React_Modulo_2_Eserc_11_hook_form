import { useLoaderData } from "react-router"

function Details () {

    const details = useLoaderData();

    return (
        <>
        <h1>Dettaglio del post: {details.id}</h1>
        <h3>Titolo: {details.title}</h3>
        <p>Testo: {details.body}</p>
        </>
    )
}

export default Details