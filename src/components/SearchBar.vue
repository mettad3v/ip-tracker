<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import api from '@/services/AxiosService';
import type { AxiosResponse } from 'axios';

const emit = defineEmits<{
    (e: 'input-submitted', val: AxiosResponse): void,
    (e: 'input-error', val: any): void,
}>();

let ipOrDomain = ref<string>('')
let status = ref<string>('')
const search = async (): Promise<void> => {

    try {
        status.value = 'working...'
        //remove http(s) protocol from valid domain
        ipOrDomain.value = ipOrDomain.value.replace(/^https?:\/\//, '')
        const res = await api.get('', { params: { domain: ipOrDomain.value } })
        status.value = ''

        emit("input-submitted", res)
    } catch (error: any) {
        if (error.response.data.code == 400 || error.response.data.code == 404 || error.response.data.code == 422) {
            status.value = 'No results found or entry is invalid'
        }
        emit("input-error", error)

    }

}

</script>

<template>
    <div class="flex flex-col justify-center items-center">
        <form @submit.prevent="search" class="flex h-12 w-[90%] md:w-128">
            <input v-model="ipOrDomain" type=" text" class="md:w-[90%] w-[85%] h-full p-3 bg-white rounded-l-lg "
                placeholder="Search for any IP address or domain">
            <button type="submit" class="md:w-[10%] w-[15%] h-full bg-black rounded-r-lg hover:bg-gray-800 text-white">
                <div class="flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 ">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </div>
            </button>
        </form>

        <p v-if="status" class="bg-red-100/[0.7] p-2 mt-2 rounded-lg text-red-700 text-xs">{{
            status }}</p>
    </div>
</template>