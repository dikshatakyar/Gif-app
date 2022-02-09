import React, {useEffect, useState} from 'react'
import axios from "axios"

const Gif = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const gif = async () => {
            const results = await axios("https://api.giphy.com/v1/gifs/trending", {
                params : {
                    api_key: "7jxDUGH8rkE92zuiZUGOdxMG3pD8vaNV"
                }
            });
            
            console.log(results);
            setData(results.data.data);
        }
        gif();
    }, [])

    const renderGif = () => {
        return data.map(obj => {
            return (
                <div key = {obj.id} className="gif">
                    <img src={obj.images.fixed_height.url}/>
                    <h2 className="title">{obj.title}</h2>
                </div>
            )
        })
    }
    return (
        <div className="container gifs">
            {renderGif()}
        </div>
    )
}

export default Gif
