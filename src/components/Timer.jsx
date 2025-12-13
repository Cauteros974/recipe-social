import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Clock, X } from 'lucide-react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false); // To open/close the timer panel

  useEffect(() => {
    let interval = null;
    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0 && isActive) {
      setIsActive(false);
      alert("⏰ Time's up! Check your dish!");
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const toggleTimer = () => setIsActive(!isActive);
  
  const resetTimer = () => {
    setIsActive(false);
    setSeconds(0);
  };

  const startWithMinutes = () => {
    if (inputMinutes > 0) {
      setSeconds(inputMinutes * 60);
      setIsActive(true);
    }
  };

  const formatTime = (totalSeconds) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      {/* Clock icon to open the timer */}
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        style={{ 
          background: isActive ? '#e67e22' : '#eee', 
          border: 'none', padding: '8px', borderRadius: '50%', 
          cursor: 'pointer', display: 'flex', alignItems: 'center', transition: '0.3s'
        }}
      >
        <Clock size={20} color={isActive ? 'white' : '#555'} />
        {isActive && <span style={{ marginLeft: '5px', fontWeight: 'bold', color: 'white', fontSize: '0.8rem' }}>{formatTime(seconds)}</span>}
      </button>

      {/* Timer drop-down panel */}
      {isExpanded && (
        <div style={{ 
          position: 'absolute', top: '45px', right: '0', 
          background: 'white', border: '1px solid #ddd', padding: '15px', 
          borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
          width: '200px', zIndex: 1000 
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <span style={{ fontWeight: 'bold' }}>Cooking timer</span>
            <X size={16} onClick={() => setIsExpanded(false)} style={{ cursor: 'pointer', color: '#999' }} />
          </div>

          {!isActive && seconds === 0 ? (
            <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
              <input 
                type="number" 
                placeholder="Min"
                value={inputMinutes}
                onChange={(e) => setInputMinutes(e.target.value)}
                style={{ width: '100%', padding: '5px', borderRadius: '5px', border: '1px solid #ddd' }}
              />
              <button onClick={startWithMinutes} style={{ background: '#e67e22', color: 'white', border: 'none', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer' }}>
                Start
              </button>
            </div>
          ) : (
            <div style={{ textAlign: 'center', marginBottom: '10px' }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '10px' }}>{formatTime(seconds)}</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button onClick={toggleTimer} style={{ border: 'none', background: '#eee', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}>
                  {isActive ? <Pause size={18} /> : <Play size={18} />}
                </button>
                <button onClick={resetTimer} style={{ border: 'none', background: '#eee', padding: '8px', borderRadius: '5px', cursor: 'pointer' }}>
                  <RotateCcw size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Timer;