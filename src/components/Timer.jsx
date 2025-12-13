import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, AlarmClock } from 'lucide-react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputMinutes, setInputMinutes] = useState(0);

    useEffect(() => {
        let interval = null;
        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((seconds) => seconds - 1);
            }, 1000);
        }
    })
};

export default Timer;