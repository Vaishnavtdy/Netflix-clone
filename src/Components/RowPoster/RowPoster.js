import React, { useEffect, useState } from 'react'
import './RowPoster.css'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import axios  from '../../axios'
import YouTube from 'react-youtube'
function RowPoster(props) {
    const [movie, setMovie] = useState([])
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            setMovie(response.data.results)
        })
    }, [])
    const [urlId, setUrlId] = useState('')
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          autoplay: 1,
        }
      }
      const handleMovie =(id)=>{
        console.log(id);
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
            console.log(response.data);
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
        })
      }
    return (
        <div className='row'>
            <h1>{props.title}</h1>
            <div className="posters">
                {movie.map((obj)=>
                    <img onClick={()=>handleMovie(obj.id)} src={`${imageUrl+obj.backdrop_path}`} alt="" className={props.isSmall ? 'small-posters' : 'poster'} />
                )}
            </div>
            { urlId && <YouTube videoId={urlId.key} opts={opts}/> }
        </div>
    )
}

export default RowPoster
