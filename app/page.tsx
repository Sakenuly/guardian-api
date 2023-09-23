'use client';
import { NewsGrid } from '@/app/components/news_grid';
import { SortMain } from '@/app/components/sort_main';

export default function Home() {
	return (
		<div className='home'>
			<div className='home__container'>
				<SortMain />
				<NewsGrid />
			</div>
		</div>
	);
}
