import Vue from 'vue/dist/vue'
import MyComponent from '@/components/MyComponent'

describe('MyComponent', () => {
  it('$mount()', () => {
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
