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

            <div class="p-[30px] relative bg-white dark:bg-[var(--secondary-dark)] lg-tablet:flex lg-tablet:items-start lg-tablet:gap-x-4 laptop:gap-x-[30px] laptop:items-start rounded-[15px] overflow-hidden">
                <div v-if="auth.userObj.isVerified" class="absolute rounded-full flex items-center justify-center px-4 py-1 gap-x-2 right-0 top-0  rounded-r-[16px] overflow-hidden transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">

                    <span class="text-white text-[16px] font-[500]" >
                        Verified
                    </span>

                    <div class="flex-1">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.05548 11.4708L3.96967 8.38425L4.99803 7.35589L7.05548 9.41261L11.1689 5.29843L12.198 6.32752L7.05548 11.4693V11.4708Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.333313 8.33334C0.333313 3.91516 3.91513 0.333344 8.33331 0.333344C12.7515 0.333344 16.3333 3.91516 16.3333 8.33334C16.3333 12.7515 12.7515 16.3333 8.33331 16.3333C3.91513 16.3333 0.333313 12.7515 0.333313 8.33334ZM8.33331 14.8788C7.47375 14.8788 6.62261 14.7095 5.82848 14.3806C5.03434 14.0516 4.31278 13.5695 3.70498 12.9617C3.09718 12.3539 2.61504 11.6323 2.2861 10.8382C1.95716 10.044 1.78786 9.19291 1.78786 8.33334C1.78786 7.47378 1.95716 6.62264 2.2861 5.82851C2.61504 5.03438 3.09718 4.31281 3.70498 3.70501C4.31278 3.09721 5.03434 2.61507 5.82848 2.28613C6.62261 1.95719 7.47375 1.78789 8.33331 1.78789C10.0693 1.78789 11.7341 2.4775 12.9616 3.70501C14.1892 4.93252 14.8788 6.59738 14.8788 8.33334C14.8788 10.0693 14.1892 11.7342 12.9616 12.9617C11.7341 14.1892 10.0693 14.8788 8.33331 14.8788Z" fill="white"/>
                        </svg>
                    </div>

                </div>

                <div class="w-[200px] lg-tablet:w-[140px] laptop:w-[200px] laptop:h-[200px] lg-tablet:h-[140px] aspect-square mx-auto rounded-full mb-[15px] relative">
                    <img :src="profileImage" class="w-full h-full rounded-full" alt="">

                    <input hidden ref="profileRef" @change="onFileSelected" id="profile_img" type="file" name="img">

                    <div id="profileImg" @click="openFile('profile')" class="absolute bottom-0 right-0">
                        <svg  width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1.5" y="1.5" width="42" height="42" rx="21" class="fill-[var(--theme-color)] transition-colors"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4446 31.5H24.5554C27.4423 31.5 28.8862 31.5 29.9231 30.765C30.3705 30.448 30.7559 30.0389 31.0572 29.561C31.75 28.461 31.75 26.928 31.75 23.864C31.75 20.799 31.75 19.267 31.0572 18.167C30.7559 17.6891 30.3706 17.28 29.9231 16.963C29.2571 16.49 28.4228 16.321 27.1453 16.261C26.5358 16.261 26.0113 15.771 25.892 15.136C25.8008 14.6709 25.5638 14.2541 25.2212 13.956C24.8786 13.6579 24.4512 13.4969 24.0114 13.5H20.9886C20.0747 13.5 19.2875 14.185 19.108 15.136C18.9887 15.771 18.4642 16.261 17.8547 16.261C16.5782 16.321 15.7438 16.491 15.0769 16.963C14.6297 17.2801 14.2447 17.6892 13.9438 18.167C13.25 19.267 13.25 20.799 13.25 23.864C13.25 26.928 13.25 28.46 13.9428 29.561C14.2425 30.037 14.6273 30.446 15.0769 30.765C16.1138 31.5 17.5577 31.5 20.4446 31.5ZM22.5 19.773C20.3716 19.773 18.6455 21.604 18.6455 23.863C18.6455 26.123 20.3716 27.954 22.5 27.954C24.6284 27.954 26.3545 26.123 26.3545 23.864C26.3545 21.604 24.6284 19.773 22.5 19.773ZM22.5 21.409C21.2235 21.409 20.1875 22.508 20.1875 23.864C20.1875 25.219 21.2235 26.318 22.5 26.318C23.7765 26.318 24.8125 25.219 24.8125 23.864C24.8125 22.508 23.7765 21.409 22.5 21.409ZM26.8679 20.591C26.8679 20.139 27.2129 19.773 27.6393 19.773H28.6661C29.0916 19.773 29.4375 20.139 29.4375 20.591C29.4355 20.8099 29.3533 21.019 29.2088 21.1724C29.0643 21.3258 28.8695 21.4109 28.667 21.409H27.6393C27.539 21.4101 27.4394 21.3898 27.3463 21.3492C27.2533 21.3087 27.1685 21.2487 27.0969 21.1728C27.0252 21.0968 26.9681 21.0063 26.9288 20.9065C26.8895 20.8067 26.8688 20.6995 26.8679 20.591Z" fill="white"/>
                            <rect x="1.5" y="1.5" width="42" height="42" rx="21" stroke="white" stroke-width="3"/>
                        </svg>
                    </div>
                    
                </div>



                <div class="laptop:flex-1">
                    <div class="flex flex-wrap justify-between lg-phone:grid lg-phone:grid-cols-2 gap-4 mb-4">
                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput v-model:input="proUpdateForm.firstName" :placeholder="'FirstName'" :inputType="'text'" :disable="false" :label="'First Name'"/>
                        </div>


                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput v-model:input="proUpdateForm.lastName" :placeholder="'LastName'" :inputType="'text'" :disable="false" :label="'Last Name'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput :placeholder="auth.userObj.email" :inputType="'text'" :disable="true" :label="'Email'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput v-model:input="proUpdateForm.phone_number" :placeholder="'Phone'" :inputType="'text'" :disable="false"  :label="'Phone'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput v-model:input="proUpdateForm.address" :placeholder="'Address'" :inputType="'text'" :disable="false" :label="'Address'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">
                            <div class="flex flex-col gap-y-1 items-stretch flex-1">
                                <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Date of Birth</label>
                                <input v-model="proUpdateForm.birthday" type="date" id="bg-date" class="bg-white dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                            </div>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">

                            <!-- front id card -->
                            <div class="flex flex-col gap-y-1 items-stretch flex-1">
                                <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card front</label>
                                <div  @click="openFile('id_front')" 
                                class="bg-white cursor-pointer  transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                                    

                                    <div :style="{'background-image' : `URL(${id_front})`}" class="img_block aspect-square flex justify-center items-center">

                                        <svg v-if="!id_front"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                        </svg>
                                    </div>

                                    <input hidden ref="id_frontRef" @change="onFileSelected" id="front" type="file" name="img">

                                </div>
                            </div>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">
                            <!-- id card back -->
                            <div class="flex flex-col gap-y-1 items-stretch flex-1">
                                <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card back</label>
                                <div  @click="openFile('id_back')" 
                                class="bg-white cursor-pointer  transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                                    

                                    <div :style="{'background-image' : `URL(${id_back})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                        <svg v-if="!id_back"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                        </svg>
                                    </div>

                                    <input hidden ref="id_backRef" @change="onFileSelected" id="back" type="file" name="img">

                                </div>
                            </div>
                        </div>  
                    </div>
                    <button @click.stop="update" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">
                        <div v-if="isproLoading" class="flex justify-center items-center gap-x-4">
                            <span class="spinner-container">
                                <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16.9854 8.98286C16.9661 7.90692 16.7346 6.84536 16.304 5.85914C15.8734 4.87291 15.2523 3.98146 14.4762 3.23594C13.3334 2.1315 11.8883 1.39125 10.3242 1.10901C8.76017 0.826778 7.14752 1.01526 5.6907 1.65058C4.73804 2.0686 3.87621 2.67446 3.16301 3.4176C2.4498 4.16073 1.88626 5.04218 1.51469 5.99484C0.769867 7.90847 0.812538 10.0391 1.63338 11.9214C2.03798 12.842 2.62526 13.676 3.34466 14.3654C4.06406 15.0549 4.9166 15.5988 5.8383 15.958C6.75854 16.3156 7.7402 16.4885 8.72724 16.4669C10.1883 16.4386 11.6081 15.9776 12.8071 15.1422C14.0061 14.3068 14.9303 13.1345 15.463 11.7738C15.6724 11.2349 15.8162 10.6728 15.8913 10.0996L15.9522 10.1017C16.0949 10.1016 16.236 10.0719 16.3667 10.0145C16.4974 9.95715 16.6147 9.87329 16.7113 9.76824C16.8079 9.6632 16.8817 9.53926 16.928 9.40425C16.9743 9.26925 16.992 9.12612 16.9802 8.9839H16.9843L16.9854 8.98286ZM15.3453 11.7232C14.9665 12.5809 14.4184 13.3581 13.7455 14.0001C13.0725 14.6421 12.2778 15.1478 11.4191 15.4802C10.5614 15.8122 9.64663 15.9715 8.72724 15.9487C7.82064 15.9291 6.92682 15.7308 6.09703 15.365C5.26724 14.9993 4.5178 14.4734 3.89169 13.8174C3.27424 13.1706 2.79025 12.4084 2.46735 11.5746C1.82584 9.91423 1.8689 8.06728 2.58708 6.43865C2.94007 5.64391 3.44994 4.92348 4.07438 4.32897C4.69882 3.73446 5.43783 3.2669 6.23361 2.96036C7.02938 2.65278 7.88089 2.50829 8.72724 2.53099C9.57359 2.5537 10.4086 2.73948 11.1713 3.08009C11.9351 3.41966 12.6266 3.91096 13.1974 4.51166C13.7682 5.11236 14.2172 5.82247 14.5103 6.58728C14.8031 7.35073 14.9424 8.16446 14.9201 8.98183H14.9242C14.9019 9.25004 14.9852 9.51636 15.1564 9.72401C15.3276 9.93166 15.5732 10.0642 15.8407 10.0934C15.7412 10.6543 15.5745 11.2012 15.3443 11.7221L15.3453 11.7232Z" fill="#ffffff"/>
                                </svg>
                            </span>
                            <span>
                                Saving
                            </span>
                        </div>
                        <span v-else>Save</span>
                        
                    </button>
                </div>


            </div>

            <div class="flex items-center gap-x-4 group laptop:cursor-pointer group py-[15px]">
                <div>
                    <!-- fill-[var(--theme-sed-02)] -->
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]"  fill-rule="evenodd" clip-rule="evenodd" d="M6.06601 6.97242C6.06626 5.67088 6.4696 4.40137 7.22061 3.33837C7.97162 2.27537 9.03342 1.47105 10.2601 1.03599C11.4868 0.600917 12.8181 0.556448 14.071 0.908689C15.324 1.26093 16.4371 1.99259 17.2574 3.00311C18.0776 4.01363 18.5648 5.25339 18.6519 6.55201C18.739 7.85062 18.4217 9.14434 17.7438 10.2553C17.0658 11.3663 16.0603 12.2401 14.8656 12.7565C13.6709 13.2729 12.3456 13.4066 11.0718 13.1392L9.66601 14.545C9.32853 14.8826 8.87077 15.0723 8.39341 15.0724H7.86601C7.86601 15.5498 7.67637 16.0076 7.33881 16.3452C7.00124 16.6828 6.5434 16.8724 6.06601 16.8724C6.06601 17.3498 5.87637 17.8076 5.53881 18.1452C5.20124 18.4828 4.7434 18.6724 4.26602 18.6724H2.46602C1.98863 18.6724 1.53079 18.4828 1.19322 18.1452C0.855658 17.8076 0.666016 17.3498 0.666016 16.8724V14.545C0.666118 14.0677 0.855827 13.6099 1.19342 13.2724L6.19921 8.26662C6.11043 7.84094 6.0658 7.40725 6.06601 6.97242ZM12.366 4.27242C12.1273 4.27242 11.8984 4.36724 11.7296 4.53602C11.5608 4.7048 11.466 4.93372 11.466 5.17242C11.466 5.41111 11.5608 5.64003 11.7296 5.80881C11.8984 5.9776 12.1273 6.07242 12.366 6.07242C12.6047 6.07242 12.8336 6.16724 13.0024 6.33602C13.1712 6.5048 13.266 6.73372 13.266 6.97242C13.266 7.21111 13.3608 7.44003 13.5296 7.60881C13.6984 7.7776 13.9273 7.87242 14.166 7.87242C14.4047 7.87242 14.6336 7.7776 14.8024 7.60881C14.9712 7.44003 15.066 7.21111 15.066 6.97242C15.066 6.25633 14.7816 5.56958 14.2752 5.06323C13.7689 4.55688 13.0821 4.27242 12.366 4.27242Z" />
                    </svg>
                </div>
                <!-- text-[var(--theme-sed-02)] -->
                <span class=" text-[20px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">
                    Update Password
                </span>
            </div>


            <div class="p-[30px] bg-white dark:bg-[var(--secondary-dark)] lg-tablet:flex lg-tablet:items-center lg-tablet:gap-x-4 laptop:gap-x-[30px] rounded-[15px] mb-16">
                <div class="flex flex-wrap justify-between lg-phone:grid lg-phone:grid-cols-2 laptop:w-full laptop:grid-cols-3 gap-4 mb-4">
                    <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                        <TextInput :placeholder="'New password'" v-model:input="updatePwdForm.password" :inputType="'password'" :label="'New Password'"/>
                    </div>

                    <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                        <TextInput :placeholder="'Confirm password'" v-model:input="updatePwdForm.password_confirmation" :inputType="'password'" :label="'Confirm password'"/>
                    </div>

                    <div class="laptop:flex laptop:justify-center laptop:items-end">
                        <button @click.stop="updatePwd" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] laptop:h-[53px] inline-block">
                            <div v-if="ispwdLoading" class="flex justify-center items-center gap-x-4">
                                <span class="spinner-container">
                                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.9854 8.98286C16.9661 7.90692 16.7346 6.84536 16.304 5.85914C15.8734 4.87291 15.2523 3.98146 14.4762 3.23594C13.3334 2.1315 11.8883 1.39125 10.3242 1.10901C8.76017 0.826778 7.14752 1.01526 5.6907 1.65058C4.73804 2.0686 3.87621 2.67446 3.16301 3.4176C2.4498 4.16073 1.88626 5.04218 1.51469 5.99484C0.769867 7.90847 0.812538 10.0391 1.63338 11.9214C2.03798 12.842 2.62526 13.676 3.34466 14.3654C4.06406 15.0549 4.9166 15.5988 5.8383 15.958C6.75854 16.3156 7.7402 16.4885 8.72724 16.4669C10.1883 16.4386 11.6081 15.9776 12.8071 15.1422C14.0061 14.3068 14.9303 13.1345 15.463 11.7738C15.6724 11.2349 15.8162 10.6728 15.8913 10.0996L15.9522 10.1017C16.0949 10.1016 16.236 10.0719 16.3667 10.0145C16.4974 9.95715 16.6147 9.87329 16.7113 9.76824C16.8079 9.6632 16.8817 9.53926 16.928 9.40425C16.9743 9.26925 16.992 9.12612 16.9802 8.9839H16.9843L16.9854 8.98286ZM15.3453 11.7232C14.9665 12.5809 14.4184 13.3581 13.7455 14.0001C13.0725 14.6421 12.2778 15.1478 11.4191 15.4802C10.5614 15.8122 9.64663 15.9715 8.72724 15.9487C7.82064 15.9291 6.92682 15.7308 6.09703 15.365C5.26724 14.9993 4.5178 14.4734 3.89169 13.8174C3.27424 13.1706 2.79025 12.4084 2.46735 11.5746C1.82584 9.91423 1.8689 8.06728 2.58708 6.43865C2.94007 5.64391 3.44994 4.92348 4.07438 4.32897C4.69882 3.73446 5.43783 3.2669 6.23361 2.96036C7.02938 2.65278 7.88089 2.50829 8.72724 2.53099C9.57359 2.5537 10.4086 2.73948 11.1713 3.08009C11.9351 3.41966 12.6266 3.91096 13.1974 4.51166C13.7682 5.11236 14.2172 5.82247 14.5103 6.58728C14.8031 7.35073 14.9424 8.16446 14.9201 8.98183H14.9242C14.9019 9.25004 14.9852 9.51636 15.1564 9.72401C15.3276 9.93166 15.5732 10.0642 15.8407 10.0934C15.7412 10.6543 15.5745 11.2012 15.3443 11.7221L15.3453 11.7232Z" fill="#ffffff"/>
                                    </svg>
                                </span>
                                <span>
                                    Saving
                                </span>
                            </div>
                            <span v-else>Save</span>
                            
                        </button>
                    </div>

                </div>
            </div>
        </div>

        <Teleport to="body">
            <transition name="modal">
            
                <div v-if="reserror.msg" class="modal-mask">
                    <div class="modal-container tablet:w-[60%] laptop:w-[40%] rounded-[15px] overflow-hidden relative">
                        <div @click.stop="openErrBox = !openErrBox; reserror = {}" class="absolute top-2 right-2">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="dark:fill-[var(--light-bg)] laptop:cursor-pointer fill-[var(--secondary-dark)]" d="M12.2402 0.240234C9.05764 0.240234 6.00539 1.50452 3.75495 3.75495C1.50452 6.00539 0.240234 9.05764 0.240234 12.2402C0.240234 15.4228 1.50452 18.4751 3.75495 20.7255C6.00539 22.976 9.05764 24.2402 12.2402 24.2402C15.4228 24.2402 18.4751 22.976 20.7255 20.7255C22.976 18.4751 24.2402 15.4228 24.2402 12.2402C24.2402 9.05764 22.976 6.00539 20.7255 3.75495C18.4751 1.50452 15.4228 0.240234 12.2402 0.240234ZM19.0817 16.6131L16.6117 19.0831L12.2402 14.7102L7.86738 19.0817L5.39738 16.6117L9.77166 12.2402L5.39881 7.86738L7.86881 5.39881L12.2402 9.77023L16.6131 5.39738L19.0831 7.86738L14.7088 12.2402L19.0817 16.6131Z"/>
                            </svg>
                        </div>

                        <div class="p-[6] tablet:p-[30px] bg-white dark:bg-[var(--secondary-dark)]">
                            <div class="flex flex-col items-start gap-x-4">
                                <h1 class="text-[20px] text-[#444444] dark:text-[--text-dark] font-[500]">Sorry!</h1>
                                <span :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']" class="text-[16px] font-[500]">Following errors occured. Please try again!</span>
                            </div>
                            
                            <ul>
                                <li v-for="(messagesArr, field) in reserror.errors" :key="field">
                                    <ol class="list-style">
                                        <li v-for="(error, i) in messagesArr" :key="i" class="text-[14px] text-red-300 font-[500]">
                                            {{ error }}
                                        </li>
                                    </ol>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>                
            </transition>

        </Teleport>	
    </mainLayout>
</template>

<script setup>
import  mainLayout  from '../layouts/mainLayout';
import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';
import { useNotiStore } from '../store/usenotificationStore';

definePageMeta({
  
  middleware : ['auth']

});

const auth = useAuthStore();
const notiStore = useNotiStore();
const openErrBox = ref(false);
const profileRef = ref(null);
const id_frontRef = ref(null);
const id_backRef = ref(null);

const reserror = ref({
    msg : '',
    errors : ''
});

const themeStore = useThemeStore();

const profileImage = ref('/profile_female.jpg');
const id_back = ref('');
const id_front = ref('');

const isproLoading = ref(false);
const ispwdLoading = ref(false);

const imgInput = ref(null);
const imgfront = ref('');

const updatePwdForm = ref({
    password : '',
    password_confirmation : ''
});

const proUpdateForm = ref({
    firstName : "",
    lastName : "",
    email : "",
    address : "",
    phone_number : "",
    country : "",
    birthday : "",
    id_front : "",
    id_back : "",
    profile_img : ""
})

onMounted(async () => {
    await auth.getUser(auth.user.id);

    proUpdateForm.value = {
        firstName : auth.userObj.firstName,
        lastName : auth.userObj.lastName,
        email : auth.userObj.email,
        address : auth.userObj.address,
        phone_number : auth.userObj.phone_number,
        country : auth.userObj.country,
        birthday : auth.userObj.birthdat,
    }

    profileImage.value = auth.userObj.profile_img;
    id_front.value = auth.userObj.id_card;
    id_back.value = auth.userObj.id_back;

})

function openFile(type) {

    if (type === 'profile') {

        profileRef.value.click();

    } else if (type === 'id_front') {

        if (auth.userObj.isVerified) {
            notiStore.showNoti('Verified user can not change ID Image.', 'error');
            return;
        } else {
            id_frontRef.value.click();
        }


    } else if (type === 'id_back') {

        if (auth.userObj.isVerified) {
            notiStore.showNoti('Verified user can not change ID Image.', 'error');
            return;
        } else {
            id_backRef.value.click();
        }


    }
}

function onFileSelected(event) {
    const files = event.target.files;
    
    if (files.length) {
        const reader = new FileReader();

        reader.onload = (e) => {
            console.log(event.target.id);
            if (event.target.id === 'front') {

                id_front.value = e.target.result;

            } else if (event.target.id === 'back') {

                id_back.value = e.target.result;

            } else if (event.target.id === 'profile_img') {

                profileImage.value = e.target.result;

            }

            
        }
        reader.readAsDataURL(files[0]);

        if (event.target.id === 'front') {
            console.log('id_front assign:');
                proUpdateForm.value.id_front = files[0];

            } else if (event.target.id === 'back') {
                console.log('id_back assign:');
                proUpdateForm.value.id_back = files[0];

            } else if (event.target.id === 'profile_img') {
                console.log('profileImg:');
                proUpdateForm.value.profile_img = files[0];

            }

            // console.log(proUpdateForm.value);
    }
}




async function update() {

    isproLoading.value = true;


    const formdata = new FormData();
    
    if (proUpdateForm.value.firstName) {
        formdata.append('firstName', proUpdateForm.value.firstName);
    }

    if (proUpdateForm.value.lastName) {
        formdata.append('lastName', proUpdateForm.value.lastName);
    }

    if(proUpdateForm.value.profile_img) {
        formdata.append('profile_image', proUpdateForm.value.profile_img);
    }

    if (proUpdateForm.value.id_front) {
        formdata.append('id_front', proUpdateForm.value.id_front);
    }

    if (proUpdateForm.value.id_back) {
        formdata.append('id_back', proUpdateForm.value.id_back);
    }

    if(proUpdateForm.value.address) {

        formdata.append('address', proUpdateForm.value.address);

    }

    if(proUpdateForm.value.country) {

        formdata.append('country', proUpdateForm.value.country);

    }

    if(proUpdateForm.value.phone_number) {

        formdata.append('phone_number', proUpdateForm.value.phone_number);

    }

    if (proUpdateForm.value.birthday) {

        formdata.append('birthday', proUpdateForm.value.birthday);

    }

    const {data : updateRes, error : updateErr, status } = await auth.updateProfile(formdata, auth.user.id);
    isproLoading.value = false;
    if (status.value !== 'success') {
        openErrBox.value = true;
        reserror.value.msg = updateErr.value.data.message;
        reserror.value.errors = updateErr.value.data.errors;
    } else {
        notiStore.showNoti(updateRes.value.message, 'info');
    }
}

async function updatePwd () {
    ispwdLoading.value = true;
    console.log(updatePwdForm.value);

    if(!updatePwdForm.value.password) {
        reserror.value.msg = 'Password field required.'
        reserror.value.errors = {
            error : ['Password field required']
        }
    }

    if (updatePwdForm.value.password !== updatePwdForm.value.password_confirmation) {
        reserror.value.msg = 'Password confirmation do not match.'
        reserror.value.errors = {
            error : ['Passwords do not match']
        }
    }

    const {data : updatePwdRes, error : updatePwdErr, status : updateStusts} = await auth.updatePwd(updatePwdForm.value, auth.user.id);
    ispwdLoading.value = false;
    if (updateStusts.value !== 'success') {
        openErrBox.value = true;
        reserror.value.msg = updatePwdErr.value.data.message;
        reserror.value.errors = updatePwdErr.value.data.errors;
    } else {
        notiStore.showNoti(updatePwdRes.value.message, 'info');
    }
}


</script>

<style>

.img_block {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;

}

#bg-date {

}
</style>