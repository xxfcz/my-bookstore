<template>
  <div id="home">
      这是购物车。我要去
      <ul>
        <li>
          <router-link tag="li" :to="{name: 'Home'}" >Home</router-link>
        </li>
        <li>
          <router-link tag="li" :to="{name: 'BookDetails', params: {id: '1'}}" >图书详情</router-link>
        </li>
      </ul>
  </div>
</template>
