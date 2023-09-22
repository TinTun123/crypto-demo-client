<template>
    <mainLayout>
        <div class="mx-4 tablet:m-[30px] rounded-[15px] overflow-hidden">
            <table class="w-full text-[14px] text-center ">
                <thead class="text-[16px] text-[#444444] uppercase bg-white dark:bg-[var(--teriary-dark)] dark:text-[var(--text-dark)]">
                    <tr>
                        <th scope="col" class="px-3 py-3">
                            USERNAME
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Action
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Wallet Name
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Recipent Address
                        </th>

                        <th scope="col" class="px-3 py-3">
                            Amount
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Date/Time
                        </th>
                        <th scope="col" class="px-3 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white overflow-hidden text-[14px] border-b dark:bg-[var(--teriary-dark-hover)] dark:border-gray-700">
                        <th scope="row" class="px-3 py-4 font-medium text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Mithila Mac
                        </th>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            SEND
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Ethereum Wallet
                        </td>
                        <td  class="px-3 py-4 overflow-hidden text-[#444444]  whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span style="text-overflow: ellipsis;" class="block w-[143px] overflow-hidden">
                                fgahkaoektwejklma;SFLGAG;GMSFLMARTJOPAJ;M;HMROOIJ
                            </span>
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            1.007346 ETH
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            18-9-2023 12:11:34
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span @click.stop="tranStatus[0].status = !tranStatus[0].status" class="text-white px-2 rounded-full transition-colors laptop:cursor-pointer" :class="[tranStatus[0].status ? 'bg-green-400 laptop:hover:bg-green-300 ' : 'bg-blue-400 laptop:hover:bg-blue-300']">
                                {{ tranStatus[0].status ? 'Approve' : 'Pending' }}
                            </span>
                        </td>
                    </tr>
                    <tr class="bg-white overflow-hidden text-[14px] border-b dark:bg-[var(--teriary-dark-hover)] dark:border-gray-700">
                        <th scope="row" class="px-3 py-4 font-medium text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            TestUser
                        </th>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Withdrawal
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Bitcoin Wallet
                        </td>
                        <td  class="px-3 py-4 overflow-hidden text-[#444444]  whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span style="text-overflow: ellipsis;" class="block w-[143px] overflow-hidden">
                                fgahkaoektwejklma;SFLGAG;GMSFLMARTJOPAJ;M;HMROOIJ
                            </span>
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            3.4543 BTC
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            13-9-2023 12:11:34
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span @click.stop="tranStatus[1].status = !tranStatus[1].status" class="text-white px-2 rounded-full transition-colors laptop:cursor-pointer" :class="[tranStatus[1].status ? 'bg-green-400 laptop:hover:bg-green-300 ' : 'bg-blue-400 laptop:hover:bg-blue-300']">
                                {{ tranStatus[1].status ? 'Approve' : 'Pending' }}
                            </span>
                        </td>
                    </tr>
                    <tr class="bg-white overflow-hidden text-[14px] border-b dark:bg-[var(--teriary-dark-hover)] dark:border-gray-700">
                        <th scope="row" class="px-3 py-4 font-medium text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            TestUser02
                        </th>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            DEPOSITE
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Ethereum Wallet
                        </td>
                        <td  class="px-3 py-4 overflow-hidden text-[#444444]  whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span style="text-overflow: ellipsis;" class="block w-[143px] overflow-hidden">
                                fgahkaoektwejklma;SFLGAG;GMSFLMARTJOPAJ;M;HMROOIJ
                            </span>
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            1.007346 ETH
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            13-9-2023 12:11:34
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span @click.stop="tranStatus[2].status = !tranStatus[2].status" class="text-white px-2 rounded-full transition-colors laptop:cursor-pointer" :class="[tranStatus[2].status ? 'bg-green-400 laptop:hover:bg-green-300 ' : 'bg-blue-400 laptop:hover:bg-blue-300']">
                                {{ tranStatus[2].status ? 'Approve' : 'Pending' }}
                            </span>
                        </td>
                    </tr>
                    <tr class="bg-white overflow-hidden text-[14px] border-b dark:bg-[var(--teriary-dark-hover)] dark:border-gray-700">
                        <th scope="row" class="px-3 py-4 font-medium text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Mithila Mac
                        </th>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            SEND
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Ethereum Wallet
                        </td>
                        <td  class="px-3 py-4 overflow-hidden text-[#444444]  whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span style="text-overflow: ellipsis;" class="block w-[143px] overflow-hidden">
                                fgahkaoektwejklma;SFLGAG;GMSFLMARTJOPAJ;M;HMROOIJ
                            </span>
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            1.007346 ETH
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            13-9-2023 12:11:34
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span @click.stop="tranStatus[3].status = !tranStatus[3].status" class="text-white px-2 rounded-full transition-colors laptop:cursor-pointer" :class="[tranStatus[3].status ? 'bg-green-400 laptop:hover:bg-green-300 ' : 'bg-blue-400 laptop:hover:bg-blue-300']">
                                {{ tranStatus[3].status ? 'Approve' : 'Pending' }}
                            </span>
                        </td>
                    </tr>
                    <tr class="bg-white overflow-hidden text-[14px] border-b dark:bg-[var(--teriary-dark-hover)] dark:border-gray-700">
                        <th scope="row" class="px-3 py-4 font-medium text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Mithila Mac
                        </th>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            SEND
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            Ethereum Wallet
                        </td>
                        <td  class="px-3 py-4 overflow-hidden text-[#444444]  whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span style="text-overflow: ellipsis;" class="block w-[143px] overflow-hidden">
                                fgahkaoektwejklma;SFLGAG;GMSFLMARTJOPAJ;M;HMROOIJ
                            </span>
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            1.007346 ETH
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            13-9-2023 12:11:34
                        </td>
                        <td class="px-3 py-4 text-[#444444] whitespace-nowrap dark:text-[var(--text-dark)]">
                            <span @click.stop="tranStatus[4].status = !tranStatus[4].status" class="text-white px-2 rounded-full transition-colors laptop:cursor-pointer" :class="[tranStatus[4].status ? 'bg-green-400 laptop:hover:bg-green-300 ' : 'bg-blue-400 laptop:hover:bg-blue-300']">
                                {{ tranStatus[4].status ? 'Approve' : 'Pending' }}
                            </span>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    </mainLayout>
</template>

<script setup>
import mainLayout from '../layouts/mainLayout';

definePageMeta({
    middleware : ['auth', 'is-admin']
})

const tranStatus = ref([
    {   
        id : 1,
        status : false
    },
    {   
        id : 2,
        status : true
    },
    {   
        id : 3,
        status : true
    },
    {   
        id : 4,
        status : false
    },
    {   
        id : 5,
        status : true
    }
])

</script>

<style>
</style>