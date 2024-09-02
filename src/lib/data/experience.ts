import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'open-sourcer',
		company: 'AttijariLeasing',
		description: 'Creating awesome tools for developers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Lac 1',
		period: { from: new Date(2024, 7, 1), to: new Date(2024, 9, 1) },
		skills: getSkills('ts', 'js', 'angular', 'springboot'),
		name: 'Software Developer',
		color: 'orange',
		links: [],
		logo: Assets.Attijari,
		shortDescription: 'Developed a full-featured web application for Attijari Leasing, integrating various company services using Angular, Spring Boot, and MySQL. Focused on creating a secure, user-friendly platform with comprehensive backend and frontend functionalities.'
	},
	{
		slug: 'software-freelance',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Lac 1',
		period: { from: new Date(2023, 8, 1), to: new Date(2023, 9, 15) },
		skills: getSkills('angular', 'ts', 'css', 'html', 'js'),
		name: 'FrontEnd Developper',
		color: 'blue',
		links: [],
		logo: Assets.Vermeg,
		shortDescription: 'Developed a frontend for a robust web application using Angular framework.'
	},	
	{
		slug: 'software-freelance-junior',
		company: 'Self-employed',
		description: 'Creating awesome applications for customers.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 0, 1), to: new Date() },
		skills: getSkills('css', 'html', 'js'),
		name: 'Junior Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating awesome applications for customers.'
	}
];

export const title = 'Experience';
