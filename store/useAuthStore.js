import { defineStore } from "pinia";
import { useApiFetch } from "#imports";
import { useFetchUser } from "#imports";

export const useAuthStore = defineStore('auth', {
    state : () => ({

        user : {},
        openSend : null,
        openReceive : null,
        isLoading : null

    }),

    getters : {
        isLoggedIn : (state) => {
            console.log('check login');
           
            return state.user.id ? true : false;
            
        },
        isAdmin : (state) => {
            return state.user.user_level === 1 ? true : false;
        }
    },
    actions : {
        
        async login (credentials) {

            await useApiFetch('sanctum/csrf-cookie');

            const token = useCookie('XSRF-TOKEN');

            const loginResp = await useApiFetch("login", {
                method : 'POST',
                body : credentials
            });

            await this.fetchUser();

            return loginResp;

        },
        async fetchUser () {

            const {data, error, status} = await useFetchUser();
            
            if (data.value) {
                this.user = data.value;
            } else {

                this.user = {};

            }

            
            return error;
        },
        async logout () {
            await useApiFetch("logout", {
                method : 'POST'
            });

            this.user = {};
            
            navigateTo('/loginRegister', {replace : true});

        },
        async register(info) {
            await useApiFetch('sanctum/csrf-cookie');

            const register = await useApiFetch('register', {
                method : 'POST',
                body : info
            })

            // await fetchUser();

            return register;
        }
    },

    persist : true
})