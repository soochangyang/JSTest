//import useFetch from '../hooks/useFetch';
import { useState , useEffect } from "react";
import axios from 'axios';

export default function ArtistList(){
    //const artistList = useFetch("http://localhost:8087/music/artists?page=0&size=10");

    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        axios.get("/artists?page=0&size=10", 
            {
                mode: "no-cors",
                withCredentials: true,
                credentials: "same-origin",
                headers: {'Access-Control-Allow-Origin': '*'}
            }
            )
        .then (response => {
            console.log(response.data._embedded);
            setArtists(response.data._embedded.artists);
        })
        .catch(error => {
            console.error('Error fetching data :' , error);
        })
    }, []);

    //console.log(`artist : ${artists}`)
    return <div>
                <h1>Artist List Table</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artists.map(artist => (
                        <tr key= {artist.artistid}>
                            <td>{artist.name}</td>
                        </tr>
                        ))}

                    </tbody>
                </table>

    </div>
}