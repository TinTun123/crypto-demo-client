<template>
    <div class="rounded-[15px]">
        <div class="bg-[var(--light-bg)] px-[20px] py-[15px] flex justify-between dark:bg-[var(--teriary-dark)]">
            <div class="flex gap-x-1 items-center">
                <div class="w-[22px] h-[22px] rounded-full">
                    <img :src="coinType.logo" class="w-full h-full" alt="">
                </div>
                
                <span class="text-[18px] font-[500] text-[#212529] dark:text-[var(--text-dark)]">
                    {{ coinType.walletType }}
                </span>
            </div>


            <div class="flex gap-x-1 items-center">
                <span class="text-[12px] font-[500] dark:text-[var(--text-dark)]" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">
                    BAL:
                </span>
                
                <span class="text-[18px] font-[500] dark:text-[var(--text-dark)] text-black">
                    {{ coinType.bal }}
                </span>
            </div>
        </div>

        <div class="dark:bg-[var(--secondary-dark)] bg-white py-[20px] px-[20px]">
            <div class="flex flex-col gap-y-4">
                <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                    <TextInput :placeholder="'7604a0c2f6337604a0c2f633'" :inputType="'text'" :label="'To Address'"/>
                </div>

                <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                    <TextInput :placeholder="'0.00000015'" :inputType="'text'" :tag="'/BTC'" :label="'Amount to send'"/>
                </div>

                <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                    <TextInput :placeholder="''" :inputType="'text'" :label="'Note'"/>
                </div>
            </div>

            <div class="flex gap-x-2 justify-end mt-4">
                <div>
                    <button @click="emitClose" class="py-[15px] px-[30px] text-[15px] font-[600]  text-black dark:text-[var(--text-dark)] rounded-[4px] bg-[#F1F1F1] dark:bg-[#373737]">CANCLE</button>
                </div>

                <div>
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="py-[15px] px-[30px] text-[15px] font-[600]  text-white  rounded-[4px]" >SENT</button>
                </div>

            </div>
        </div>

        
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';


const themeStore = useThemeStore();

const emit = defineEmits(['close']);
const props = defineProps(['coinType']);


const {coinType} = toRefs(props);


function emitClose () {
    emit('close');
}

</script>

<style>
</style>