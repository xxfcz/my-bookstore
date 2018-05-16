<template>
  <div class="dialog" :class="{'open': is_open}" @click="close()">
    <div>
      <!-- 头部及标题 -->
      <slot name="header"></slot>
    </div>
    <div>
      <!-- 内容区域 -->
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data (){
    return {
      is_open: false
    }
  },
  methods:{
    open(){
      if(!this.is_open){
        this.is_open = true
        this.$emit('dialogOpen')
      }
    },
    close(){
      if(this.is_open){
        this.is_open= false
        this.$emit('dialogClose')
      }
    }
  }
};
</script>

<style>
  .dialog {
    position: absolute;
    top: 24px;
    left: 24px;
    right: 24px;
    bottom: 24px;
    display: none;
    background: #ffffff;
    box-shadow: 0 0 10px rgba(0,0,0,.5);
    z-index: 500; /* 置于顶层 */
  }
  .dialog.open{
    display: block;
  }
</style>
