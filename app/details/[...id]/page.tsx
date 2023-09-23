import { Article } from '@/app/components/article';
import { getDate, getTime } from '@/app/helpers/date';
import { INewsItem } from '@/app/entities/api-entities';
import './style.scss';

interface IDetailsProps {
	params: {
		id: string[];
	};
}

async function getData(url: string): Promise<INewsItem> {
	const baseUrl = 'https://content.guardianapis.com/';
	const apiKey = 'decaa581-37d8-4e56-8454-27c206172250';
	const response = await fetch(
		`${baseUrl + url}?api-key=${apiKey}&show-blocks=all&show-fields=all`
	);
	if (!response.ok) {
		throw new Error(`Request failed with status: ${response.status}`);
	}
	return response.json();
}

export default async function Details({ params: { id } }: IDetailsProps) {
	const data = await getData(id.join('/'));
	const date = data.response.content.webPublicationDate;
	const publication = { date: getDate(date), time: getTime(date) };

	return (
		<div className='details'>
			<div className='details__container'>
				<Article
					article={data.response.content.blocks.body}
					key={data.response.content.id}
					image={data.response.content.fields.thumbnail}
					headline={data.response.content.fields.headline}
					publication={publication}
					guardianLink={data.response.content.webUrl}
				/>
			</div>
		</div>
	);
}
