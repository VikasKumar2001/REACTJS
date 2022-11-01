import './App.css';
const MovieCard=({movie1})=>{
    return(
<div className="movie">
<div>
  <p>{movie1.Year}</p>
  </div>
  <div>
  <img src={movie1.Poster !=='N/A' ? movie1.Poster : 'https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc='}/>
</div>
 <div>
  <span>{movie1.Type}</span>
  <h3>{movie1.Title}</h3>
  </div>
</div>
    )
}
export default MovieCard;