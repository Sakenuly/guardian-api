import './style.scss';

function Article({ article }: any) {
	return (
		<div className='article'>
			<div dangerouslySetInnerHTML={{ __html: article.bodyHtml }} />
		</div>
	);
}

export { Article };
