<template>
    <div class="min-h-screen bg-white flex justify-center items-center">
        <div>
            <svg class="spinner-container" width="128" height="128" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path :class="[themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]']" class="fill-[var(--theme-color)]" d="M64 2.19342e-08C47.2863 -0.00043726 31.2356 6.53741 19.279 18.2159C7.32242 29.8944 0.408772 45.7869 0.016 62.496C0.752 32.264 23.744 8 52 8C80.72 8 104 33.072 104 64C104 67.1826 105.264 70.2348 107.515 72.4853C109.765 74.7357 112.817 76 116 76C119.183 76 122.235 74.7357 124.485 72.4853C126.736 70.2348 128 67.1826 128 64C128 47.0261 121.257 30.7475 109.255 18.7452C97.2525 6.74284 80.9739 2.19342e-08 64 2.19342e-08ZM64 128C80.7137 128 96.7644 121.463 108.721 109.784C120.678 98.1056 127.591 82.2131 127.984 65.504C127.248 95.736 104.256 120 76 120C47.28 120 24 94.928 24 64C24 60.8174 22.7357 57.7652 20.4853 55.5147C18.2348 53.2643 15.1826 52 12 52C8.8174 52 5.76516 53.2643 3.51472 55.5147C1.26428 57.7652 0 60.8174 0 64C0 80.9739 6.74284 97.2525 18.7452 109.255C30.7475 121.257 47.0261 128 64 128Z" />
            </svg>
            <h1 class="text-[14px] text-[var(--text-dark)] font-[500] text-center mt-8">Please wait...</h1>
        </div>
    </div>
</template>

<script setup>

import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore();
const themeStore = useThemeStore();

onMounted(async () => {

    if (!auth.isLoggedIn) {
        
        await auth.fetchUser();

        if (auth.isLoggedIn) {

            if(auth.isAdmin) {

                return navigateTo('/adminDashboard', {replace : true});

            } else {

                return navigateTo('/dashboard', {replace : true});

            }


        } else {

            return navigateTo('loginRegister', {replace : true});
            
        }
    }
})
</script>

<style>
</style>