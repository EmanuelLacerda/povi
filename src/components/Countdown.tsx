import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/Countdown.module.css'
import { useState, useEffect } from 'react';

export function Countdown(){
	const { time, minutes,seconds, isActive, hasFinished, warnThatThereAreTenMinutesLeft, warnThatThereAreFiveMinutesLeft, decreaseTime, endCycle, startCountdown, resetCountdown } = useContext(CountdownContext);
	const { startNewChallenge } = useContext(ChallengesContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	useEffect(() => {
		if (isActive && time > 0){
			if (Notification.permission === 'granted'){
				if (time == 10*60){
					warnThatThereAreTenMinutesLeft();
				} else if (time == 5*60){
					warnThatThereAreFiveMinutesLeft();
				}
			}

			decreaseTime();
		} else if (time == 0){
			endCycle();
			startNewChallenge();
		}
	}, [isActive, time])
	
	return (
		<div className={styles.generalContainer}>
			<div className={styles.countdownContainer}>
				<div>
					<span>{minuteLeft}</span>
					<span>{minuteRight}</span>
				</div>
				<span>:</span>
				<div>
					<span>{secondLeft}</span>
					<span>{secondRight}</span>
				</div>
			</div>

			{hasFinished ? (
				<button
					disabled
					className={styles.countdownButton}
				>
					Ciclo encerrado
				</button>
			) : (
					<>
						{ isActive ? (
							<button
								type="button"
								className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
								onClick={resetCountdown}
							>
								Abandonar ciclo
							</button>
						) : (
							<button
								type="button"
								className={styles.countdownButton}
								onClick={startCountdown}
							>
								Iniciar um ciclo
							</button>
						)}
					</>
			)}

		</div>
	);
}