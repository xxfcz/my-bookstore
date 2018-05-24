import Vue from 'vue/dist/vue'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('extend', () => {
    const msg = '你好'
    let Constructor = Vue.extend(MyComponent)
    const vm = new Constructor({
      propsData: {
        msg: msg
      }
    }).$mount()
    console.log('MyComponent', vm.$el)
    expect(vm.$el.textContent).to.eql(msg)
  })
})

describe('another way', done => {
  it('msg', () => {
    const msg = '你们好'
    const vm = new Vue(MyComponent).$mount()
    vm.msg = msg
    Vue.nextTick(() => {
      expect(vm.$el.textContent).to.eql(msg)
      done()
    })
  })
})
