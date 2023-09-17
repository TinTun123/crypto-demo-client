<template>
    <div class="dark:bg-[var(--secondary-dark)] bg-white py-[20px] px-[20px]">
        <h1 class="text-[18px] font-[400] dark:text-[var(--text-dark)] text-[var()] my-4">Enter Your private key</h1>
        <div>
            <textarea v-model="key" name="privateKey" id="privateKey" class="w-full focus:outline-none border bg-transparent dark:border-[#eeeeee]/20 rounded-[15px] border-black/10 p-4 text-[14px] font-[500] dark:text-[var(--text-dark)] text-[var(--secondary-dark)] transition" placeholder="Example 5Kb8kLf9zgWQnogidDA76MzPL6TsZZY36hWXMssSzNydYXYB9KF" rows="5"></textarea>
        </div>

        <div :class="[error ? 'justify-between' : 'justify-end']" class="flex gap-x-2 items-center mt-4">
            <div v-if="error">
                <span class="text-[12px] font-[500] text-red-300">{{ error }}</span>
            </div>

            <div class="flex gap-x-2 items-center">
                <div>
                    <button @click="emitClose" class="py-[15px] px-[30px] text-[15px] font-[600]  text-black dark:text-[var(--text-dark)] rounded-[4px] bg-[#F1F1F1] dark:bg-[#373737]">CANCLE</button>
                </div>

                <div>
                    <button :class="[themeStore.isgrad ? 'bg-[var(--theme-from)]' : 'bg-[var(--theme-color)]']" @click.stop="save" class="py-[15px] px-[30px] text-[15px] font-[600]  text-white  rounded-[4px]" >SAVE</button>
                </div>
            </div>


        </div>
    </div>
</template>

<script setup>
import { useThemeStore } from '../store/useThemeStore';


const themeStore = useThemeStore();
const emit = defineEmits(['close', 'privatekey']);
const key = ref('');
const error = ref('');


function emitClose () {
    emit('close');
}

function save() {
    if (key.value) {
        emit('privatekey', key.value);
        emit('close');
    } else {
        error.value = 'Please set you private key.'

        setTimeout(() => {
            error.value = '';
        }, 2000);
    }
}

</script>

<style>

</style>