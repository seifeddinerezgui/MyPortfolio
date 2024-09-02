import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Masters degree in Actuary Science',
		description: '',
		location: 'France',
		logo: Assets.LeMans,
		name: '',
		organization: 'Le Mans University',
		period: { from: new Date(2023, 9, 15) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['solvability II', 'Risk Management', 'Insurance and Pension Systems', 'Actuarial Modelling', 'Data Analysis and Interpretation', 'Advanced Statistical Analysis']
	},
	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Tunisia',
		logo: Assets.Esprit,
		name: '',
		organization: 'ESPRIT',
		period: { from: new Date(2021, 9, 15), to: new Date(2025, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['C', 'angular', 'spring boot','MySql','Algorithm', 'Algebra', 'Python', 'C++', 'Java', 'English']
	},
	{
		degree: 'Preparatory classes for engineering schools',
		description: '',
		location: 'Tunisia',
		logo: Assets.FSM,
		name: '',
		organization: 'Faculty of Sciences of Monastir',
		period: { from: new Date(2019, 8, 1), to: new Date(2021, 6, 1) },
		shortDescription: '',
		slug: 'dummy-education-item-3',
		subjects: ['maths', 'physics', 'Chimistry', 'python']
	}
];

export const title = 'Education';
