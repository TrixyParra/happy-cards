import HighlightCard from "./HighlightCard";
import MovieCard from "./MovieCard";

const movieData = {
    Title: "The Avengers",
    Year: "2012",
    Rated: "PG-13",
}; 

export default function Home() {
    return (
        <div>
            <h1 className="HeaderText">Send Them a Smile with Happy Cards!</h1>
            <h2 style={{ fontStyle: "italic" }}>
                Choose from thousands of themes...
            </h2> 
            <div style={{ display: "flex", justifyContent:"space-evenly", marginTop: 80 }}>
                <HighlightCard header="Select a Holiday" /> 
                <HighlightCard header="Pick a Design" /> 
                <HighlightCard header="Let us Deliver" /> 
            </div> 
            <div style={{ display: "flex", justifyContent:"center", marginTop: 80 }}>
                <MovieCard title={movieData.Title} year={movieData.Year} rated={movieData.Rated} /> 
            </div> 
        </div> 
    ); 
} 
