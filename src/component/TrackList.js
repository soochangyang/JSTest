import { useState , useEffect } from "react";
import axios from 'axios';

export default function TrackList(){
    const [tractList, setTractList] = useState([]);

    useEffect(() =>{
        axios.get("/tracks?projection=trackDetails", 
            {
                mode: "no-cors",
            }
        )
        .then(response => {
            setTractList(response.data._embedded.tracks);
        })
    }, []);

    return <div>
                <h1>Track List Table</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>TITLE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tractList.map(tracks => (
                        <tr key= {tracks.title}>
                            <td>{tracks.title}</td>
                        </tr>
                        ))}

                    </tbody>
                </table>        
    </div>
}    