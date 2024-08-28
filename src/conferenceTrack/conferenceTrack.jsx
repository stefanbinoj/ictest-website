import"./conferenceTrack.css"
export default function ConfernceTrack(){
    const topics = [
        "Artificial Intelligence and Machine Learning",
        "Image Processing",
        "Cybersecurity and Network Technologies",
        "Power Systems and Renewable Energy",
        "Robotics, Control Systems, and Automation",
        "Communication Systems",
        "Biomedical Engineering and Healthcare Technologies",
        "Data Science and Big Data Analytics",
        "VLSI and Embedded Systems",
        "Internet of Things and Smart Systems",
        "Blockchain Technologies"
      ];
    return(
        <>
        <div className="conference">
            <h1>Conference Tracks</h1>
            <p>ICTEST25 conference will offer a comprehensive platform for exploring the latest developments across various ​engineering and technology domains. Participants will have the opportunity to engage with cutting-edge research ​and innovations in both established and emerging fields. The conference tracks are designed to cover a wide range ​of topics, ensuring a diverse and enriching experience for all attendees</p>
            <h2>The tracks include:</h2>
            <div className="conference-track">
                <ul>
                    {topics.map((topic, index) => (
                    <li key={index}>{topic}</li>
                    ))}
                </ul>
            </div>
        </div>
        







        </>
    )
}