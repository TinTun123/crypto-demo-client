<template>
    <div class="rounded-[15px]">

        <div class="dark:bg-[var(--secondary-dark)] bg-white py-[20px] px-[20px]">

            <p class="text-center text-[15px] font-[300] text-[#555555] dark:text-[var(--text-dark-02)] mb-[15px]">
                <span class="float-left w-[15px] h-[15px]">
                    <svg class="w-full h-full" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.50322 12.1082C0.786897 11.4164 0.215531 10.5888 -0.177537 9.67376C-0.570604 8.75873 -0.777501 7.77458 -0.786155 6.77873C-0.794808 5.78289 -0.605046 4.79529 -0.227939 3.87357C0.149168 2.95185 0.706066 2.11446 1.41026 1.41026C2.11446 0.706066 2.95185 0.149168 3.87357 -0.227939C4.79529 -0.605046 5.78289 -0.794808 6.77873 -0.786155C7.77458 -0.777501 8.75873 -0.570604 9.67376 -0.177537C10.5888 0.215531 11.4164 0.786897 12.1082 1.50322C13.4744 2.91774 14.2304 4.81226 14.2133 6.77873C14.1962 8.74521 13.4074 10.6263 12.0169 12.0169C10.6263 13.4074 8.74521 14.1962 6.77873 14.2133C4.81226 14.2304 2.91774 13.4744 1.50322 12.1082ZM6.05572 3.05572V7.55572H7.55572V3.05572H6.05572ZM6.05572 9.05572V10.5557H7.55572V9.05572H6.05572Z" fill="#DDDDDD"/>
                    </svg>
                </span>
                Please Verify the Address and Amount properly. Sent BTC can not be reversed in any case.
            </p>

            <div class="w-[180px] h-[180px] mx-auto mb-[15px]">
                <img src="/coinremitterqrcode.png" class="w-full h-full" alt="">
            </div>

            <div class="border border-[#eeeeee]/60 dark:border-[#eeeeee]/20 rounded-[5px] shadow-input-sha dark:shadow-none">
                <div class="flex justify-center items-center gap-x-4 py-[25px] px-[20px] border-b border-[#eeeeee]/60 dark:border-[#eeeeee]/20">
                    <div class="w-8 h-8">
                        <img :src="coinType.logo" class="w-full h-full" alt="">
                    </div>

                    <h1 class="text-[20px] font-[600] text-black dark:text-[var(--text-dark)]"> 
                        {{ coinType.walletType }}
                    </h1>
                </div>

                <div class="py-[25px] px-[20px] ">
                    <h1 class="text-center text-[16px] font-[300] dark:text-[#666666] text-[#212529] mb-[8px]">Address</h1>

                    <div @click.stop="copyToClipboard" class="py-[12px] px-[15px] group laptop:cursor-pointer relative flex justify-between items-center bg-[var(--light-bg)] dark:bg-[var(--teriary-dark)]">
                        <div class="overflow-hidden">
                            <span class="text-[15px] font-[400] text-[#212529] dark:text-[var(--text-dark)] overflow-hidden" :style="{'text-overflow' : 'ellipsis'}">MgzB63dVsdbshsbhsbsbhsbsdhsdhvs</span>
                        </div>

                        <div class="pl-[14px] border-l border-black/10 dark:border-[#eeeeee]/20 ">
                            <svg width="17" height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[#666666] laptop:cursor-pointer laptop:group-hover:fill-[#666666]/60 transition-colors" d="M13.6384 18H5.5134C4.82076 18 4.15649 17.6952 3.66672 17.1527C3.17695 16.6102 2.90179 15.8744 2.90179 15.1072V6.10715C2.90179 5.33992 3.17695 4.60411 3.66672 4.06159C4.15649 3.51908 4.82076 3.21429 5.5134 3.21429H13.6384C14.331 3.21429 14.9953 3.51908 15.4851 4.06159C15.9749 4.60411 16.25 5.33992 16.25 6.10715V15.1072C16.25 15.8744 15.9749 16.6102 15.4851 17.1527C14.9953 17.6952 14.331 18 13.6384 18Z" />
                                <path class="fill-[#666666] laptop:cursor-pointer laptop:group-hover:fill-[#666666]/60 transition-colors" d="M4.64286 1.92857H13.1988C13.0182 1.36496 12.6846 0.877047 12.2438 0.531758C11.803 0.186469 11.2765 0.000722012 10.7366 0H2.61161C1.91897 0 1.25469 0.304782 0.764922 0.847298C0.275151 1.38981 0 2.12562 0 2.89286V11.8929C0.000651816 12.4909 0.16834 13.0741 0.480059 13.5624C0.791779 14.0507 1.23226 14.4202 1.74107 14.6202V5.14286C1.74107 4.29038 2.04679 3.47281 2.59098 2.87001C3.13518 2.26722 3.87326 1.92857 4.64286 1.92857Z" />
                            </svg>
                        </div>

                        <div class="text-white px-2 py-1 hidden group-hover:block rounded-[4px] absolute right-2 -top-[70%] copy-container transition-all bg-black group-active:bg-black/60">
                            {{ copyText }}
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex gap-x-2 justify-end mt-4">
                <div>
                    <button @click="emitClose" class="py-[15px] px-[30px] text-[15px] font-[600]  text-black dark:text-[var(--text-dark)] rounded-[4px] bg-[#F1F1F1] dark:bg-[#373737] laptop:hover:bg-black/10 laptop:active:bg-black/20 transition-colors">CANCLE</button>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';


const themeStore = useThemeStore();

const emit = defineEmits(['close']);
const copyText = ref('copy');
const props = defineProps(['coinType']);


const {coinType} = toRefs(props);


function emitClose () {

    emit('close');

}

function copyToClipboard() {
    const texttoCopy = `MgzB63dVsdbshsbhsbsbhsbsdhsdhvs`;

    copyText.value = 'copied';
    navigator.clipboard.writeText(texttoCopy);

    setTimeout(() => {
        copyText.value = 'copy';
    }, 2000);
}

</script>

<style>
</style>