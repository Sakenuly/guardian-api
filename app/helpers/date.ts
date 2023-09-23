function getDate(dateArg: Date) {
	const monthList = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const date = new Date(dateArg);
	const year = date.getFullYear();
	const month = monthList[date.getMonth()];
	const day = date.getDate();

	return `${year} ${month} ${day}`;

	// вариант получше const month = date.toLocaleString('default', { month: 'long' });
}
function getTime(dateArg: Date) {
	const time = new Date(dateArg);
	return time.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	});
}

export { getDate, getTime };
