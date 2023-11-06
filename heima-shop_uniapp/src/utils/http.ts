'use strict';
import { useMemberStore } from '@/stores';

// 请求基地址
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net';

const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url;
    }
    options.timeout = 10000;
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    };
    const cache = useMemberStore();
    const token = cache.profile?.token;
    if (token) {
      options.header.Authorization = token;
    }
    console.log('url ======', options.url);
  },
};

uni.addInterceptor('request', httpInterceptor);
uni.addInterceptor('uploadFile', httpInterceptor);

/**
 * 请求函数封装
 */
type Data<T> = {
  code: string;
  msg: string;
  result: T;
};

// 2.2 添加类型，支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  // 1. 返回 Promise 对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      // 响应成功
      success(result) {
        if (result.statusCode >= 200 && result.statusCode < 300) {
          resolve(result.data as Data<T>);
        } else if (result.statusCode == 401) {
          //401 跳转登录
          const memberStore = useMemberStore();
          memberStore.clearProfile();
          uni.navigateTo({ url: '/pages/login/login' });
          reject(result);
        } else {
          uni.showToast({
            icon: 'none',
            title: (result.data as Data<T>).msg || '请求错误',
          });
          reject(result);
        }
      },
      fail(err) {
        uni.showToast({
          icon: 'none',
          title: '网络错误,换个网络试试吧',
        });
      },
    });
  });
};
