import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ArtistList(){
    const [cdList, setCdList] = useState([]);

    useEffect(() => {
        axios.get("/cds??projection=cdDetails",
        {
            mode: "no-cors",
        })
        .then(response => {
            setCdList(response.data._embedded.cds);
        })
    }, [])

    return <div>
        <h1>CD List Table</h1>
                <hr/>
                <table>
                    <thead>
                        <tr>
                            <th>TITLE ▼</th>
                            <th>YEAR ▼</th>
                            <th>ARTIST ▼</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cdList.map(cds => (
                        <tr key= {cds.title}>
                            <td>{cds.title}</td>
                            <td>{cds.releaseYear}</td>
                            <td></td>
                        </tr>
                        ))}

                    </tbody>
                </table>
    </div>
}