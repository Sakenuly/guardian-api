import { Article } from '@/component/article';
import { getDate, getTime } from '@/functions/date';
import { INewsItem } from '@/types/api-types';
import Link from 'next/link';
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
		baseUrl + url + `?api-key=${apiKey}&show-blocks=all`
	);
	if (!response.ok) {
		throw new Error(`Request failed with status: ${response.status}`);
	}
	return response.json();
}

export default async function Details({ params: { id } }: IDetailsProps) {
	const data = await getData(id.join('/'));
	const date = data.response.content.webPublicationDate;
	const publicationDate = getDate(date);
	const publicationTime = getTime(date);
	console.log(data);

	return (
		<div className='details'>
			<div className='details__container'>
				<div className='details__info'>
					<Link
						className='details__link link'
						href={data.response.content.webUrl}
					>
						read on Guardian
					</Link>
					<span className='details__time'>
						{publicationDate} {publicationTime}
					</span>
				</div>
				{data.response.content.blocks.main && (
					<Article article={data.response.content.blocks.main} />
				)}
				{data.response.content.blocks.body.map((item) => (
					<Article key={item.id} article={item} />
				))}
			</div>
		</div>
	);
}

// export default function Details({ params: { id } }: IDetailsProps) {
// 	const { data } = useDetailsQuery(id.join('/'));
// 	console.log(data);

// 	return (
// 		<div className='details'>
// 			<div className='details__container'>
// 				{data && data.response.content.blocks.main && (
// 					<Article article={data.response.content.blocks.main} />
// 				)}
// 				{data &&
// 					data.response.content.blocks.body.map((item) => (
// 						<Article key={item.id} article={item} />
// 					))}
// 			</div>
// 		</div>
// 	);
// }
