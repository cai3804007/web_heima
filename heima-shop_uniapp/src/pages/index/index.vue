<script setup lang="ts">
import { getCategoryAPI, getHomeBannerAPI, getHomeHotAPI } from '@/services/home';
import CustomNavbarVue from './componets/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app';
import type { BannerItem, CategoryItem, HotItem } from '@/types/home';
import { ref } from 'vue';
import CategoryPanel from './componets/CategoryPanel.vue';
import HotPanel from './componets/HotPanel.vue';
const bannerList = ref<BannerItem[]>([]);
const categoryList = ref<CategoryItem[]>([]);
const hotList = ref<HotItem[]>([]);

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI();
  bannerList.value = res.result;
  console.log(res);
};

const getCategoryData = async () => {
  const res = await getCategoryAPI();
  categoryList.value = res.result;
};

const getHomeHotData = async () => {
  const res = await getHomeHotAPI();
  hotList.value = res.result;
};

onLoad(() => {
  getHomeBannerData();
  getCategoryData();
  getHomeHotData();
});
</script>

<template>
  <CustomNavbarVue />
  <scroll-view scroll-y class="srcoll-view">
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess />
  </scroll-view>
</template>

<style lang="scss">
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.srcoll-view {
  flex: 1;
}
</style>
