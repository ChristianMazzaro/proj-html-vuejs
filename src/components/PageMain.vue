<script >
  import { store } from '../store.js'

  export default {
    components:{
      store,
      
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

    <main>
      <!-- OFFERS -->
      <section class="what_we_do">
        <div class="section_headers">
          <p>PELICULA STUDIO</p>
          <h1>THIS IS WHAT WE DO</h1>
        </div>
        <div class="cards_container">
          <div class="card">
            <img src="../assets/img/image (14).svg" alt="">
            <h1>ARRAY OF EQUIPMENT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda esse praesentium commodi illo 
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/image (16).svg" alt="">
            <h1>NEW TECHNOLOGIES</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda esse praesentium commodi illo 
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/image (18).svg" alt="">
            <h1>VERSATILE ACTORS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda esse praesentium commodi illo 
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/image (15).svg" alt="">
            <h1>TOP DIRECTORS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda esse praesentium commodi illo 
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/image (17).svg" alt="">
            <h1>MINUTE EDITING</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda esse praesentium commodi illo 
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/image (19).svg" alt="">
            <h1>VERSATILE ACTORS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint assumenda esse praesentium commodi illo 
            </p>
          </div>

        </div>
      </section>
      <!-- ABOUT US -->
      <section class="about_us">
        <div class="text-container">
          <p>About Us</p>
          <h1>HIGH QUALITY CINEMATICS</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores alias recusandae, explicabo quis porro, dolor corporis nobis, corrupti illo ex quibusdam incidunt ducimus exercitationem ullam eos cupiditate id sit sint!</p>
          <button>
            READ MORE
          </button>
        </div>
      </section>
      <!-- BEST HITS MOVIES GALLERY -->
      <section class="what_we_do gallery">
        <div class="section_headers">
          <p>YOUR WATCHLIST</p>
          <h1>BEST HITS MOVIES</h1>
        </div>
        <div class="cards_container">
          <div class="card">
            <img src="../assets/img/Gallery-01.jpg" alt="">
            <h1>SEVENTEENTH SUMMER</h1>
            <p>
              Commercial, Music Video.
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Gallery-02.jpg" alt="">
            <h1>A MESSAGE TO SPACE</h1>
            <p>
              Short Film
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Gallery-03.jpg" alt="">
            <h1>THE MOST BEAUTIFUL THING</h1>
            <p>
              Music Video
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Gallery-04.jpg" alt="">
            <h1>PERMISSION TO SPEAK</h1>
            <p>
              Documentary
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Gallery-05.jpg" alt="">
            <h1>EXPLORE OUR SPACE</h1>
            <p>
              Film noir
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Gallery-06.jpg" alt="">
            <h1>FILM PRODUCTION</h1>
            <p>
              Blaxploitation
            </p>
          </div>

        </div>
      </section>
      <!-- STATS -->
      <section class="statistic">
        <div class="stat">
          <h1>
            158
          </h1>
          <p>
            SATISFIED CLIENTS
          </p>
        </div>

        <div class="stat">
          <h1>
            3+
          </h1>
          <p>
            OUR PROJECTS
          </p>
        </div>

        <div class="stat">
          <h1>
            1,906
          </h1>
          <p>
            CUP OF COFFEE
          </p>
        </div>

        <div class="stat">
          <h1>
            2
          </h1>
          <p>
            OUR AWARDS
          </p>
        </div>
      </section>
      <!-- OUR TEAM -->
      <section class="what_we_do">
        <div class="section_headers">
          <p>THE PERICUROS</p>
          <h1>MEET THE TEAM</h1>
        </div>
        <div class="cards_container _4_cards">
          <div class="card">
            <img src="../assets/img/Team-01.jpg" alt="">
            <h1>FABRICIO GUERRA</h1>
            <p>
              Main Director
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Team-02.jpg" alt="">
            <h1>UMBERTO PAGODA</h1>
            <p>
              Main Writer
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Team-03.jpg" alt="">
            <h1>GLORIA RICCASSO</h1>
            <p>
              Main Producer
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/Team-04.jpg" alt="">
            <h1>LIO NAPOIN</h1>
            <p>
              Cameraman
            </p>
          </div>

        </div>
      </section>
      <!-- TEAM CAROUSEL -->
      <section class="team_carousel">
        <div class="text-container">
          <img src="../assets/img/image (20).svg" alt="virgolette">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum voluptate tempora minima consequuntur, omnis voluptas sequi quaerat sint. Sit, animi.
          </p>
          <div class="staff_profile">
            <img src="../assets/img/01.jpg" alt="immagine profilo">
            <div class="staff_info">
              <h1>
                JOHN DOE
              </h1>
              <p>
                Designer
              </p>
            </div>
          </div>
          <div class="carousel_dots">
            <span>&bull;</span>
            <span>&bull;</span>
            <span>&bull;</span>
          </div>
        </div>
      </section>
      <!-- LATEST NEWS -->
      <section class="what_we_do latest_news">
        <div class="section_headers">
          <p>LATEST NEWS</p>
          <h1>ARTICLES UPDATED DAILY</h1>
        </div>
        <div class="cards_container">
          <div class="card">
            <img src="../assets/img/blog07.jpg" alt="">
            <P>November 06 , 2021 By Admin</P>
            <h1>RECAP YOUR LATEST COMPANY EVENT</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos fuga eveniet dolorum sequi ullam!
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/blog01.jpg" alt="">
            <P>May 27 , 2022 By Admin</P>
            <h1>HOW TO EDIT A FILM SCORE TO SERVE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos fuga eveniet dolorum sequi ullam!
            </p>
          </div>

          <div class="card">
            <img src="../assets/img/blog02.jpg" alt="">
            <P>May 07 , 2022 By Admin</P>
            <h1>ARE YOU READY TO MAKE IT AWESOME</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dignissimos fuga eveniet dolorum sequi ullam!
            </p>
          </div>

        </div>
      </section>
      <!-- PARTNERS -->
      <section class="statistic partners">
        <div class="stat">
          <img src="../assets/img/03.png" alt="immagine">
        </div>

        <div class="stat">
          <img src="../assets/img/04.png" alt="immagine">
        </div>

        <div class="stat">
          <img src="../assets/img/05.png" alt="immagine">
        </div>

        <div class="stat">
          <img src="../assets/img/01.png" alt="immagine">
        </div>

        <div class="stat">
          <img src="../assets/img/02.png" alt="immagine">
        </div>
      </section>
      <!-- COLLAB-->
      <section class="collaborate">
        <div class="collab_info">
          <p>COLLABORATE</p>
          <h1>
            WANT TO WORK WHIT US?
            LEAVE US A MESSAGE!
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, minus? Eligendi esse velit, modi magnam nihil, rem veniam placeat laboriosam iusto pariatur consequuntur voluptates doloribus voluptatem quasi maiores assumenda iure.
          </p>
        </div>
        <div class="collab_form">
          <div>
            <input type="text" placeholder="Your Name"   required>
            <input type="email" placeholder="Your Email" required>
          </div>
          <div>
            <input type="numbers" placeholder="Mobile Number" required>
            <input type="password" placeholder="Your Pincode" required>
          </div>
          <div>
            <input type="text" placeholder="Enter your message">
          </div>
          <button>
            SUBMIT NOW
          </button>
        </div>
      </section>
    </main>

</template>

<style lang="scss">

  main{
    padding: 0 20px;
    background-color: white;

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

        P{
          font-size: small;
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
          padding: 20px 50px;
          
          img{
            width: 15%;
          }

          h1{
            font-size: 20px;
            margin: 10px 0;
          }

          p{
            text-align: center;
            color: #666666;
          }
        }
      }

    }

    .gallery{
      .cards_container{
        .card{
          img{
            width: 100%;
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
      display: flex;
      justify-content: end;
      align-items: flex-end;

      .text-container{
        color: white;
        height: 100%;
        max-width:40%;

        p{
          font-size: 22px;
          margin-bottom: 30px;
        }

        h1{
          margin-bottom: 30px;
          font-size: 35px;
        }

        button{
          border: 0;
          background-color: white;
          padding: 20px 50px;
          font-weight: bolder;
        }

      }
    }

    .statistic{
      background-image: url(../assets/img/Parallax-01.jpg);
      width: calc(100vw - 40px);
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 150px;
      background-size:100%;
      background-position-y: 500px;



      .stat{
        color: white;
        text-align: center;
        font-size: 30px;

        h1{
          font-weight:bolder;
          font-size: 50px;
        }

      }
    }
    
    ._4_cards{

      >.card{
        width: calc(((100% / 4) * 1) - 40px) !important;

        img{
          width: 100% !important;
        }
      }
    }

    .team_carousel{
      background-image: url(../assets/img/Parallax-02.jpg);
      width: calc(100vw - 40px);
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 150px;
      background-size:100%;
      background-position-y:130px;
      

      .text-container{
        color: white;
        height: 100%;
        max-width:40%;

        >img{
          filter: invert(1);
          width: 50px;
          margin: 20px 330px;
        }

        p{
          text-align: center;
          font-size: 18px;
          line-height: 35px;
        }

        h1{
          font-size: 18px;
        }

        .staff_profile{
          display: flex;
          text-align: center;
          justify-content: center;
          align-items: center;
          margin: 30px;

          .staff_info{
            display:flex ;
            flex-direction: column;
            margin: 0 10px;

            p{
              line-height: 15px;
              font-size: 15px;
            }
          }

          img{
            border-radius: 50%;
          }
        }

        .carousel_dots{
          text-align: center;
          font-size: 40px;

          :nth-child(2){
            margin: 0 5px;
            color: #666666;
          }

          :nth-child(3){
            color: #666666;
          }
        }

      }

    }

    .latest_news{
      padding: 95px 0;
      .cards_container{
        padding: 0;
        .card{
          padding: 0;
          text-align: left;
          img{
            width: 500px;
            height: 350px;
          }
          p{
            text-align: left;
            margin: 10px 0;
            max-width: 80%;
          }
        }
      }
    }

    .partners{
      background-image: url(../assets/img/Parallax-03.jpg);
      background-size:100%;
      background-position-y:-250px;
    }

    .collaborate{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 300px;
      padding-bottom: 50px;
      

      .collab_info{
        text-align: justify;
        max-width: 45%;
        height: 100%;
        padding-bottom: 100px;

        p{
          line-height: 30px;
          max-width: 70%;
        }

        h1{
          max-width: 80%;
          margin: 35px 0;
          font-size: 40px;
          font-weight: 900;
        }

      }

      .collab_form{
        width: 65%;
        
        div:first-child{
          padding-top: 200px;
        }

        div{
          margin-bottom: 20px;
        }
        
        div>input {
          border: 0;
          background-color: #f2f2f2;
          padding: 15px;
          margin: 0 10px 10px 0;
          width: calc(50% - 10px);
          font-weight: bolder;
          font-size: 15px;

        }
        
        div:nth-child(3){
          
          input{
            width: 100%;
            height: 100%;
            padding-bottom: 250px;
          }
        }

        button{
          border: 0;
          color: white;
          background-color: black;
          padding: 20px 50px;
          font-weight: bolder;
          width: 100%;
        }
      }
    }

  }
</style>