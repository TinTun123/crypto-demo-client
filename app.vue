<template>
  <div class="relative dark:bg-[var(--primary-dark)]">
    
    <NuxtPage />

    <transition appear name="fade">
        <div v-if="notiStore.message" class="absolute bottom-8 left-4 z-[1000]">

            <span class="text-white text-[14px] font-[500] px-4 py-1 rounded-full" :class="[notiStore.type === 'info' ? 'bg-blue-500' : 'bg-red-500']">
                {{ notiStore.message }}
            </span>

        </div>
    </transition>

  </div>
</template>


<script setup>
import  { useNotiStore }  from '../store/usenotificationStore';

const notiStore = useNotiStore();


</script>