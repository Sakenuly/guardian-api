import './style.scss';
import { v4 as uuidv4 } from 'uuid';
import { useEffect } from 'react';
import { useSearchQuery } from '@/app/GlobalRedux/query/guardian-api';
import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks/hooks';
import {
	setAutoScroll,
	setPage,
} from '@/app/GlobalRedux/features/auto_scroll/auto-scroll';
import { NewsGridItem } from '../news_grid_item';
import { SpinnerLoading } from '../spinner/spinner';

function NewsGrid() {
	const sortSelector = useAppSelector((state) => state.sortSlice);
	const searchSelector = useAppSelector((state) => state.searchSlice);
	const autoScrollSelector = useAppSelector((state) => state.autoScrollSlice);
	const autoScrollPage = useAppSelector((state) => state.autoScrollSlice.page);
	const dispatch = useAppDispatch();

	const { data, isFetching } = useSearchQuery({
		sortArgs: sortSelector,
		search: searchSelector,
		page: autoScrollPage.toString(),
		autoScroll: autoScrollSelector.isActive,
	});

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY || window.pageYOffset;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			if (scrollTop + windowHeight >= documentHeight) {
				dispatch(setAutoScroll(true));
				dispatch(setPage(autoScrollPage + 1));
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [autoScrollPage, autoScrollSelector.isActive, dispatch]);

	return (
		<div className='news-grid'>
			{isFetching && !autoScrollSelector.isActive && <SpinnerLoading />}
			{data &&
				data.response.results.map((item) => (
					<div className='news-grid__item' key={uuidv4()}>
						<NewsGridItem arrayItem={item} />
					</div>
				))}
		</div>
	);
}

export { NewsGrid };
