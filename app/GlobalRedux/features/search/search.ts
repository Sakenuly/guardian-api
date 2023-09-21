'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const searchSlice = createSlice({
	name: 'searchSlice',
	initialState,
	reducers: {
		addSearchValue: (state, { payload }) => {
			return payload;
		},
	},
});

const { addSearchValue } = searchSlice.actions;

export { searchSlice, addSearchValue };
