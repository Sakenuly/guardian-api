import { IBody } from '@/app/entities/api-entities';
import './style.scss';
import { noImage } from '@/app/constants/global';

interface IArticleProps {
	article: IBody[];
	image: string;
	headline: string;
	publication: {
		date: string;
		time: string;
	};
	guardianLink: string;
}

function Article({
	article,
	image,
	headline,
	publication,
	guardianLink,
}: IArticleProps) {
	const mainImage = image ?? noImage;

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
						src={mainImage}
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
