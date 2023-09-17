<template>
    <div class="flex gap-x-4 justify-start overflow-visible">

        <div class="flex items-center flex-none justify-center w-[50%]">
            
            <div class="grid grid-cols-2 w-full gap-4 h-full">
                <div @click.stop="selectedCoin = {coinName : 'BitCoin', logo : '/btc.png', bal : '23.4553 BTC'}" class="p-4 pb-2 bg-white laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-white dark:laptop:hover:bg-[#333333]/60 dark:laptop:active:bg-[#333333] transition shadow-input-sha rounded-[12px] dark:bg-[var(--teriary-dark)] border border-[#eeeeee]/20 dark:border-none  dark:shadow-none">
                    <div class="flex gap-x-2 mb-4">
                        <div class="w-[48px] aspect-square">
                            <img src="/btc.png" class="w-full h-full" alt="">
                        </div>

                        <div class="flex flex-col text-[#444444] dark:text-[var(--text-dark)]">
                            <h1 class="text-[18px] font-[500]">BitCoin</h1>
                            <span class="text-[16px] font-[400]">23.4553 BTC</span>
                        </div>
                    </div>

                    <div class="relative">
                        <input type="text" placeholder="Amount to top up" class=" bg-white w-full pl-3 dark:bg-[var(--secondary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-1 placeholder-gray-500 focus:outline-none">
                        <button class="text-[12px] absolute right-0 font-[400] text-white h-[33px] rounded-[4px] px-2 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)] laptop:hover:bg-[#444444] laptop:active:bg-[#444444]/60']">SENT</button>
                    </div>
                </div>

                <div @click.stop="selectedCoin = {coinName : 'Ripple Coin', logo : '/xrp.png', bal : '12.45 RC'}" class="p-4 pb-2 bg-white laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-white dark:laptop:hover:bg-[#333333]/60 dark:laptop:active:bg-[#333333] transition shadow-input-sha rounded-[12px] dark:bg-[var(--teriary-dark)] border border-[#eeeeee]/20 dark:border-none  dark:shadow-none">
                    <div class="flex gap-x-2 mb-4">
                        <div class="w-[48px] aspect-square">
                            <img src="/xrp.png" class="w-full h-full" alt="">
                        </div>

                        <div class="flex flex-col text-[#444444] dark:text-[var(--text-dark)]">
                            <h1 class="text-[18px] font-[500]">Ripple Coin</h1>
                            <span class="text-[16px] font-[400]">12.45 RC</span>
                        </div>
                    </div>
                    <div class="relative">
                        <input type="text" placeholder="Amount to top up" class=" bg-white w-full pl-3 dark:bg-[var(--secondary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-1 placeholder-gray-500 focus:outline-none">
                        <button class="text-[12px] absolute right-0 font-[400] text-white h-[33px] rounded-[4px] px-2 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)] laptop:hover:bg-[#444444] laptop:active:bg-[#444444]/60']">SENT</button>
                    </div>
                </div>

                <div @click.stop="selectedCoin = {coinName : 'USDT', logo : '/usdt.png', bal : '213.4553 USDT'}" class="p-4 pb-2 bg-white laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-white dark:laptop:hover:bg-[#333333]/60 dark:laptop:active:bg-[#333333] transition shadow-input-sha rounded-[12px] dark:bg-[var(--teriary-dark)] border border-[#eeeeee]/20 dark:border-none  dark:shadow-none">
                    <div class="flex gap-x-2 mb-4">
                        <div class="w-[48px] aspect-square">
                            <img src="/usdt.png" class="w-full h-full" alt="">
                        </div>

                        <div class="flex flex-col text-[#444444] dark:text-[var(--text-dark)]">
                            <h1 class="text-[18px] font-[500]">USDT</h1>
                            <span class="text-[16px] font-[400]">213.4553 USDT</span>
                        </div>
                    </div>

                    <div class="relative">
                        <input type="text" placeholder="Amount to top up" class=" bg-white w-full pl-3 dark:bg-[var(--secondary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-1 placeholder-gray-500 focus:outline-none">
                        <button class="text-[12px] absolute right-0 font-[400] text-white h-[33px] rounded-[4px] px-2 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)] laptop:hover:bg-[#444444] laptop:active:bg-[#444444]/60']">SENT</button>
                    </div>
                </div>

                <div @click.stop="selectedCoin = {coinName : 'Doge Coin', logo : '/doge.png', bal : '123.453 DOGE'}" class="p-4 pb-2 bg-white laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-white dark:laptop:hover:bg-[#333333]/60 dark:laptop:active:bg-[#333333] transition shadow-input-sha rounded-[12px] dark:bg-[var(--teriary-dark)] border border-[#eeeeee]/20 dark:border-none  dark:shadow-none">
                    <div class="flex gap-x-2 mb-4">
                        <div class="w-[48px] aspect-square">
                            <img src="/doge.png" class="w-full h-full" alt="">
                        </div>

                        <div class="flex flex-col text-[#444444] dark:text-[var(--text-dark)]">
                            <h1 class="text-[18px] font-[500]">Doge Coin</h1>
                            <span class="text-[16px] font-[400]">123.453 DOGE</span>
                        </div>
                    </div>

                    <div class="relative">
                        <input type="text" placeholder="Amount to top up" class=" bg-white w-full pl-3 dark:bg-[var(--secondary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-1 placeholder-gray-500 focus:outline-none">
                        <button class="text-[12px] absolute right-0 font-[400] text-white h-[33px] rounded-[4px] px-2 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)] laptop:hover:bg-[#444444] laptop:active:bg-[#444444]/60']">SENT</button>
                    </div>
                    
                </div>

                <div @click.stop="selectedCoin = {coinName : 'Dash Coin', logo : '/dash.png', bal : '12.4553 DAH'}" class="p-4 pb-2 bg-white laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-white dark:laptop:hover:bg-[#333333]/60 dark:laptop:active:bg-[#333333] transition shadow-input-sha rounded-[12px] dark:bg-[var(--teriary-dark)] border border-[#eeeeee]/20 dark:border-none  dark:shadow-none">
                    <div class="flex gap-x-2 mb-4">
                        <div class="w-[48px] aspect-square">
                            <img src="/dash.png" class="w-full h-full" alt="">
                        </div>

                        <div class="flex flex-col text-[#444444] dark:text-[var(--text-dark)]">
                            <h1 class="text-[18px] font-[500]">Dash Coin</h1>
                            <span class="text-[16px] font-[400]">12.4553 DAH</span>
                        </div>
                    </div>

                    <div class="relative">
                        <input type="text" placeholder="Amount to top up" class=" bg-white w-full pl-3 dark:bg-[var(--secondary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-1 placeholder-gray-500 focus:outline-none">
                        <button class="text-[12px] absolute right-0 font-[400] text-white h-[33px] rounded-[4px] px-2 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)] laptop:hover:bg-[#444444] laptop:active:bg-[#444444]/60']">SENT</button>
                    </div>
                </div>

                <div @click.stop="selectedCoin = {coinName : 'BitCoin Cash', logo : '/bch.png', bal : '000.4553 BCH'}" class="p-4 pb-2 bg-white laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-white dark:laptop:hover:bg-[#333333]/60 dark:laptop:active:bg-[#333333] transition shadow-input-sha rounded-[12px] dark:bg-[var(--teriary-dark)] border border-[#eeeeee]/20 dark:border-none  dark:shadow-none">
                    <div class="flex gap-x-2 mb-4">
                        <div class="w-[48px] aspect-square">
                            <img src="/bch.png" class="w-full h-full" alt="">
                        </div>

                        <div class="flex flex-col text-[#444444] dark:text-[var(--text-dark)]">
                            <h1 class="text-[18px] font-[500]">BitCoin Cash</h1>
                            <span class="text-[16px] font-[400]">000.4553 BCH</span>
                        </div>
                    </div>

                    <div class="relative">
                        <input type="text" placeholder="Amount to top up" class=" bg-white w-full pl-3 dark:bg-[var(--secondary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-1 placeholder-gray-500 focus:outline-none">
                        <button class="text-[12px] absolute right-0 font-[400] text-white h-[33px] rounded-[4px] px-2 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)] laptop:hover:bg-[#444444] laptop:active:bg-[#444444]/60']">SENT</button>
                    </div>
                    
                </div>
            </div>

        </div>


        <div class="w-[50%] flex flex-col mr-3 p-6 gap-y-4 bg-white shadow-btn-sha dark:shadow-none dark:bg-[var(--teriary-dark)] rounded-[12px] h-full">
            <div>
                <div class="flex justify-between gap-x-4">
                    <div class="flex gap-x-2">
                        <div class="w-[48px] h-[48px]">
                            <img :src="selectedCoin.logo" class="w-full h-full" alt="">
                        </div>
                        <h1 class="text-[24px] font-[400] text-[#444444] dark:text-[var(--text-dark)]">{{ selectedCoin.coinName }}</h1>
                    </div>


                    <div class="flex flex-col">
                        <h1 class="text-[20px] font-[500] text-[#444444] dark:text-[var(--text-dark)]">Balance:</h1>
                        <span class="text-[18px] font-[400]" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">{{ selectedCoin.bal }}</span>
                    </div>
                </div>
                <div class="flex gap-x-2 items-center mb-4">
                    <h1 class="text-[16px] font-[500]" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">SEND COIN</h1>
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path :class="[themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]']" d="M7.5 15C11.642 15 15 11.642 15 7.5C15 3.358 11.642 0 7.5 0C3.358 0 0 3.358 0 7.5C0 11.642 3.358 15 7.5 15ZM7.5 3.25L11.5 7.07625L8.78575 7.07625V11.75H6.2145L6.2145 7.07625L3.5 7.07625L7.5 3.25Z"/>
                    </svg>
                </div>

                <div class="flex flex-col gap-y-2">
                    <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                        <TextInput :placeholder="'7604a0c2f6337604a0c2f633'" :inputType="'text'" :label="'To Address'"/>
                    </div>

                    <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                        <TextInput :placeholder="'0.00000015'" :inputType="'text'" :tag="'/BTC'" :label="'Amount to send'"/>
                    </div>

                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="py-[15px] px-[30px] text-[15px] font-[600]  text-white  rounded-[4px]" >SENT</button>
                </div>
                
            </div>
        </div>

    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';

const themeStore = useThemeStore();

const selectedCoin = ref({
    logo : '/btc.png',
    bal : '23.4553 BTC',
    coinName : 'BitCoin'
})

</script>

<style>
</style>