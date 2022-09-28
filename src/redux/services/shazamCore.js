import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
	reducerPath: 'shazamCoreApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://shazam-core.p.rapidapi.com/v1/',
		prepareHeaders: (headers) => {
			headers.set(
				'X-RapidAPI-Key',
				'60e3dd61bemsh61828b6f6b429d1p1c2533jsn698bcdaf2df5'
			);
			headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getTopCharts: builder.query({ query: () => '/charts/world' }),
	}),
});

export const { useGetTopChartsQuery } = shazamCoreApi;
