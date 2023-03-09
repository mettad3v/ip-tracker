<script lang="ts" setup>
import type MapBuilder from '@/types/MapBuilder';
import L from 'leaflet'
import "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/images/marker-icon-2x.png";
// import 'leaflet/dist/leaflet.css';
import { watchEffect, type PropType } from 'vue';

const props = defineProps({
    mapBuilder: {
        type: Object as PropType<MapBuilder | undefined>,
        required: true
    }
})
let map: L.Map

watchEffect(() => {
    if (props.mapBuilder) {
        if (!map) {
            map = L.map('map')
        }
        map.setView([props.mapBuilder.lat, props.mapBuilder.lng], 15)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; OpenStreetMap contributors'
        }).addTo(map);
        L.marker([props.mapBuilder.lat, props.mapBuilder.lng]).addTo(map);

    }

});
</script>

<template>
    <div class=" h-144 z-10" id="map"></div>
</template>