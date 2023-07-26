<script >

  import { store } from '../store.js'

  export default {
    components:{

    },
    data(){
      return{
        store,
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
              <p>{{store.contact_info.address.street}}</p>
              <p>{{ store.contact_info.address.state }}</p>
            </li>
            <li>
              <img src="../assets/img/footer-phone-solid.svg" alt="">
              <p>{{ store.contact_info.number }}</p>
            </li>
            <li>
              <img src="../assets/img/footer-envelope-soli.svg" alt="">
              <p>{{ store.contact_info.email }}</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>
            INFORMATION
          </h1>
          <ul>
            <li v-for="(number, i) in store.info_links" :key="number">{{ store.info_links[i] }}</li>
          </ul>
        </div>
        <div>
          <h1>
            USEFUL LINKS
          </h1>
          <ul>
            <li v-for="(number, i) in store.useful_links" :key="number">{{ store.useful_links[i] }}</li>
          </ul>
        </div>
        <div class="newsletter">
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
                SUBSCRIBE
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
        padding: 100px 100px;

        h1{
          font-size: 15px;
          padding-bottom: 20px;
        }
        
        ul>li{
          list-style: none;
          margin-bottom: 10px;
          color: lightgrey;

          :nth-child(2){
            display: inline-block;
          }

          :nth-child(3){
            padding-left: 35px;
          }

          img{
            width: 13px;
            margin-right: 20px;
          }

          input{
            padding: 15px;
            width: 90%;
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
        
        li:hover{
          color: white;
        }

        .newsletter{
          ul{
            :first-child{
              max-width: 250px;
            }
          }
        }
      }
      
      hr{
        border-color: #666666;
        width: 80%;
        margin: 0 auto;
      }

      .rights{
        color: lightgrey;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 25px;
      }

    }

</style>