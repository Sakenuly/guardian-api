import { Body } from '@/types/api-types';
import './style.scss';
import Link from 'next/link';

interface IArticleProps {
	article: Body[];
	articleText: string;
	image: string;
	headline: string;
	publication: {
		date: string;
		time: string;
	};
	guardianLink: string;
}
const noImage =
	'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';

function Article({
	article,
	articleText,
	image,
	headline,
	publication,
	guardianLink,
}: IArticleProps) {
	return (
		<div className='article'>
			<p className='article__headline'>{headline}</p>
			<div className='article__info'>
				<span className='article__time'>
					{publication.date} {publication.time}
				</span>
				<a href={guardianLink} className='article__link'>
					read on Guardian
				</a>
			</div>
			<div className='article__content'>
				<div className='article__body-text'>
					<img
						className='article__image'
						src={image ? image : noImage}
						alt='Article Thumbnail'
					/>
					{article.map((item) => (
						<div
							key={item.id}
							dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export { Article };
