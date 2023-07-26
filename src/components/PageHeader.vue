<script >
    import { store } from '../store.js'

  export default {
    components:{
        store,
    },
    data(){
      return{
        store
      }
    },
    methods:{

    },
  }
</script>

<template>

    <header>  
        <!-- nav -->
      <div class="header_nav">
        <div class="logo">
            <img src="../assets/img/logo.svg" alt="">
        </div>
        <!-- HEADER-LINKS -->
        <div class="header_links">
            <ul>
                <li>{{store.nav_data[0]}}</li>
                <li>{{store.nav_data[1]}}</li>
                <li>
                    {{store.nav_data[2]}}
                    <img src="../assets/img/image (7).svg" alt="">
                    <div class="dropdown">
                        <ul class="dropdown_links">
                            <li v-for="(number, i) in store.nav_dropdown" :key="number">{{ store.nav_dropdown[i] }}</li>
                        </ul>
                    </div>
                </li>
                <li>{{store.nav_data[3]}}</li>
                <li>{{store.nav_data[4]}}</li>
                <li>{{store.nav_data[5]}}</li>
                <li>
                    {{store.nav_data[6]}}
                    <img src="../assets/img/image (7).svg" alt="">
                </li>
            </ul>
        </div>
        <!-- ICONS -->
        <div class="icons">
            <div id="magnifying_glass">
                <img src="../assets/img/image (8).svg" alt="">
            </div>
            <div>
                <ul>
                    <li>
                        <img src="../assets/img/image (9).svg" alt="">
                    </li>
                    <li>
                        <img src="../assets/img/image (10).svg" alt="">
                    </li>
                    <li>
                        <img src="../assets/img/image (11).svg" alt="">
                    </li>
                    <li>
                        <img src="../assets/img/image (12).svg" alt="">
                    </li>
                </ul>
            </div>
        </div>
      </div>
        <!-- carousel -->
      <div class="header_carousel">
        <img class="active" src="https://www.e-duesse.it/wp-content/uploads/2023/04/produzione.jpg" alt="">
        <!-- carousel arrows -->
        <div class="left_arrow_container">
            <img src="../assets/img/left-arrow.svg" alt="" class="left_arrow">
        </div>
        <div class="right_arrow_container">
            <img src="../assets/img/right-arrow.svg" alt="" class="right_arrow">
        </div>
        <!-- carousel text -->
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
        background-color: #f2f2f2;

        .header_nav{
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #ffffff;
            padding: 0 20px;
            ul{

                :first-child{
                    
                    img{
                        width: 13px;
                    }
                }

                li{
                    list-style: none;
                    display: inline-block;

                    img{
                        width: 20px;
                        margin-right: 15px;
                    }
                }
            }

            .logo{
                flex-grow: 0;

                img{
                    width: 200px;
                    height: 100px;
                }
            }

            .header_links{

                flex-grow: 2;

                ul{
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .dropdown{
                        display: none;


                        .dropdown_links{
                            display: block;
                            color: white;
                            position: absolute;
                            bottom: - 149px;
                            left: - 5px;
                            z-index: 1;

                            li{
                                margin: 0;
                                border-bottom: 1px solid lightgrey;
                                background-color: black;
                                padding: 10px 0px 10px 10px;
                                font-size: 12px;
                                width: 200px;

                            }
                        }
                        
                    }

                    :nth-child(3){
                        position: relative;
                        &:hover{
                            .dropdown{
                                display: flex;
                                flex-direction: column;
                                align-items: flex-end;
                            }
                       }
                    }
                    
                    li{
                        margin-left: 50px;
                        display: flex;

                        img{
                           width: 13px;
                           align-self: flex-end;
                        }
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
            padding: 0 20px;
            position: relative;

            img{
                width: calc(100vw - 40px);
                height: 900px;
                display: none;
                filter: brightness(0.5);

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
                left: 40px;
                    
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