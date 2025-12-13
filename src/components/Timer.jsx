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
        } else if (seconds === 0) {
            setInputMinutes(false);
            if (isActive) alert("Time's up! Time to check the dish! 🔔");
            clearImmediate(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleStart = () => {
        if(seconds === 0) setSeconds(inputMinutes * 60);
        setIsActive(true);
    };

    const formatTime = (s) => {
        const mins = Math.floor(s / 60);
    }
};

export default Timer;