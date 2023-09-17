<template>
    <div class="bg-[#121D33] flex justify-center items-center relative overflow-hidden min-h-screen ">

        <div class="absolute top-0 left-0 right-0">
            <img src="/bg-pattern.svg" alt="">
        </div>

        <div class="absolute top-0 left-0 right-0 bottom-0">
            <img src="/world-map.png" class="w-full h-full" alt="">
        </div>

        <div :class="[slideColors ? 'translate-x-0' : 'translate-x-[240px]']" class="flex transition-all absolute right-0 z-[100]">
            <div @click.stop="slideColors = !slideColors; console.log(slideColors)" class="w-[50px] h-[50px] laptop:cursor-pointer" :class="[themestore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">

            </div>

            <div class="flex items-start">
                <div class="p-4 bg-white dark:bg-[#444444] rounded-[4px] w-[240px]">
                    <h4 class="text-[14px] mb-[20px] font-[600] dark:text-[var(--text-dark)] text-[var(--secondary-dark)]">COLOER SWITCHER</h4>

                    <div class="flex flex-wrap gap-4 mb-[20px]">
                        <div class="w-[56px] h-[28px] flex-none" v-for="(color, i) in colorBalls" :key="i" :style="{'background' : color.color}" @click.stop="changeTheme(color, color.from, color.to)">

                        </div>
                    </div>

                    <h4 class="text-[14px] mb-[20px] font-[600] dark:text-[var(--text-dark)] text-[var(--secondary-dark)]">LAYOUT MODE</h4>
                    
                    <div class="flex justify-end">
                        <button @click.stop="setColortheme('light')" :class="[mode === 'dark' ? 'bg-[#555555]' : (themestore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white')]" class="py-[10px] px-[15px] dark:text-[var(--text-dark)] text-[14px] font-[600]">LIGHT</button>
                        <button @click.stop="setColortheme('dark')" :class="[mode === 'light' ? 'bg-[#555555] dark:text-[var(--text-dark)]' : (themestore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white')]" class="py-[10px] px-[15px] text-[14px] font-[600]">DARK</button>
                    </div>

                </div>
            </div>
        </div>



        <div class="flex flex-col items-center px-4 tablet:px-[30px] z-10 transition-colors">     
            <div class="w-[150px] h-[32.9px] mb-8">
                <img src="/logo.png" class="w-full h-full" alt="">
            </div>

            <p class="text-[18px] font-[400] mb-4 text-[#6D7C90] laptop:w-[450px] text-center">
                Please input your email id to start using cryptocurrency wallet.
            </p>

            <!-- <loginComponent /> -->

            <!-- <transition name="fade" appear> -->
                <component @changeTab="changeComponent" :is="tab[curretTab]"></component>
            <!-- </transition> -->


            <div class="mt-4">
                <span class="text-[14px] font-[400] text-[#6D7C90]">
                    Still need help?
                </span>
                
                <span class="text-[14px] font-[500] laptop:cursor-pointer laptop:hover:text-white/90 transition-colors" :class="themestore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]'">
                    Contact Support
                </span>
            </div>
        </div>
    </div>
</template>


<script setup>

import { useThemeStore } from '../store/useThemeStore';

const logincomponent = resolveComponent('loginComponent');
const registerComponent = resolveComponent('registerComponent');

const themestore = useThemeStore();
const  slideColors = ref(false);

const curretTab = ref(0);

const tab = [
logincomponent,
registerComponent];


function changeComponent(tabNum) {
    curretTab.value = tabNum;
}

const colorBalls = ref([
{
        color : '#5a78d2',
        hus : 205,
        sat : 90,
        light : 25
    },
    {
        color : '#d47707',
        hus : 33,
        sat : 97,
        light : 83

    },
    {
        color : '#1a8edf',
        hus : 205,
        sat : 88,
        light : 87
    },
    {
        color : '#0d653d',
        hus : 153,
        sat : 87,
        light : 40
    },
    {
        color : '#6c20f7',
        hus : 261,
        sat : 87,
        light : 97
    },
    {
        color : '#862b6a',
        hus : 318,
        sat : 68,
        light : 53
    }
])

const selectedTheme = ref({});

const mode = computed(() => {
    return useColorMode().preference;
})

const setColortheme = (newTheme) => {
    
    useColorMode().preference = newTheme;
    
}


function changeTheme(color, from = {}, to = {}) {

selectedTheme.value = color;

if (from.hus) {

    themestore.isgrad = true;
    document.documentElement.style.setProperty('--theme-from', themestore.HSLToHex(from.hus, from.sat, from.light));


} else {

    themestore.isgrad = false;
    
}

    document.documentElement.style.setProperty('--theme-color', color.color);
    document.documentElement.style.setProperty('--theme-sed-02', themestore.computeSed02(color, from, to));

}


</script>

<style>


</style>