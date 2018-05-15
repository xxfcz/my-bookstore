<template>
<div>
  <ul>
      <li>
        <router-link :to="{name: 'Home'}" replace>Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Categories'}" replace>Categories</router-link>
      </li>
      <li>
        <router-link :to="{name: 'ShoppingCart'}" replace>Shopping Cart</router-link>
      </li>
      <li>
        <router-link :to="{name: 'Me'}" replace>Me</router-link>
      </li>
        </ul>
  <transition name="slide-fade">
    <router-view/>
  </transition>
  </div>
</template>

<style>
ul, li{
  display:inline-block
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-active {
  transform: translateX(-430px);
  opacity: 0;
}
</style>
