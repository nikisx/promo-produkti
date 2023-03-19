<template>
     <!-- header -->
     <header>
         <!-- header inner -->
         <div class="header">
            <div class="header_top d_none1">
               <div class="container" style="max-width: unset;">
                  <div style="display: flex;gap: 124px;">
                     <div class="">
                        <ul class="conta_icon ">
                           <li><a href="#"><img src="../assets/images/call.png" alt="#"/>Поръчайте на: 0879277894</a> </li>
                        </ul>
                     </div>
                     <p style="font-size: 20px;">При поръчки над 1 брой получавате БЕЗПЛАТНА доставка и 25% намаление</p>
                     <div >
                        <ul class="social_icon">
                           <li> <a href="https://www.facebook.com/prodavalniktopceni" target="_blanc"><i class="fa fa-facebook" aria-hidden="true"></i>
                              </a>
                           </li>
                           <!-- <li> <a href="#"><i class="fa fa-twitter"></i></a></li>
                           <li> <a href="#"> <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                           <li> <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i>
                              </a>
                           </li> -->
                        </ul>
                     </div>
                    
                  </div>
               </div>
            </div>
            <div>
               <div class="container">
                  <div class="row d_flex">
                     <div class="col-md-4">
                        <ul class="conta_icon d_none1">
                           <li><a href="#"><img src="../assets/images/email.png" alt="#"/>bg.promo.producti@gmail.com</a> </li>
                        </ul>
                     </div>
                     <div class="col-md-4">
                        <a class="logo" href="#"><img src="../assets/images/Site_Logo_V2.png" alt="#"/></a>
                     </div>
                     <div class="col-md-4">
                        <ul @click="toggleSidebar()" class="right_icon d_none1">
                           <li><a href="#"><img src="../assets/images/shopping.png" alt="#"/></a> </li>
                           <!-- <a href="#" class="order">Order Now</a>  -->
                        </ul>
                     </div>
                  </div>
               </div>
            </div>
            <div class="header_bottom">
               <div class="container">
                  <div class="row">
                     <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                        <nav class="navigation navbar navbar-expand-md navbar-dark ">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                           <span class="navbar-toggler-icon"></span>
                           </button>
                           <div class="collapse navbar-collapse" id="navbarsExample04">
                              <ul class="navbar-nav mr-auto">
                                 <li class="nav-item">
                                    <router-link :to="{name: 'home'}" class="nav-link">Начало</router-link>
                                 </li>
                                 <li class="nav-item">
                                    <router-link class="nav-link" :to="{name: 'about'}">За нас</router-link>
                                 </li>
                                 <li class="nav-item">
                                    <router-link class="nav-link" :to="{name: 'products'}">Продукти</router-link>
                                 </li>
                                 <li class="nav-item">
                                    <router-link class="nav-link" :to="{name: 'contacts'}">Контакти</router-link>
                                 </li>
                              </ul>
                           </div>
                        </nav>
                     </div>
                        <!-- <div class="col-md-4">
                           <div class="search">
                              <form action="/action_page.php">
                                 <input class="form_sea" type="text" placeholder="Search" name="search">
                                 <button type="submit" class="seach_icon"><i class="fa fa-search"></i></button>
                              </form>
                           </div>
                        </div> -->
                  </div>
               </div>
            </div>
         </div>
      </header>
      <!-- end header inner -->
</template>
<script>
export default {
    methods:{
      toggleSidebar() {
         this.emitter.emit("toggle-sidebar", true);
    }
    }
}
</script>

<style>

</style>