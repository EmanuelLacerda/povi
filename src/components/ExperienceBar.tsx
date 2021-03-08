import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'

import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar(){
	const { experienceToNextLevel, currentExperience } = useContext(ChallengesContext);

	let percentualToNextLevel = (currentExperience/experienceToNextLevel)*100;
	console.log(`${percentualToNextLevel}%`);

	return (
		<header className={styles.experienceBar}>
			<span>0 xp</span>
			<div>
				<div style={{width: `${percentualToNextLevel}%`}}> </div>

				<span className={styles.currentExperience} style={{left: `${percentualToNextLevel}%`}}>
					{currentExperience} xp
				</span>
			</div>
			<span>{experienceToNextLevel} xp</span>
		</header>
	)
}