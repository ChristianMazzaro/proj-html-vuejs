


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
              <p>2/45 Tower Street, new york</p>
              <p>USA</p>
            </li>
            <li>
              <img src="../assets/img/footer-phone-solid.svg" alt="">
              <p>Call Us On 0800 840 1010</p>
            </li>
            <li>
              <img src="../assets/img/footer-envelope-soli.svg" alt="">
              <p>Demo@Example.Com</p>
            </li>
          </ul>
        </div>
        <div>
          <h1>
            INFORMATION
          </h1>
          <ul>
            <li>Product Support</li>
            <li>Checkout</li>
            <li>Report Abuse</li>
            <li>Redeem Voucher</li>
            <li>Order Status</li>
          </ul>
        </div>
        <div>
          <h1>
            USEFUL LINKS
          </h1>
          <ul>
            <li>Policies & Rules</li>
            <li>Privacy Policy</li>
            <li>License Policy</li>
            <li>My Account</li>
            <li>Locality</li>
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