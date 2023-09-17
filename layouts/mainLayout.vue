<template>
    <div class="bg-[var(--light-bg)] dark:bg-[#111111] transition-colors duration-500">
        <div class="tablet:flex relative tablet:max-h-screen">
            <SideBar />
            <div class="tablet:flex tablet:flex-col flex-1">

                <headerComponent />

                <div class="flex tablet:hidden items-center justify-between px-[15px] py-[10px] dark:bg-[var(--teriary-dark)]">
                    <span class="font-[600] text-[14px] text-[#444444] dark:text-[var(--text-dark)]">Dark Mode</span>

                    <div class="overflow-x-visible flex items-center">

                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" class="sr-only peer">
                        <div  @click="setColortheme($colorMode.preference === 'dark' ? 'light' : 'dark')" id="modeSwitch" class="w-[32px] h-[20px] bg-[var(--text-dark)] peer-focus:outline-none rounded-full peer after:bg-white dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[3px] after:left-[2px] after:border after:rounded-full after:h-3.5 after:w-3.5 after:transition-all dark:border-gray-600 peer-checked:bg-[var(--text-dark)]"></div>

                        </label>

                    </div>
                </div>

                <div :style="{'background' : themeStore.getTheme}" class="tablet:hidden gap-x-3 items-center px-[15px] py-[20px] lg-phone:px-[30px] lg-phone:py-[28.5px] transition-colors">
                    <div class="flex items-center gap-x-4">
                        <div id="wallet-icon">
                            <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-white dark:fill-[var(--theme-color)]" d="M27.2 7.491H3.76245V6.5535L24.3875 4.9035V6.5535H27.2V3.741C27.2 1.6785 25.5293 0.231002 23.4893 0.521627L4.66245 3.21038C2.62058 3.50288 0.949951 5.4285 0.949951 7.491V26.241C0.949951 27.2356 1.34504 28.1894 2.0483 28.8927C2.75156 29.5959 3.70539 29.991 4.69995 29.991H27.2C28.1945 29.991 29.1483 29.5959 29.8516 28.8927C30.5549 28.1894 30.95 27.2356 30.95 26.241V11.241C30.95 10.2464 30.5549 9.29261 29.8516 8.58935C29.1483 7.88609 28.1945 7.491 27.2 7.491ZM24.3875 20.6273C24.018 20.6271 23.6522 20.5542 23.3109 20.4127C22.9696 20.2712 22.6595 20.0639 22.3983 19.8026C22.1372 19.5412 21.93 19.231 21.7888 18.8896C21.6475 18.5482 21.5748 18.1823 21.575 17.8129C21.5751 17.4434 21.648 17.0776 21.7895 16.7363C21.931 16.395 22.1383 16.0849 22.3996 15.8238C22.661 15.5626 22.9712 15.3555 23.3126 15.2142C23.654 15.0729 24.0199 15.0003 24.3893 15.0004C25.1355 15.0006 25.851 15.2973 26.3785 15.8251C26.9059 16.3529 27.2021 17.0686 27.2018 17.8148C27.2016 18.5609 26.9049 19.2764 26.3771 19.8039C25.8493 20.3313 25.1336 20.6275 24.3875 20.6273Z"/>
                            </svg>
                        </div>

                        <div id="total-balance" class="flex flex-col">
                            <span class="text-[12px] font-[300] text-[#eff6ff]">
                                Total Balance
                            </span>
                            
                            <span class="text-[16px] font-[400] lg-phone:text-[14px] tablet:text-[14px] lg-tablet:text-[18px] text-white dark:text-[var(--theme-color)]">
                                657.0378348945 USD
                            </span>
                        </div>
                    </div>

                </div>

                <div class="tablet:overflow-y-scroll">
                    <slot />
                </div>



                <div class="w-[308px] tablet:hidden flex fixed top-[40%] right-0 transition-all" :class="[slideColors ? 'translate-x-0' : 'translate-x-[260px]']">
                    <div @click="slideColors = !slideColors" :style="{'background' : 'var(--theme-color)'}" class="w-[48px] h-[49px] transition-colors">

                    </div>

                    <div class="flex flex-wrap justify-center gap-4 p-2 w-[260px] bg-[#e1e1e1]">
                        <div v-for="(col, i) in colorBalls" :key="i" :style="{'background' : col.color}" @click="changeTheme(col, col.from, col.to)" class="w-[25px] aspect-square rounded-full">
                            
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>


<script setup>

import headerComponent from '../components/headerComponent.vue';
import { useThemeStore } from '../store/useThemeStore';

const slideColors = ref(false);
const themeStore = useThemeStore();
const selectedTheme = ref({});

const setColortheme = (newTheme) => {
    console.log(newTheme);
    console.log(useColorMode().preference);
    useColorMode().preference = newTheme;
  
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
    },
    {
        color : '#f5865d',
        hus : 16,
        sat : 62,
        light : 96
    },
    {
        color : '#85ad59',
        hus : 89,
        sat : 49,
        light : 68
    },
    {
        color : '#f7645e',
        hus : 2,
        sat : 62,
        light : 97
    },
    {
        color : '#00B894',
        hus : 168,
        sat : 90,
        light : 72
    },
    {
        color : '#8CBEB2',
        hus : 166,
        sat : 26,
        light : 75
    },
    {
        color : '#968c83',
        hus : 28,
        sat : 13,
        light : 59
    },
    {
        color : 'linear-gradient(to right, #576d92, #6785b7)',
        from : {
            hus : 218,
            sat : 40,
            light : 57
        },
        to : {
            hus : 217,
            sat : 44,
            light : 79
        }
    },
    {
        color : 'linear-gradient(to right, #237A57, #093028)',
        from : {
            hus : 156,
            sat : 71,
            light : 48
        },
        to : {
            hus : 168,
            sat : 81,
            light : 19
        }
    },
    {
        color : 'linear-gradient(to right, #3f4c6b, #606c88)',
        from : {
            hus : 222,
            sat : 41,
            light : 42
        },
        to : {
            hus : 222,
            sat : 29,
            light : 53
        }
    },
    {
        color : 'linear-gradient(to right, #BD3F32, #CB356B)',
        from : {
            hus : 6,
            sat : 74,
            light : 74
        },
        to : {
            hus : 338,
            sat : 74,
            light : 80
        }
    },
    {
        color : 'linear-gradient(to right, #1CB5E0, #26849f)',
        from : {
            hus : '193',
            sat : '88',
            light : '88'
        },
        to : {
            hus : '193',
            sat : '76',
            light : '62'
        }
    },
    {
        color : 'linear-gradient(to right, #E29587, #D66D75)',
        from : {
            hus : '9',
            sat : '40',
            light : '89'
        },
        to : {
            hus : '355',
            sat : '49',
            light : '84'
        }
    },
    {
        color : 'linear-gradient(90deg,#4099ff,#73b4ff)',
        from : {
            hus : '212',
            sat : '75',
            light : '100'
        },
        to : {
            hus : '212',
            sat : '55',
            light : '100'
        }
    },
    {
        color : 'linear-gradient(90deg,#ff5370,#f48fb1)',
        from : {
            hus : '350',
            sat : '67',
            light : '100'
        },
        to : {
            hus : '340',
            sat : '41',
            light : '96'
        }
    },
    {
        color : 'linear-gradient(90deg,#38a9f9,#43e9b3)',
        from : {
            hus : '205',
            sat : '78',
            light : '98'
        },
        to : {
            hus : '160',
            sat : '71',
            light : '91'
        }
    },
    {
        color : 'linear-gradient(90deg,#ff784f,#ff5370)',
        from : {
            hus : '14',
            sat : '69',
            light : '100'
        },
        to : {
            hus : '350',
            sat : '67',
            light : '100'
        }
    },
    {
        color : 'linear-gradient(90deg,#11c788,#54e2b7)',
        from : {
            hus : '159',
            sat : '91',
            light : '78'
        },
        to : {
            hus : '162',
            sat : '63',
            light : '89'
        }
    },
    {
        color : 'linear-gradient(90deg,#39adb5,#7c4dff)',
        from : {
            hus : '184',
            sat : '69',
            light : '71'
        },
        to : {
            hus : '256',
            sat : '70',
            light : '100'
        }
    }
]);


function changeTheme(color, from = {}, to = {}) {

    selectedTheme.value = color;

    if (from.hus) {

        themeStore.isgrad = true;
        document.documentElement.style.setProperty('--theme-from', themeStore.HSLToHex(from.hus, from.sat, from.light));


    } else {

        themeStore.isgrad = false;
        
    }

    document.documentElement.style.setProperty('--theme-color', color.color);
    document.documentElement.style.setProperty('--theme-sed-02', themeStore.computeSed02(color, from, to));

    }
  
</script>

<style>
</style>