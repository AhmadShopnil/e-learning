import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        //Start Sign Up Api
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg,
                { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    //start--- set loggedIn user in localstorage
                    localStorage.setItem("auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    );
                    //End set loggedIn user in localstorage

                    //Start--- set loggedInd user data on redux storage
                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))
                } catch (err) {
                }
            }
        }),

        // Start login api 
        login: builder.mutation({
            query: (data) => ({
                url: "/login",
                method: "POST",
                body: data
            }),
            async onQueryStarted(arg,
                { queryFulfilled, dispatch }) {

                try {
                    const result = await queryFulfilled;
                    //start set loggedIn user on local storage
                    localStorage.setItem("auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.user
                        })
                    )
                    //End set loggedIn user on local storage

                    //start set loggedIn user on Redux state
                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        user: result.data.user
                    }))

                } catch (error) {
                }
            }
        }),
        // End login api 





    })
});

export const { useLoginMutation, useRegisterMutation } = authApi;
