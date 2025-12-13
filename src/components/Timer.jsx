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
        const secs = s % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return(
        <div style={{
            padding: '15px', background: '#333', color: 'white',
            borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '15px'
        }}>
            <AlarmClock size={24} />

            {isActive ? (
                <span style={{ fontSize: '1.2rem', fontWeight: 'bold', width: '60px' }}>{formatTime(seconds)}</span>
            ): (
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <input
                        type="number"
                        value={inputMinutes}
                        onChange={(e) => setInputMinutes(e.target.value)}
                        style={{ width: '40px', background: '#444', border: 'none', color: 'white', padding: '5px', borderRadius: '4px' }}
                    />
                    <span>Min</span>
                </div>
            )}
        </div>
    )
};

export default Timer;