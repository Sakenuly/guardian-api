import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { IResult } from '@/types/api-types';
import * as cheerio from 'cheerio';
import { log } from 'console';
import Link from 'next/link';
import { getDate, getTime } from '@/functions/date';

interface INewsGridItemProps {
	arrayItem: IResult;
}

const noImage =
	'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png';

function NewsGridItem({ arrayItem }: INewsGridItemProps) {
	const publicationDate = getDate(arrayItem.webPublicationDate);
	const publicationTime = getTime(arrayItem.webPublicationDate);
	return (
		<Card
			sx={{
				maxWidth: 345,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<CardMedia
				sx={{ height: 140 }}
				image={arrayItem.fields ? arrayItem.fields.thumbnail : noImage}
				title='green iguana'
			/>
			<CardContent sx={{ flex: '1 1 auto' }}>
				<Typography gutterBottom component='p'>
					{publicationDate} {publicationTime}
				</Typography>
				<Typography gutterBottom variant='h5' component='div'>
					{arrayItem.webTitle}
				</Typography>
			</CardContent>
			<CardActions>
				<Link href={`details/${arrayItem.id}`}>
					<Button size='small'>Show More</Button>
				</Link>
			</CardActions>
		</Card>
	);
}
export { NewsGridItem };
