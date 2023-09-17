<template>
    <div class="laptop:flex-1">
        <div class="flex flex-wrap justify-between lg-phone:grid lg-phone:grid-cols-3 gap-4 mb-4">
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
                <div class="flex flex-col gap-y-1 items-stretch flex-1 ">
                    <div class="flex gap-x-2 items-center">
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card front</label>
                        <div class="laptop:cursor-pointer group">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="dark:fill-[var(--text-dark)] bg-[#444444] group-hover:fill-[#444444]/80 group-active:fill-[#444444]" d="M6.75 0H9.25C9.66563 0 10 0.334375 10 0.75V6H12.7406C13.2969 6 13.575 6.67188 13.1812 7.06563L8.42813 11.8219C8.19375 12.0562 7.80937 12.0562 7.575 11.8219L2.81562 7.06563C2.42187 6.67188 2.7 6 3.25625 6H6V0.75C6 0.334375 6.33437 0 6.75 0ZM16 11.75V15.25C16 15.6656 15.6656 16 15.25 16H0.75C0.334375 16 0 15.6656 0 15.25V11.75C0 11.3344 0.334375 11 0.75 11H5.33437L6.86562 12.5312C7.49375 13.1594 8.50625 13.1594 9.13437 12.5312L10.6656 11H15.25C15.6656 11 16 11.3344 16 11.75ZM12.125 14.5C12.125 14.1562 11.8438 13.875 11.5 13.875C11.1562 13.875 10.875 14.1562 10.875 14.5C10.875 14.8438 11.1562 15.125 11.5 15.125C11.8438 15.125 12.125 14.8438 12.125 14.5ZM14.125 14.5C14.125 14.1562 13.8438 13.875 13.5 13.875C13.1562 13.875 12.875 14.1562 12.875 14.5C12.875 14.8438 13.1562 15.125 13.5 15.125C13.8438 15.125 14.125 14.8438 14.125 14.5Z" />
                            </svg>
                        </div>
                    </div>

                    <div  @click="openFile" 
                    class="bg-white cursor-pointer w-[120px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                        

                        <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block aspect-square flex justify-center items-center">

                            <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                            </svg>
                        </div>

                        <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                    </div>
                </div>

                <div class="flex flex-col gap-y-1 items-stretch flex-1">
                    <div class="flex gap-x-2 items-center">
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card front</label>
                        <div class="laptop:cursor-pointer group">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="dark:fill-[var(--text-dark)] bg-[#444444] group-hover:fill-[#444444]/80 group-active:fill-[#444444]" d="M6.75 0H9.25C9.66563 0 10 0.334375 10 0.75V6H12.7406C13.2969 6 13.575 6.67188 13.1812 7.06563L8.42813 11.8219C8.19375 12.0562 7.80937 12.0562 7.575 11.8219L2.81562 7.06563C2.42187 6.67188 2.7 6 3.25625 6H6V0.75C6 0.334375 6.33437 0 6.75 0ZM16 11.75V15.25C16 15.6656 15.6656 16 15.25 16H0.75C0.334375 16 0 15.6656 0 15.25V11.75C0 11.3344 0.334375 11 0.75 11H5.33437L6.86562 12.5312C7.49375 13.1594 8.50625 13.1594 9.13437 12.5312L10.6656 11H15.25C15.6656 11 16 11.3344 16 11.75ZM12.125 14.5C12.125 14.1562 11.8438 13.875 11.5 13.875C11.1562 13.875 10.875 14.1562 10.875 14.5C10.875 14.8438 11.1562 15.125 11.5 15.125C11.8438 15.125 12.125 14.8438 12.125 14.5ZM14.125 14.5C14.125 14.1562 13.8438 13.875 13.5 13.875C13.1562 13.875 12.875 14.1562 12.875 14.5C12.875 14.8438 13.1562 15.125 13.5 15.125C13.8438 15.125 14.125 14.8438 14.125 14.5Z" />
                            </svg>
                        </div>
                    </div>

                    <div  @click="openFile" 
                    class="bg-white cursor-pointer w-[120px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                        

                        <div :style="{'background-image' : `URL(${coverImg})`}" class="img_block w-full aspect-square flex justify-center items-center">

                            <svg v-if="!coverImg"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                            </svg>
                        </div>

                        <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                    </div>
                </div>
            </div>

            <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex flex-col justify-between items-start">
                <div class="flex gap-x-2 items-center">
                    <h1 class="dark:text-[var(--text-dark)] text-[#444444] text-[16px] font-[500]" for="bd-date">Status:</h1>
                    <span class="text-[14px] font-400 px-2 rounded-full text-white font-[500]" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">Active</span>
                </div>

                <div class="flex flex-col items-stretch justify-end flex-1 w-full">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Note</label>
                    <textarea type="date" id="bg-date" class="bg-white dark:bg-[var(--teriary-dark)] w-full text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none"></textarea>
                </div>
            </div>

        </div>
        <div class="flex justify-end items-center gap-x-4">
            <button class="text-[15px] bg-[#444444] laptop:hover:bg-[#444444]/60 laptop:active:bg-[#444444] text-white dark:bg-[var(--teriary-dark)] laptop:cursor-pointer font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Suspend</button>
            <button class="text-[15px] bg-[var(--theme-color)] text-white dark:bg-[var(--teriary-dark)] laptop:cursor-pointer font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Verify</button>
            <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">Update</button>
        </div>

    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';

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
</style>