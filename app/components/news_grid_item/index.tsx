import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IResult } from '@/app/entities/api-entities';
import Link from 'next/link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { getDate, getTime } from '@/app/helpers/date';
import './style.scss';
import { noImage } from '@/app/constants/global';
import { useAppDispatch } from '@/app/GlobalRedux/hooks/hooks';
import { spinnerIsActive } from '@/app/GlobalRedux/features/spinner/spinner';

interface INewsGridItemProps {
	arrayItem: IResult;
}

function NewsGridItem({ arrayItem }: INewsGridItemProps) {
	const publicationDate = getDate(arrayItem.webPublicationDate);
	const publicationTime = getTime(arrayItem.webPublicationDate);
	const coverImage = arrayItem.fields.thumbnail ?? noImage;
	const dispatch = useAppDispatch();

	function cardButtonClickHandler() {
		dispatch(spinnerIsActive(true));
	}

	return (
		<Card
			className='news-grid-item'
			sx={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia
				sx={{ height: 140 }}
				image={coverImage}
				title='green iguana'
				className='news-grid-item__image'
			/>
			<CardContent sx={{ flex: '1 1 auto' }}>
				<Typography gutterBottom component='p'>
					{publicationDate} {publicationTime}
				</Typography>
				<Typography
					className='news-grid-item__text'
					gutterBottom
					variant='h5'
					component='div'
				>
					{arrayItem.webTitle}
				</Typography>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
				<Link href={`details/${arrayItem.id}`}>
					<Button
						onClick={cardButtonClickHandler}
						sx={{ color: 'black' }}
						size='small'
					>
						Details <ArrowForwardIcon />
					</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
export { NewsGridItem };
