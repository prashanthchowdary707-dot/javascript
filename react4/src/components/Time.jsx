import { useState, useEffect } from "react";

function Time() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        console.log("Time is running");

        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div>
            <h1>{time.toLocaleTimeString()}</h1>
        </div>
    );
}

export default Time;