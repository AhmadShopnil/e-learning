import { apiSlice } from "../api/apiSlice"

export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        createAssignment: builder.mutation({
            query: (data) => ({
                url: "/assignments",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["assignments"]
        }),
        getAssignment: builder.query({
            query: (videoId) => `/assignments?video_id=${videoId}`,
            providesTags: ["assignment"]
        }),
        getAssignments: builder.query({
            query: () => "/assignments",
            providesTags: ["assignments"]
        }),

        deleteAssignment: builder.mutation({
            query: (assignmentId) => ({
                url: `/assignments/${assignmentId}`,
                method: "DELETE",
            }),
            invalidatesTags: ["assignments"]
        }),
        checkUserAssignment: builder.query({
            query: ({ assignmentId, studentId }) => `/assignmentMark?student_id=${studentId}&&assignment_id=${assignmentId}`,
            providesTags: ["isSubmit"]
        }),

        getStudentAllAssignment: builder.query({
            query: (studentId) => `/assignmentMark?student_id=${studentId}`,
            // providesTags: [""]
        }),

        getAssignmentMark: builder.query({
            query: ({ studentId, assignmentId }) => "/assignmentMark"
        }),
        getAssignmentMarks: builder.query({
            query: () => "/assignmentMark",
            providesTags: ["assignmentMarks"]
        }),

        submitAssignment: builder.mutation({
            query: (data) => ({
                url: "/assignmentMark",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["isSubmit"]
        }),
        setAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["assignmentMarks"]
        }),
    })
});


export const { useGetAssignmentMarkQuery, useGetAssignmentQuery, useGetAssignmentsQuery, useSubmitAssignmentMutation, useCheckUserAssignmentQuery, useDeleteAssignmentMutation, useCreateAssignmentMutation, useGetAssignmentMarksQuery, useSetAssignmentMarkMutation, useGetStudentAllAssignmentQuery } = assignmentApi;