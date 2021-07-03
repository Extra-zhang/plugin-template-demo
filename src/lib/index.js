import vnjPaun from './vnjPaun.vue'

const njPaun = {
  install: function(Vue) {
    Vue.component('vnjPaun', vnjPaun)
  }
}

// 这里的判断很重要
if (typeof window !== 'undefined' && window.Vue) { 
	window.Vue.use(njPaun) 
}
export default njPaun