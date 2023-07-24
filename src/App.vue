<script >

  import PageHeader from '../src/components/PageHeader.vue'
  import PageMain from '../src/components/PageMain.vue'
  import PageFooter from '../src/components/PageFooter.vue'
  import { store } from './store.js'


  export default {
    components:{
      PageHeader,
      PageMain,
      PageFooter,
      store,

    },
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<template>

  <PageHeader />

  <PageMain />

  <PageFooter />

</template>

<style lang="scss">
  @use "assets/scss/main.scss" as *;

</style>
