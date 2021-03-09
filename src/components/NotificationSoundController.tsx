import { useContext } from 'react'
import { NotificationSoundControllerContext } from '../contexts/NotificationSoundControllerContext'

export function NotificationSoundController(){
	const { notificationSoundIsActive, activateNotificationSound, muteNotificationSound } = useContext(NotificationSoundControllerContext);

	return (
		<>
			{ notificationSoundIsActive ? (
				<button
					onClick={muteNotificationSound}
				>
					<img
						src="icons/sound.svg"
					>

					</img>
				</button>
			) : (
				<button
					onClick={activateNotificationSound}
				>
					<img
						src="icons/mute.svg"
					>

					</img>
				</button>
			)}
		</>
	)
}