<template>
    <mainLayout>
        <div class="grid grid-cols-3 gap-4 m-4 tablet:m-[30px]">
            <div class="p-[15px] flex flex-col gap-y-3 rounded-[15px] bg-white border border-[#eeeeee]/20 dark:border-none dark:shadow-none shadow-input-sha dark:bg-[var(--secondary-dark)]">
                <div class="flex justify-between">
                    <div class="flex justify-center gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img src="/btc.png" class="w-full h-full" alt="">
                        </div>
                        <span class="text-[20px] text-[#444444] font-[500] dark:text-[var(--text-dark)]">Bitcoin</span>
                    </div>

                    <div>
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">QR:</label>       
                        <div  @click="openFile" 
                        class="bg-white cursor-pointer w-[80px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                            

                            <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                </svg>
                            </div>

                            <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                        </div>
                    </div>
                </div>
                

                <div class="flex flex-col">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Wallet Address</label>
                    <input type="text" placeholder="Wallet Address" class=" bg-white w-full dark:bg-[var(--teriary-dark)] mb-3 text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
                </div>
            </div>

            <div class="p-[15px] flex flex-col gap-y-3 rounded-[15px] bg-white border border-[#eeeeee]/20 dark:border-none dark:shadow-none shadow-input-sha dark:bg-[var(--secondary-dark)]">
                <div class="flex justify-between">
                    <div class="flex justify-center gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img src="/bch.png" class="w-full h-full" alt="">
                        </div>
                        <span class="text-[20px] text-[#444444] font-[500] dark:text-[var(--text-dark)]">Bitcoin Cash</span>
                    </div>

                    <div>
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">QR:</label>       
                        <div  @click="openFile" 
                        class="bg-white cursor-pointer w-[80px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                            

                            <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                </svg>
                            </div>

                            <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                        </div>
                    </div>
                </div>
                

                <div class="flex flex-col">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Wallet Address</label>
                    <input type="text" placeholder="Wallet Address" class=" bg-white w-full mb-3 dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
                </div>
            </div>

            <div class="p-[15px] flex flex-col gap-y-3 rounded-[15px] bg-white border border-[#eeeeee]/20 dark:border-none dark:shadow-none shadow-input-sha dark:bg-[var(--secondary-dark)]">
                <div class="flex justify-between">
                    <div class="flex justify-center gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img src="/dash.png" class="w-full h-full" alt="">
                        </div>
                        <span class="text-[20px] text-[#444444] font-[500] dark:text-[var(--text-dark)]">Dash Coin</span>
                    </div>

                    <div>
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">QR:</label>       
                        <div  @click="openFile" 
                        class="bg-white cursor-pointer w-[80px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                            

                            <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                </svg>
                            </div>

                            <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                        </div>
                    </div>
                </div>
                

                <div class="flex flex-col">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Wallet Address</label>
                    <input type="text" placeholder="Wallet Address" class=" bg-white w-full dark:bg-[var(--teriary-dark)] mb-3 text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
                </div>
            </div>

            <div class="p-[15px] flex flex-col gap-y-3 rounded-[15px] bg-white border border-[#eeeeee]/20 dark:border-none dark:shadow-none shadow-input-sha dark:bg-[var(--secondary-dark)]">
                <div class="flex justify-between">
                    <div class="flex justify-center gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img src="/xrp.png" class="w-full h-full" alt="">
                        </div>
                        <span class="text-[20px] text-[#444444] font-[500] dark:text-[var(--text-dark)]">Ripple Wallet</span>
                    </div>

                    <div>
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">QR:</label>       
                        <div  @click="openFile" 
                        class="bg-white cursor-pointer w-[80px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                            

                            <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                </svg>
                            </div>

                            <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                        </div>
                    </div>
                </div>
                

                <div class="flex flex-col">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Wallet Address</label>
                    <input type="text" placeholder="Wallet Address" class=" bg-white w-full mb-3 dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
                </div>
            </div>

            <div class="p-[15px] flex flex-col gap-y-3 rounded-[15px] bg-white border border-[#eeeeee]/20 dark:border-none dark:shadow-none shadow-input-sha dark:bg-[var(--secondary-dark)]">
                <div class="flex justify-between">
                    <div class="flex justify-center gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img src="/eth.png" class="w-full h-full" alt="">
                        </div>
                        <span class="text-[20px] text-[#444444] font-[500] dark:text-[var(--text-dark)]">Ethereum Wallet</span>
                    </div>

                    <div>
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">QR:</label>       
                        <div  @click="openFile" 
                        class="bg-white cursor-pointer w-[80px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                            

                            <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                </svg>
                            </div>

                            <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                        </div>
                    </div>
                </div>
                

                <div class="flex flex-col">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Wallet Address</label>
                    <input type="text" placeholder="Wallet Address" class=" bg-white w-full mb-3 dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
                </div>
            </div>

            <div class="p-[15px] flex flex-col gap-y-3 rounded-[15px] bg-white border border-[#eeeeee]/20 dark:border-none dark:shadow-none shadow-input-sha dark:bg-[var(--secondary-dark)]">
                <div class="flex justify-between">
                    <div class="flex justify-center gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img src="/ltc.png" class="w-full h-full" alt="">
                        </div>
                        <span class="text-[20px] text-[#444444] font-[500] dark:text-[var(--text-dark)]">Litecoin Wallet</span>
                    </div>

                    <div>
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">QR:</label>       
                        <div  @click="openFile" 
                        class="bg-white cursor-pointer w-[80px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                            

                            <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                </svg>
                            </div>

                            <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                        </div>
                    </div>
                </div>
                

                <div class="flex flex-col">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Wallet Address</label>
                    <input type="text" placeholder="Wallet Address" class=" bg-white w-full mb-3 dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
                </div>
            </div>
        </div>
    </mainLayout>
</template>

<script setup>
import mainLayout from '../layouts/mainLayout';
import { useThemeStore } from '../store/useThemeStore';

definePageMeta({
    middleware : ['auth', 'is-admin']
})

const themeStore = useThemeStore();
const coverImg = ref('/coinremitterqrcode.png')

const imgInput = ref(null);
const imgfront = ref('');

function openFile() {
    imgInput.value.click();
}

function onFileSelected(e) {
    const files = e.target.files;
    if (files.length) {
        const reader = new FileReader();

        reader.onload = (e) => {
            
            coverImg.value = e.target.result;
            console.log(coverImg.value);
            
        }
        reader.readAsDataURL(files[0]);
        imgfront.value = files[0];
    }
}

</script>

<style>
</style>