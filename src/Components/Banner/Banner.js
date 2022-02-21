import React,{useEffect, useState} from 'react'
import {API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    function random(max) {
    let num = Math.random() * max + 0;
    return Math.floor(num);
	};
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            const randomNum = random(response.data.results.length-1);
			setMovie(response.data.results[randomNum])
        })
        
    }, [])
    return (
        <div>
            <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path: null})`}} className='banner'>
            <div className="content">
                <h1 className="title">{movie ? movie.title : null}</h1>
                <div className="banner_btns">
                    <button className="btns">Play</button>
                    <button className="btns">My list</button>
                </div>
                <h1 className="description">{movie ? movie.overview: null}</h1>
            </div>
            <div className="fade"></div>
        </div>
        </div>
        
    )
}

export default Banner
