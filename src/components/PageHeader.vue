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

    <header>  
      <div class="header_nav">
        <div class="logo">
            logo
        </div>
        <div class="header_links">
            <ul>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
                <li>link</li>
            </ul>
        </div>
        <div class="icons">
            <div id="magnifying_glass">
                lente
            </div>
            <div>
                <ul>
                    <li>icona</li>
                    <li>icona</li>
                    <li>icona</li>
                    <li>icona</li>
                </ul>
            </div>
        </div>
      </div>
      <div class="header_carousel">
        <img class="active" src="https://picsum.photos/1900/800" alt="">
        <div class="left_arrow_container">
            <img src="../assets/img/left-arrow.svg" alt="" class="left_arrow">
        </div>
        <div class="right_arrow_container">
            <img src="../assets/img/right-arrow.svg" alt="" class="right_arrow">
        </div>
        <div class="text-container">
            <p>
                cinemato studio
            </p>
            <h1>
                Action and inspire people
            </h1>
            <button>
                READ MORE
            </button>
        </div>
      </div>
    </header>

</template>

    <style lang="scss">

    header{
        padding: 20px;

        .header_nav{
            display: flex;
            justify-content: space-between;
            align-items: center;

            li{
                list-style: none;
                display: inline-block;
            }

            .logo{
                flex-grow: 0;
            }

            .header_links{

                flex-grow: 2;

                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    li{
                        margin-left: 50px;
                    }
                }      
            }

            .icons{
                flex-grow: 0;
                display:flex;
                align-items: center;

                #magnifying_glass{
                    border-right: 1px solid black;
                    padding: 20px;
                }

                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    li{
                        margin-left: 10px;
                    }
                }
            }


        }

        .header_carousel{
            padding: 10px 0;
            position: relative;

            img{
                width: calc(100vw - 40px);
                display: none;

                &.active{
                    display: block;
                }
            }

            .right_arrow_container{
                background-color: rgba(1,1,1,0.5);
                padding:15px;
                position: absolute;
                top: 450px;
                right: 20px;

                .right_arrow{
                    width: 15px;
                    height: 15px;
                    display: block;
                    filter: invert(1);
                }
            }

            .left_arrow_container{
                background-color: rgba(1,1,1,0.5);
                padding:15px;
                position: absolute;
                top: 450px;
                left: 20px;
                    
                .left_arrow{
                    width: 15px;
                    height: 15px;
                    display: block;
                    filter: invert(1);
                }
            }




            .text-container{
                color: white;
                position: absolute;
                top: 300px;
                left: 250px;

                p{
                    font-size: 22px;
                }

                h1{
                    margin-bottom: 30px;
                    font-size: 100px;
                    max-width: 700px;
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