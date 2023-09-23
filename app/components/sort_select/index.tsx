'use client';

import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '@/app/GlobalRedux/hooks/hooks';
import { addSortValue } from '@/app/GlobalRedux/features/sort/sort';
import { setAutoScroll } from '@/app/GlobalRedux/features/auto_scroll/auto-scroll';

interface ISortSelectProps {
	type: 'sort' | 'itemsPage';
	label: string;
	dataArray: string[];
}

function SortSelect({ type, label, dataArray }: ISortSelectProps) {
	const dispatch = useAppDispatch();
	const selector = useAppSelector((state) => state.sortSlice[type]);
	const handleChange = (event: SelectChangeEvent) => {
		dispatch(setAutoScroll(false));
		dispatch(addSortValue({ key: type, value: event.target.value }));
	};

	return (
		<div>
			<FormControl sx={{ m: 1, minWidth: 120 }}>
				<p>{label}</p>
				<Select
					value={selector}
					onChange={handleChange}
					displayEmpty
					sx={{ maxHeight: '40px' }}
					inputProps={{ 'aria-label': 'Without label' }}
				>
					{dataArray.map((item) => (
						<MenuItem key={item} value={item}>
							{item}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
}

export { SortSelect };
