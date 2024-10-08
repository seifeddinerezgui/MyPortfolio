import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'two-hands-fingers-counter',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'python script that counts the fingers of two detected hands',
		links: [{ to: 'https://github.com/seifeddinerezgui/two-hands-fingers-counter.git', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'two-hands-fingers-counter',
		period: {
			from: new Date()
		},
		skills: getSkills('py'),
		type: 'script'
	},
	{
		slug: 'RSE_Time',
		color: 'red',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'Developed a frontend for a robust web application using Angular framework.',
		links: [{ to: 'https://rsetime.com/Visitor/', label: 'link' }],
		logo: Assets.Angular,
		name: 'RSETime',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'ts', 'tailwind', 'css', 'js'),
		type: 'Website Frontend',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'CollectiTn',
		color: 'green',
		description:
			'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
		shortDescription:
			'Web application connecting collectors and auction houses. Representatives from auction houses can publish their items, and collectors',
		links: [{ to: 'https://github.com/MedBourguiba/collectiTN.git', label: 'GitHub' }],
		logo: Assets.Symfony,
		name: 'CollectiTn',
		period: {
			from: new Date()
		},
		skills: getSkills('symfony', 'php', 'tailwind', 'css', 'js'),
		type: 'Website',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'LetsDoIt',
		color: 'green',
		description:
			'.',
		shortDescription:
			'TO DO LIST android app.',
		links: [{ to: 'https://github.com/seifeddinerezgui/LetsDoIt.git', label: 'GitHub' }],
		logo: Assets.Android,
		name: 'LetsDoIt',
		period: {
			from: new Date()
		},
		skills: getSkills('android', 'java'),
		type: 'Android App',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'FarmEase',
		color: 'green',
		description:
			'.',
		shortDescription:
			'Empowers farmers & fishermen with credit, investment, equity-based crowdfunding program insurance, and marketplace tools to achieve financial security .',
		links: [{ to: 'https://github.com/KhalilBenKhoud/FarmEase-API.git', label: 'GitHub-Api_Link' },
						{	to: 'https://github.com/KhalilBenKhoud/FarmEase-Client.git', label: 'GitHub-Client_Link'}
		],
		logo: Assets.springboot,
		name: 'FarmEase',
		period: {
			from: new Date()
		},
		skills: getSkills('angular', 'springboot'),
		type: 'micro-finance web application',
		screenshots: [
			{
				label: 'screen 1',
				src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
			}
		]
	},
	{
		slug: 'Password manager',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'Password manager using python',
		links: [{ to: 'https://github.com/seifeddinerezgui/PasswordManager.git', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'Password Manager',
		period: {
			from: new Date()
		},
		skills: getSkills('py'),
		type: 'program'
	},
	{
		slug: 'credit-risk-prediction-using-german-credit-data',
		color: '#5e95e3',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore non dolores voluptatibus vitae praesentium aperiam, iure laboriosam repellendus sunt explicabo pariatur totam enim, nihil animi quisquam. Sit vero quod laborum!',
		shortDescription:
			'credit-risk-prediction-using-german-credit-data',
		links: [{ to: 'https://github.com/seifeddinerezgui/credit-risk-prediction-model.git', label: 'GitHub' }],
		logo: Assets.Python,
		name: 'credit-risk-prediction-using-german-credit-data',
		period: {
			from: new Date()
		},
		skills: getSkills('py'),
		type: 'Jupyter Notebook'
	}
];

export const title = 'Projects';
