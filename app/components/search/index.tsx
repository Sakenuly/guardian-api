'use client';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '@/app/GlobalRedux/hooks/hooks';
import { addSearchValue } from '@/app/GlobalRedux/features/search/search';
import { setAutoScroll } from '@/app/GlobalRedux/features/auto_scroll/auto-scroll';
import './style.scss';

const Search = styled('div')(({ theme }) => ({
	position: 'relative',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: '#e5e7eb',
	transition: 'background 0.15s ease',
	'&:hover': {
		backgroundColor: '#DFDFDF',
	},
	marginLeft: 0,
	width: '100%',
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	height: '100%',
	position: 'absolute',
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		// vertical padding + font size from searchIcon
		paddingLeft: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			width: '12ch',
			'&:focus': {
				width: '20ch',
			},
		},
	},
}));

function MainSearch() {
	const [inputValue, setInputValue] = useState('');
	const dispatch = useAppDispatch();

	function handleInputChange(
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) {
		setInputValue(e.target.value);
	}

	function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(setAutoScroll(false));
		dispatch(addSearchValue(inputValue));
	}

	return (
		<div className='main-search'>
			<form
				className='main-search__form'
				action='#'
				onSubmit={handleFormSubmit}
			>
				<Search>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search…'
						inputProps={{ 'aria-label': 'search' }}
						onChange={handleInputChange}
					/>
				</Search>
				<Button variant='contained' type='submit'>
					Find
				</Button>
			</form>
		</div>
	);
}

export { MainSearch };
