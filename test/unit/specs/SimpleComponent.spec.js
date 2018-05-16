// 导入 Vue.js 和组件，进行测试
import Vue from 'vue'
import SimpleComponent from '@/components/SimpleComponent'

// 这里是一些 Jasmine 2.0 的测试，你也可以使用你喜欢的任何断言库或测试工具。

describe('SimpleComponent', () => {
  // 检查原始组件选项
  it('has a created hook', () => {
    expect(SimpleComponent.created).to.be.a('function')
  })

  // 评估原始组件选项中的函数的结果
  it('sets the correct default data', () => {
    expect(SimpleComponent.data).to.be.a('function')
    const defaultData = SimpleComponent.data()
    expect(defaultData.message).to.eql('hello!')
  })

  // 检查 mount 中的组件实例
  it('correctly sets the message when created', () => {
    const vm = new Vue(SimpleComponent).$mount()
    expect(vm.message).to.eql('bye!')
  })

  // 创建一个实例并检查渲染输出
  it('renders the correct message', () => {
    const Constructor = Vue.extend(SimpleComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.textContent).to.eql('bye!')
  })
})