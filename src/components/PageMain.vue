<script >
  export default {
    components:{

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

    <main>
      <section class="what_we_do">
        <div class="section_headers">
          <p>pelicula studio</p>
          <h1>THIS IS WHAT WE DO</h1>
        </div>
        <div class="cards_container">
          <div class="card">
            <img src="https://picsum.photos/200" alt="">
            <h1>titolo card</h1>
            <p>
              card info
            </p>
          </div>

          <div class="card">
            <img src="https://picsum.photos/200" alt="">
            <h1>titolo card</h1>
            <p>
              card info
            </p>
          </div>

          <div class="card">
            <img src="https://picsum.photos/200" alt="">
            <h1>titolo card</h1>
            <p>
              card info
            </p>
          </div>

          <div class="card">
            <img src="https://picsum.photos/200" alt="">
            <h1>titolo card</h1>
            <p>
              card info
            </p>
          </div>

          <div class="card">
            <img src="https://picsum.photos/200" alt="">
            <h1>titolo card</h1>
            <p>
              card info
            </p>
          </div>

          <div class="card">
            <img src="https://picsum.photos/200" alt="">
            <h1>titolo card</h1>
            <p>
              card info
            </p>
          </div>

        </div>
      </section>
      <section class="about_us">
        <div class="text-container">
          <p>cazzoculo</p>
          <h1>cose scritte e sgargatubi</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam molestiae mollitia nam, aut accusantium cupiditate in officia ad magni, unde iure! Illum odio reprehenderit placeat.</p>
          <button>
            read more
          </button>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>

</template>

<style lang="scss">

  main{
    padding: 0 20px;

    .what_we_do{
      text-align: center;
      width: calc(100vw - 40px);
      padding: 50px;

      .section_headers{
        display: flex;
        flex-direction: column;
        font-size: 22px;
        
        h1{
          margin: 10px 0;
          font-size: 45px;
        }

      }

      .cards_container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        padding: 100px;
        gap: 10px;

        .card{
          width: calc(((100% / 3) * 1) - 40px);
          
          img{
            width: 80%;
          }
        }
      }

    }

    .about_us{
        background-image: url(../assets/img/About-Us.jpg);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        width: calc(100vw - 40px);
        padding: 200px;

        .text-container{
          color: white;
          text-align:right;

          p{
            font-size: 22px;
          }

          h1{
            margin-bottom: 30px;
            font-size: 70px;
          }

          button{
            border: 0;
            background-color: white;
            padding: 20px 50px;
            font-weight: bolder;
          }

        }
    }
  }
</style>