<template>
        <div class="rounded-[8px] bg-white dark:bg-[var(--secondary-dark)] p-[32px] w-full transition-colors">

            <h1 :class="[themestore.isgrad ? 'border-[var(--theme-from)]' : 'border-[var(--theme-color)]']" class="text-[18px] border-l-2 transition-colors pl-4 font-[600] border-partial text-[#121D33] dark:text-[var(--text-dark)] text-left mb-[25px]">Welcome Back!</h1>

            <div class="flex flex-col gap-y-3 mb-[15px]">
                <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Email</label>
                <input v-model="form.email" :class="[error.type === 'email' ? 'border border-red-300' : 'border-[#eeeeee] dark:border-none']" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="example@gmail.com"/>
                <span v-if="error.type === 'email'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
            </div>

            <div class="flex flex-col gap-y-3 mb-[15px]">
                <label :class="[themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" for="Email" class="text-[15px] fron-[600] ">Password</label>
                <input v-model="form.password" :class="[error.type === 'password' ? 'border border-red-300' : 'border-[#eeeeee] dark:border-none']" class="bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none" placeholder="" type="password"/>
                <span v-if="error.type === 'password'" class="text-[12px] text-red-500 font-[500]">{{ error.msg }}</span>
            </div>



            <button @click.stop="login" class="py-[12px] px-[40px] flex justify-center items-center gap-x-3 mb-[15px] rounded-[6px] w-full text-[14px] font-[800] text-white bg-[var(--theme-color)]">
                <span v-if="isLoading" class="spinner-container">
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.9854 8.98286C16.9661 7.90692 16.7346 6.84536 16.304 5.85914C15.8734 4.87291 15.2523 3.98146 14.4762 3.23594C13.3334 2.1315 11.8883 1.39125 10.3242 1.10901C8.76017 0.826778 7.14752 1.01526 5.6907 1.65058C4.73804 2.0686 3.87621 2.67446 3.16301 3.4176C2.4498 4.16073 1.88626 5.04218 1.51469 5.99484C0.769867 7.90847 0.812538 10.0391 1.63338 11.9214C2.03798 12.842 2.62526 13.676 3.34466 14.3654C4.06406 15.0549 4.9166 15.5988 5.8383 15.958C6.75854 16.3156 7.7402 16.4885 8.72724 16.4669C10.1883 16.4386 11.6081 15.9776 12.8071 15.1422C14.0061 14.3068 14.9303 13.1345 15.463 11.7738C15.6724 11.2349 15.8162 10.6728 15.8913 10.0996L15.9522 10.1017C16.0949 10.1016 16.236 10.0719 16.3667 10.0145C16.4974 9.95715 16.6147 9.87329 16.7113 9.76824C16.8079 9.6632 16.8817 9.53926 16.928 9.40425C16.9743 9.26925 16.992 9.12612 16.9802 8.9839H16.9843L16.9854 8.98286ZM15.3453 11.7232C14.9665 12.5809 14.4184 13.3581 13.7455 14.0001C13.0725 14.6421 12.2778 15.1478 11.4191 15.4802C10.5614 15.8122 9.64663 15.9715 8.72724 15.9487C7.82064 15.9291 6.92682 15.7308 6.09703 15.365C5.26724 14.9993 4.5178 14.4734 3.89169 13.8174C3.27424 13.1706 2.79025 12.4084 2.46735 11.5746C1.82584 9.91423 1.8689 8.06728 2.58708 6.43865C2.94007 5.64391 3.44994 4.92348 4.07438 4.32897C4.69882 3.73446 5.43783 3.2669 6.23361 2.96036C7.02938 2.65278 7.88089 2.50829 8.72724 2.53099C9.57359 2.5537 10.4086 2.73948 11.1713 3.08009C11.9351 3.41966 12.6266 3.91096 13.1974 4.51166C13.7682 5.11236 14.2172 5.82247 14.5103 6.58728C14.8031 7.35073 14.9424 8.16446 14.9201 8.98183H14.9242C14.9019 9.25004 14.9852 9.51636 15.1564 9.72401C15.3276 9.93166 15.5732 10.0642 15.8407 10.0934C15.7412 10.6543 15.5745 11.2012 15.3443 11.7221L15.3453 11.7232Z" fill="#ffffff"/>
                    </svg>
                </span>
                    
                <span>
                    LOGIN
                </span>
            </button>

            <div class="flex gap-x-1 justify-center">
                <span class="text-[14px] font-[400] text-[#6D7C90]">
                    Create new account?
                </span>
                <span @click="changeTabTo1" class="text-[14px] font-[500] laptop:cursor-pointer laptop:hover:text-white/90 transition-colors" :class="themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]'">
                    Register
                </span>
            </div>
        </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';

const themestore = useThemeStore();
const auth = useAuthStore();
const isLoading = ref(false);

const form = ref({
    email : '',
    password : ''
})

const error = ref({
    type : '',
    msg : ''
});

const resErr = ref('');

const emit = defineEmits(['changeTab']);

function changeTabTo1 () {
    emit('changeTab', 1);
}

async function login() {
    isLoading.value = true;
    error.value = {};
    resErr.value = '';
    if (!form.value.email) {
        error.value.type = 'email';
        error.value.msg = 'Please enter your email';
        isLoading.value = false;
        return;
    }

    if (!form.value.password) {
        error.value.type = 'password';
        error.value.msg = 'Please enter password';
        isLoading.value = false;
        return;
    }

    const {data : loginData, error : loginErr, status } = await auth.login(form.value);
    isLoading.value = false;

    if (loginErr.value) {
        console.log(loginErr.value.data);
            resErr.value = loginErr.value.data.message;
            error.value.type = 'password';
            error.value.msg = resErr.value;
            return;
        }

    if (status.value === 'success') {
            auth.userEmail = loginData.value.email;
            if (loginData.value.message && loginData.value.message === 'User already authenticated') {
                if (user.isAdmin) {
                    navigateTo('/users');
                } else {
                    navigateTo('/dashboard');
                }
            }
            emit('changeTab', 2);
    }
}

</script>


<style>
</style>