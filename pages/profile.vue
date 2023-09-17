<template>
    <mainLayout>
        <div class="mx-4 tablet:mx-[30px]">
            <div class="flex items-center gap-x-4 group laptop:cursor-pointer group py-[15px]">
                <div>
                    <!-- fill-[var(--theme-sed-02)] -->
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]" fill-rule="evenodd" clip-rule="evenodd" d="M5 4C5 2.93913 5.42143 1.92172 6.17157 1.17157C6.92172 0.421427 7.93913 0 9 0C10.0609 0 11.0783 0.421427 11.8284 1.17157C12.5786 1.92172 13 2.93913 13 4C13 5.06087 12.5786 6.07828 11.8284 6.82843C11.0783 7.57857 10.0609 8 9 8C7.93913 8 6.92172 7.57857 6.17157 6.82843C5.42143 6.07828 5 5.06087 5 4ZM5 10C3.67392 10 2.40215 10.5268 1.46447 11.4645C0.526784 12.4021 0 13.6739 0 15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15C18 13.6739 17.4732 12.4021 16.5355 11.4645C15.5979 10.5268 14.3261 10 13 10H5Z"/>
                    </svg>

                    <!-- <svg
                        class="dark:fill-[var(--text-dark)] fill-[var(--secondary-dark)]"
                        width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.3373 0C10.2847 0.000943511 9.24723 0.250731 8.30962 0.728967C7.37201 1.2072 6.56083 1.90033 5.94232 2.75175C5.32381 3.60318 4.9155 4.58876 4.75073 5.62803C4.58596 6.6673 4.66941 7.73079 4.99425 8.73167L0.195068 13.5283C0.133157 13.5903 0.0840641 13.6638 0.0505936 13.7448C0.0171232 13.8257 -6.86813e-05 13.9124 2.06204e-07 14V17.3333C2.06204e-07 17.5101 0.0702627 17.6797 0.195331 17.8047C0.320399 17.9298 0.490027 18 0.6669 18H4.0014C4.17827 18 4.3479 17.9298 4.47297 17.8047C4.59804 17.6797 4.6683 17.5101 4.6683 17.3333V16H6.0021C6.17897 16 6.3486 15.9298 6.47367 15.8047C6.59874 15.6797 6.669 15.5101 6.669 15.3333V14H8.0028C8.09041 14.0001 8.17717 13.9829 8.25812 13.9494C8.33908 13.916 8.41265 13.8669 8.47463 13.805L9.27158 13.0075C10.1882 13.305 11.1584 13.4004 12.1154 13.2871C13.0724 13.1738 13.9934 12.8545 14.8151 12.3512C15.6369 11.8479 16.3397 11.1725 16.8753 10.3717C17.4108 9.57077 17.7664 8.66337 17.9175 7.71194C18.0686 6.7605 18.0116 5.78763 17.7505 4.86031C17.4894 3.933 17.0304 3.07327 16.405 2.34032C15.7796 1.60737 15.0027 1.01862 14.1279 0.614608C13.253 0.210593 12.301 0.000910591 11.3373 0ZM13.0046 6.33333C12.7408 6.33333 12.4829 6.25513 12.2635 6.10863C12.0442 5.96212 11.8732 5.75388 11.7723 5.51024C11.6713 5.26661 11.6449 4.99852 11.6964 4.73988C11.7478 4.48124 11.8749 4.24366 12.0614 4.05719C12.2479 3.87072 12.4856 3.74373 12.7443 3.69229C13.0031 3.64084 13.2713 3.66724 13.515 3.76816C13.7587 3.86908 13.967 4.03997 14.1136 4.25924C14.2601 4.47851 14.3384 4.73629 14.3384 5C14.3384 5.35362 14.1978 5.69276 13.9477 5.94281C13.6976 6.19286 13.3583 6.33333 13.0046 6.33333Z" />
                    </svg> -->
                </div>
                <!-- text-[var(--theme-sed-02)] -->
                <span class=" text-[20px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition">
                    Profile
                </span>
            </div>

            <div class="p-[30px] relative bg-white dark:bg-[var(--secondary-dark)] lg-tablet:flex lg-tablet:items-start lg-tablet:gap-x-4 laptop:gap-x-[30px] laptop:items-start rounded-[15px] overflow-hidden">
                <div class="absolute rounded-full flex items-center justify-center px-4 py-1 gap-x-2 right-0 top-0  rounded-r-[16px] overflow-hidden transition-colors" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">

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
                    <img src="/profile_female.jpg" class="w-full h-full rounded-full" alt="">

                    <div class="absolute bottom-0 right-0">
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
                            <TextInput :placeholder="'FirstName'" :inputType="'text'" :disable="false" :value="''" :label="'First Name'"/>
                        </div>


                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput :placeholder="'LastName'" :inputType="'text'" :disable="false" :value="''" :label="'Last Name'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput :placeholder="'jamescollin1992@gmail.com'" :inputType="'text'" :disable="true" :value="''" :label="'Email'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput :placeholder="'Phone'" :inputType="'text'" :disable="false" :value="''" :label="'Phone'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                            <TextInput :placeholder="'Address'" :inputType="'text'" :disable="false" :value="''" :label="'Address'"/>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">
                            <div class="flex flex-col gap-y-1 items-stretch flex-1">
                                <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Date of Birth</label>
                                <input type="date" id="bg-date" class="bg-white dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                            </div>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">

                            <!-- front id card -->
                            <div class="flex flex-col gap-y-1 items-stretch flex-1">
                                <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card front</label>
                                <div  @click="openFile" 
                                class="bg-white cursor-pointer  transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                                    

                                    <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block aspect-square flex justify-center items-center">

                                        <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                        </svg>
                                    </div>

                                    <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                                </div>
                            </div>
                        </div>

                        <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">
                            <!-- id card back -->
                            <div class="flex flex-col gap-y-1 items-stretch flex-1">
                                <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card back</label>
                                <div  @click="openFile" 
                                class="bg-white cursor-pointer  transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                                    

                                    <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                                        <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                                        </svg>
                                    </div>

                                    <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                                </div>
                            </div>
                        </div>  
                    </div>
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Save</button>
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
                        <TextInput :placeholder="'New password'" :inputType="'password'" :label="'New Password'"/>
                    </div>

                    <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                        <TextInput :placeholder="'Confirm password'" :inputType="'password'" :label="'Confirm password'"/>
                    </div>

                    <div class="laptop:flex laptop:justify-center laptop:items-end">
                        <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] laptop:h-[53px] inline-block">Save</button>
                    </div>

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

const coverImg = ref('');
const imgInput = ref(null);
const imgfront = ref('');

function openFile() {
    imgInput.value.click();
}

function onFileSelected(e) {
    const files = e.target.files;
    if (files.length) {
        const reader = new FileReader();

        reader.onload = (e) => {
            
            coverImg.value = e.target.result;
            console.log(coverImg.value);
            
        }
        reader.readAsDataURL(files[0]);
        imgfront.value = files[0];
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