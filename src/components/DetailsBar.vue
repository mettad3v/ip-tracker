<script lang="ts" setup>
import type { PropType } from 'vue'
import type IpifyResponse from '@/types/IpifyResponse';

const props = defineProps({
    details: {
        type: Object as PropType<IpifyResponse | undefined>,
        required: true
    }
})


</script>

<template>
    <div class="w-[90%] md:w-3/4 bg-white rounded-2xl shadow-lg z-20">
        <div class="grid md:grid-cols-4 md:text-left text-center p-8 md:max-lg:px-3 md:max-lg:py-5">
            <div class="md:border-r-[1px] border-gray-200 ">
                <p class="font-bold tracking-[.11em] text-xs text-gray-400">IP ADDRESS</p>
                <h2 class="md:mt-2 mt-1 font-medium md:max-lg:text-xs text-base">{{ props.details?.ip ?? '-' }}</h2>

            </div>
            <div class="md:border-r-[1px] border-gray-200 md:px-6 mt-4 md:mt-0">
                <p class="font-bold tracking-[.11em] text-xs text-gray-400">LOCATION</p>
                <h2 class="md:mt-2 mt-1 font-medium md:max-lg:text-xs text-base">{{ props.details?.location.city ?
                    props.details?.location.city + ',' : '-' }}
                    {{ props.details?.location.region }}
                </h2>

            </div>
            <div class="md:border-r-[1px] border-gray-200 md:px-6 mt-4 md:mt-0">
                <p class="font-bold tracking-[.11em] text-xs text-gray-400">TIMEZONE</p>
                <h2 class="md:mt-2 mt-1 font-medium md:max-lg:text-xs text-base">{{ props.details?.location.timezone ?? '-'
                }}
                </h2>

            </div>
            <div class="md:px-6 mt-4 md:mt-0">
                <p class="font-bold tracking-[.11em] text-xs text-gray-400">ISP</p>
                <h2 class="md:mt-2 mt-1 font-medium md:max-lg:text-xs text-base">{{ props.details?.isp ?? '-' }}</h2>
            </div>
        </div>
    </div>
</template>