import { v4 as uuidv4 } from 'uuid';

const sortSelectArray = [
	{ id: uuidv4(), name: 'Newest', value: 'newest' },
	{ id: uuidv4(), name: 'Oldest', value: 'oldest' },
	{ id: uuidv4(), name: 'Relevance', value: 'relevance' },
];

const itemsCountArray = [
	{ id: uuidv4(), name: '10', value: '10' },
	{ id: uuidv4(), name: '20', value: '20' },
	{ id: uuidv4(), name: '30', value: '30' },
	{ id: uuidv4(), name: '40', value: '40' },
	{ id: uuidv4(), name: '50', value: '50' },
];

export { sortSelectArray, itemsCountArray };
