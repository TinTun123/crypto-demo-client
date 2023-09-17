<template>
    <div id="header" :style="{'background' : themeStore.getTheme}" class="w-full h-[54px] lg-phone:h-[60.6px] lg-phone:pr-4 tablet:pr-0 tablet:h-[99px] tablet:px-[30px] tablet:py-[28.5px] flex justify-between transition-all duration-500">

        <div :style="{'background' : themeStore.getSed02}" class="w-[140px] lg-phone:w-[185px] p-[15px] transition-all duration-500 tablet:hidden">
            <img src="/logo.png" class="w-[110px] lg-phone:w-[140px] lg-phone:ml-[15px] h-full" alt="">
        </div>  

        <div v-if="!auth.isAdmin" class="hidden tablet:flex gap-x-3 items-center">
            <div id="wallet-icon">
                <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white dark:fill-[var(--theme-color)]" d="M27.2 7.491H3.76245V6.5535L24.3875 4.9035V6.5535H27.2V3.741C27.2 1.6785 25.5293 0.231002 23.4893 0.521627L4.66245 3.21038C2.62058 3.50288 0.949951 5.4285 0.949951 7.491V26.241C0.949951 27.2356 1.34504 28.1894 2.0483 28.8927C2.75156 29.5959 3.70539 29.991 4.69995 29.991H27.2C28.1945 29.991 29.1483 29.5959 29.8516 28.8927C30.5549 28.1894 30.95 27.2356 30.95 26.241V11.241C30.95 10.2464 30.5549 9.29261 29.8516 8.58935C29.1483 7.88609 28.1945 7.491 27.2 7.491ZM24.3875 20.6273C24.018 20.6271 23.6522 20.5542 23.3109 20.4127C22.9696 20.2712 22.6595 20.0639 22.3983 19.8026C22.1372 19.5412 21.93 19.231 21.7888 18.8896C21.6475 18.5482 21.5748 18.1823 21.575 17.8129C21.5751 17.4434 21.648 17.0776 21.7895 16.7363C21.931 16.395 22.1383 16.0849 22.3996 15.8238C22.661 15.5626 22.9712 15.3555 23.3126 15.2142C23.654 15.0729 24.0199 15.0003 24.3893 15.0004C25.1355 15.0006 25.851 15.2973 26.3785 15.8251C26.9059 16.3529 27.2021 17.0686 27.2018 17.8148C27.2016 18.5609 26.9049 19.2764 26.3771 19.8039C25.8493 20.3313 25.1336 20.6275 24.3875 20.6273Z" />
                </svg>
            </div>

            <div id="total-balance" class="tablet:flex tablet:flex-col gap-y-1">
                <span class="text-[12px] font-[300] text-[#eff6ff]">
                    Total Balance
                </span>
                
                <span class="text-[12px] tablet:text-[14px] lg-tablet:text-[18px] text-white dark:text-[var(--theme-color)] font-[400]">
                    657.0378348945 USD
                </span>
            </div>
        </div>

        <div v-else class="hidden tablet:flex gap-x-3 items-start">
            <div id="wallet-icon" class="w-[18px] h-[18px]">
                <div>
                    <svg  width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-white dark:fill-[var(--theme-color)]"  fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                    </svg>
                </div>
                
            </div>

            <div id="total-balance" class="tablet:flex tablet:flex-col gap-y-1">
                <span class="text-[12px] font-[300] text-[#eff6ff]">
                    Total Active User
                </span>
                
                <span class="text-[12px] tablet:text-[14px] lg-tablet:text-[18px] text-white dark:text-[var(--theme-color)] font-[400]">
                    678
                </span>
            </div>
        </div>

        <div id="three-one" class="flex pr-4 items-center gap-x-4 relative flex-none">
            <div @click.stop="dropLan = !dropLan" class="flex-none overflow-x-visible h-[12px] dark:bg-[var(--secondary-dark)]  bg-[var(--theme-color)] lg-phone:flex tablet:items-center gap-x-1">
                <img src="/us.png" class="w-ful h-full" alt="">
                <div class="lg-phone:flex hidden items-center gap-x-1 flex-none laptop:cursor-pointer">
                    <span class="text-[16px] text-white dark:text-[var(--text-dark)]">English</span>
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.483154 0.333374L5.48315 10.3334L10.4832 0.333374H0.483154Z" class="fill-white dark:fill-[var(--teriary-dark)]"/>
                    </svg>
                </div>

            </div>
            <div class="w-[20px] h-[20px]">
                <svg @click.stop="dropNoti = !dropNoti" class="w-full h-full" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_895_2)">
                    <path class="fill-white dark:fill-[var(--text-dark)]" d="M10.0001 19.0444C10.3501 19.0364 10.6859 18.9048 10.9482 18.673C11.2105 18.4412 11.3824 18.1241 11.4335 17.7778H8.51123C8.56372 18.1335 8.74363 18.4581 9.01751 18.6911C9.29139 18.9241 9.64058 19.0496 10.0001 19.0444Z" />
                    <path class="fill-white dark:fill-[var(--text-dark)]" d="M18.2499 15.6278L18.061 15.4611C17.5251 14.9836 17.0561 14.4361 16.6666 13.8333C16.2411 13.0014 15.9861 12.0929 15.9166 11.1611V8.41664C15.9143 8.08328 15.8846 7.75067 15.8277 7.4222C14.8866 7.22877 14.0413 6.7161 13.4349 5.97096C12.8285 5.22583 12.4982 4.29403 12.4999 3.33331V2.98331C11.9198 2.69786 11.2967 2.51015 10.6554 2.42775V1.72775C10.6554 1.53105 10.5773 1.3424 10.4382 1.20331C10.2991 1.06422 10.1105 0.986084 9.91378 0.986084C9.71708 0.986084 9.52843 1.06422 9.38934 1.20331C9.25025 1.3424 9.17211 1.53105 9.17211 1.72775V2.45553C7.7364 2.65806 6.42243 3.37316 5.47279 4.46882C4.52315 5.56449 4.00196 6.96672 4.00545 8.41664V11.1611C3.93587 12.0929 3.68088 13.0014 3.25545 13.8333C2.8726 14.4346 2.41111 14.9821 1.88322 15.4611L1.69434 15.6278V17.1944H18.2499V15.6278Z"/>
                    <path class="fill-[var(--green)]" d="M16.6667 6.1111C18.2008 6.1111 19.4445 4.86744 19.4445 3.33332C19.4445 1.7992 18.2008 0.555542 16.6667 0.555542C15.1326 0.555542 13.8889 1.7992 13.8889 3.33332C13.8889 4.86744 15.1326 6.1111 16.6667 6.1111Z" />
                    </g>
                    <defs>
                    <clipPath id="clip0_895_2">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>
            </div>

            <div @click="dropPro = !dropPro" class="overflow-x-visible tablet:flex tablet:gap-x-1 items-center flex-none">

                <img src="/profile.png"  class="w-[35px] aspect-square" alt="">

                <div class="hidden lg-tablet:flex tablet:flex-col flex-none gap-y-1">

                    <span class="text-[#eff6ff] hidden lg-tablet:block text-[12px]">
                        Welcome back
                    </span>
                    <div  class="items-center gap-x-1 laptop:cursor-pointer hidden lg-tablet:flex">
                        <span class="text-[18px] text-white font-[400]">
                            {{ auth.user.firstName }}
                            <span> </span>
                            {{ auth.user.lastName }}
                        </span>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5007 0.635587L5.97903 5.04325L1.45738 0.635587C1.37659 0.556678 1.26814 0.512501 1.15521 0.512501C1.04228 0.512501 0.93383 0.556678 0.853043 0.635587C0.813926 0.673914 0.78285 0.71966 0.761635 0.770148C0.74042 0.820635 0.729492 0.874849 0.729492 0.929612C0.729492 0.984376 0.74042 1.03859 0.761635 1.08908C0.78285 1.13956 0.813926 1.18531 0.853043 1.22364L5.66329 5.91356C5.74777 5.9959 5.86106 6.04198 5.97903 6.04198C6.09699 6.04198 6.21029 5.9959 6.29477 5.91356L11.105 1.22454C11.1444 1.18619 11.1757 1.14033 11.1971 1.08967C11.2185 1.03902 11.2295 0.984594 11.2295 0.929612C11.2295 0.874631 11.2185 0.820206 11.1971 0.769551C11.1757 0.718896 11.1444 0.673038 11.105 0.634682C11.0242 0.555773 10.9158 0.511597 10.8028 0.511597C10.6899 0.511597 10.5815 0.555773 10.5007 0.634682V0.635587Z" fill="white"/>
                        </svg>
                    </div>

                </div>
            </div>

            <div @click="headerDrop = !headerDrop" class="tablet:hidden w-[26px]">
                <svg class="w-full h-full" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-white dark:fill-[#aaaaaa]" fill-rule="evenodd" clip-rule="evenodd" d="M0.649902 1.875C0.649902 1.37772 0.780775 0.900805 1.01373 0.549175C1.24669 0.197544 1.56264 0 1.89209 0H25.9077C26.2372 0 26.5531 0.197544 26.7861 0.549175C27.019 0.900805 27.1499 1.37772 27.1499 1.875C27.1499 2.37228 27.019 2.84919 26.7861 3.20083C26.5531 3.55246 26.2372 3.75 25.9077 3.75H1.89209C1.56264 3.75 1.24669 3.55246 1.01373 3.20083C0.780775 2.84919 0.649902 2.37228 0.649902 1.875ZM12.2437 28.125C12.2437 27.6277 12.3745 27.1508 12.6075 26.7992C12.8404 26.4475 13.1564 26.25 13.4858 26.25H25.9077C26.2372 26.25 26.5531 26.4475 26.7861 26.7992C27.019 27.1508 27.1499 27.6277 27.1499 28.125C27.1499 28.6223 27.019 29.0992 26.7861 29.4508C26.5531 29.8025 26.2372 30 25.9077 30H13.4858C13.1564 30 12.8404 29.8025 12.6075 29.4508C12.3745 29.0992 12.2437 28.6223 12.2437 28.125ZM0.649902 15C0.649902 14.5027 0.780775 14.0258 1.01373 13.6742C1.24669 13.3225 1.56264 13.125 1.89209 13.125H25.9077C26.2372 13.125 26.5531 13.3225 26.7861 13.6742C27.019 14.0258 27.1499 14.5027 27.1499 15C27.1499 15.4973 27.019 15.9742 26.7861 16.3258C26.5531 16.6775 26.2372 16.875 25.9077 16.875H1.89209C1.56264 16.875 1.24669 16.6775 1.01373 16.3258C0.780775 15.9742 0.649902 15.4973 0.649902 15Z"/>
                </svg>
            </div>

            <transition name="drop" appear>
                <languages v-if="dropLan" class="absolute top-[69px] container w-full languages dark:before:bg-[var(--teriary-dark)] before:bg-white"/>
            </transition>

            <transition name="drop" appear>
                <Notification v-if="dropNoti" class="absolute noti top-[69px] right-0 container shadow-input-sha border border-[#eeeeee] dark:border-none  dark:before:bg-[var(--teriary-dark)]"/>
            </transition>

            <transition name="drop" appear class="">
                <profileDrop v-if="dropPro" class="absolute top-[69px] profi tablet:right-0 container dark:before:bg-[var(--teriary-dark)]"/>  
            </transition>

            
        </div>

        <transition name="drop" appear>
            <ul v-if="headerDrop && !auth.isAdmin" class="absolute top-[48px] bg-[var(--secondary-dark)] z-[100] left-0 right-0 w-full">
                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'index' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink class="flex items-center gap-x-4" to="dashboard">
                        <div>
                            <svg :class="[route.name === 'dashboard' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']" width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="transition" d="M9.30163 0.11109C7.58586 0.109124 5.90536 0.598211 4.4586 1.52059C3.01185 2.44296 1.85927 3.7601 1.13699 5.31644C0.414708 6.87278 0.152899 8.60331 0.382481 10.3037C0.612063 12.004 1.32345 13.6031 2.43261 14.9122L2.59616 15.103H16.0071L16.1707 14.9122C17.2798 13.6031 17.9912 12.004 18.2208 10.3037C18.4504 8.60331 18.1886 6.87278 17.4663 5.31644C16.744 3.7601 15.5914 2.44296 14.1447 1.52059C12.6979 0.598211 11.0174 0.109124 9.30163 0.11109ZM13.99 5.27921L10.7627 8.44659C10.9276 8.79532 10.964 9.19114 10.8654 9.56409C10.7667 9.93704 10.5394 10.2631 10.2236 10.4847C9.90783 10.7063 9.52388 10.8091 9.13962 10.775C8.75535 10.7409 8.39552 10.572 8.1237 10.2983C7.85188 10.0245 7.68558 9.66351 7.65418 9.27902C7.62279 8.89452 7.72831 8.5113 7.95212 8.19709C8.17593 7.88287 8.50361 7.65788 8.87725 7.56188C9.25089 7.46588 9.64643 7.50505 9.99399 7.67246L13.2159 4.50508L13.99 5.27921ZM1.45133 8.64285H3.30487V9.73317H1.42952C1.42952 9.52056 1.40226 9.3134 1.40226 9.09533C1.40226 8.87727 1.41316 8.79549 1.42407 8.64285H1.45133ZM4.11171 3.19125L5.4528 4.53234L4.65142 5.28466L3.30487 3.94902C3.54655 3.67329 3.80703 3.41463 4.08445 3.17489L4.11171 3.19125ZM9.84679 3.13128H8.75647V1.22322H9.30163C9.50334 1.22322 9.68325 1.22322 9.84679 1.25048V3.13128ZM17.201 9.10078C17.201 9.3134 17.201 9.53146 17.1737 9.73862H15.2548V8.6483H17.1792C17.1901 8.79549 17.201 8.94814 17.201 9.10078Z"/>
                            </svg>
                        </div>

                        <span>
                            Dashboard
                        </span>
                    </NuxtLink>

                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'myWallet' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink class="flex items-center gap-x-4" to="myWallet">
                        <div >
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path :class="[route.name === 'myWallet' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']"
                                class="transition" d="M16.7 4.75871H2.63745V4.1868L15.0125 3.18024V4.1868H16.7V2.47108C16.7 1.21288 15.6976 0.329856 14.4736 0.507148L3.17745 2.14738C1.95233 2.32581 0.949951 3.50051 0.949951 4.75871V16.1969C0.949951 16.8036 1.187 17.3855 1.60896 17.8145C2.03092 18.2435 2.60321 18.4845 3.19995 18.4845H16.7C17.2967 18.4845 17.869 18.2435 18.2909 17.8145C18.7129 17.3855 18.95 16.8036 18.95 16.1969V7.04634C18.95 6.43962 18.7129 5.85776 18.2909 5.42874C17.869 4.99973 17.2967 4.75871 16.7 4.75871ZM15.0125 12.7723C14.7908 12.7722 14.5713 12.7277 14.3665 12.6414C14.1617 12.5551 13.9757 12.4286 13.819 12.2692C13.6623 12.1098 13.538 11.9205 13.4532 11.7123C13.3685 11.504 13.3249 11.2808 13.325 11.0554C13.325 10.83 13.3688 10.6069 13.4537 10.3987C13.5386 10.1905 13.663 10.0013 13.8198 9.84198C13.9766 9.68266 14.1627 9.5563 14.3675 9.47012C14.5724 9.38393 14.7919 9.33962 15.0136 9.33969C15.4613 9.33984 15.8906 9.52081 16.2071 9.84279C16.5235 10.1648 16.7012 10.6014 16.7011 11.0566C16.7009 11.5117 16.5229 11.9482 16.2063 12.27C15.8896 12.5918 15.4602 12.7724 15.0125 12.7723Z" fill="#ED9A36"/>
                            </svg>
                        </div>

                        <span>
                            MyWallet
                        </span>
                    </NuxtLink>

                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'swapCoin' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink class="flex items-center gap-x-4" to="swapCoin">
                        <div >
                            <svg :class="[route.name === 'swapCoin' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                class="transition"
                                d="M18.666 9.66666C18.666 4.69866 14.634 0.666656 9.66602 0.666656C4.69802 0.666656 0.666016 4.69866 0.666016 9.66666C0.666016 14.6347 4.69802 18.6667 9.66602 18.6667C14.634 18.6667 18.666 14.6347 18.666 9.66666ZM12.366 4.71666L15.516 7.86666L12.366 11.0167V8.76666H8.76602V6.96666H12.366V4.71666ZM6.96602 14.6167L3.81602 11.4667L6.96602 8.31666V10.5667H10.566V12.3667H6.96602V14.6167Z"/>
                            </svg>
                        </div>

                        <span>
                            Swap Coin
                        </span>
                    </NuxtLink>

                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400]" :class="[route.name === 'transcation' ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink to="transcation" class="flex items-center gap-x-4">
                        <div >
                            <svg :class="[route.name === 'transcation' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                class="transition" d="M18 9.98839C18 11.746 17.5059 13.4652 16.5785 14.9336C15.6512 16.4021 14.3312 17.5555 12.7816 18.2516C11.232 18.9476 9.52064 19.1558 7.85874 18.8504C6.19685 18.545 4.65721 17.7394 3.4299 16.5331C3.36111 16.4654 3.3058 16.3842 3.26713 16.2942C3.22846 16.2043 3.20717 16.1073 3.2045 16.0087C3.20183 15.9102 3.21781 15.8121 3.25154 15.72C3.28528 15.6279 3.3361 15.5436 3.4011 15.472C3.53238 15.3273 3.71347 15.2428 3.90454 15.2372C3.99914 15.2344 4.09334 15.2511 4.18177 15.2862C4.2702 15.3213 4.35111 15.3743 4.4199 15.442C5.44927 16.4534 6.74199 17.1265 8.13653 17.3771C9.53108 17.6277 10.9656 17.4447 12.2609 16.851C13.5562 16.2573 14.6547 15.2793 15.4193 14.039C16.1839 12.7988 16.5807 11.3513 16.56 9.87758C16.5392 8.40384 16.102 6.96913 15.3029 5.75272C14.5037 4.53631 13.3781 3.59215 12.0667 3.03821C10.7553 2.48427 9.31626 2.34512 7.92935 2.63813C6.54244 2.93115 5.2692 3.64334 4.2687 4.68573C3.96105 5.01073 3.65861 5.34104 3.3615 5.67652L4.8294 7.20817C4.93021 7.31305 4.99887 7.44672 5.0267 7.59226C5.05453 7.7378 5.04027 7.88867 4.98573 8.02577C4.93119 8.16287 4.83881 8.28003 4.72031 8.36242C4.6018 8.44481 4.46249 8.48873 4.32 8.48861H0.72C0.529044 8.48861 0.34591 8.40961 0.210883 8.26897C0.0758571 8.12834 2.23056e-07 7.9376 2.23056e-07 7.73872V3.98927C-0.000111908 3.84087 0.0420546 3.69577 0.121162 3.57234C0.200269 3.44891 0.312759 3.35271 0.444391 3.2959C0.576024 3.23909 0.72088 3.22424 0.860621 3.25323C1.00036 3.28221 1.1287 3.35373 1.2294 3.45872L2.34 4.6173C2.6298 4.29016 2.9286 3.96115 3.2454 3.62838C4.45328 2.36822 5.99296 1.5096 7.66958 1.16122C9.34619 0.812839 11.0843 0.99035 12.6641 1.67129C14.2438 2.35222 15.594 3.50597 16.5438 4.9865C17.4937 6.46702 18.0005 8.20776 18 9.98839ZM9.36 4.73916C9.16904 4.73916 8.98591 4.81816 8.85088 4.9588C8.71586 5.09943 8.64 5.29016 8.64 5.48905V9.98839C8.63996 10.1179 8.6721 10.2451 8.7333 10.3578C8.79449 10.4705 8.88265 10.5648 8.9892 10.6314L12.5892 12.8811C12.6703 12.9318 12.7602 12.9654 12.8537 12.9799C12.9472 12.9945 13.0426 12.9897 13.1344 12.9658C13.2261 12.942 13.3125 12.8995 13.3885 12.8409C13.4645 12.7823 13.5287 12.7087 13.5774 12.6243C13.6261 12.5398 13.6583 12.4462 13.6723 12.3488C13.6863 12.2514 13.6817 12.152 13.6588 12.0565C13.6359 11.9609 13.5951 11.8709 13.5388 11.7918C13.4826 11.7126 13.4119 11.6457 13.3308 11.595L10.08 9.56377V5.48905C10.08 5.29016 10.0041 5.09943 9.86912 4.9588C9.73409 4.81816 9.55096 4.73916 9.36 4.73916Z"/>
                            </svg>
                        </div>

                        <span>
                            Transcation
                        </span>
                    </NuxtLink>

                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'profile' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink to="profile" class="flex items-center gap-x-4">
                        <div >
                            <svg :class="[route.name === 'profile' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)]  fill-white') : 'fill-[var(--text-dark-02)]']" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path 
                                class="" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                                </svg>
                        </div>

                        <span>
                            Profile
                        </span>
                    </NuxtLink>
                    
                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'contract' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink to="contract" class="flex items-center gap-x-4">
                        <div>
                        
                            <svg
                            :class="[route.name === 'contract' ? (themeStore.isgrad ? 'dark:stroke-[var(--theme-from)] stroke-white' : 'dark:stroke-[var(--theme-color)] stroke-white') : 'stroke-[var(--text-dark-02)]']" 
                                width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M11.3373 0C10.2847 0.000943511 9.24723 0.250731 8.30962 0.728967C7.37201 1.2072 6.56083 1.90033 5.94232 2.75175C5.32381 3.60318 4.9155 4.58876 4.75073 5.62803C4.58596 6.6673 4.66941 7.73079 4.99425 8.73167L0.195068 13.5283C0.133157 13.5903 0.0840641 13.6638 0.0505936 13.7448C0.0171232 13.8257 -6.86813e-05 13.9124 2.06204e-07 14V17.3333C2.06204e-07 17.5101 0.0702627 17.6797 0.195331 17.8047C0.320399 17.9298 0.490027 18 0.6669 18H4.0014C4.17827 18 4.3479 17.9298 4.47297 17.8047C4.59804 17.6797 4.6683 17.5101 4.6683 17.3333V16H6.0021C6.17897 16 6.3486 15.9298 6.47367 15.8047C6.59874 15.6797 6.669 15.5101 6.669 15.3333V14H8.0028C8.09041 14.0001 8.17717 13.9829 8.25812 13.9494C8.33908 13.916 8.41265 13.8669 8.47463 13.805L9.27158 13.0075C10.1882 13.305 11.1584 13.4004 12.1154 13.2871C13.0724 13.1738 13.9934 12.8545 14.8151 12.3512C15.6369 11.8479 16.3397 11.1725 16.8753 10.3717C17.4108 9.57077 17.7664 8.66337 17.9175 7.71194C18.0686 6.7605 18.0116 5.78763 17.7505 4.86031C17.4894 3.933 17.0304 3.07327 16.405 2.34032C15.7796 1.60737 15.0027 1.01862 14.1279 0.614608C13.253 0.210593 12.301 0.000910591 11.3373 0ZM13.0046 6.33333C12.7408 6.33333 12.4829 6.25513 12.2635 6.10863C12.0442 5.96212 11.8732 5.75388 11.7723 5.51024C11.6713 5.26661 11.6449 4.99852 11.6964 4.73988C11.7478 4.48124 11.8749 4.24366 12.0614 4.05719C12.2479 3.87072 12.4856 3.74373 12.7443 3.69229C13.0031 3.64084 13.2713 3.66724 13.515 3.76816C13.7587 3.86908 13.967 4.03997 14.1136 4.25924C14.2601 4.47851 14.3384 4.73629 14.3384 5C14.3384 5.35362 14.1978 5.69276 13.9477 5.94281C13.6976 6.19286 13.3583 6.33333 13.0046 6.33333Z" />
                                </svg>
                        </div>

                        <span>
                            Contract
                        </span>
                    </NuxtLink>

                </li>

                
            </ul>
        </transition>

        <transition name="drop" appear>
            <ul v-if="headerDrop && auth.isAdmin" class="absolute top-[48px] bg-[var(--secondary-dark)] z-[100] left-0 right-0 w-full">
                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'users' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink class="flex items-center gap-x-4" to="dashboard">
                    
                        <div  class="w-[18px] h-[18px]">
                            <svg :class="[route.name === 'users' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path  fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                            </svg>
                        </div>

                        <span>
                            Users
                        </span>
                    </NuxtLink>

                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'manageTranscation' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink class="flex items-center gap-x-4" to="manageTranscation">
                       
                        <div class="w-[18px] h-[18px]">

                            <svg class="w-full h-full"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                            :class="[route.name === 'manageTranscation' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']"
                                d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"/>
                            </svg>

                        </div>

                        <span>
                            Transcations
                        </span>
                    </NuxtLink>

                </li>

                <li class="px-[30px] py-[12px] text-[16px] font-[400] flex items-center gap-x-4" :class="[route.name === 'coins' ? (themeStore.isgrad ? 'dark:text-[var(--theme-from)] text-white' : 'dark:text-[var(--theme-color)] text-white') : 'text-[var(--text-dark-02)]']">
                    <NuxtLink class="flex items-center gap-x-4" to="coins">
                        <div class="w-[18px] h-[18px]">

                            <svg :class="[route.name === 'coins' ? (themeStore.isgrad ? 'dark:fill-[var(--theme-from)] fill-white' : 'dark:fill-[var(--theme-color)] fill-white') : 'fill-[var(--text-dark-02)]']" class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"/></svg>
                        </div>

                        <span>
                            Manage Coins
                        </span>
                    </NuxtLink>

                </li>         
            </ul>
        </transition>

    </div>
</template>

<script setup>

import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore();
const dropLan = ref(false);
const dropPro = ref(false);
const dropNoti = ref(false);
const themeStore = useThemeStore();
const headerDrop = ref(false);


const route = useRoute();

</script>

<style>
</style>