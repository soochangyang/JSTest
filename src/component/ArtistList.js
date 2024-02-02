import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

export default function ArtistList(props){

    console.log(props);
    const [artists, setArtists] = useState([]);

    useEffect(()=>{
        axios.get("/artists?projection=artistDetails", 
            {
                mode: "no-cors",
                withCredentials: true,
                credentials: "same-origin",
                headers: {'Access-Control-Allow-Origin': '*'}
            }
            )
        .then (response => {
            setArtists(response.data._embedded.artists);
        })
        .catch(error => {
            console.error('Error fetching data :' , error);
        })
    }, []);

    return <div>
                <h1>Artist List Table</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th><Link to="/artist_list">NAME ▼</Link></th>
                        </tr>
                    </thead>
                    <tbody>
                        {artists.map(artist => (
                        <tr key= {artist.name}>
                            <td>{artist.name}</td>
                        </tr>
                        ))}

                    </tbody>
                </table>

    </div>
}