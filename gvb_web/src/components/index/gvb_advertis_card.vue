<template>
    <GVBCard title="独家广告" class="advert_card">
        <a-carousel arrows autoplay :autoplaySpeed="3000" class="advert_carousel">
            <div class="advert_image" v-for="item in data.advert_list" :key="item.id">
                <a :href="item.href" target="_blank"><img :src="item.images" alt=""></a>
            </div>
            <template #prevArrow>
                <div class="default_slick-arrow" style="left: 10px">
                    <i class="fa fa-chevron-circle-left carousel_icon"></i>
                </div>
            </template>
            <template #nextArrow>
                <div class="default_slick-arrow" style="right: 10px;">
                    <i class="fa fa-chevron-circle-right carousel_icon"></i>
                </div>
            </template>
        </a-carousel>
    </GVBCard>
</template>

<script setup>
import GVBCard from "@/components/gvb_card.vue"
import { reactive } from "vue";

const data = reactive({
    advert_list: [
        {
            id: 1,
            href: "https://www.bilibili.com/video/BV1xg411t7RZ/",
            images: "http://python.fengfengzhidao.com/pic/20221112205133.png",
        },
        {
            id: 2,
            href: "https://www.bilibili.com/video/BV1xg411t7RZ/",
            images: "http://python.fengfengzhidao.com/pic/20220709141219.png",
        }
    ]
})

</script>

<style lang="scss">
.advert_carousel {
    height: 200px;

    .default_slick-arrow {
        z-index: 10;
    }

    .default_slick-arrow:before {
        display: none;
    }

    .carousel_icon {
        color: white;
        font-size: 20px;
    }

    .advert_image {
        height: 200px;


        img {
            height: 100%;
            object-fit: cover;
            display: block;
            width: 100%;
        }

    }
}
</style>