import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { MainSearch } from '../search';
import './style.scss';

function Header() {
	return (
		<Box className='header'>
			<Box className='header__container'>
				<AppBar
					sx={{ background: 'white', boxShadow: 0, color: 'black' }}
					position='static'
				>
					<Toolbar>
						<Typography
							variant='h6'
							noWrap
							component='div'
							sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
						>
							<Link className='link' href='/'>
								{' '}
								Guardian Api
							</Link>
						</Typography>

						<MainSearch />
					</Toolbar>
				</AppBar>
			</Box>
		</Box>
	);
}

export { Header };
