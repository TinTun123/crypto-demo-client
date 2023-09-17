<template>

    <div class="flex flex-col gap-y-1">
        <client-only>
            <label :for="label" class="dark:text-[var(--text-dark)] text-[#444444] text-[15px]">{{ label }}</label>
            <div class="relative w-full">
                <input
                :id="label"
                class=" bg-white w-full dark:bg-[var(--teriary-dark)] text-[#444444] dark:text-[var(--text-dark)] border-[#eeeeee] dark:border-none dark:shadow-none rounded-[4px] shadow-input-sha border text-[15px] p-[15px] placeholder-gray-500 focus:outline-none"
                @focusin="isFocused = true"
                @blur="isFocused = false"
                :class="{'border-red-500' : error}"
                :type="inputType"
                v-model="inputComputed"
                autocomplete="off"
                :placeholder="placeholder"
                :disabled="disable"
                :value="value"/>
                <span class="absolute right-4 text-[14px] font-[600] text-[#666666] top-[50%] -translate-y-[50%]">{{ tag }}</span>
            </div>

            
        </client-only>

        <span v-if="error" class="text-red-500 text-[14px] font-semibold">

            {{ error }}

        </span>

    </div>

</template>


<script setup>

const emit = defineEmits(['update:input'])
const props = defineProps(['input', 'placeholder','label', 'disable', 'value', 'tag', 'max', 'inputType', 'error']);

const {input, placeholder, label, max, tag, inputType, disable, value, error} = toRefs(props);

const isFocused = ref(false);

const inputComputed = computed({
    get: () => input.value,
    	set : (val) => emit('update:input', val)
})
</script>

<style>
</style>