'use client';
import { NewsGrid } from '@/component/news_grid';
import { SortMain } from '@/component/sort_main';
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
