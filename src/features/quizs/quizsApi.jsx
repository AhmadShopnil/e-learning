import { apiSlice } from "../api/apiSlice"

export const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getQuizs: builder.query({
            query: (videoId) => `/quizzes?video_id=${videoId}`,

        }),
        getQuizMark: builder.query({
            query: ({ studentId, quizId }) => "/quizMark"
        }),
        getStudentAllQuizs: builder.query({
            query: (studentId) => `/quizMark?student_id=${studentId}`,
            // providesTags: [""]
        }),


    })
});


export const { useGetQuizsQuery, useGetQuizMarkQuery, useGetStudentAllQuizsQuery } = quizApi;