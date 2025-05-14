//qui creo la card degli attori poi con map in app.jsx ne ricrera una per ognuno

function ActorCard({name, birthyear, nationality, image, bio, awards}){
    return(
    <div className="Actor-Card">

        <img src={image} alt={name} />
        <p><strong>Nato nel:</strong>{birthyear}</p>
        <p><strong>Nazionalità:</strong> {nationality}</p>
        <p><strong>Biografia:</strong> {bio}</p>
        <p><strong>Premi:</strong> {awards}</p>



    </div>
    );
}

export default ActorCard;