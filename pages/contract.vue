<template>
    <mainLayout>
        <div class="mx-4 tablet:mx-[30px] min-h-screen">

            <div class="flex items-center gap-x-4 group laptop:cursor-pointer group py-[15px]">
                <div>
                    <!-- fill-[var(--theme-sed-02)] -->
                    <svg
                        class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]"

                        width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.3373 0C10.2847 0.000943511 9.24723 0.250731 8.30962 0.728967C7.37201 1.2072 6.56083 1.90033 5.94232 2.75175C5.32381 3.60318 4.9155 4.58876 4.75073 5.62803C4.58596 6.6673 4.66941 7.73079 4.99425 8.73167L0.195068 13.5283C0.133157 13.5903 0.0840641 13.6638 0.0505936 13.7448C0.0171232 13.8257 -6.86813e-05 13.9124 2.06204e-07 14V17.3333C2.06204e-07 17.5101 0.0702627 17.6797 0.195331 17.8047C0.320399 17.9298 0.490027 18 0.6669 18H4.0014C4.17827 18 4.3479 17.9298 4.47297 17.8047C4.59804 17.6797 4.6683 17.5101 4.6683 17.3333V16H6.0021C6.17897 16 6.3486 15.9298 6.47367 15.8047C6.59874 15.6797 6.669 15.5101 6.669 15.3333V14H8.0028C8.09041 14.0001 8.17717 13.9829 8.25812 13.9494C8.33908 13.916 8.41265 13.8669 8.47463 13.805L9.27158 13.0075C10.1882 13.305 11.1584 13.4004 12.1154 13.2871C13.0724 13.1738 13.9934 12.8545 14.8151 12.3512C15.6369 11.8479 16.3397 11.1725 16.8753 10.3717C17.4108 9.57077 17.7664 8.66337 17.9175 7.71194C18.0686 6.7605 18.0116 5.78763 17.7505 4.86031C17.4894 3.933 17.0304 3.07327 16.405 2.34032C15.7796 1.60737 15.0027 1.01862 14.1279 0.614608C13.253 0.210593 12.301 0.000910591 11.3373 0ZM13.0046 6.33333C12.7408 6.33333 12.4829 6.25513 12.2635 6.10863C12.0442 5.96212 11.8732 5.75388 11.7723 5.51024C11.6713 5.26661 11.6449 4.99852 11.6964 4.73988C11.7478 4.48124 11.8749 4.24366 12.0614 4.05719C12.2479 3.87072 12.4856 3.74373 12.7443 3.69229C13.0031 3.64084 13.2713 3.66724 13.515 3.76816C13.7587 3.86908 13.967 4.03997 14.1136 4.25924C14.2601 4.47851 14.3384 4.73629 14.3384 5C14.3384 5.35362 14.1978 5.69276 13.9477 5.94281C13.6976 6.19286 13.3583 6.33333 13.0046 6.33333Z" />
                    </svg>
                </div>
                <!-- text-[var(--theme-sed-02)] -->
                <span class="text-[20px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">
                    Contract
                </span>
            </div>

            <div @click.stop="openPrivateKey = !openPrivateKey" :class="[privateKey ? 'laptop:w-[70%] mx-auto laptop:hover:bg-white dark:laptop:hover:bg-[var(--secondary-dark)]' : 'w-full laptop:hover:bg-white/20 dark:border-[#eeeeee]/20']" class="bg-white dark:bg-[var(--secondary-dark)] h-[180px] p-[30px] rounded-[15px] border border-[#eeeeee]/60  shadow-input-sha dark:shadow-none transition-colors laptop:cursor-pointer">
                <div v-if="!privateKey" class="border border-dotted border-black/60 rounded-[15px] flex justify-center items-center h-full">
                    <h1 class="text-[20px] font-[600] text-[var(--secondary-dark)] dark:text-[var(--text-dark)]">Add your private key</h1>
                </div>

                <div v-else class="rounded-[15px] relative flex gap-x-4 items-center justify-center h-full">

                    <div class="absolute flex gap-x-2 items-center rounded-[16px] bg-red-400 px-4 py-2 top-0 right-0">
                        <div>
                            <svg width="13" height="17" viewBox="0 0 13 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.85718 16.3333C1.43814 16.3333 1.07928 16.184 0.780613 15.8853C0.481947 15.5867 0.332867 15.2281 0.333375 14.8095V7.19047C0.333375 6.77142 0.482708 6.41257 0.781375 6.1139C1.08004 5.81523 1.43865 5.66615 1.85718 5.66666H2.61909V4.14285C2.61909 3.08888 2.99065 2.19034 3.73376 1.44723C4.47687 0.704122 5.37515 0.332821 6.42861 0.333329C7.48258 0.333329 8.38112 0.704884 9.12423 1.448C9.86734 2.19111 10.2386 3.08939 10.2381 4.14285V5.66666H11C11.4191 5.66666 11.7779 5.816 12.0766 6.11466C12.3753 6.41333 12.5244 6.77193 12.5239 7.19047V14.8095C12.5239 15.2286 12.3745 15.5874 12.0759 15.8861C11.7772 16.1848 11.4186 16.3338 11 16.3333H1.85718ZM6.42861 12.5238C6.84766 12.5238 7.20652 12.3745 7.50518 12.0758C7.80385 11.7771 7.95293 11.4185 7.95242 11C7.95242 10.5809 7.80309 10.2221 7.50442 9.92342C7.20576 9.62476 6.84715 9.47568 6.42861 9.47619C6.00957 9.47619 5.65071 9.62552 5.35204 9.92419C5.05338 10.2229 4.9043 10.5815 4.9048 11C4.9048 11.419 5.05414 11.7779 5.3528 12.0766C5.65147 12.3752 6.01007 12.5243 6.42861 12.5238ZM4.1429 5.66666H8.71433V4.14285C8.71433 3.50793 8.49211 2.96825 8.04766 2.5238C7.60322 2.07936 7.06353 1.85714 6.42861 1.85714C5.79369 1.85714 5.25401 2.07936 4.80957 2.5238C4.36512 2.96825 4.1429 3.50793 4.1429 4.14285V5.66666Z" fill="white"/>
                            </svg>
                        </div>

                        <span class="text-white text-[16px] font-[600]">Lock</span>
                    </div>

                    <h1 class="text-[18px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">Your Key:</h1>
                    <span class="text-[14px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">{{ privateKey }}</span>
                </div>
            </div>

            <Teleport to="body">
                <transition name="modal">
                
                    <div v-if="openPrivateKey" class="modal-mask">
                        <div class="modal-container tablet:w-[60%] laptop:w-[40%] rounded-[15px] overflow-hidden relative">
                            <privateAdd @close="closePrivate" @privatekey="setPrivateKey"/>
                        </div>
                    </div>       

                </transition>

            </Teleport>	
        </div>
    </mainLayout>

</template>

<script setup>
import mainLayout from '../layouts/mainLayout';

definePageMeta({
  
  middleware : ['auth']

});

const openPrivateKey = ref(false);
const privateKey = ref('');

function closePrivate () {
    openPrivateKey.value = !openPrivateKey.value;
}

function setPrivateKey(key) {
    console.log(key);
    privateKey.value = key;
}

</script>

<style>
</style>