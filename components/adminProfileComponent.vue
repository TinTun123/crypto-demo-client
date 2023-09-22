<template>
    <div class="laptop:flex-1">
        <div class="flex flex-wrap justify-between lg-phone:grid lg-phone:grid-cols-3 gap-4 mb-4">
            <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                <TextInput v-model:input="profileForm.firstName" :error="error && error.type === 'firstName' ? error.msg : ''" :placeholder="'FirstName'" :inputType="'text'" :disable="false" :value="''" :label="'First Name'"/>
            </div>


            <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                <TextInput v-model:input="profileForm.lastName" :error="error && error.type === 'lastName' ? error.msg : ''" :placeholder="'LastName'" :inputType="'text'" :disable="false" :value="''" :label="'Last Name'"/>
            </div>

            <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                <TextInput v-model:input="profileForm.email" :error="error && error.type === 'email' ? error.msg : ''" :inputType="'text'" :disable="true" :value="''" :label="'Email'"/>
            </div>

            <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                <TextInput v-model:input="profileForm.phone_number" :error="error && error.type === 'phone_number' ? error.msg : ''" :placeholder="'Phone'" :inputType="'text'" :disable="false" :value="''" :label="'Phone'"/>
            </div>

            <div class="w-full lg-phone:w-auto lg-phone:col-span-1">
                <TextInput v-model:input="profileForm.address" :error="error && error.type === 'address' ? error.msg : ''" :placeholder="'Address'" :inputType="'text'" :disable="false" :value="''" :label="'Address'"/>
            </div>

            <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">
                <div class="flex flex-col gap-y-1 items-stretch flex-1">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Date of Birth</label>
                    <input v-model="profileForm.birthday" type="date" id="bg-date" class="bg-white dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none">
                    <span class="text-red-500 text-[14px] font-semibold">{{ error && error.type === 'address' ? error.msg : '' }}</span>
                </div>
            </div>

            <div class="w-full lg-phone:w-auto lg-phone:col-span-1 flex items-center">

                <!-- front id card -->
                <div class="flex flex-col gap-y-1 items-stretch flex-1 ">
                    <div class="flex gap-x-2 items-center">
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card front</label>
                        <div @click.stop="download(user.id_card)" class="laptop:cursor-pointer group">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="dark:fill-[var(--text-dark)] bg-[#444444] group-hover:fill-[#444444]/80 group-active:fill-[#444444]" d="M6.75 0H9.25C9.66563 0 10 0.334375 10 0.75V6H12.7406C13.2969 6 13.575 6.67188 13.1812 7.06563L8.42813 11.8219C8.19375 12.0562 7.80937 12.0562 7.575 11.8219L2.81562 7.06563C2.42187 6.67188 2.7 6 3.25625 6H6V0.75C6 0.334375 6.33437 0 6.75 0ZM16 11.75V15.25C16 15.6656 15.6656 16 15.25 16H0.75C0.334375 16 0 15.6656 0 15.25V11.75C0 11.3344 0.334375 11 0.75 11H5.33437L6.86562 12.5312C7.49375 13.1594 8.50625 13.1594 9.13437 12.5312L10.6656 11H15.25C15.6656 11 16 11.3344 16 11.75ZM12.125 14.5C12.125 14.1562 11.8438 13.875 11.5 13.875C11.1562 13.875 10.875 14.1562 10.875 14.5C10.875 14.8438 11.1562 15.125 11.5 15.125C11.8438 15.125 12.125 14.8438 12.125 14.5ZM14.125 14.5C14.125 14.1562 13.8438 13.875 13.5 13.875C13.1562 13.875 12.875 14.1562 12.875 14.5C12.875 14.8438 13.1562 15.125 13.5 15.125C13.8438 15.125 14.125 14.8438 14.125 14.5Z" />
                            </svg>
                        </div>
                    </div>

                    <div  @click="openFile" 
                    class="bg-white cursor-pointer w-[120px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                        

                        <div :style="{'background-image' : `URL(${user.id_card})`}" class="img_block aspect-square flex justify-center items-center">

                            <svg v-if="!user.id_card"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-[#CCCCCC] group-hover:fill-[#CCCCCC]/80 group-active:fill-[#CCCCCC]" d="M21.6 0H2.4C1.0764 0 0 1.0764 0 2.4V16.8C0 18.1236 1.0764 19.2 2.4 19.2H21.6C22.9236 19.2 24 18.1236 24 16.8V2.4C24 1.0764 22.9236 0 21.6 0ZM5.4 3.6C5.87739 3.6 6.33523 3.78964 6.67279 4.12721C7.01036 4.46477 7.2 4.92261 7.2 5.4C7.2 5.87739 7.01036 6.33523 6.67279 6.67279C6.33523 7.01036 5.87739 7.2 5.4 7.2C4.92261 7.2 4.46477 7.01036 4.12721 6.67279C3.78964 6.33523 3.6 5.87739 3.6 5.4C3.6 4.92261 3.78964 4.46477 4.12721 4.12721C4.46477 3.78964 4.92261 3.6 5.4 3.6ZM12 15.6H3.6L8.4 9.6L10.2 12L13.8 7.2L20.4 15.6H12Z"/>
                            </svg>
                        </div>

                        <input hidden ref="imgInput" @change="onFileSelected" type="file" name="img" id="img">

                    </div>
                </div>

                <div class="flex flex-col gap-y-1 items-stretch flex-1">
                    <div class="flex gap-x-2 items-center">
                        <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">ID Card front</label>
                        <div @click.stop="download(user.id_back)" class="laptop:cursor-pointer group">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path class="dark:fill-[var(--text-dark)] bg-[#444444] group-hover:fill-[#444444]/80 group-active:fill-[#444444]" d="M6.75 0H9.25C9.66563 0 10 0.334375 10 0.75V6H12.7406C13.2969 6 13.575 6.67188 13.1812 7.06563L8.42813 11.8219C8.19375 12.0562 7.80937 12.0562 7.575 11.8219L2.81562 7.06563C2.42187 6.67188 2.7 6 3.25625 6H6V0.75C6 0.334375 6.33437 0 6.75 0ZM16 11.75V15.25C16 15.6656 15.6656 16 15.25 16H0.75C0.334375 16 0 15.6656 0 15.25V11.75C0 11.3344 0.334375 11 0.75 11H5.33437L6.86562 12.5312C7.49375 13.1594 8.50625 13.1594 9.13437 12.5312L10.6656 11H15.25C15.6656 11 16 11.3344 16 11.75ZM12.125 14.5C12.125 14.1562 11.8438 13.875 11.5 13.875C11.1562 13.875 10.875 14.1562 10.875 14.5C10.875 14.8438 11.1562 15.125 11.5 15.125C11.8438 15.125 12.125 14.8438 12.125 14.5ZM14.125 14.5C14.125 14.1562 13.8438 13.875 13.5 13.875C13.1562 13.875 12.875 14.1562 12.875 14.5C12.875 14.8438 13.1562 15.125 13.5 15.125C13.8438 15.125 14.125 14.8438 14.125 14.5Z" />
                            </svg>
                        </div>
                    </div>

                    <div  @click="openFile" 
                    class="bg-white cursor-pointer w-[120px] aspect-square transition overflow-hidden group dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] placeholder-gray-500 focus:outline-none">
                        

                        <div :style="{'background-image' : `URL(${user.id_back})`}" class="img_block w-full aspect-square flex justify-center items-center">

                            <svg v-if="!user.id_back"  class="w-16 h-16" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <span class="text-[14px] font-400 px-2 rounded-full text-white font-[500] transition-all" :class="[profileForm.status ? (themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]') : 'bg-red-500']">{{ profileForm.status ? 'Active' : 'Suspened' }}</span>
                </div>

                <div class="flex flex-col items-stretch justify-end flex-1 w-full">
                    <label class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]" for="bd-date">Note</label>
                    <span class="text-red-500 text-[14px] font-semibold">{{ error && error.type === 'note' ? error.msg : '' }}</span>
                    <textarea v-model="profileForm.note" class="bg-white dark:bg-[var(--teriary-dark)] w-full text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none"></textarea>
                </div>
            </div>

        </div>
        <div class="flex justify-end items-center gap-x-4">
            <button @click.stop="profileForm.status = !profileForm.status" class="text-[15px] bg-[#444444] laptop:hover:bg-[#444444]/60 laptop:active:bg-[#444444] text-white dark:bg-[var(--teriary-dark)] laptop:cursor-pointer font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">{{ profileForm.status ? 'Suspend' : 'Revoke'}}</button>
            <button @click.stop="toogleVerify" class="text-[15px] bg-[var(--theme-color)] text-white dark:bg-[var(--teriary-dark)] laptop:cursor-pointer font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">{{ profileForm.isVerified ? 'Verified' : 'Verify' }}</button>
            <button @click.stop="update" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">
                <div v-if="isLoading" class="flex justify-center items-center gap-x-4">
                    <span class="spinner-container">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9854 8.98286C16.9661 7.90692 16.7346 6.84536 16.304 5.85914C15.8734 4.87291 15.2523 3.98146 14.4762 3.23594C13.3334 2.1315 11.8883 1.39125 10.3242 1.10901C8.76017 0.826778 7.14752 1.01526 5.6907 1.65058C4.73804 2.0686 3.87621 2.67446 3.16301 3.4176C2.4498 4.16073 1.88626 5.04218 1.51469 5.99484C0.769867 7.90847 0.812538 10.0391 1.63338 11.9214C2.03798 12.842 2.62526 13.676 3.34466 14.3654C4.06406 15.0549 4.9166 15.5988 5.8383 15.958C6.75854 16.3156 7.7402 16.4885 8.72724 16.4669C10.1883 16.4386 11.6081 15.9776 12.8071 15.1422C14.0061 14.3068 14.9303 13.1345 15.463 11.7738C15.6724 11.2349 15.8162 10.6728 15.8913 10.0996L15.9522 10.1017C16.0949 10.1016 16.236 10.0719 16.3667 10.0145C16.4974 9.95715 16.6147 9.87329 16.7113 9.76824C16.8079 9.6632 16.8817 9.53926 16.928 9.40425C16.9743 9.26925 16.992 9.12612 16.9802 8.9839H16.9843L16.9854 8.98286ZM15.3453 11.7232C14.9665 12.5809 14.4184 13.3581 13.7455 14.0001C13.0725 14.6421 12.2778 15.1478 11.4191 15.4802C10.5614 15.8122 9.64663 15.9715 8.72724 15.9487C7.82064 15.9291 6.92682 15.7308 6.09703 15.365C5.26724 14.9993 4.5178 14.4734 3.89169 13.8174C3.27424 13.1706 2.79025 12.4084 2.46735 11.5746C1.82584 9.91423 1.8689 8.06728 2.58708 6.43865C2.94007 5.64391 3.44994 4.92348 4.07438 4.32897C4.69882 3.73446 5.43783 3.2669 6.23361 2.96036C7.02938 2.65278 7.88089 2.50829 8.72724 2.53099C9.57359 2.5537 10.4086 2.73948 11.1713 3.08009C11.9351 3.41966 12.6266 3.91096 13.1974 4.51166C13.7682 5.11236 14.2172 5.82247 14.5103 6.58728C14.8031 7.35073 14.9424 8.16446 14.9201 8.98183H14.9242C14.9019 9.25004 14.9852 9.51636 15.1564 9.72401C15.3276 9.93166 15.5732 10.0642 15.8407 10.0934C15.7412 10.6543 15.5745 11.2012 15.3443 11.7221L15.3453 11.7232Z" fill="#ffffff"/>
                        </svg>
                    </span>
                    <span>
                        Loading
                    </span>
                </div>
                <span v-else>Update</span>

            </button>
        </div>

    </div>
</template>

<script setup>

import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';
import { useNotiStore } from '../store/usenotificationStore';

const themeStore = useThemeStore();
const notiStore = useNotiStore();
const auth = useAuthStore();
const coverImg = ref('');
const imgInput = ref(null);
const imgfront = ref('');
const isLoading = ref(false);

const props = defineProps(['user']);
const {user} = toRefs(props);

const emit = defineEmits(['toggleVerify']);

const baseUrl = 'http://localhost:8000/storage/';
const error = ref({
    type : '',
    msg : ''
})

const profileForm = ref({
    firstName : '',
    lastName : '',
    email : '',
    address : '',
    phone_number : '',
    country : '',
    birthday : '',
    isVerified : '',
    status : '',
    note : ''
})

function download(path) {
    const newUrl = path.replace(baseUrl, '');


    auth.download(newUrl);
}

onMounted(async () => {

    profileForm.value = {
        firstName : user.value.firstName,
        lastName : user.value.lastName,
        email : user.value.email,
        address : user.value.address,
        phone_number : user.value.phone_number,
        country : user.value.country,
        birthday : user.value.birthdat,
        status : user.value.status,
        note : user.value.note,
        isVerified : user.value.isVerified
        
    }

})

async function update() {
    error.value = {};
    isLoading.value = true;
    if (!profileForm.value.firstName) {
        error.value.type = 'firstName';
        error.value.msg = 'Please enter user first name';
        isLoading.value = false;
        return;
    }

    if (!profileForm.value.lastName) {
        error.value.type = 'lastName';
        error.value.msg = 'Please enter user last name';
        isLoading.value = false;
        return;
    }

    if (!profileForm.value.email) {
        error.value.type = 'email';
        error.value.msg = 'Please enter user email';
        isLoading.value = false;
        return;
    }

    if (!profileForm.value.address) {
        error.value.type = 'address';
        error.value.msg = 'Please enter user address';
        isLoading.value = false;
        return;
    }

    if (!profileForm.value.phone_number) {
        error.value.type = 'phone_number';
        error.value.msg = 'Please enter user phone number';
        isLoading.value = false;
        return;
    }

    if (!profileForm.value.birthday) {
        error.value.type = 'birthday';
        error.value.msg = 'Please select user birthday';
        isLoading.value = false;
        return;
    }

    if (!profileForm.value.status) {
        if (!profileForm.value.note) {
            error.value.type = 'note';
            error.value.msg = 'Please provide note for suspension.';
            isLoading.value = false;
            return;
        }
    }

    const formdata = new FormData();

    if(profileForm.value.firstName) {
        formdata.append('firstName', profileForm.value.firstName);
    }

    if(profileForm.value.lastName) {
        formdata.append('lastName', profileForm.value.lastName);
    }

    if (profileForm.value.email) {
        formdata.append('email', profileForm.value.email);
    }

    if (profileForm.value.address) {
        formdata.append('address', profileForm.value.address);
    }


    if (profileForm.value.phone_number) {
        formdata.append('phone_number', profileForm.value.phone_number);
    }

    if (profileForm.value.birthday) {
        formdata.append('birthday', profileForm.value.birthday);
    }

    if (profileForm.value.note) {
        formdata.append('note', profileForm.value.note);
    }

    formdata.append('status', profileForm.value.status);
    formdata.append('isVerified', profileForm.value.isVerified);
    

    const {data : updateRes, error : updateErr, status} = await auth.updateProfile(formdata, user.value.id);
    isLoading.value = false;

    if (status.value === 'success') {
        notiStore.showNoti(updateRes.value.message, 'info');
    }


}

function toogleVerify() {
    profileForm.value.isVerified = !profileForm.value.isVerified;
    emit('toggleVerify');
}

function openFile() {
    imgInput.value.click();
}

function onFileSelected(e) {
    const files = e.target.files;
    if (files.length) {
        const reader = new FileReader();

        reader.onload = (e) => {
            
            coverImg.value = e.target.result;
           
            
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