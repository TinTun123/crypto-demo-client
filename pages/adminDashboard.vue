<template>
    <mainLayout>
        <div>
            <h1>Admin dashboard</h1>
        </div>
    </mainLayout>
</template>

<script setup>
import mainLayout from '../layouts/mainLayout';

definePageMeta({
    middleware : ['auth', 'is-admin']
})
</script>

<style>

</style>