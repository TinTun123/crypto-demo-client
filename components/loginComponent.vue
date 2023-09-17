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



            <button @click.stop="login" class="py-[12px] px-[40px] mb-[15px] rounded-[6px] w-full text-[14px] font-[800] text-white bg-[var(--theme-color)]">LOGIN</button>

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

    error.value = {};
    resErr.value = '';
    if (!form.value.email) {
        error.value.type = 'email';
        error.value.msg = 'Please enter your email';
        return;
    }

    if (!form.value.password) {
        error.value.type = 'password';
        error.value.msg = 'Please enter password';

        return;
    }

    const {data : loginData, error : loginErr, status } = await auth.login(form.value);


    if (loginErr.value) {
            resErr.value = loginErr.value.data.message;
            console.log(resErr.value);
            return;
        }

    if (status.value === 'success') {
        if (auth.isAdmin) {
            navigateTo('/users');
        } else {
            navigateTo('/dashboard');
        }
    }
}

</script>


<style>
</style>