<template>
    <div class="flex-1 flex flex-col justify-between">

        <div v-if="!key" class="bg-white shadow-input-sha justify-between dark:shadow-none dark:bg-[var(--teriary-dark)] rounded-[15px] p-[30px]">
            <div class="mb-4">
                <button @click.stop="generate" class="px-2 py-1 group flex gap-x-2 items-center justify-center text-white font-[500] text-[14px] rounded-full transition-colors laptop:hover:text-white/60 laptop:active:text-white" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-white group-hover:fill-white/60 group-active:fill-white" d="M7.75264 1.27756e-06C7.95843 1.27756e-06 8.14252 0.128097 8.21182 0.31989L8.706 1.68974C8.8831 1.73384 9.03499 1.77794 9.16379 1.82414C9.30448 1.87454 9.48578 1.95083 9.70977 2.05513L10.8605 1.44615C10.9545 1.39639 11.062 1.37842 11.167 1.39496C11.272 1.41149 11.3688 1.46163 11.4429 1.53785L12.4551 2.58431C12.5895 2.72361 12.6273 2.9273 12.5517 3.10509L12.012 4.36995C12.1016 4.53444 12.173 4.67514 12.2276 4.79274C12.2864 4.92083 12.3592 5.09723 12.446 5.32472L13.7038 5.8637C13.8928 5.9442 14.0097 6.13319 13.9971 6.33548L13.9047 7.78793C13.8984 7.88229 13.8645 7.97272 13.8073 8.048C13.7501 8.12328 13.672 8.18011 13.5827 8.21142L12.3914 8.6349C12.3571 8.7994 12.3214 8.94009 12.2836 9.05909C12.2226 9.24286 12.153 9.42366 12.075 9.60087L12.6735 10.9238C12.7157 11.0168 12.7271 11.1208 12.7059 11.2207C12.6848 11.3206 12.6322 11.4111 12.5559 11.4789L11.4177 12.4953C11.3428 12.5619 11.2492 12.6041 11.1496 12.6161C11.0501 12.6281 10.9492 12.6094 10.8605 12.5625L9.68737 11.9409C9.50383 12.0381 9.31447 12.1239 9.12039 12.1978L8.60801 12.3896L8.15302 13.6495C8.11931 13.7418 8.05849 13.8217 7.97854 13.8788C7.89859 13.9359 7.80326 13.9675 7.70504 13.9694L6.37508 13.9995C6.27426 14.0022 6.1751 13.9735 6.09124 13.9175C6.00738 13.8614 5.94294 13.7808 5.9068 13.6866L5.37062 12.2678C5.18768 12.2053 5.00655 12.1376 4.82744 12.0648C4.68094 12.0014 4.53666 11.933 4.39485 11.8597L3.0649 12.4281C2.97727 12.4655 2.88066 12.4766 2.78683 12.46C2.693 12.4435 2.606 12.4001 2.53642 12.335L1.55225 11.4117C1.47898 11.3433 1.42908 11.2535 1.40961 11.1552C1.39014 11.0568 1.40208 10.9548 1.44375 10.8636L2.01563 9.61767C1.93958 9.47009 1.86906 9.31973 1.80424 9.16688C1.72858 8.9798 1.65855 8.79049 1.59425 8.5992L0.341292 8.21772C0.239446 8.18693 0.150615 8.12338 0.0885938 8.03693C0.0265727 7.95048 -0.00516692 7.84597 -0.00169591 7.73963L0.0473024 6.39498C0.0507901 6.30725 0.078197 6.22214 0.126559 6.14885C0.174921 6.07557 0.242398 6.0169 0.321693 5.97919L1.63625 5.34782C1.69715 5.12452 1.75034 4.95093 1.79724 4.82424C1.86328 4.65501 1.93661 4.48873 2.01703 4.32585L1.44725 3.12189C1.40401 3.03046 1.39088 2.92768 1.40975 2.82831C1.42862 2.72895 1.47851 2.63813 1.55225 2.56891L2.53502 1.64074C2.60391 1.57577 2.69011 1.53208 2.78325 1.51495C2.87638 1.49781 2.97249 1.50795 3.06 1.54415L4.38855 2.09293C4.53555 1.99493 4.66854 1.91584 4.78894 1.85214C4.93243 1.77584 5.12423 1.69604 5.36572 1.60995L5.8277 0.32129C5.86186 0.226981 5.92429 0.145513 6.00647 0.08801C6.08865 0.0305068 6.18658 -0.000228368 6.28689 1.27756e-06H7.75264ZM7.01486 4.91313C5.848 4.91313 4.90234 5.8476 4.90234 7.00116C4.90234 8.15472 5.848 9.08989 7.01486 9.08989C8.18102 9.08989 9.12669 8.15472 9.12669 7.00116C9.12669 5.8476 8.18172 4.91313 7.01486 4.91313Z"/>
                    </svg>

                    <span>
                        Generate
                    </span>
                </button>
            </div>

            <div class="mb-2">
                <textarea v-model="keyForm.key" name="privateKey" id="key" class="w-full rounded-[15px] text-[#444444] dark:text-[var(--text-dark)] border border-[#eeeeee]/20 dark:border-[var(--text-dark)] bg-transparent focus:outline-none px-4 pt-4" placeholder="Private key" rows="3"></textarea>
            </div>

            <span class="text-[14px] font-[500] text-[#444444] dark:text-[var(--text-dark)]">Note: Assigned private key will be mailed to {{ user.email }}</span>
        </div>
        <div v-else class="bg-white shadow-input-sha justify-between dark:shadow-none dark:bg-[var(--teriary-dark)] rounded-[15px] p-[30px] flex items-center h-[120px]">
            <div class="flex gap-x-4 items-center">
                <span class="text-[18px] font-[500]" :class="[themeStore.isgrad ? 'text-[var(--theme-from)]' : 'text-[var(--theme-color)]']">Key:</span>
                <span class="text-[14px] font-[600] text-[#444444] dark:text-[var(--text-dark)]">{{ key.private_key }}</span>
            </div>

            <div @click="isLocked = !isLocked" class="flex gap-x-3 px-4 py-2 transition-all rounded-full items-center" :class="[!isLocked ? 'bg-red-400' : 'bg-green-400']">
                <div v-if="!isLocked" class="w-4 h-4">
                    <svg class="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"/></svg>
                </div>

                <div v-else class="w-4 h-4">
                    <svg class="w-full h-full fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M423.5 0C339.5.3 272 69.5 272 153.5V224H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48h-48v-71.1c0-39.6 31.7-72.5 71.3-72.9 40-.4 72.7 32.1 72.7 72v80c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24v-80C576 68 507.5-.3 423.5 0z"/></svg>
                </div>
                <button  class="text-white text-[16px] font-[500] " >{{ isLocked ? 'Unlocked' : 'Locked' }}</button>
            </div>
        </div>

        <div  class="text-right">
            <button @click.stop="save" :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" class="text-[15px] text-white font-[600] rounded-[4px] transition-colors px-[30px] py-[12px] inline-block">
                <div v-if="isLoading" class="flex justify-center items-center gap-x-4">
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
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';
import { useAuthStore } from '../store/useAuthStore';
import { useNotiStore } from '../store/usenotificationStore';

const auth = useAuthStore();
const themeStore = useThemeStore();
const notiStore = useNotiStore();
const isLoading = ref(false);

const isLocked = ref(false);

const keyForm = ref({
    key : ''
})

const key = ref('');

const props = defineProps(['user']);
const {user} = toRefs(props);

onMounted(async () => {
    await fetchKey();
})

async function fetchKey() {
    const {data, error, status} = await auth.getKey(user.value.id);

    key.value = data.value.key;
    isLocked.value = key.value.state ? true : false;

}
function generate() {
    const tempKey = generateRandomHex(64);
    keyForm.value.key = tempKey;
}


function generateRandomHex(length) {
  const characters = '0123456789ABCDEF';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }
  return result;
}

async function save() {

    isLoading.value = true;

    if(!key.value || !key.value.id) {
        if (!keyForm.value.key) {
            notiStore.showNoti('Please enter private key', 'error');
            isLoading.value = false;
            return;
        }

        const formdata = new FormData();

        formdata.append('key', keyForm.value.key);

        const {data : privateRes, error : privateErr, status} = await auth.assignPrivateKey(formdata, user.value.id);
        isLoading.value = false;

        if (status.value === 'success') {
            notiStore.showNoti(privateRes.value.message, 'info');
            fetchKey();
        }

    } else {
        const formdata = new FormData();

        formdata.append('state', isLocked.value);
      
        const {data : toogleLockRes, error : toogleLocErr, status } = await auth.toogleKeyLock(user.value.id , formdata);
        
        isLoading.value = false;

        if (status.value === 'success') {
            notiStore.showNoti(toogleLockRes.value.message, 'info');
        }

    }


}



</script>

<style>
</style>