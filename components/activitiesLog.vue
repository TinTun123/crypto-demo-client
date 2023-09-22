<template>
    <div class="h-[442px] overflow-y-scroll">

        <div class="relative overflow-x-auto">
            <table class="w-full text-[14px] text-center ">
                <thead class="text-[16px] text-[#444444] uppercase bg-white dark:bg-[var(--teriary-dark)] dark:text-[var(--text-dark)]">
                    <tr>
                        <th scope="col" class="px-3 py-3">
                            Action
                        </th>
                        <th scope="col" class="px-6 py-3">
                            IP
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Country
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Date/Time
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(log, i) in logs" :key="i" class="bg-white text-[14px] border-b dark:bg-[var(--teriary-dark-hover)] dark:border-gray-700">
                        <th scope="row" class="px-3 py-4 font-medium text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            {{ log.action }}
                        </th>
                        <td class="px-6 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            {{ log.user_ip }}
                        </td>
                        <td class="px-6 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            {{ log.country }}
                        </td>
                        <td class="px-6 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            {{ log.created_at }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { useAuthStore } from '../store/useAuthStore';

const auth = useAuthStore();

const props = defineProps(['user']);
const {user} = toRefs(props);
const logs = ref([]);

onMounted(async () => {
    const { data : fetchLogRes, error : fetchLogError, status } =  await auth.fetchLogs(user.value.id);
    
    console.log(fetchLogRes.value.message);

    logs.value = fetchLogRes.value.log;

})
</script>

<style>
</style>