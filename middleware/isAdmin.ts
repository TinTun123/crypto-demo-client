import { defineNuxtRouteMiddleware, navigateTo } from 'nuxt/app';
import  { useAuthStore }  from '../store/useAuthStore';


export default defineNuxtRouteMiddleware(async (to, from) => {
    const auth = useAuthStore();

    if (!auth.isAdmin) {
        return navigateTo('/loginRegister', {replace : true});
    }
})