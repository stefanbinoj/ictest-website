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
            <h2>Conference Tracks : </h2>
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