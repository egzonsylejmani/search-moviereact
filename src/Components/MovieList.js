import react from "react";

const MovieList = (props) => {
    return (
        <>
           {props.movies.map((movie, index) => (
                <div className="image-container">
                <img src ={movie.Poster} alt ="movie"></img>
                <div className="detials"></div>
               </div>
               
            
           ))}
        </>
    );
};

export default MovieList