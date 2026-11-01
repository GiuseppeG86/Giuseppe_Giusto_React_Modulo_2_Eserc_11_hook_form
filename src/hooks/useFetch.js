import { useEffect, useState } from "react";

function useFetch (url) {

    const [data, setData] = useState();

    async function getData () {

        const promise = await fetch(url);
        const json = await promise.json();
        return setData(json);
    }

    useEffect(() => {
        if (url != undefined) {
            getData();
        }
        
    }, [url]);

    return data;
}

export default useFetch