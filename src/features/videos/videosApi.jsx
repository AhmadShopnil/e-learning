import { apiSlice } from "../api/apiSlice"

export const projectApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getVideos: builder.query({
            query: () => "/videos",
            providesTags: ["videos"]
        }),
        getVideo: builder.query({
            query: (videoId) => `/videos/${videoId}`,
            providesTags: ["video"]
        }),
        createVideo: builder.mutation({
            query: (data) => ({
                url: "/videos",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["videos"]
        }),
        deleteVideo: builder.mutation({
            query: (videoId) => ({
                url: `/videos/${videoId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["videos"]
        }),



    })
});


export const { useGetVideosQuery, useGetVideoQuery, useCreateVideoMutation, useDeleteVideoMutation } = projectApi;