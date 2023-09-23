'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	sort: 'newest',
	itemsPage: '10',
};

const sortSlice = createSlice({
	name: 'sortSlice',
	initialState,
	reducers: {
		addSortValue: (state, { payload: { key, value } }) => ({ ...state, [key]: value }),
	},
});

const { addSortValue } = sortSlice.actions;

export { sortSlice, addSortValue };
