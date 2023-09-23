'use client';

import { combineReducers } from '@reduxjs/toolkit';
import { guardianApi } from './query/guardian-api';
import { searchSlice } from './features/search/search';
import { sortSlice } from './features/sort/sort';
import { autoScrollSlice } from './features/auto_scroll/auto-scroll';

const combinedReducer = combineReducers({
	[sortSlice.name]: sortSlice.reducer,
	[searchSlice.name]: searchSlice.reducer,
	[autoScrollSlice.name]: autoScrollSlice.reducer,
	[guardianApi.reducerPath]: guardianApi.reducer,
});

export { combinedReducer };
