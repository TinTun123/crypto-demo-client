<template>
    <mainLayout>
        <div class="mx-4 tablet:mx-[30px]">
            <div class="flex items-center gap-x-4 group laptop:cursor-pointer group py-[15px]">
                <div>
                    <!-- fill-[var(--theme-sed-02)] -->
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                    </svg>
                </div>
                <!-- text-[var(--theme-sed-02)] -->
                <span class=" text-[20px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">
                    Profile
                </span>
            </div>

            <div class="flex justify-between mb-4">

                <div class="dark:bg-[var(--secondary-dark)] relative bg-white laptop:w-[40%] rounded-[15px] border border-[#eeeeee]/20 dark:border-none shadow-input-sha dark:shadow-none">
                    <input type="text" class="bg-transparent rouded-full w-full focus:outline-none p-2 dark:text-[var(--text-dark)] text-[#666666]" placeholder="Search user, id, name">

                    <button class="absolute right-0 h-full px-2 rounded-[15px] text-white text-[14px] font-[600] laptop:hover:bg-black/60 laptop:active:bg-black/40 dark:laptop:hover:bg-white/10 dark:laptop:active:bg-white/20 transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">
                        Search
                    </button>

                </div>

                    <ul class="dark:bg-[var(--secondary-dark)] bg-white shadow-input-sha dark:shadow-none flex items-stretch rounded-[8px]">

                        <li v-if="auth.userList.current_page > 1" @click.stop="auth.getPageLink(auth.userList.current_page - 1)" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" class="p-1 pl-3 rounded-[8px] flex items-center justify-center border border-[#eeeeee]/20 dark:border-none laptop:cursor-pointer laptop:hover:bg-black/10 laptop:active:bg-black/20 transition-colors dark:laptop:hover:bg-white/10 dark:laptop:active:bg-white/30 text-[14px] font-[600]">
                            <span>
                                prev
                            </span>
                        </li>
                        <!-- <li v-if="auth.userList.current_page > 1" @click.stop="auth.getPageLink(1)"  class="px-3 rounded-[8px] text-[var(--teriary-dark)] dark:text-[var(--text-dark)] flex items-center justify-center border border-[#eeeeee]/20 dark:border-none laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors laptop:active:bg-black/20 dark:laptop:hover:bg-white/10 text-[14px] font-[600] dark:laptop:active:bg-white/30">
                            <span>
                                1
                            </span>
                        </li> -->
                        <li v-if="auth.userList.current_page > 4" class="px-3 rounded-[8px] flex items-center justify-center text-[var(--teriary-dark)] dark:text-[var(--text-dark)] border border-[#eeeeee]/20 dark:border-none laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors laptop:active:bg-black/20 dark:laptop:hover:bg-white/10 text-[14px] font-[600] dark:laptop:active:bg-white/30">
                            <span>
                                ...
                            </span>
                        </li>
                        <li v-for="(page, i) in auth.getVisiblePages()" :class="[ Number(auth.userList.current_page) === Number(page) ? (themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]') : 'text-[var(--teriary-dark)] dark:text-[var(--text-dark)]']" @click.stop="auth.getPageLink(page)" :key="i" class="px-3 rounded-[8px] flex items-center justify-center border border-[#eeeeee]/20 dark:border-none laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors laptop:active:bg-black/20 dark:laptop:hover:bg-white/10 text-[14px] font-[600] dark:laptop:active:bg-white/30">
                            <span>
                                {{ page }}
                            </span>
                        </li>
                        <li v-if="auth.userList.last_page - auth.userList.current_page > 3" class="p-1 rounded-[8px] flex items-center justify-center border border-[#eeeeee]/20 dark:border-none text-[var(--teriary-dark)] dark:text-[var(--text-dark)] laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors laptop:active:bg-black/20 dark:laptop:hover:bg-white/10 text-[14px] font-[600] dark:laptop:active:bg-white/30">
                            <span>
                                ...
                            </span>
                        </li>

                        <!-- <li v-if="auth.userList.last_page > auth.userList.current_page" @click.stop="getPageLink(auth.userList.last_page)" class="p-1 rounded-[8px] flex items-center justify-center border border-[#eeeeee]/20 dark:border-none laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors laptop:active:bg-black/20 dark:laptop:hover:bg-white/10 text-[14px] font-[600] dark:laptop:active:bg-white/30">
                            <span>
                                {{ auth.userList.last_page }}
                            </span>
                        </li> -->


                        <li v-if="auth.userList.current_page < auth.userList.last_page" @click.stop="auth.getPageLink(Number(auth.userList.current_page) + 1)" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" class="p-1 pr-3 rounded-[8px] flex items-center justify-center border border-[#eeeeee]/20 dark:border-none laptop:cursor-pointer laptop:hover:bg-black/10 transition-colors laptop:active:bg-black/20 dark:laptop:hover:bg-white/10 text-[14px] font-[600] dark:laptop:active:bg-white/30">
                            <span>
                                next
                            </span>
                        </li>
                    </ul>
            

                <div @click.stop="dropFilter = !dropFilter" class="dark:bg-[var(--secondary-dark)] relative flex justify-between gap-x-2 px-2 laptop:cursor-pointer w-[120px] items-center bg-white rounded-[15px] border border-[#eeeeee]/20 dark:border-none shadow-input-sha dark:shadow-none">
    
                    <span :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" class="text-[14px] font-[600]">Filter</span>
                    
                    <div>
                        <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path :class="[themeStore.isgrad ? 'fill-[var(--theme-from)]' : 'fill-[var(--theme-color)]']" class="" d="M10.5007 0.635587L5.97903 5.04325L1.45738 0.635587C1.37659 0.556678 1.26814 0.512501 1.15521 0.512501C1.04228 0.512501 0.93383 0.556678 0.853043 0.635587C0.813926 0.673914 0.78285 0.71966 0.761635 0.770148C0.74042 0.820635 0.729492 0.874849 0.729492 0.929612C0.729492 0.984376 0.74042 1.03859 0.761635 1.08908C0.78285 1.13956 0.813926 1.18531 0.853043 1.22364L5.66329 5.91356C5.74777 5.9959 5.86106 6.04198 5.97903 6.04198C6.09699 6.04198 6.21029 5.9959 6.29477 5.91356L11.105 1.22454C11.1444 1.18619 11.1757 1.14033 11.1971 1.08967C11.2185 1.03902 11.2295 0.984594 11.2295 0.929612C11.2295 0.874631 11.2185 0.820206 11.1971 0.769551C11.1757 0.718896 11.1444 0.673038 11.105 0.634682C11.0242 0.555773 10.9158 0.511597 10.8028 0.511597C10.6899 0.511597 10.5815 0.555773 10.5007 0.634682V0.635587Z"/>
                        </svg>
                    </div>

                    <transition name="drop" appear>
                        <ul v-if="dropFilter" class="dark:bg-[var(--secondary-dark)] rounded-[8px] w-full z-[100] bg-white shadow-btn-sha dark:shadow-none absolute top-[54px]">
                            <li class="px-2 py-2 border-b border-[#eeeeee]/90 dark:border-[#eeeeee]/20 laptop:hover:bg-black/10 rounded-t-[8px] transition-colors text-[#666666] text-[14px] font-[600]">
                                unverified
                            </li>

                            <li class="px-2 py-1 text-[#666666] text-[14px] laptop:hover:bg-black/10 rounded-b-[8px] font-[600]">
                                locked
                            </li>
                        </ul>
                    </transition>
                </div>

            </div>

            <div class="flex flex-col lg-tablet:grid lg-tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
                
                <div @click.stop="selectedUser = user; openUserModal = !openUserModal" v-for="(user, i) in auth.userList.data" class="relative dark:bg-[var(--secondary-dark)] laptop:hover:cursor-pointer laptop:hover:bg-black/10 transition-colors p-3 h-[180px] w-full aspect-square laptop:active:bg-black/20 dark:laptop:active:bg-[#222222]/60 dark:laptop:hover:bg-[#222222]/80 bg-white rounded-[15px] border border-[#eeeeee]/20 dark:border-none shadow-input-sha dark:shadow-none">
                    <div v-if="user.isVerified" class="text-[12px] absolute p-2 right-0 top-0 rounded-tr-[15px] rounded-bl-[15px] text-white" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">
                        verified
                    </div>
                    <div class="flex gap-x-2">
                        <div class="w-[35px] h-[35px] rounded-full overflow-hidden">
                            <img :src="user.profile_img" class="w-full h-full" alt="">
                        </div>

                        <div class="">
                            <div class="flex items-center gap-x-2 dark:text-[var(--text-dark)] text-[#666666]">
                                <span class="text-[16px] font-[600]">
                                    {{ user.firstName }}
                                    {{ user.lastName }}
                                </span>
                                <span class="text-[14px] font-[300]">
                                    ID: {{ user.id }}
                                </span>
                            </div>

                            <span class="text-[12px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                {{ user.email }}
                            </span>
                            

                        </div>
                    </div>

                    <div class="mb-2 mt-4 flex justify-between">
                        <h1 class="font-[500]  text-[14px]" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">Balance</h1>
                        <div class="font-[500] w-[50%] overflow-hidden text-[14px] flex gap-x-1 items-center" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">
                            <span>Key:</span>
                            <span style="{text-overflow: ellipsis;}" class="text-[12px] overflow-hidden dark:text-[var(--text-dark)] font-[500] text-[#666666]">fsdfhheradfsdfwettehetotpeyieptpqwe</span>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-3 gap-y-3">
                        <div class="flex gap-x-1">
                            <div class="w-[20px] h-[20px]">
                                <img src="/btc.png" class="h-full w-full" alt="">
                            </div>
                            <span class="flex-none text-[14px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                2.345 BTC
                            </span>
                        </div>

                        <div class="flex gap-x-1">
                            <div class="w-[20px] h-[20px]">
                                <img src="/bch.png" class="h-full w-full" alt="">
                            </div>
                            <span class="flex-none text-[14px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                54.5 BCH
                            </span>
                        </div>

                        <div class="flex gap-x-1">
                            <div class="w-[20px] h-[20px]">
                                <img src="/dash.png" class="h-full w-full" alt="">
                            </div>
                            <span class="flex-none text-[14px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                10.345 DAH
                            </span>
                        </div>

                        <div class="flex gap-x-1">
                            <div class="w-[20px] h-[20px]">
                                <img src="/doge.png" class="h-full w-full" alt="">
                            </div>
                            <span class="flex-none text-[14px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                12.345 DOG
                            </span>
                        </div>

                        <div class="flex gap-x-1">
                            <div class="w-[20px] h-[20px]">
                                <img src="/eth.png" class="h-full w-full" alt="">
                            </div>
                            <span class="flex-none text-[14px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                514.5 ETH
                            </span>
                        </div>

                        <div class="flex gap-x-1">
                            <div class="w-[20px] h-[20px]">
                                <img src="/ltc.png" class="h-full w-full" alt="">
                            </div>
                            <span class="flex-none text-[14px] dark:text-[var(--text-dark)] font-[500] text-[#666666]">
                                21.345 LTC
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <Teleport to="body">
                <transition name="modal">
                    <div v-if="openUserModal" class="modal-mask">
                        <div class="modal-container rounded-[15px] relative bg-white dark:bg-[var(--secondary-dark)] p-[30px] overflow-hidden laptop:w-[80%] z-[100]">
                            <div @click.stop="openUserModal = !openUserModal; selectedTab = 'profile'" class="absolute top-2 right-2">
                                
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path class="dark:fill-[var(--light-bg)] laptop:cursor-pointer fill-[var(--secondary-dark)]" d="M12.2402 0.240234C9.05764 0.240234 6.00539 1.50452 3.75495 3.75495C1.50452 6.00539 0.240234 9.05764 0.240234 12.2402C0.240234 15.4228 1.50452 18.4751 3.75495 20.7255C6.00539 22.976 9.05764 24.2402 12.2402 24.2402C15.4228 24.2402 18.4751 22.976 20.7255 20.7255C22.976 18.4751 24.2402 15.4228 24.2402 12.2402C24.2402 9.05764 22.976 6.00539 20.7255 3.75495C18.4751 1.50452 15.4228 0.240234 12.2402 0.240234ZM19.0817 16.6131L16.6117 19.0831L12.2402 14.7102L7.86738 19.0817L5.39738 16.6117L9.77166 12.2402L5.39881 7.86738L7.86881 5.39881L12.2402 9.77023L16.6131 5.39738L19.0831 7.86738L14.7088 12.2402L19.0817 16.6131Z"/>
                                </svg>

                            </div>
                            <div class="flex items-center gap-x-4 dark:text-[var(--text-dark)] text-[#666666] mb-6">
                                <div class="flex gap-x-4">
                                    <div class="w-[48px] h-[48px] rounded-full overflow-hidden">
                                        <img :src="selectedUser.profile_img" class="w-full h-full" alt="">
                                    </div>
                                    <div class="flex flex-col">
                                        <h1 class="text-[#666666] dark:text-[var(--text-dark)] text-[18px] font-[400]">
                                            <div class="flex gap-x-2 items-center">
                                                <span>
                                                    {{ selectedUser.firstName }} {{ selectedUser.lastName }}
                                                </span>
                                                <div v-if="selectedUser.isVerified" class="w-4 h-4">
                                                    <svg class="w-full h-full" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path :class="[themeStore.isgrad ? 'fill-[var(--theme-color)]' : 'fill-[var(--theme-color)]']" d="M8.66602 0.666656C4.25002 0.666656 0.666016 4.25066 0.666016 8.66666C0.666016 13.0827 4.25002 16.6667 8.66602 16.6667C13.082 16.6667 16.666 13.0827 16.666 8.66666C16.666 4.25066 13.082 0.666656 8.66602 0.666656ZM6.49802 12.0987L3.62602 9.22666C3.55195 9.15259 3.4932 9.06466 3.45311 8.96789C3.41303 8.87112 3.3924 8.7674 3.3924 8.66266C3.3924 8.55791 3.41303 8.45419 3.45311 8.35742C3.4932 8.26065 3.55195 8.17272 3.62602 8.09866C3.70008 8.02459 3.78801 7.96584 3.88478 7.92576C3.98155 7.88567 4.08527 7.86504 4.19002 7.86504C4.29476 7.86504 4.39848 7.88567 4.49525 7.92576C4.59202 7.96584 4.67995 8.02459 4.75402 8.09866L7.06602 10.4027L12.57 4.89866C12.7196 4.74907 12.9225 4.66504 13.134 4.66504C13.3456 4.66504 13.5484 4.74907 13.698 4.89866C13.8476 5.04824 13.9316 5.25112 13.9316 5.46266C13.9316 5.6742 13.8476 5.87707 13.698 6.02666L7.62602 12.0987C7.552 12.1728 7.46409 12.2317 7.36732 12.2718C7.27054 12.3119 7.16679 12.3326 7.06202 12.3326C6.95724 12.3326 6.85349 12.3119 6.75672 12.2718C6.65994 12.2317 6.57203 12.1728 6.49802 12.0987Z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </h1>
                                        <span class="text-[#666666] dark:text-[var(--text-dark)] text-[14px] font-[500]">{{ selectedUser.email }}</span>
                                    </div>
                                </div>
                                <div @click.stop="scrollToprofile(); selectedTab = 'profile'" :class="[selectedTab === 'profile' ? (themeStore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white') : 'dark:bg-[var(--secondary-dark)] bg-white']" class="text-[16px] flex gap-x-2 items-center px-2 py-1 transition-colors laptop:cursor-pointer shadow-btn-sha rounded-full" >
                                    <span>
                                        <div class="w-4 h-4">
                                            <svg :class="[selectedTab === 'profile' ? 'fill-white' : 'dark:fill-[var(--text-dark)] fill-[#666666]']" class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 288c79.5 0 144-64.5 144-144S335.5 0 256 0 112 64.5 112 144s64.5 144 144 144zm128 32h-55.1c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16H128C57.3 320 0 377.3 0 448v16c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48v-16c0-70.7-57.3-128-128-128z"/></svg>
                                        </div>
                                     </span>
                                    <span>
                                        Profile
                                    </span> 
                                </div>
                                
                                <span @click.stop="scrollToBal(); selectedTab = 'balance'" :class="[selectedTab === 'balance' ? (themeStore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white') : 'dark:bg-[var(--secondary-dark)] bg-white']" class="text-[16px] px-2 py-1 flex items-center gap-x-2 transition-colors laptop:cursor-pointer shadow-btn-sha rounded-full">
                                    <span class="w-4 h-4">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path :class="[selectedTab === 'balance' ? 'fill-white' : 'dark:fill-[var(--text-dark)] fill-[#666666]']" class="w-full h-full" d="M14.7998 4.22118H2.2998V3.72118L13.2998 2.84118V3.72118H14.7998V2.22118C14.7998 1.12118 13.9088 0.349178 12.8208 0.504178L2.7798 1.93818C1.6908 2.09418 0.799805 3.12118 0.799805 4.22118V14.2212C0.799805 14.7516 1.01052 15.2603 1.38559 15.6354C1.76066 16.0105 2.26937 16.2212 2.7998 16.2212H14.7998C15.3302 16.2212 15.8389 16.0105 16.214 15.6354C16.5891 15.2603 16.7998 14.7516 16.7998 14.2212V6.22118C16.7998 5.69074 16.5891 5.18204 16.214 4.80696C15.8389 4.43189 15.3302 4.22118 14.7998 4.22118ZM13.2998 11.2272C13.1028 11.2271 12.9076 11.1882 12.7256 11.1128C12.5436 11.0373 12.3782 10.9267 12.2389 10.7873C12.0996 10.648 11.9892 10.4825 11.9138 10.3004C11.8385 10.1184 11.7997 9.92323 11.7998 9.72618C11.7999 9.52913 11.8387 9.33402 11.9142 9.152C11.9897 8.96998 12.1003 8.8046 12.2396 8.66531C12.379 8.52602 12.5445 8.41555 12.7266 8.3402C12.9086 8.26486 13.1038 8.22611 13.3008 8.22618C13.6988 8.22631 14.0804 8.38453 14.3617 8.66602C14.643 8.94751 14.8009 9.32922 14.8008 9.72718C14.8007 10.1251 14.6425 10.5067 14.361 10.788C14.0795 11.0693 13.6978 11.2273 13.2998 11.2272Z"/>
                                        </svg>
                                    </span>
                                    <span>
                                        Balance
                                    </span>
                                    
                                </span>
                                
                                <span @click.stop="scrollToTransc(); selectedTab = 'transcation'" :class="[selectedTab === 'transcation' ? (themeStore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white') : 'dark:bg-[var(--secondary-dark)] bg-white']" class="text-[16px] px-2 py-1 flex items-center gap-x-2 transition-colors laptop:cursor-pointer shadow-btn-sha rounded-full">
                                    <span class="w-4 h-4">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path :class="[selectedTab === 'transcation' ? 'fill-white' : 'dark:fill-[var(--text-dark)] fill-[#666666]']" class="w-full h-full" d="M2.97062 6.68234C3.22734 5.95552 3.64409 5.27204 4.23088 4.68859C6.31465 2.60482 9.69202 2.60482 11.7758 4.68859L12.3459 5.26204H10.6689C10.0788 5.26204 9.602 5.73881 9.602 6.32893C9.602 6.91905 10.0788 7.39582 10.6689 7.39582H14.9331C15.5232 7.39582 16 6.91905 16 6.32893V2.06137C16 1.47125 15.5232 0.994486 14.9331 0.994486C14.343 0.994486 13.8662 1.47125 13.8662 2.06137V3.7684L13.2828 3.18161C10.3655 0.264334 5.63784 0.264334 2.72057 3.18161C1.90706 3.99511 1.32028 4.95198 0.9602 5.97552C0.763492 6.53231 1.05689 7.1391 1.61034 7.33581C2.16378 7.53251 2.77391 7.23912 2.97062 6.68567V6.68234ZM0.766826 9.57294C0.600125 9.62295 0.440092 9.71297 0.310065 9.84633C0.176703 9.97969 0.0866848 10.1397 0.0400084 10.3131C0.0300063 10.3531 0.0200042 10.3964 0.0133361 10.4398C0.00333401 10.4965 0 10.5531 0 10.6098V14.864C0 15.4542 0.476766 15.9309 1.06689 15.9309C1.65701 15.9309 2.13378 15.4542 2.13378 14.864V13.1604L2.72057 13.7438C5.63784 16.6577 10.3655 16.6577 13.2794 13.7438C14.0929 12.9303 14.6831 11.9734 15.0431 10.9532C15.2398 10.3964 14.9464 9.78965 14.393 9.59294C13.8396 9.39624 13.2294 9.68963 13.0327 10.2431C12.776 10.9699 12.3592 11.6534 11.7725 12.2368C9.68869 14.3206 6.31131 14.3206 4.22755 12.2368L4.22421 12.2335L3.65409 11.6634H5.33444C5.92457 11.6634 6.40133 11.1866 6.40133 10.5965C6.40133 10.0064 5.92457 9.5296 5.33444 9.5296H1.08023C1.02688 9.5296 0.973536 9.53293 0.920192 9.5396C0.866847 9.54627 0.816837 9.55627 0.766826 9.57294Z"/>
                                        </svg>
                                    </span>
                                    
                                    <span>
                                        Transcation
                                    </span>
                                    
                                </span>
                                
                                <span @click.stop="scrollToAct(); selectedTab = 'activities'" :class="[selectedTab === 'activities' ? (themeStore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white') : 'dark:bg-[var(--secondary-dark)] bg-white']" class="text-[16px] px-2 py-1 flex items-center gap-x-2 transition-colors laptop:cursor-pointer shadow-btn-sha rounded-full">
                                    <span class="w-4 h-4">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path :class="[selectedTab === 'activities' ? 'fill-white' : 'dark:fill-[var(--text-dark)] fill-[#666666]']" class="w-full h-full" d="M12.9991 -0.0400391C14.653 -0.0400391 15.999 1.28795 15.999 2.95993C15.999 3.94192 15.661 4.89292 15.216 5.77791C14.773 6.6569 14.188 7.53589 13.634 8.36588L13.623 8.38288C13.055 9.23588 12.5191 10.0419 12.1221 10.8289C11.7241 11.6179 11.4991 12.3228 11.4991 12.9648C11.4992 13.224 11.5664 13.4787 11.6942 13.7041C11.822 13.9295 12.006 14.118 12.2284 14.2511C12.4507 14.3843 12.7037 14.4576 12.9627 14.4638C13.2218 14.4701 13.4781 14.4092 13.7066 14.2869C13.9351 14.1647 14.128 13.9853 14.2666 13.7664C14.4051 13.5474 14.4846 13.2963 14.4973 13.0374C14.5099 12.7786 14.4553 12.5209 14.3387 12.2895C14.2221 12.058 14.0475 11.8608 13.832 11.7169C13.6731 11.6036 13.5646 11.4329 13.5295 11.241C13.4944 11.0491 13.5355 10.851 13.644 10.6889C13.7525 10.5268 13.92 10.4133 14.1108 10.3726C14.3016 10.3319 14.5008 10.3671 14.666 10.4709C15.201 10.8285 15.6068 11.3487 15.8235 11.9546C16.0402 12.5605 16.0563 13.2201 15.8695 13.8359C15.6826 14.4517 15.3027 14.9911 14.7859 15.3744C14.269 15.7578 13.6426 15.9647 12.9991 15.9648H2.99914C2.2035 15.9648 1.44045 15.6487 0.877843 15.0861C0.315239 14.5235 -0.000828468 13.7605 -0.000828468 12.9648C-0.000828468 11.3829 0.890163 9.82987 1.77615 8.45888C1.98515 8.13689 2.19415 7.82189 2.39915 7.51289C2.87214 6.8039 3.32214 6.1269 3.68614 5.46491H2.50915C1.93315 5.46491 1.12816 5.33191 0.602166 4.68192C0.205955 4.19611 -0.00741604 3.58679 -0.000828468 2.95993C-0.000828468 2.16429 0.315239 1.40124 0.877843 0.838632C1.44045 0.276028 2.2035 -0.0400391 2.99914 -0.0400391H12.9991ZM12.9991 1.45995C12.6012 1.45995 12.2197 1.61798 11.9384 1.89928C11.6571 2.18058 11.4991 2.56211 11.4991 2.95993C11.4991 3.43593 11.7221 3.79393 12.1661 4.09192C12.2996 4.18143 12.4008 4.31147 12.4549 4.46288C12.5089 4.61429 12.5128 4.77905 12.4661 4.93287C12.4194 5.08669 12.3245 5.22143 12.1954 5.31722C12.0663 5.41301 11.9098 5.46479 11.7491 5.46491H5.36712C4.90013 6.4679 4.22613 7.47989 3.59414 8.42788C3.40214 8.71688 3.21314 8.99888 3.03614 9.27287C2.12915 10.6759 1.49916 11.8809 1.49916 12.9648C1.49916 13.3627 1.65719 13.7442 1.93849 14.0255C2.2198 14.3068 2.60132 14.4648 2.99914 14.4648H10.4001C10.1366 14.0089 9.99828 13.4914 9.99908 12.9648C9.99908 11.9858 10.3371 11.0369 10.7831 10.1529C11.2241 9.27887 11.8061 8.40488 12.3581 7.57689L12.3751 7.55089C12.9431 6.6979 13.478 5.89291 13.876 5.10291C14.274 4.31292 14.499 3.60593 14.499 2.95993C14.499 2.12194 13.83 1.45995 12.9991 1.45995ZM2.99914 1.45995C2.60132 1.45995 2.2198 1.61798 1.93849 1.89928C1.65719 2.18058 1.49916 2.56211 1.49916 2.95993C1.49916 3.28093 1.59916 3.52893 1.76916 3.73793C1.86615 3.85792 2.09415 3.96492 2.50915 3.96492H10.1831C10.0592 3.64445 9.99679 3.30351 9.99908 2.95993C9.99908 2.41394 10.1451 1.90094 10.4001 1.45995H2.99914Z"/>
                                        </svg>
                                    </span>

                                    <span>
                                        Activities Log
                                    </span>

                                </span>
                                
                                <span @click.stop="scrollToContract(); selectedTab = 'contract'" :class="[selectedTab === 'contract' ? (themeStore.isgrad ? 'bg-[var(--theme-from)] text-white' : 'bg-[var(--theme-color)] text-white') : 'dark:bg-[var(--secondary-dark)] bg-white']" class="text-[16px] px-2 py-1 flex items-center gap-x-2 transition-colors laptop:cursor-pointer shadow-btn-sha rounded-full">
                                    
                                    <span class="w-4 h-4">
                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path :class="[selectedTab === 'contract' ? 'fill-white' : 'dark:fill-[var(--text-dark)] fill-[#666666]']" class="w-full h-full" fill-rule="evenodd" clip-rule="evenodd" d="M5.46699 6.2723C5.46721 5.11538 5.82573 3.98693 6.4933 3.04204C7.16086 2.09715 8.10469 1.3822 9.19506 0.995475C10.2854 0.608747 11.4688 0.569219 12.5825 0.882322C13.6963 1.19543 14.6857 1.84579 15.4149 2.74403C16.144 3.64227 16.577 4.74428 16.6544 5.89861C16.7319 7.05293 16.4499 8.2029 15.8472 9.19046C15.2445 10.178 14.3508 10.9547 13.2889 11.4137C12.2269 11.8727 11.0488 11.9916 9.91659 11.7539L8.66699 13.0035C8.367 13.3036 7.9601 13.4722 7.53579 13.4723H7.06699C7.06699 13.8966 6.89842 14.3036 6.59836 14.6037C6.2983 14.9037 5.89134 15.0723 5.46699 15.0723C5.46699 15.4966 5.29842 15.9036 4.99836 16.2037C4.6983 16.5037 4.29134 16.6723 3.86699 16.6723H2.26699C1.84265 16.6723 1.43568 16.5037 1.13562 16.2037C0.835563 15.9036 0.666992 15.4966 0.666992 15.0723V13.0035C0.667083 12.5792 0.835713 12.1723 1.13579 11.8723L5.58539 7.4227C5.50648 7.04433 5.4668 6.65882 5.46699 6.2723ZM11.067 3.8723C10.8548 3.8723 10.6513 3.95659 10.5013 4.10662C10.3513 4.25665 10.267 4.46013 10.267 4.6723C10.267 4.88448 10.3513 5.08796 10.5013 5.23799C10.6513 5.38802 10.8548 5.4723 11.067 5.4723C11.2792 5.4723 11.4826 5.55659 11.6327 5.70662C11.7827 5.85665 11.867 6.06013 11.867 6.2723C11.867 6.48448 11.9513 6.68796 12.1013 6.83799C12.2513 6.98802 12.4548 7.0723 12.667 7.0723C12.8792 7.0723 13.0826 6.98802 13.2327 6.83799C13.3827 6.68796 13.467 6.48448 13.467 6.2723C13.467 5.63578 13.2141 5.02533 12.764 4.57525C12.314 4.12516 11.7035 3.8723 11.067 3.8723Z" fill="#DDDDDD"/>
                                        </svg>
                                    </span>

                                    <span>
                                        Contract
                                    </span>
                                    
                                </span>
                            </div>

                            <div class="overflow-hidden">
                                <div class="flex gap-x-[30px]">
                                    <div ref="profileRef" id="profile" class="flex-none w-full">
                                        <adminProfileComponent :user="selectedUser" @toggleVerify="toggleVerify"/>
                                    </div>

                                    <div ref="balanceRef" id="balance" class="w-full flex-none">
                                        <balanceComponent />
                                    </div>

                                    <div ref="transcationRef" id="transcation" class="w-full flex-none h-full">
                                        <transcationComponent/>
                                    </div>

                                    <div ref="actRef" id="activities" class="w-full flex-none">
                                        <activitiesLog :user="selectedUser"/>
                                    </div>

                                    <div ref="contractRef" id="contract" class="w-full flex flex-none">
                                        <contractComponent :user="selectedUser"/>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>                
                </transition>

            </Teleport>	
            
        </div>
    </mainLayout>
</template>

<script setup>

import mainLayout from '../layouts/mainLayout';
import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';

const themeStore = useThemeStore();
const dropFilter = ref(false);
const openUserModal = ref(false);

const selectedTab = ref('profile');

const selectedUser = ref({});

const profileRef =ref(null);
const balanceRef = ref(null);
const transcationRef = ref(null);
const actRef = ref(null);
const contractRef = ref(null);

const auth = useAuthStore();

definePageMeta({
    middleware : ['auth', 'is-admin']
})

onMounted(async () => {
    await auth.fetchUsers();

})

function toggleVerify() {

    selectedUser.value.isVerified = !selectedUser.value.isVerified;
    
}
function scrollToprofile() {
    profileRef.value.scrollIntoView({behavior : 'smooth', inline : 'end'});
}

function scrollToBal() {
    balanceRef.value.scrollIntoView({behavior : 'smooth', inline : 'start'});
}

function scrollToTransc() {
    transcationRef.value.scrollIntoView({behavior : 'smooth', inline : 'start'});
}

function scrollToAct() {
    actRef.value.scrollIntoView({behavior : 'smooth', inline : 'start'});
}

function scrollToContract() {
    contractRef.value.scrollIntoView({behavior : 'smooth', inline : 'start'});
}



</script>

<style>
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: transform 0.7s ease-in-out,
    opacity 0.7s ease-in-out;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>