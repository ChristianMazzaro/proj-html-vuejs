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
        store,
        activeIndex:0,
      }
    },
    methods:{
      nextImg_nav(){

        this.activeIndex ++
        if (this.activeIndex > store.nav_slides.length - 1) {
          this.activeIndex = 0;
        }
        console.log(this.activeIndex)
        return this.activeIndex
      },

      nextImg(){
        this.activeIndex ++
        if (this.activeIndex > store.slides.length - 1) {
          this.activeIndex = 0;
        }
        console.log(this.activeIndex)
        return this.activeIndex
      },

    }
  }
</script>

<template>
  <PageHeader :index="activeIndex" @nextSlide="nextImg_nav()"/>

  <PageMain :indexMain="activeIndex" @nextMember="nextImg()"/>

  <PageFooter />
</template>

<style lang="scss">
  @use "assets/scss/main.scss" as *;

</style>
