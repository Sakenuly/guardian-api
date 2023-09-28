'use client';

import React, { useEffect } from 'react';
import { Puff } from 'react-loader-spinner';
import './style.scss';

function SpinnerLoading() {
	useEffect(() => {
		document.body.style.overflow = 'hidden';

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, []);
	return (
		<div className='spinner-container'>
			<div className='spinner'>
				<Puff
					height={80}
					width={80}
					radius={1}
					color='#4fa94d'
					ariaLabel='puff-loading'
					wrapperStyle={{}}
					wrapperClass=''
					visible
				/>
			</div>
		</div>
	);
}

export { SpinnerLoading };
