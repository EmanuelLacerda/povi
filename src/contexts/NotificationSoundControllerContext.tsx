import { createContext, useState, ReactNode } from 'react';

interface NotificationSoundControllerContextData{
	notificationSoundIsActive: boolean;
	activateNotificationSound: () => void;
	muteNotificationSound: () => void;
}

interface NotificationSoundControllerProviderProps{
	children: ReactNode;
}

export const NotificationSoundControllerContext = createContext({} as NotificationSoundControllerContextData);

export function NotificationSoundControllerProvider({ children }: NotificationSoundControllerProviderProps){
	const [notificationSoundIsActive, setNotificationSoundIsActive] = useState(true);

	function activateNotificationSound(){
		setNotificationSoundIsActive(true);
	}

	function muteNotificationSound(){
		setNotificationSoundIsActive(false);
	}

	return (
	  	<NotificationSoundControllerContext.Provider	value={{
	  		notificationSoundIsActive,
	  		activateNotificationSound,
	  		muteNotificationSound
	  	}}
	  	>
	  		{children}
	  	</NotificationSoundControllerContext.Provider>
	)
}