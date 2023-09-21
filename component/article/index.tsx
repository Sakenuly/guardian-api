import { Body } from '@/types/api-types';
import './style.scss';

interface IArticleProps {
	article:Body
}

function Article({ article }:IArticleProps ) {
	return (
		<div className='article'>
			<div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
		</div>
	);
}

export { Article };
