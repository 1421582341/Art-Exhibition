import { useIntersectionObserver } from '@vueuse/core'
import { App } from 'vue'

export default {
  install(app: App<Element>) {
    app.directive('lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }], observerElement) => {
          if (isIntersecting) { // 可见区域
            el.onerror = () => { // 当图片加载失败 设置为默认图片
              // el.src = imgDefault
              console.log('图片加载失败')
            }
            stop() // 可见区域后 下次不在执行监听
            el.src = binding.value // 设置传过来的地址去请求
          }
        }, { threshold: 0 }) // 当可视区域宽高为0就触发
      }
    })
  }
}