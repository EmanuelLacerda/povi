import styles from '../styles/components/Profile.module.css'

export function Profile(){
	return (
		<div className={styles.profileContainer}>
			<img src="https://github.com/EmanuelLacerda.png" alt="Emanuel Lacerda" />
			<div>
				<strong>Emanuel Lacerda</strong>
				<p>
					<img src="icons/level.svg" alt="Level" />
					Level 1
				</p>
			</div>
		</div>
	);
}