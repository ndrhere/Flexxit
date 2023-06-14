import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [search, setSearch] = useState('Search Movie here')
  const [poster, setPoster] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription]= useState('');
  const [vote, setVote] = useState('')
  const [language, setLanguage] = useState('');
  const [release, setRelease] = useState('');
  const [popular, setPopular]= useState(null)
  const [video, setVideo] = useState([])
  const navigate = useNavigate()

  const handleChange = (event) =>{
    setSearch(event.target.value)
  }


  const handleClick = async (event) =>{
      event.preventDefault()
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=73aa236fd95713e5219f38bd2742d323`)
      const data = await response.json()
      console.log(data)
     if(data.results && data.results.length>0){
      let movie = data.results[0]
      let {title, backdrop_path, overview, vote_count, original_language, release_date, popularity} = movie;
      setPoster(backdrop_path)
      setTitle(title)
      setDescription(overview)
      setVote(vote_count)
      setLanguage(original_language)
      setRelease(release_date)
      setPopular(popularity)
     }
}

const videoTitle = title;
const apiKey = "AIzaSyCbOgm-wXNvkdVkACEsfEmTftKKG1w8gJ0"

useEffect(()=>{
const fetchYoutube =async () =>{
const response = await fetch(`https://www.googleapis.com/youtube/v3/search?q=${encodeURIComponent(videoTitle)}&key=${apiKey}`)
const data = await response.json()
console.log("data for youTube", data)
const videoId = data.items[0]?.id?.videoId || ''
const videourl = `https://www.youtube.com/watch?v=${videoId}`;
setVideo(videourl)

  }
  fetchYoutube()
}, [title])

const handleClicks = (event) =>{
event.preventDefault();
navigate('/login')
}

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/home">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/drop" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/action">Action</a></li>
            <li><a className="dropdown-item" href="/another">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/else">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a href="/dis"className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" onChange={handleChange} aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit" onClick= {handleClick} >Search</button>
      </form>
      <div>
        <button className="btn btn-danger mx-3" onClick={handleClicks}>Logout</button>
      </div>
    </div>
  </div>
</nav>

{poster && (
<div >
<img style={{width:"99vw", height:"99vh", opacity:"0.61"}}src={`https://image.tmdb.org/t/p/w500${poster}`} alt="Movie Poster" />
<div className="others" style={{marginBottom:"0px"}}>
<h4 style={{fontSize:"80px"}}>{title}</h4>
<p className="my-4"style={{fontSize:"20px", width:"70vw"}}>{description}</p>
<p>{language} | {release} | {popular}</p>
<p> <span style={{color:"white"}}></span> {vote} likes</p>
<div>
<button className="btn btn-primary change" onClick = {()=>{window.open(video, '_blank')}}>Play</button>
</div>

</div>
</div>
)}
    </div>
  )
}

export default Navbar