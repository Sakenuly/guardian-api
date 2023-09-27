'use client';

import { NewsGrid } from '@/app/components/news_grid';
import { SortMain } from '@/app/components/sort_main';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './GlobalRedux/hooks/hooks';
import { SpinnerLoading } from './components/spinner/spinner';
import { spinnerIsActive } from './GlobalRedux/features/spinner/spinner';

export default function Home() {
	const pathName = usePathname();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(spinnerIsActive(false));
	}, [pathName, dispatch]);

	const selector = useAppSelector((state) => state.spinnerSLice);
	return (
		<div className='home'>
			<div className='home__container'>
				{selector && <SpinnerLoading />}
				<SortMain />
				<NewsGrid />
			</div>
		</div>
	);
}
