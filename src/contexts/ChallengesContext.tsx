import { createContext, useState, useEffect, ReactNode } from 'react';
import challenges from '../../challenges.json'

interface Challenge{
	type: 'body' | 'eye';
	description: string;
	amount: numer;
}

interface ChallengesContextData{
	level: number;
	levelUp: () => void;

	experienceToNextLevel: number;

	activeChallenge: Challenge;	
	startNewChallenge: () => void;

	completeChallenge: () => void;
	resetChallenge: () => void;

	currentExperience: number;
	currentExperienceUp: () => void;

	challengesCompleted: number;
	challengesCompletedUp: () => void;
}

interface ChallengesProviderProps{
	children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps){
	const [level, setLevel] = useState(1);

	const experienceToNextLevel = Math.pow((level+1)*4,2);

	const [activeChallenge, setActiveChallenge] = useState(null);	

	const [currentExperience, setCurrentExperience] = useState(0);
	const [challengesCompleted, setChallengesCompleted] = useState(0);

	useEffect(() => {
		Notification.requestPermission();
	}, [])

	function levelUp(){
		setLevel(level + 1);
	}

	function startNewChallenge(){
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);

		new Audio('/notification.mp3').play();

		if (Notification.permission === 'granted'){
			new Notification('Novo desafio', {
				body: `Valendo ${challenge.amount}xp!`
			})
		}
	}

	function completeChallenge(){
		resetChallenge();

		currentExperienceUp();

		challengesCompletedUp();
	}

	function resetChallenge(){
		setActiveChallenge(null);
	}

	function currentExperienceUp(){
		const { amount } = activeChallenge;

		let finalExperience = currentExperience + amount;

		if (finalExperience >= experienceToNextLevel){
			finalExperience = finalExperience - experienceToNextLevel;
			levelUp();
		}

		setCurrentExperience(finalExperience);
	}

	function challengesCompletedUp(){
		setChallengesCompleted(challengesCompleted+1);
	}


	return (
	  	<ChallengesContext.Provider	value={{
	  		level,
	  		levelUp,

	  		experienceToNextLevel,

	  		activeChallenge,
	  		startNewChallenge,

	  		completeChallenge,
	  		resetChallenge,


	  		currentExperience,
	  		currentExperienceUp,

	  		challengesCompleted,
	  		challengesCompletedUp,
	  	}}
	  	>
	  		{children}
	  	</ChallengesContext.Provider>
	)
}