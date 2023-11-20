<script setup lang="ts">
import { getCategoryAPI, getHomeBannerAPI, getHomeHotAPI } from '@/services/home';
import CustomNavbarVue from './componets/CustomNavbar.vue';
import { onLoad } from '@dcloudio/uni-app';
import type { BannerItem, CategoryItem, HotItem, GuessItem } from '@/types/home';
import { ref } from 'vue';
import CategoryPanel from './componets/CategoryPanel.vue';
import HotPanel from './componets/HotPanel.vue';
import type { XtxGuessInstance } from '@/types/components';
import XtxGuess from '@/components/XtxGuess.vue';
import PageSkeleton from './componets/PageSkeleton.vue';
const bannerList = ref<BannerItem[]>([]);
const categoryList = ref<CategoryItem[]>([]);
const hotList = ref<HotItem[]>([]);
const guessRef = ref<XtxGuessInstance>();
const isRefresh = ref(false);
const isLoading = ref(false);

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

onLoad(async () => {
  isLoading.value = true;
  await Promise.all([getHomeBannerData(), getCategoryData(), getHomeHotData()]);
  isLoading.value = false;
});

const onScrollViewLower = () => {
  guessRef.value?.getMore();
  console.log('滑动到底部了')
}

const onScrollViewRefresh = async () => {
  isRefresh.value = true;
  guessRef.value?.restData();
  await Promise.all([getHomeBannerData(), getCategoryData(), getHomeHotData()]);
  isRefresh.value = false;
}

</script>

<template>
  <CustomNavbarVue />
  <PageSkeleton v-if="isLoading" />
  <template v-else>
    <!-- <template> -->
    <scroll-view refresher-enabled :refresher-triggered="isRefresh" @refresherrefresh="onScrollViewRefresh"
      @scrolltolower="onScrollViewLower" scroll-y class="srcoll-view">
      <XtxSwiper :list="bannerList" />
      <CategoryPanel :list="categoryList" />
      <HotPanel :list="hotList" />
      <XtxGuess ref="guessRef" />
    </scroll-view>
  </template>
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
