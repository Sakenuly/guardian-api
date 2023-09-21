'use client';

import { combinedReducer } from './combine-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { guardianApi } from './query/guardian-api';

export const store = configureStore({
	reducer: combinedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(guardianApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
