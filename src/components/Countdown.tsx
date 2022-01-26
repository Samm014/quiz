import styles from '../styles/Countdown.module.css'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

interface CountdownProps {
    key: any
    duration: number
    tempoEsgotado: () => void
}

export default function Countdown(props: CountdownProps){

    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className={styles.timer}>Acabou...</div>;
        }
      
        return (
          <div className={styles.timer}>
                <div className={styles.text}>Tempo</div>
                <div className={styles.value}>{remainingTime}</div>
                <div className={styles.text}>{remainingTime === 1?"segundo":"segundos"}</div>
          </div>
        );
      };

      function renderSize(){
        const width = window.screen.width;
        if(width < 1500){
          return 130
        }
      }

    return(
        <div className={styles.countdown}>
             <CountdownCircleTimer
                duration={props.duration}
                size={renderSize()}
                isPlaying
                onComplete={props.tempoEsgotado}
                colors={[
                    ['#BCE596', 0.33],
                    ['#F7B801', 0.33],
                    ['#ED827A', 0.33],
                ]}>
                {renderTime}
            </CountdownCircleTimer>
        </div>
    )
}