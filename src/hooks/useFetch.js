import { useEffect , useState} from 'react';

export default function useFetch(url){
    const [data, setData] = useState([]);
    useEffect(()=> {
        fetch(url, {
             mode: "no-cors",
             //body: JSON.stringify(data),
             header : {Accept: 'application/json', 'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'},
             credentials: "same-origin",
        })
        .then(res => {
            if (res.ok){
                //console.log(res.blob);
                //throw new Error(`HTTP error, status =${res.text()}`);
                return res?.json();
            }
            console.log(res.data._embedded ? res.data._embedded.artists : []);
            //return response.json();
        })
        .then(data => {
            console.log(`data:${data}`);
            console.log(data);
            setData(data);
        })
        //.catch(error => {
        //    console.log(`error: ${error}`)
        //});
       
    }, [url])
    return data;
}