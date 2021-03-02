import { createContext, useState, ReactNode } from 'react';

interface CountdownContextData{
	minutes: number;
	seconds: number;
	time: number;
	hasFinished: boolean;
	isActive: boolean;
	decreaseTime: () => void;
	endCycle: () => void;
	startCountdown: () => void;
	resetCountdown: () => void;
}

interface CountdownProviderProps{
	children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({ children }: CountdownProviderProps){
	
	const timeInSeconds = Math.floor(0.04*60);

	const [ time, setTime ] = useState(timeInSeconds);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	console.log(time);

	const [isActive, setIsActive] = useState(false);

	const [hasFinished, setHasFinished] = useState(false)

	function endCycle(){
		setHasFinished(true);

		setIsActive(false);
	}

	function decreaseTime(){
		setTime(time-1);
	}

	function startCountdown(){
		setIsActive(true);
	}

	function resetCountdown(countdownTimeout){
		clearTimeout(countdownTimeout);
		
		setIsActive(false);

		setHasFinished(false);		
		
		setTime(timeInSeconds);
	}

	return (
	  	<CountdownContext.Provider	value={{
	  		minutes,
	  		seconds,
	  		time,
	  		hasFinished,
	  		isActive,
	  		decreaseTime,
	  		endCycle,
	  		startCountdown,
	  		resetCountdown,
	  	}}
	  	>
	  		{children}
	  	</CountdownContext.Provider>
	)
}