import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    console.log('HelloWorld', vm.$el.textContent);
    expect(vm.$el.querySelector('.hello h1').textContent).to.eql(
       'Welcome to Your Vue.js App'
    )
  })
})
