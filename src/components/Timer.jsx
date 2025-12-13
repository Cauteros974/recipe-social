import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, AlarmClock } from 'lucide-react';

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputMinutes, setInputMinutes] = useState(0);
};

export default Timer;