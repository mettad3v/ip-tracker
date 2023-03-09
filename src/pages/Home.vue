<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue';
import DetailsBar from '@/components/DetailsBar.vue';
import Map from '@/components/Map.vue';
import api from '@/services/AxiosService'
import type IpifyResponse from '@/types/IpifyResponse';
import type MapBuilder from '@/types/MapBuilder'
import { ref, onMounted } from 'vue'
import type { AxiosResponse } from 'axios';


onMounted(async (): Promise<void> => {
    const res = await api.get('')
    mapBuilder.value = {
        lat: res.data.location.lat,
        lng: res.data.location.lng,
        // lat: 6.45407,
        // lng: 3.39467
    }
    details.value = res.data
})
const inputVal = (event: AxiosResponse) => {

    mapBuilder.value = {
        lat: event.data.location.lat,
        lng: event.data.location.lng
    }
    details.value = event.data

}
const inputValError = (event: AxiosResponse) => {

    mapBuilder.value = {
        lat: 0.0,
        lng: 0.0
    }
    details.value = undefined

}

const details = ref<IpifyResponse>()
const mapBuilder = ref<MapBuilder>()

</script>
<template>
    <main class="h-screen w-screen">
        <header class="w-full h-[35%] ">
            <h1 class="text-white text-center font-bold text-2xl pt-5">IP Address Tracker</h1>

            <div class="mt-5 ">
                <SearchBar @input-submitted="inputVal" @input-error="inputValError" />
            </div>

            <div class="mt-10 md:max-lg:mt-12 flex justify-center items-center ">
                <DetailsBar :details="details" />
            </div>
        </header>

        <div class=" w-screen">
            <Map :mapBuilder="mapBuilder" />
        </div>
    </main>
</template>

<style>
header {
    background-image: url('@/assets/pattern-bg.png');
}
</style>