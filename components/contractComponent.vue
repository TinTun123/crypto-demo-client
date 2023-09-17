<template>
    <div class="flex-1 flex flex-col justify-between">
        <div class="bg-white shadow-input-sha justify-between dark:shadow-none dark:bg-[var(--teriary-dark)] rounded-[15px] p-[30px] flex items-center h-[120px]">
            <div class="flex gap-x-4 items-center">
                <span class="text-[18px] font-[500]" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">Key:</span>
                <span class="text-[14px] font-[600] text-[#444444] dark:text-[var(--text-dark)]">fadhrawtwapfoginfsobnaworgiwroigjWNGAGNVMFALFAWEFJAWGOG</span>
            </div>

            <div @click="isLocked = !isLocked" class="flex gap-x-3 px-4 py-2 transition-all rounded-full items-center" :class="[isLocked ? 'bg-red-400' : 'bg-green-400']">
                <div v-if="isLocked" class="w-4 h-4">
                    <svg class="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
                </div>

                <div v-else class="w-4 h-4">
                    <svg class="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"/></svg>
                </div>
                <button  class="text-white text-[16px] font-[500] " >{{ isLocked ? 'Locked' : 'Unlocked' }}</button>
            </div>
        </div>

        <div class="text-right">
            <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
        </div>
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';

const themeStore = useThemeStore();
const isLocked = ref(false);

</script>

<style>
</style>