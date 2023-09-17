import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import  {useAuthStore}  from '../store/useAuthStore.js';


export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuthStore();
    console.log('from middleware', auth.isLoggedIn);
    
    if (!auth.isLoggedIn) {
        
        await auth.fetchUser();

        if (auth.isLoggedIn) {

            if(auth.isAdmin) {

                return navigateTo('/users', {replace : true});

            } else {

                return navigateTo('/dashboard', {replace : true});

            }


        } else {

            return navigateTo('loginRegister', {replace : true});
            
        }
    }
})