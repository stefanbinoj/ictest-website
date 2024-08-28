import Schedule from "../schedule/schedule";
import RegistrationFees from "../registrationFees/registrationFees";
import "../schedule/schedule.css"

export default function ForAuthors() {
    return (
        <div className="schedule-main">
            <Schedule />
            <RegistrationFees />
        </div>
    );
}