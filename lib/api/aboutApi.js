import { baseApi } from "./baseApi";

export const aboutApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getAboutValleyJourney: build.query({
            query: () => "/about-valley-journey",
        }),
    }),
});

export const {
    useGetAboutValleyJourneyQuery,
} = aboutApi;
