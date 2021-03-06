import { createContext, useState, useEffect, ReactNode } from 'react';
import Cookies from 'js-cookie';
import challenges from '../../challenges.json';

import { LevelUpModal } from '../components/LevelUpModal'

interface Challenge{
	type: 'body' | 'eye';
	description: string;
	amount: number;
}

interface ChallengesContextData{
	level: number;
	levelUp: () => void;

	isLevelUpModalOpen: boolean;
	closeLevelUpModal: () => void;

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
	level: number;
	currentExperience: number;
	challengesCompleted: number;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children, ...rest }: ChallengesProviderProps){
	const [level, setLevel] = useState(rest.level ?? 1);

	const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);

	const experienceToNextLevel = Math.pow((level+1)*4,2);

	const [activeChallenge, setActiveChallenge] = useState(null);	

	const [currentExperience, setCurrentExperience] = useState(rest.currentExperience ?? 0);
	const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);

	console.log(rest.level, rest.currentExperience, rest.challengesCompleted);

	useEffect(() => {
		Notification.requestPermission();
	}, [])

	useEffect(() => {
		Cookies.set('level', String(level));
		Cookies.set('currentExperience', String(currentExperience));
		Cookies.set('challengesCompleted', String(challengesCompleted));

		console.log(1);
	}, [level, currentExperience, challengesCompleted])

	function levelUp(){
		setLevel(level + 1);
		setIsLevelUpModalOpen(true);
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

	function closeLevelUpModal(){
		setIsLevelUpModalOpen(false);
	}


	return (
	  	<ChallengesContext.Provider	value={{
	  		level,
	  		levelUp,

	  		isLevelUpModalOpen,
	  		closeLevelUpModal,

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

	  		{isLevelUpModalOpen && (<LevelUpModal />)}
	  	</ChallengesContext.Provider>
	)
}