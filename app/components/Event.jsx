export default function Event({id, name, date, time, location}){
    return (
        <div style={{border: '1px solid white', padding: '15px', margin: '10px 0px'}}>
            <h4>{name}</h4>
            <p>{date}</p>
            <p>{time}</p>
            <p>{location}</p>
        </div>
    )
}