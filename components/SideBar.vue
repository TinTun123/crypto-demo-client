<template>
    <div :class="[auth.isAdmin ? 'laptop:flex laptop:flex-col laptop:justify-between' : '']" id="side-bar" class="hidden tablet:block w-[255px] tablet:min-h-screen bg-white  dark:bg-[var(--secondary-dark)] transition-colors duration-500">
        <div>
            <div :style="{'background' : themeStore.getSed02}" class="px-[30px] py-[35px] h-[99px]  transition-all duration-500">
                <img src="/logo.png" class="w-[140px] h-[30.5]" alt="">
            </div>

            <ul v-if="auth.isAdmin" class="px-[30px] border-b dark:border-[#eeeeee]/10">
         
         <li class="py-[20px] ">
             <NuxtLink to="/users">
                 <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                     <div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                :class="[
                                    route.name === 'users'
                                        ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                        : 'fill-[var(--text-dark)]',
                                    themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                    ]" class="" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                            </svg>
                     </div>
                     <span 
                     :class="[
                             route.name === 'users'
                                 ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                 : 'text-[var(--text-dark)]',
                             themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                             ]"
                     class="text-base text-[var(--text-dark)] font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                         Users
                     </span>
                 </div>
             </NuxtLink>

         </li>

         <li class="py-[20px] ">
             <NuxtLink to="manageTranscation">
                 <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">  

                     <div class="w-[18px] h-[18px]">

                         <svg class="w-full h-full"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                            :class="[
                                 route.name === 'manageTranscation'
                                     ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                     : 'fill-[var(--text-dark)]',
                                 themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                 ]" 
                                 class="laptop:group-hover:fill-[var(--theme-color)] fill-[var()] transition"
                             d="M440.65 12.57l4 82.77A247.16 247.16 0 0 0 255.83 8C134.73 8 33.91 94.92 12.29 209.82A12 12 0 0 0 24.09 224h49.05a12 12 0 0 0 11.67-9.26 175.91 175.91 0 0 1 317-56.94l-101.46-4.86a12 12 0 0 0-12.57 12v47.41a12 12 0 0 0 12 12H500a12 12 0 0 0 12-12V12a12 12 0 0 0-12-12h-47.37a12 12 0 0 0-11.98 12.57zM255.83 432a175.61 175.61 0 0 1-146-77.8l101.8 4.87a12 12 0 0 0 12.57-12v-47.4a12 12 0 0 0-12-12H12a12 12 0 0 0-12 12V500a12 12 0 0 0 12 12h47.35a12 12 0 0 0 12-12.6l-4.15-82.57A247.17 247.17 0 0 0 255.83 504c121.11 0 221.93-86.92 243.55-201.82a12 12 0 0 0-11.8-14.18h-49.05a12 12 0 0 0-11.67 9.26A175.86 175.86 0 0 1 255.83 432z"/>
                        </svg>

                     </div>

                     <!-- text-[var(--theme-sed-02)] -->

                     <span 
                     :class="[
                             route.name === 'manageTranscation'
                                 ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                 : 'text-[var(--text-dark)]',
                             themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                             ]"
                     class="text-base font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                         Transcation
                     </span>
                 </div>
             </NuxtLink>
         </li>

         <li class="py-[20px] ">
             <NuxtLink to="coins">
                 <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                     <div class="w-[18px] h-[18px]">
                         <!-- fill-[var(--theme-sed-02)] -->


                         <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path 
                            :class="[
                             route.name === 'coins'
                                 ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                 : 'fill-[var(--text-dark)]',
                             themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                             ]"
                             class="laptop:group-hover:fill-[var(--theme-color)] transition"
                            d="M0 405.3V448c0 35.3 86 64 192 64s192-28.7 192-64v-42.7C342.7 434.4 267.2 448 192 448S41.3 434.4 0 405.3zM320 128c106 0 192-28.7 192-64S426 0 320 0 128 28.7 128 64s86 64 192 64zM0 300.4V352c0 35.3 86 64 192 64s192-28.7 192-64v-51.6c-41.3 34-116.9 51.6-192 51.6S41.3 334.4 0 300.4zm416 11c57.3-11.1 96-31.7 96-55.4v-42.7c-23.2 16.4-57.3 27.6-96 34.5v63.6zM192 160C86 160 0 195.8 0 240s86 80 192 80 192-35.8 192-80-86-80-192-80zm219.3 56.3c60-10.8 100.7-32 100.7-56.3v-42.7c-35.5 25.1-96.5 38.6-160.7 41.8 29.5 14.3 51.2 33.5 60 57.2z"/></svg>
                     </div>

                     <!-- text-[var(--theme-sed-02)]  -->
                     <span 
                     :class="[
                             route.name === 'coins'
                                 ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                 : 'text-[var(--text-dark)]',
                             themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                             ]"
                     class="text-base font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                         Manage Coins
                     </span>
                 </div>
             </NuxtLink>

         </li>
         
            </ul>
        </div>


        <ul v-if="!auth.isAdmin" class="px-[30px] border-b dark:border-[#eeeeee]/10">
         
            <li class="py-[16px]">
                <NuxtLink to="/dashboard">
                    <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                        <div>
                            <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                :class="[
                                    route.name === 'dashboard'
                                        ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                        : 'fill-[var(--text-dark)]',
                                    themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                    ]"
                                class="laptop:group-hover:fill-[var(--theme-color)] transition" d="M9.30163 0.11109C7.58586 0.109124 5.90536 0.598211 4.4586 1.52059C3.01185 2.44296 1.85927 3.7601 1.13699 5.31644C0.414708 6.87278 0.152899 8.60331 0.382481 10.3037C0.612063 12.004 1.32345 13.6031 2.43261 14.9122L2.59616 15.103H16.0071L16.1707 14.9122C17.2798 13.6031 17.9912 12.004 18.2208 10.3037C18.4504 8.60331 18.1886 6.87278 17.4663 5.31644C16.744 3.7601 15.5914 2.44296 14.1447 1.52059C12.6979 0.598211 11.0174 0.109124 9.30163 0.11109ZM13.99 5.27921L10.7627 8.44659C10.9276 8.79532 10.964 9.19114 10.8654 9.56409C10.7667 9.93704 10.5394 10.2631 10.2236 10.4847C9.90783 10.7063 9.52388 10.8091 9.13962 10.775C8.75535 10.7409 8.39552 10.572 8.1237 10.2983C7.85188 10.0245 7.68558 9.66351 7.65418 9.27902C7.62279 8.89452 7.72831 8.5113 7.95212 8.19709C8.17593 7.88287 8.50361 7.65788 8.87725 7.56188C9.25089 7.46588 9.64643 7.50505 9.99399 7.67246L13.2159 4.50508L13.99 5.27921ZM1.45133 8.64285H3.30487V9.73317H1.42952C1.42952 9.52056 1.40226 9.3134 1.40226 9.09533C1.40226 8.87727 1.41316 8.79549 1.42407 8.64285H1.45133ZM4.11171 3.19125L5.4528 4.53234L4.65142 5.28466L3.30487 3.94902C3.54655 3.67329 3.80703 3.41463 4.08445 3.17489L4.11171 3.19125ZM9.84679 3.13128H8.75647V1.22322H9.30163C9.50334 1.22322 9.68325 1.22322 9.84679 1.25048V3.13128ZM17.201 9.10078C17.201 9.3134 17.201 9.53146 17.1737 9.73862H15.2548V8.6483H17.1792C17.1901 8.79549 17.201 8.94814 17.201 9.10078Z"/>
                            </svg>
                        </div>
                        <span 
                        :class="[
                                route.name === 'dashboard'
                                    ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                    : 'text-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                                ]"
                        class="text-base text-[var(--text-dark)] font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                            Dashboard
                        </span>
                    </div>
                </NuxtLink>

            </li>

            <li class="py-[16px]">
                <NuxtLink to="myWallet">
                    <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">  

                        <div>
                            <!-- fill-[var(--theme-sed-02)] -->
                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                :class="[
                                    route.name === 'myWallet'
                                        ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                        : 'fill-[var(--text-dark)]',
                                    themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                    ]"
                                class="laptop:group-hover:fill-[var(--theme-color)] fill-[var()] transition" d="M16.7 4.75871H2.63745V4.1868L15.0125 3.18024V4.1868H16.7V2.47108C16.7 1.21288 15.6976 0.329856 14.4736 0.507148L3.17745 2.14738C1.95233 2.32581 0.949951 3.50051 0.949951 4.75871V16.1969C0.949951 16.8036 1.187 17.3855 1.60896 17.8145C2.03092 18.2435 2.60321 18.4845 3.19995 18.4845H16.7C17.2967 18.4845 17.869 18.2435 18.2909 17.8145C18.7129 17.3855 18.95 16.8036 18.95 16.1969V7.04634C18.95 6.43962 18.7129 5.85776 18.2909 5.42874C17.869 4.99973 17.2967 4.75871 16.7 4.75871ZM15.0125 12.7723C14.7908 12.7722 14.5713 12.7277 14.3665 12.6414C14.1617 12.5551 13.9757 12.4286 13.819 12.2692C13.6623 12.1098 13.538 11.9205 13.4532 11.7123C13.3685 11.504 13.3249 11.2808 13.325 11.0554C13.325 10.83 13.3688 10.6069 13.4537 10.3987C13.5386 10.1905 13.663 10.0013 13.8198 9.84198C13.9766 9.68266 14.1627 9.5563 14.3675 9.47012C14.5724 9.38393 14.7919 9.33962 15.0136 9.33969C15.4613 9.33984 15.8906 9.52081 16.2071 9.84279C16.5235 10.1648 16.7012 10.6014 16.7011 11.0566C16.7009 11.5117 16.5229 11.9482 16.2063 12.27C15.8896 12.5918 15.4602 12.7724 15.0125 12.7723Z" fill="#ED9A36"/>
                            </svg>

                        </div>

                        <!-- text-[var(--theme-sed-02)] -->

                        <span 
                        :class="[
                                route.name === 'myWallet'
                                    ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                    : 'text-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                                ]"
                        class="text-base font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                            My Wallet
                        </span>
                    </div>
                </NuxtLink>
            </li>

            <li class="py-[16px]">
                <NuxtLink to="swapCoin">
                    <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                        <div>
                            <!-- fill-[var(--theme-sed-02)] -->
                            

                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                :class="[
                                route.name === 'swapCoin'
                                    ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                    : 'fill-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                ]"

                                class="laptop:group-hover:fill-[var(--theme-color)] transition"
                                d="M18.666 9.66666C18.666 4.69866 14.634 0.666656 9.66602 0.666656C4.69802 0.666656 0.666016 4.69866 0.666016 9.66666C0.666016 14.6347 4.69802 18.6667 9.66602 18.6667C14.634 18.6667 18.666 14.6347 18.666 9.66666ZM12.366 4.71666L15.516 7.86666L12.366 11.0167V8.76666H8.76602V6.96666H12.366V4.71666ZM6.96602 14.6167L3.81602 11.4667L6.96602 8.31666V10.5667H10.566V12.3667H6.96602V14.6167Z"/>
                            </svg>
                        </div>

                        <!-- text-[var(--theme-sed-02)]  -->
                        <span 
                        :class="[
                                route.name === 'swapCoin'
                                    ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                    : 'text-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                                ]"
                        class="text-base font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                            Swap Coin
                        </span>
                    </div>
                </NuxtLink>

            </li>

            <li class="py-[16px]">
                <NuxtLink to="transcation">
                    <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                        <div>
                            <!-- fill-[var(--theme-sed-02)] -->
                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                :class="[
                                route.name === 'transcation'
                                    ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                    : 'fill-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                ]"
                                class="laptop:group-hover:fill-[var(--theme-color)] transition" d="M18 9.98839C18 11.746 17.5059 13.4652 16.5785 14.9336C15.6512 16.4021 14.3312 17.5555 12.7816 18.2516C11.232 18.9476 9.52064 19.1558 7.85874 18.8504C6.19685 18.545 4.65721 17.7394 3.4299 16.5331C3.36111 16.4654 3.3058 16.3842 3.26713 16.2942C3.22846 16.2043 3.20717 16.1073 3.2045 16.0087C3.20183 15.9102 3.21781 15.8121 3.25154 15.72C3.28528 15.6279 3.3361 15.5436 3.4011 15.472C3.53238 15.3273 3.71347 15.2428 3.90454 15.2372C3.99914 15.2344 4.09334 15.2511 4.18177 15.2862C4.2702 15.3213 4.35111 15.3743 4.4199 15.442C5.44927 16.4534 6.74199 17.1265 8.13653 17.3771C9.53108 17.6277 10.9656 17.4447 12.2609 16.851C13.5562 16.2573 14.6547 15.2793 15.4193 14.039C16.1839 12.7988 16.5807 11.3513 16.56 9.87758C16.5392 8.40384 16.102 6.96913 15.3029 5.75272C14.5037 4.53631 13.3781 3.59215 12.0667 3.03821C10.7553 2.48427 9.31626 2.34512 7.92935 2.63813C6.54244 2.93115 5.2692 3.64334 4.2687 4.68573C3.96105 5.01073 3.65861 5.34104 3.3615 5.67652L4.8294 7.20817C4.93021 7.31305 4.99887 7.44672 5.0267 7.59226C5.05453 7.7378 5.04027 7.88867 4.98573 8.02577C4.93119 8.16287 4.83881 8.28003 4.72031 8.36242C4.6018 8.44481 4.46249 8.48873 4.32 8.48861H0.72C0.529044 8.48861 0.34591 8.40961 0.210883 8.26897C0.0758571 8.12834 2.23056e-07 7.9376 2.23056e-07 7.73872V3.98927C-0.000111908 3.84087 0.0420546 3.69577 0.121162 3.57234C0.200269 3.44891 0.312759 3.35271 0.444391 3.2959C0.576024 3.23909 0.72088 3.22424 0.860621 3.25323C1.00036 3.28221 1.1287 3.35373 1.2294 3.45872L2.34 4.6173C2.6298 4.29016 2.9286 3.96115 3.2454 3.62838C4.45328 2.36822 5.99296 1.5096 7.66958 1.16122C9.34619 0.812839 11.0843 0.99035 12.6641 1.67129C14.2438 2.35222 15.594 3.50597 16.5438 4.9865C17.4937 6.46702 18.0005 8.20776 18 9.98839ZM9.36 4.73916C9.16904 4.73916 8.98591 4.81816 8.85088 4.9588C8.71586 5.09943 8.64 5.29016 8.64 5.48905V9.98839C8.63996 10.1179 8.6721 10.2451 8.7333 10.3578C8.79449 10.4705 8.88265 10.5648 8.9892 10.6314L12.5892 12.8811C12.6703 12.9318 12.7602 12.9654 12.8537 12.9799C12.9472 12.9945 13.0426 12.9897 13.1344 12.9658C13.2261 12.942 13.3125 12.8995 13.3885 12.8409C13.4645 12.7823 13.5287 12.7087 13.5774 12.6243C13.6261 12.5398 13.6583 12.4462 13.6723 12.3488C13.6863 12.2514 13.6817 12.152 13.6588 12.0565C13.6359 11.9609 13.5951 11.8709 13.5388 11.7918C13.4826 11.7126 13.4119 11.6457 13.3308 11.595L10.08 9.56377V5.48905C10.08 5.29016 10.0041 5.09943 9.86912 4.9588C9.73409 4.81816 9.55096 4.73916 9.36 4.73916Z"/>
                            </svg>
                        </div>

                        <!-- text-[var(--theme-sed-02)]  -->
                        <span 
                        :class="[
                                route.name === 'transcation'
                                    ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                    : 'text-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                                ]"
                        class="text-base font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                            Transcation
                        </span>
                    </div>
                </NuxtLink>

            </li>

            <li class="py-[16px]">
                <NuxtLink to="profile">
                    <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                        <div>
                            <!-- fill-[var(--theme-sed-02)] -->
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                :class="[
                                    route.name === 'profile'
                                        ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                        : 'fill-[var(--text-dark)]',
                                    themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                    ]" class="" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                            </svg>
                        </div>
                        <!-- text-[var(--theme-sed-02)] -->
                        <span
                        :class="[
                                    route.name === 'profile'
                                        ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                        : 'text-[var(--text-dark)]',
                                    themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                                    ]"
                        class="text-base font-[500] laptop:group-hover: transition">
                            Profile
                        </span>
                    </div>
                </NuxtLink>

            </li>

            <li class="py-[16px]">
                <NuxtLink to="contract">
                    <div class="flex items-center gap-x-4 group laptop:cursor-pointer group">
                        <div>
                            <!-- stroke-[var(--theme-sed-02)]  -->
                            

                            <svg
                            :class="[
                                    route.name === 'contract'
                                        ? (themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]')
                                        : 'fill-[var(--text-dark)]',
                                    themeStore.isgrad ? 'laptop:group-hover:fill-[var(--theme-from)]' : 'laptop:group-hover:fill-[var(--theme-color)]'
                                    ]"
                            class="stroke-[var(--text-dark)] laptop:group-hover:stroke-[var(--theme-color)]"

                            width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.3373 0C10.2847 0.000943511 9.24723 0.250731 8.30962 0.728967C7.37201 1.2072 6.56083 1.90033 5.94232 2.75175C5.32381 3.60318 4.9155 4.58876 4.75073 5.62803C4.58596 6.6673 4.66941 7.73079 4.99425 8.73167L0.195068 13.5283C0.133157 13.5903 0.0840641 13.6638 0.0505936 13.7448C0.0171232 13.8257 -6.86813e-05 13.9124 2.06204e-07 14V17.3333C2.06204e-07 17.5101 0.0702627 17.6797 0.195331 17.8047C0.320399 17.9298 0.490027 18 0.6669 18H4.0014C4.17827 18 4.3479 17.9298 4.47297 17.8047C4.59804 17.6797 4.6683 17.5101 4.6683 17.3333V16H6.0021C6.17897 16 6.3486 15.9298 6.47367 15.8047C6.59874 15.6797 6.669 15.5101 6.669 15.3333V14H8.0028C8.09041 14.0001 8.17717 13.9829 8.25812 13.9494C8.33908 13.916 8.41265 13.8669 8.47463 13.805L9.27158 13.0075C10.1882 13.305 11.1584 13.4004 12.1154 13.2871C13.0724 13.1738 13.9934 12.8545 14.8151 12.3512C15.6369 11.8479 16.3397 11.1725 16.8753 10.3717C17.4108 9.57077 17.7664 8.66337 17.9175 7.71194C18.0686 6.7605 18.0116 5.78763 17.7505 4.86031C17.4894 3.933 17.0304 3.07327 16.405 2.34032C15.7796 1.60737 15.0027 1.01862 14.1279 0.614608C13.253 0.210593 12.301 0.000910591 11.3373 0ZM13.0046 6.33333C12.7408 6.33333 12.4829 6.25513 12.2635 6.10863C12.0442 5.96212 11.8732 5.75388 11.7723 5.51024C11.6713 5.26661 11.6449 4.99852 11.6964 4.73988C11.7478 4.48124 11.8749 4.24366 12.0614 4.05719C12.2479 3.87072 12.4856 3.74373 12.7443 3.69229C13.0031 3.64084 13.2713 3.66724 13.515 3.76816C13.7587 3.86908 13.967 4.03997 14.1136 4.25924C14.2601 4.47851 14.3384 4.73629 14.3384 5C14.3384 5.35362 14.1978 5.69276 13.9477 5.94281C13.6976 6.19286 13.3583 6.33333 13.0046 6.33333Z" />
                            </svg>
                        </div>
                        <!-- text-[var(--theme-sed-02)] -->
                        <span 
                        :class="[
                                route.name === 'contract'
                                    ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]')
                                    : 'text-[var(--text-dark)]',
                                themeStore.isgrad ? 'laptop:group-hover:text-[var(--theme-from)]' : 'laptop:group-hover:text-[var(--theme-color)]'
                                ]"
                        class="text-[var(--text-dark)] text-base font-[500] laptop:group-hover:text-[var(--theme-color)] transition">
                            Contract
                        </span>
                    </div>
                </NuxtLink>
            </li>

        </ul>



        <div class="mt-[20px] pt-[10px]" :class="[auth.isAdmin ? 'mb-8' : '']">
            <div class="flex justify-between px-2 mb-[15px]">
                <h1 class="uppercase dark:text-[var(--text-dark)] font-[600]">Color switcher</h1>

                <!-- <div class="overflow-x-visible flex items-center">

                    <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" class="sr-only peer">
                    <div  @click="setColortheme($colorMode.preference === 'dark' ? 'light' : 'dark')" id="modeSwitch" class="w-[32px] h-[20px] bg-[var(--text-dark)] peer-focus:outline-none rounded-full peer after:bg-white dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:w-[16px] after:h-[16px] after:absolute after:top-[3px] after:left-[2px] after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-[var(--text-dark)]"></div>

                    </label>

                </div> -->

                <button  @click="setColortheme($colorMode.preference === 'dark' ? 'light' : 'dark')" class="w-8 h-8 transition-all bg-white dark:bg-[var(--text-dark)] rounded-[8px] flex justify-center items-center shadow-btn-sha">
                    <svg v-if="$colorMode.preference === 'dark'" class="w-6 h-6" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <path d="M5.83816 3.00008C5.79515 2.99895 5.75275 3.00965 5.71636 3.03082C5.67996 3.052 5.65122 3.08268 5.63379 3.11897C5.61635 3.15527 5.61101 3.19553 5.61845 3.23463C5.62589 3.27373 5.64577 3.3099 5.67556 3.33854C6.06048 3.70883 6.30669 4.18318 6.37807 4.69201C6.44945 5.20085 6.34225 5.71741 6.0722 6.16592C5.80214 6.61444 5.38344 6.97131 4.87749 7.1842C4.37155 7.39709 3.80499 7.4548 3.2609 7.34886C3.21886 7.3408 3.17518 7.34444 3.13539 7.35931C3.0956 7.37418 3.06149 7.39962 3.03739 7.4324C3.01329 7.46519 3.00028 7.50383 3 7.54344C2.99973 7.58306 3.01221 7.62185 3.03587 7.65491C3.34407 8.08481 3.76711 8.4342 4.26419 8.66941C4.76128 8.90461 5.31565 9.01769 5.87386 8.99775C6.43208 8.97782 6.97531 8.82553 7.4512 8.55557C7.9271 8.28562 8.31959 7.9071 8.59086 7.4565C8.86213 7.0059 9.00302 6.49842 8.99995 5.98298C8.99688 5.46754 8.84996 4.96152 8.57334 4.5137C8.29673 4.06588 7.89975 3.69136 7.42067 3.42625C6.94159 3.16113 6.39658 3.01436 5.83816 3.00008Z" fill="#AAAAAA"/>
                    </svg>

                    <svg v-else class="w-6 h-6" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        
                        <g clip-path="url(#clip0_919_21)">
                            <path d="M5.99995 8.91671C6.102 8.91672 6.2005 8.95419 6.27677 9.02201C6.35303 9.08982 6.40175 9.18327 6.4137 9.28462L6.41661 9.33337V9.75004C6.41649 9.85624 6.37583 9.95839 6.30293 10.0356C6.23002 10.1128 6.13038 10.1593 6.02436 10.1655C5.91835 10.1718 5.81395 10.1373 5.73251 10.0691C5.65108 10.0009 5.59874 9.90425 5.5862 9.79879L5.58328 9.75004V9.33337C5.58328 9.22287 5.62718 9.11689 5.70532 9.03875C5.78346 8.96061 5.88944 8.91671 5.99995 8.91671ZM8.63036 8.04587L8.66953 8.08046L8.9612 8.37212C9.03592 8.44711 9.07931 8.54772 9.08254 8.65353C9.08577 8.75935 9.0486 8.86242 8.97859 8.94182C8.90858 9.02123 8.81096 9.071 8.70558 9.08104C8.6002 9.09108 8.49494 9.06063 8.4112 8.99587L8.37203 8.96129L8.08036 8.66962C8.00846 8.59785 7.96526 8.50227 7.95889 8.40088C7.95251 8.29948 7.98341 8.19925 8.04576 8.11903C8.10811 8.03882 8.19762 7.98415 8.29745 7.9653C8.39728 7.94646 8.50056 7.96474 8.58786 8.01671L8.63036 8.04587ZM3.91953 8.08046C3.99127 8.1522 4.03437 8.24766 4.04073 8.34892C4.0471 8.45018 4.0163 8.55029 3.95411 8.63046L3.91953 8.66962L3.62786 8.96129C3.55288 9.03602 3.45226 9.0794 3.34645 9.08264C3.24064 9.08587 3.13756 9.0487 3.05816 8.97869C2.97876 8.90867 2.92898 8.81106 2.91895 8.70568C2.90891 8.60029 2.93936 8.49504 3.00411 8.41129L3.0387 8.37212L3.33036 8.08046C3.4085 8.00234 3.51446 7.95846 3.62495 7.95846C3.73543 7.95846 3.84139 8.00234 3.91953 8.08046ZM2.66661 5.58337C2.77281 5.58349 2.87496 5.62416 2.95218 5.69706C3.02941 5.76996 3.07588 5.8696 3.0821 5.97562C3.08832 6.08164 3.05383 6.18603 2.98567 6.26747C2.91751 6.34891 2.82082 6.40125 2.71536 6.41379L2.66661 6.41671H2.24995C2.14375 6.41659 2.0416 6.37592 1.96438 6.30302C1.88715 6.23012 1.84068 6.13048 1.83446 6.02446C1.82823 5.91844 1.86273 5.81405 1.93089 5.73261C1.99905 5.65117 2.09574 5.59883 2.2012 5.58629L2.24995 5.58337H2.66661ZM9.74994 5.58337C9.85614 5.58349 9.95829 5.62416 10.0355 5.69706C10.1127 5.76996 10.1592 5.8696 10.1654 5.97562C10.1717 6.08164 10.1372 6.18603 10.069 6.26747C10.0008 6.34891 9.90415 6.40125 9.7987 6.41379L9.74994 6.41671H9.33328C9.22708 6.41659 9.12493 6.37592 9.04771 6.30302C8.97049 6.23012 8.92401 6.13048 8.91779 6.02446C8.91157 5.91844 8.94606 5.81405 9.01422 5.73261C9.08238 5.65117 9.17907 5.59883 9.28453 5.58629L9.33328 5.58337H9.74994ZM3.5887 3.00421L3.62786 3.03879L3.91953 3.33046C3.99426 3.40544 4.03764 3.50606 4.04087 3.61187C4.0441 3.71768 4.00694 3.82075 3.93693 3.90016C3.86691 3.97956 3.7693 4.02933 3.66391 4.03937C3.55853 4.04941 3.45327 4.01896 3.36953 3.95421L3.33036 3.91962L3.0387 3.62796C2.96707 3.55616 2.92408 3.4607 2.91781 3.35947C2.91153 3.25824 2.94239 3.15821 3.0046 3.0781C3.06681 2.998 3.15609 2.94334 3.25572 2.92437C3.35535 2.9054 3.45848 2.92341 3.54578 2.97504L3.5887 3.00421ZM8.9612 3.03879C9.03294 3.11054 9.07603 3.206 9.0824 3.30726C9.08877 3.40852 9.05797 3.50862 8.99578 3.58879L8.9612 3.62796L8.66953 3.91962C8.59455 3.99435 8.49393 4.03774 8.38812 4.04097C8.28231 4.0442 8.17923 4.00703 8.09983 3.93702C8.02043 3.86701 7.97065 3.76939 7.96061 3.66401C7.95057 3.55863 7.98102 3.45337 8.04578 3.36962L8.08036 3.33046L8.37203 3.03879C8.45017 2.96068 8.55613 2.9168 8.66661 2.9168C8.7771 2.9168 8.88306 2.96068 8.9612 3.03879ZM5.99995 1.83337C6.102 1.83339 6.2005 1.87086 6.27677 1.93867C6.35303 2.00649 6.40175 2.09994 6.4137 2.20129L6.41661 2.25004V2.66671C6.41649 2.77291 6.37583 2.87505 6.30293 2.95228C6.23002 3.0295 6.13038 3.07597 6.02436 3.0822C5.91835 3.08842 5.81395 3.05393 5.73251 2.98576C5.65108 2.9176 5.59874 2.82091 5.5862 2.71546L5.58328 2.66671V2.25004C5.58328 2.13953 5.62718 2.03355 5.70532 1.95541C5.78346 1.87727 5.88944 1.83337 5.99995 1.83337ZM5.99995 3.91671C6.40814 3.91668 6.80736 4.03658 7.148 4.2615C7.48864 4.48642 7.7557 4.80646 7.91601 5.18186C8.07632 5.55726 8.12282 5.97149 8.04973 6.37309C7.97663 6.77469 7.78717 7.14597 7.50487 7.44081C7.22258 7.73566 6.85988 7.94108 6.46183 8.03155C6.06379 8.12203 5.64793 8.09358 5.26592 7.94973C4.8839 7.80589 4.55256 7.55299 4.31305 7.22244C4.07354 6.8919 3.93641 6.49827 3.9187 6.09046L3.91661 6.00004L3.9187 5.90962C3.942 5.37327 4.17145 4.86661 4.5592 4.49532C4.94696 4.12402 5.46309 3.91674 5.99995 3.91671Z" fill="#EBDB53"/>
                        </g>

                        <defs>
                            <clipPath id="clip0_919_21">
                                <rect width="10" height="10" fill="white" transform="translate(1 1)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </button>

            </div>


            <div class="flex flex-wrap justify-start gap-4 mx-2">
                <div v-for="(col, i) in colorBalls" :key="i" :style="{'background' : col.color}" @click="changeTheme(col, col.from, col.to)" class="w-[25px] aspect-square rounded-full">
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import  mainLayout from '../layouts/mainLayout'
import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';

const route = useRoute();
const themeStore = useThemeStore();
const auth = useAuthStore();
const selectedTheme = ref({});

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
    }
]);


// const getThemeColor = computed(() => {
//     if (!themeStore.isgrad) {

//         return `var(--theme-color)`;
//     } else {
//         let themeHex = themeStore.HSLToHex(selectedTheme.value.from.hus, selectedTheme.value.from.sat, selectedTheme.value.from.light);

//         document.documentElement.style.setProperty('--theme-from', themeHex);
//         return 'var(--theme-from)';
//     }
// })

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

const setColortheme = (newTheme) => {
    
    useColorMode().preference = newTheme;
    
}

</script>

<style>

</style>