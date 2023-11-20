
<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/componets/CategoryPanel">
    <view class="category CategoryPanel--category">
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-86 sk-text">居家</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-875 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-850 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-118 sk-text">母婴</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-147 sk-text">个护</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-964 sk-text">严选</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-35 sk-text">数码</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-787 sk-text">运动</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-740 sk-text">杂项</text>
      </navigator>
      <navigator class="category-item CategoryPanel--category-item" hover-class="none">
        <image class="icon CategoryPanel--icon sk-image"></image>
        <text class="text CategoryPanel--text sk-transparent sk-text-14-2857-570 sk-text">品牌</text>
      </navigator>
    </view>
  </view>
  <view is="pages/index/componets/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-162 sk-text">特惠推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-567 sk-text">精选全攻略</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-400 sk-text">爆款推荐</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-782 sk-text">最受欢迎</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-581 sk-text">一站买全</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-206 sk-text">精心优选</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-974 sk-text">新鲜好物</text>
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-50 sk-text">生活加分项</text>
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-5714-10 {
  background-image: linear-gradient(transparent 3.5714%, #EEEEEE 0%, #EEEEEE 96.4286%, transparent 0%) !important;
  background-size: 100% 28.0000rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-296 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 39.2000rpx;
  position: relative !important;
}

.sk-text-14-2857-86 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-875 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-850 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-118 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-147 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-964 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-35 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-787 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-740 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-570 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 36.4000rpx;
  position: relative !important;
}

.sk-text-14-2857-162 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-567 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-400 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-782 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-581 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-206 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-text-14-2857-974 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 44.8000rpx;
  position: relative !important;
}

.sk-text-14-2857-50 {
  background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
  background-size: 100% 33.6000rpx;
  position: relative !important;
}

.sk-image {
  background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #EFEFEF !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
