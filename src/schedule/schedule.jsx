import "./schedule.css";
import Navbar from "../navbar/navbar.jsx";


export default function Schedule() {

    const events = [
        {
            name: "Call for Papers",
            date: "August 25 , 2024",
        },
        {
            name: "Draft Paper Submission",
            date: "December 31 , 2024",
        },
        {
            name: "Notification of Acceptance",
            date: "February 10 , 2025",
        },
        {
            name: "Final Camera Ready Paper",
            date: "February 25 , 2025",
        },
    ];

    return (
        <>
            <Navbar/>
            <div className="schedule-main">
                <h1>Schedule</h1>
                <div className="schedule">
                    {events.map((event) => (
                        <>
                            <div className="event" key={null}>
                                <h2>{event.name}</h2>
                                <p>{event.date}</p>
                            </div>
                            <hr/>
                        </>
                    ))}
                </div>
            </div>
        </>
    );
}