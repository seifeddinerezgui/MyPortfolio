import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Rezgui';

export const lastName = 'Seif eddine';

export const description =
	'I am a software engineer specializing in fintech and data analysis 📊, with extensive experience as a full-stack developer proficient in Angular, Spring Boot, and MySQL ⚙️. My background in actuarial science 📈, coupled with a strong foundation in statistics, probability, algebra, and general mathematics 📚, enables me to approach complex problems with precision and insight. Known for my exceptional soft skills 🤝, I am ambitious and eager to embrace new challenges and opportunities 🌟, constantly striving to enhance my expertise and contribute to innovative solutions in the tech industry 🚀.';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/seifeddinerezgui' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/seif-eddine-rezgui-4652a0223/'
	},
	{
		platform: Platform.Twitter,
		link: 'https://twitter.com/'
	},
	{
		platform: Platform.StackOverflow,
		link: 'https://stackoverflow.com/'
	},
	{
		platform: Platform.Email,
		link: 'rezguiseifeddine@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com'
	},
	{
		platform: Platform.Facebook,
		link: 'https://www.facebook.com'
	}
];

export const skills = getSkills('js', 'css', 'html', 'springboot', 'angular', 'svelte', 'ts');