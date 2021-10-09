import axios from 'axios';
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { API_KEY } from '../constants/constants';


function Video() {


    
const [urlId, setUrlId] = useState("")


const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
};
const handleMovie = (id) => {
    console.log(id);
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
        console.log(response.data);
        if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
        }
    })


}
    return (
        <div>
            {  urlId && <YouTube videoId={urlId.key} opts={opts} />}
        </div>
    )
}

export default Video
