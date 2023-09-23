'use client';

import { createSlice } from '@reduxjs/toolkit';

const initialState = { isActive: false, page: 1 };

const autoScrollSlice = createSlice({
	name: 'autoScrollSlice',
	initialState,
	reducers: {
		setAutoScroll: (state, { payload }) => {
			if (payload) {
				return { ...state, isActive: payload };
			} 
				return initialState;
			
		},
		setPage: (state, { payload }) => ({ ...state, page: payload }),
	},
});

const { setAutoScroll, setPage } = autoScrollSlice.actions;

export { autoScrollSlice, setAutoScroll, setPage };
