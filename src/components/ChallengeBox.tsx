import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import { CountdownContext } from '../contexts/CountdownContext'

import styles from '../styles/components/ChallengeBox.module.css'

export function ChallengeBox(){
	const { resetChallenge, completeChallenge, activeChallenge } = useContext(ChallengesContext);
	const { resetCountdown } = useContext(CountdownContext);

	function handleFailedChallenge(){
		resetCountdown();
		resetChallenge();
	}

	function handleSucceededChallenge(){
		resetCountdown();
		completeChallenge();
	}

	return (
		<div className={styles.challengeBoxContainer}>
			{ activeChallenge ? (
				<div className={styles.challengeActive}>
					<header>Ganhe {activeChallenge.amount} xp</header>

					<main>
						{activeChallenge.type === 'body' ? <img src="icons/body.svg" /> : <img src="icons/eye.svg" />}
						<strong>Novo desafio</strong>
						<p>{activeChallenge.description}</p>
					</main>

					<footer>
						<button
							type="button"
							className={styles.challengeFailedButton}
							onClick={handleFailedChallenge}
						>
							Falhei
						</button>

						<button
							type="button"
							className={styles.challengeSucceededButton}
							onClick={handleSucceededChallenge}
						>
							Completei
						</button>
					</footer>
				</div>
			) : (
				<div className={styles.challengeNotActive}>
					<strong>Finalize um ciclo para receber um desafio</strong>
					<p>
						<img src="icons/level-up.svg" alt="Level Up" />
						Avance de level completando desafios.
					</p>
				</div>
			)}
		</div>
	)
}