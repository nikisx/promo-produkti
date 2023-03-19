<template>
  <!-- banner -->
  <div class="blue_bg">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <div class="titlepage">
                     <h2>Контакти</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- contact section -->
      <div id="contact" style="margin-bottom: 30px;" class="contact">
         <div class="con_bg">
            <div class="container">
               <div class="row">
                  <div class="col-md-10 offset-md-1">
                     <form id="request" class="main_form">
                        <div class="row">
                           <div class="col-md-6 col-sm-6">
                              <input class="contactus" required placeholder="Име" type="text" name="Name"> 
                           </div>
                           <div class="col-md-6 col-sm-6">
                              <input class="contactus" required placeholder="Телефонен номер" type="tel" name="Phone Number"> 
                           </div>
                           <div class="col-md-6 col-sm-6">
                              <input class="contactus" required placeholder="Email" type="email" name="Email">                          
                           </div>
                           <div class="col-md-12">
                              <input class="contactusmess" required placeholder="СЪобщение" type="text" Message="Name">
                           </div>
                           <div class="col-md-12">
                              <button class="send_btn">Send</button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>