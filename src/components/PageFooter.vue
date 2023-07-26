


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

    <footer>
      <div class="footer_links">
        <div>
          <h1>
            CONTACT INFO
          </h1>
          <ul>
            <li>
              <img src="../assets/img/footer-location-dot-solid.svg" alt="">
              link
            </li>
            <li>
              <img src="../assets/img/footer-phone-solid.svg" alt="">
              link
            </li>
            <li>
              <img src="../assets/img/footer-envelope-soli.svg" alt="">
              link
            </li>
          </ul>
        </div>
        <div>
          <h1>
            INFORMATION
          </h1>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div>
          <h1>
            USEFUL LINKS
          </h1>
          <ul>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
            <li>link</li>
          </ul>
        </div>
        <div>
          <h1>
            NEWSLETTER
          </h1>
          <ul>
            <li>
              subcribe to receive inspiration, ideas & news in your inbox
            </li>
            <li>
              <input type="email" placeholder="Enter Your Email">
            </li>
            <li>
              <button>
                subscribe
              </button>
            </li>
          </ul>
        </div>
      </div>
      <hr>
      <div class="rights">
        <p>
          &copy 2023 all riughts reserved. Developed by TemplateMela
        </p>
      </div>
    </footer>

</template>

<style lang="scss">
    footer{
      background-color: black;

      .footer_links{
        display: flex;
        justify-content: space-evenly;
        color: white;
        padding: 50px 100px;
        
        ul>li{
          list-style: none;
          margin-bottom: 10px;
          color: lightgrey;

          img{
            width: 20px;
            margin-right: 20px;
          }

          input{
            padding: 15px;
            width: 100%;
            border: 0;
            background-color: rgba(48, 46, 46, 0.5);
            color: lightgrey;
          }

          button{
            border: 0;
            background-color: white;
            padding: 20px 50px;
            font-weight: bolder;
          }
        }
      }
      
      hr{
        border-color: lightgrey;
        width: 80%;
        margin: 0 auto;
      }

      .rights{
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px;
      }

    }

</style>