export default function MovieCard(props) {
    return (
        <div className="MovieCard">
            <h2><b>Title: </b> {props.title}</h2> 
            <p><b>Year: </b> {props.year}</p> 
            <p><b>Rated: </b> {props.rated}</p> 
        </div> 
    ); 
} 
