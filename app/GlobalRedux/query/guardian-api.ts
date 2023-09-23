'use client';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IApiData, INewsItem } from '@/app/entities/api-entities';

const apiKey = 'decaa581-37d8-4e56-8454-27c206172250';

interface ISearchArg {
	sortArgs: ISort;
	search: string;
	page: string;
	autoScroll: boolean;
}

interface ISort {
	sort: string;
	itemsPage: string;
}

const guardianApi = createApi({
	reducerPath: 'guardianApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://content.guardianapis.com/' }),
	endpoints: (builder) => ({
		search: builder.query<IApiData, ISearchArg>({
			query: ({ sortArgs: { itemsPage, sort }, search, page }) => ({
				url: `search?$`,
				params: {
					'api-key': apiKey,
					'show-fields': 'all',
					'page-size': itemsPage,
					'order-by': sort,
					q: search,
					page,
				},
			}),
			serializeQueryArgs: ({ endpointName }) => endpointName,
			merge: (currentCache, newItems, data) => {
				if (data.arg.autoScroll) {
					currentCache.response.results.push(...newItems.response.results);
				} else {
					return newItems;
				}
			},
			forceRefetch() {
				return true;
			},
		}),
		details: builder.query<INewsItem, string>({
			query: (url) => ({
				url,
				params: {
					'api-key': apiKey,
					'show-blocks': 'all',
					'show-fields': 'all',
				},
			}),
		}),
	}),
});

const { useSearchQuery, useDetailsQuery } = guardianApi;

export { guardianApi, useSearchQuery, useDetailsQuery };
