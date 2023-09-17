<template>
    <mainLayout>
        <div class="mx-4 mt-4 tablet:m-[30px] lg-phone:mx-[30px] min-h-screen">
            <div class="p-[30px] bg-white rounded-[15px] dark:bg-[var(--secondary-dark)] border border-[#eeeeee] dark:border-none shadow-input-sha dark:shadow-none">
                <div class="px-4 py-2 mb-4 dark:text-[var(--text-dark)] text-[var(--secondary-dark)]  border border-black/10 dark:border-[#eeeeee]/20 inline-block rounded-full">
                    Swap
                </div>

                <div class="flex px-4 mb-4 justify-between">
                    <span class="text-[12px] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] font-[400]">
                        You send                        
                    </span>
                    
                    <span class="text-[12px] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] font-[400]">
                        You Receive
                    </span>
                </div>


                <div class="border relative p-4 mb-4 border-black/10 dark:border-[#eeeeee]/20 rounded-[24px] flex justify-between">

                    <div class="absolute w-[24px] top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] h-[24px]">
                        <svg class="w-full h-full" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                            :class="[themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]']"
                            class="transition"
                            d="M18.666 9.66666C18.666 4.69866 14.634 0.666656 9.66602 0.666656C4.69802 0.666656 0.666016 4.69866 0.666016 9.66666C0.666016 14.6347 4.69802 18.6667 9.66602 18.6667C14.634 18.6667 18.666 14.6347 18.666 9.66666ZM12.366 4.71666L15.516 7.86666L12.366 11.0167V8.76666H8.76602V6.96666H12.366V4.71666ZM6.96602 14.6167L3.81602 11.4667L6.96602 8.31666V10.5667H10.566V12.3667H6.96602V14.6167Z"/>
                        </svg>
                    </div>
                    
                    <div class="flex flex-col justify-between gap-y-[120px] border-r w-full items-start border-black/10 dark:border-[#eeeeee]/20">
                        <div class="flex flex-col gap-y-2">
                            <div @click.stop="dropCoinslistSend = !dropCoinslistSend"  class="flex items-center laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors active:bg-black/20 relative gap-x-2 p-2 rounded-full shadow-input-sha dark:shadow-none border border-black/10 dark:border-[#eeeeee]/20">
                                <div class="w-4 aspect-square rounded-full overflow-hidden">
                                    <img :src="sendType.logo" alt="">
                                </div>

                                <span class="text-[15px] font-[400] dark:text-[var(--text-dark)]">
                                    {{ sendType.coin }}
                                </span>

                                <span>
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="fill-black/60 dark:fill-[--text-dark]" d="M12.4007 0.741579L7.12544 5.88385L1.85018 0.741579C1.75592 0.649518 1.6294 0.597979 1.49765 0.597979C1.3659 0.597979 1.23937 0.649518 1.14512 0.741579C1.09948 0.786294 1.06323 0.839664 1.03848 0.898567C1.01373 0.957468 1.00098 1.02072 1.00098 1.08461C1.00098 1.1485 1.01373 1.21175 1.03848 1.27065C1.06323 1.32955 1.09948 1.38292 1.14512 1.42764L6.75707 6.89921C6.85563 6.99528 6.98781 7.04904 7.12544 7.04904C7.26306 7.04904 7.39524 6.99528 7.4938 6.89921L13.1057 1.42869C13.1517 1.38395 13.1882 1.33045 13.2132 1.27134C13.2382 1.21225 13.251 1.14875 13.251 1.08461C13.251 1.02046 13.2382 0.956968 13.2132 0.89787C13.1882 0.838773 13.1517 0.785272 13.1057 0.740523C13.0115 0.648463 12.885 0.596924 12.7532 0.596924C12.6215 0.596924 12.495 0.649518 12.4007 0.741579Z" />
                                    </svg>
                                </span>

                                <transition appear name="drop">

                                    <div v-if="dropCoinslistSend" class="bg-white dark:bg-[var(--teriary-dark)] border absolute top-12 left-0 border-[#eeeeee]  p-1 dark:border-none rounded-[4px] shadow-input-sha dark:shadow-none z-50">

                                        <ul>

                                            <li v-for="(coin, i) in getCoinList(receiveType)" :key="i" @click="sendType = coin" :class="[themeStore.isgrad ? 'laptop:hover:bg-[var(--theme-from)]' : 'laptop:hover:bg-[var(--theme-sed-02)]']" class="flex justify-start rounded-[4px] laptop:cursor-pointer dark:laptop:hover:bg-[var(--secondary-dark)] gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                                <div class="w-[20px] h-[20px]">
                                                    <img :src="coin.logo" class="w-full h-full" alt="">
                                                </div>

                                                <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                                    {{ coin.coin }}
                                                </span>
                                            </li>

                                        </ul>
                                        
                                    </div>

                                </transition>
                            </div>

                            <div class="flex gap-x-2">
                                <span class="text-[12px] dark:text-[var(--text-dark)] text-gray-400 font-[400]">
                                    Balance:
                                </span>
                                
                                <span class="text-[14px] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] font-[400]">
                                    28.05
                                </span>
                            </div>

                            
                        </div>

                        <span class="text-[24px] text-black/80 dark:text-[var(--text-dark)]">
                            0.00
                        </span>
                    </div>


                    <div class="flex flex-col justify-between gap-y-[120px] w-full items-end">
                        <div class="flex flex-col  gap-y-2">
                            <div @click.stop="dropCoinslistReceive = !dropCoinslistReceive" class="flex transition-all laptop:cursor-pointer laptop:hover:bg-black/10 active:bg-black/20 relative items-center gap-x-2 p-2 rounded-full shadow-input-sha dark:shadow-none border border-black/10 dark:border-[#eeeeee]/20">
                                <div class="w-4 aspect-square rounded-full overflow-hidden">
                                    <img :src="receiveType.logo" alt="">
                                </div>

                                <span class="text-[15px] font-[400] dark:text-[var(--text-dark)]">
                                    {{ receiveType.coin }}
                                </span>

                                <span>
                                    <svg width="15" height="9" viewBox="0 0 15 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path class="fill-black/60 dark:fill-[--text-dark]" d="M12.4007 0.741579L7.12544 5.88385L1.85018 0.741579C1.75592 0.649518 1.6294 0.597979 1.49765 0.597979C1.3659 0.597979 1.23937 0.649518 1.14512 0.741579C1.09948 0.786294 1.06323 0.839664 1.03848 0.898567C1.01373 0.957468 1.00098 1.02072 1.00098 1.08461C1.00098 1.1485 1.01373 1.21175 1.03848 1.27065C1.06323 1.32955 1.09948 1.38292 1.14512 1.42764L6.75707 6.89921C6.85563 6.99528 6.98781 7.04904 7.12544 7.04904C7.26306 7.04904 7.39524 6.99528 7.4938 6.89921L13.1057 1.42869C13.1517 1.38395 13.1882 1.33045 13.2132 1.27134C13.2382 1.21225 13.251 1.14875 13.251 1.08461C13.251 1.02046 13.2382 0.956968 13.2132 0.89787C13.1882 0.838773 13.1517 0.785272 13.1057 0.740523C13.0115 0.648463 12.885 0.596924 12.7532 0.596924C12.6215 0.596924 12.495 0.649518 12.4007 0.741579Z" />
                                    </svg>
                                </span>


                                <transition appear name="drop">

                                    <div v-if="dropCoinslistReceive" class="bg-white dark:bg-[var(--teriary-dark)] border absolute top-12 left-0 border-[#eeeeee]  p-1 dark:border-none rounded-[4px] shadow-input-sha dark:shadow-none z-50">

                                        <ul>

                                            <li v-for="(coin, i) in getCoinList(sendType)" :key="i" @click="receiveType = coin" :class="[themeStore.isgrad ? 'laptop:hover:bg-[var(--theme-from)]' : 'laptop:hover:bg-[var(--theme-sed-02)]']" class="flex justify-start rounded-[4px] laptop:cursor-pointer dark:laptop:hover:bg-[var(--secondary-dark)] gap-x-2 items-center p-1 border-b border-[#eeeeee] dark:border-[#eeeeee]/20">

                                                <div class="w-[20px] h-[20px]">
                                                    <img :src="coin.logo" class="w-full h-full" alt="">
                                                </div>

                                                <span class="text-[16px] font-[300] text-[var(--secondary-dark)] dark:text-[--text-dark]">
                                                    {{ coin.coin }}
                                                </span>
                                            </li>

                                        </ul>
                                        
                                    </div>

                                </transition>
                            </div>

                            <div class="flex gap-x-2">
                                <span class="text-[12px] dark:text-[var(--text-dark)] text-gray-400 font-[400]">
                                    Balance:
                                </span>
                                
                                <span class="text-[14px] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] font-[400]">
                                    00.00
                                </span>
                            </div>

                            
                        </div>

                        <span class="text-[24px] text-black/80 dark:text-[var(--text-dark)]">
                            0.00
                        </span>
                    </div>

                    
                </div>

                <div class="flex justify-between mb-4">
                    <span class="text-[12px] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] font-[400]">
                        0.0005452 ETH = 1 BTC ($0.72)
                    </span>
                    
                    <span class="flex gap-x-2 items-center">
                        <div>
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[var(--secondary-dark)] dark:fill-[var(--text-dark)]" d="M9.50137 1.15572C9.18842 0.842676 8.76394 0.666759 8.32129 0.666664H2.33576C1.89308 0.666664 1.46853 0.842519 1.15551 1.15554C0.842481 1.46857 0.666626 1.89312 0.666626 2.3358V8.32133C0.666721 8.76398 0.842638 9.18846 1.15568 9.50141L7.83224 16.178C8.14524 16.4909 8.56972 16.6667 9.01232 16.6667C9.45491 16.6667 9.87939 16.4909 10.1924 16.178L16.1779 10.1924C16.4908 9.87942 16.6666 9.45495 16.6666 9.01235C16.6666 8.56976 16.4908 8.14528 16.1779 7.83227L9.50137 1.15572ZM4.83947 6.50865C4.39668 6.50854 3.97206 6.33253 3.65904 6.01935C3.34602 5.70617 3.17022 5.28147 3.17033 4.83867C3.17044 4.39588 3.34645 3.97127 3.65963 3.65824C3.97281 3.34522 4.39751 3.16943 4.84031 3.16954C5.2831 3.16965 5.70771 3.34565 6.02074 3.65883C6.33376 3.97201 6.50955 4.39672 6.50944 4.83951C6.50933 5.2823 6.33333 5.70692 6.02015 6.01994C5.70697 6.33296 5.28226 6.50876 4.83947 6.50865Z"/>
                            </svg>
                        </div>

                        <span class="text-[18px] font-[400] dark:text-[var(--text-dark)]">
                            $0.00
                        </span>
                    </span>
                </div>


                <div class="laptop:w-[50%] mx-auto">
                    <button class="py-[12px] w-full h-[45px] flex justify-center items-center gap-x-2 px-[8px] dark:bg-black laptop:hover:shadow-btn-sha dark:laptop:hover:bg-black/60 laptop:active:shadow-sm transition-colors rounded-full" :class="themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]'">
                        <span class="text-[14px] font-[500] text-white dark:text-[var(--text-dark)]">
                            Swap
                        </span>
                    </button>
                </div>
            </div>
        </div>

    </mainLayout>
</template>

<script setup>
import  mainLayout  from '../layouts/mainLayout';
import { useThemeStore } from '../store/useThemeStore';

definePageMeta({
  
  middleware : ['auth']

});

const themeStore = useThemeStore();
const dropCoinslistSend = ref(false);
const dropCoinslistReceive = ref(false);

const sendType = ref({coin : 'BTC', logo : '/btc.png'});
const receiveType = ref({coin : 'BTC Cash', logo : '/bch.png'});

const coinList = ref([
    {
        coin : 'BTC',
        logo : '/btc.png'
    },
    {
        coin : 'BTC',
        logo : '/bch.png'
    },
    {
        coin : 'ETC',
        logo : '/eth.png'
    },
    {
        coin : 'DTC',
        logo : '/doge.png'
    },
    {
        coin : 'THC',
        logo : '/usdterc20.png',
    },
    {
        coin : 'DAH',
        logo : '/dash.png'
    },
    {
        coin : 'THUSD',
        logo : '/usdt.png'
    }
])

const getCoinList = (oppositeCoin) => {
    return coinList.value.filter(coin => {
        if (coin.coin !== oppositeCoin.coin) {
            return coin;
        }
    })
}

</script>

<style>
</style>