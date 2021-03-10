import { useContext } from 'react'
import { NotificationSoundControllerContext } from '../contexts/NotificationSoundControllerContext'

import styles from '../styles/components/NotificationSoundController.module.css'

export function NotificationSoundController(){
	const { notificationSoundIsActive, activateNotificationSound, muteNotificationSound } = useContext(NotificationSoundControllerContext);

	return (
		<div className={styles.notificationSoundController}>
			{ notificationSoundIsActive ? (
				<div>
					<button
						onClick={muteNotificationSound}
					>
						<img
							src="icons/sound.svg"
						>

						</img>
					</button>

					<span>Som de notificações: Ativo.</span>
				</div>
			) : (
				<div>
					<button
						onClick={activateNotificationSound}
					>
						<img
							src="icons/mute.svg"
						>

						</img>
					</button>

					<span>Som de notificações: Mutado.</span>
				</div>
			)}
		</div>
	)
}