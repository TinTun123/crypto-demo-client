<template>
    <div class="shadow-lg w-auto rounded-[15px] z-10 dark:bg-[var(--teriary-dark)]">
        <div class="max-h-[430px] overflow-y-scroll scroll-container dark:bg-[var(--secondary-dark)]">

            <ul class="bg-white dark:bg-[var(--secondary-dark)] relative">

                <li v-for="(langs,i) in langs" :key="i" class="py-[10px] px-[15px] flex gap-x-4 border-b border-[#eeeeee]/40 items-center laptop:hover:bg-[var(--theme-sed-color-hover)] dark:laptop:hover:bg-[var(--teriary-dark-hover)] laptop:hover:cursor-pointer transition">
                    <div class="flex-none">
                        <img :src="`${langs.flag}`" class="w-full h-full" alt="">
                    </div>

                    <span class="text-[15px] text-[var(--theme-sed-02)] flex-none">
                        {{ langs.country }}
                    </span>
                </li>

            </ul>
        </div>
    </div>

</template>

<script setup>

const langs = ref([
    {
        flag : 'us.png',
        country : 'English',
    },
    {
        flag : 'ae.png',
        country : 'Arabic'
    },
    {
        flag : 'de.png',
        country : 'Deutsch'
    },
    {
        flag : 'it.png',
        country : 'Italiano'
    },
    {
        flag : 'th.png',
        country : 'Tiếng Việt ',
    },
    {
        flag : 'br.png',
        country : 'Portuguese',
    },
    {
        flag : 'us.png',
        country : 'español',
    },
    {
        flag : 'cn.png',
        country : 'Chinese',
    },
    {
        flag : 'kr.png',
        country : '한국어',
    },
    {
        flag : 'ru.png',
        country : 'Русский',
    },
    {
        flag : 'us.png',
        country : '日本語',
    },
    {
        flag : 'in.png',
        country : 'IndiaHindi',
    },
    {
        flag : 'th.png',
        country : 'ภาษาไทย',
    }
]);
</script>

<style>

</style>