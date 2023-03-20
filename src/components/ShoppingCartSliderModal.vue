<template>
  <section v-show="isActive" @click="closeMOdal()" style=" z-index:999;background-color: rgba(0, 0, 0, 0.5);top: 0; width: 98vw; height: 1508vh; position: absolute"></section>
  <section id="shopping-cart" class="shopping-cart">
    <i @click="closeMOdal()" style="font-size: 40px;" class="close-button fa fa-times-circle-o " aria-hidden="true"></i>
    <h1 style="font-size: 50px">Поръчка</h1>
    <hr>
    <div v-if="product" style="">
      <div style="text-align: left; display: flex; gap: 10px;align-items: start;padding: 10px;">
        <img style="width: 100px;" :src="productImage" alt="">
        <div>
          <p style="width: 100%;font-size: 23px;margin-bottom: 10px;">{{ product.title }}</p>
          <p style="font-size: 20px;margin-bottom: 10px;"><b>ЦЕНА:</b>{{ product.price }} лв.</p>
          <p style="font-size: 20px;margin-bottom: 10px;"><b>БРОЙ:</b>{{ product.quantity }} бр.</p> 
          <p @click="addQuantitiy()" class="add-btn">Добави още 1 брой</p>
          <p v-if="product.quantity > 1" @click="decreaseQuanity()" style="background: red;margin-left: 4px;" class="add-btn">Премахни 1 брой</p>
        </div>
      </div>
    </div>
    <div>
      <p style="font-size: 25px;">Крайна цена: {{ calculatedFinalPrice.toFixed(2) }} лв. <span v-if="product && product.quantity > 1">(- 25%)</span></p>
      <p v-if="product && product.quantity > 1" style="font-size: 20px;">БЕЗПЛАТНА доставка</p>
    </div>
    <div v-if="!isOrderComplete" style="margin-top: 50px;">
      <p style="font-size: 30px">Данни за поръчка</p>
      <form @submit.prevent="sendOrder()" style="width: 89%;margin: 0 auto;margin-top: 30px;display: flex;flex-direction: column;">
        <b style="text-align: left;" for="">Имена</b>
        <input class="order-input" v-model="name" required placeholder="Име" type="text" name="Name"> 
        <b style="text-align: left;"  for="">Телефонен номер</b>
        <input class="order-input" v-model="phone" required placeholder="Телефонен номер" type="tel" name="Phone Number"> 
        <b style="text-align: left;"  for="">Град</b>
        <input class="order-input" v-model="city" required placeholder="Град" type="text" name="City"> 
        <b style="text-align: left;"  for="">Адрес за доставка</b>
        <textarea class="order-input" v-model="adress" placeholder="Адрес за доставка"></textarea>
        <button class="add-btn" style="font-size: 25px; background-color: #f4ad43; margin: 0 auto;">Поръчай</button>
      </form>
    </div>
    <div v-else style="margin-top: 50px;">
      <p style="font-size: 30px">Успешна поръчка!</p>
      <i style="font-size: 80px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>
      <p style="font-size: 30px">Благодарим ви за поръчката!</p>
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data(){
    return {
      isActive: false,
      isOrderComplete: false,
      product: null,
      name: null,
      phone: null,
      city: null,
      adress: null,
    }
  },
  computed:{
    isMobile(){
      return window.innerWidth < 768
    },
    productImage(){
      return require('../assets/images/' + this.product?.image)
    },
    calculatedFinalPrice(){
      if (this.product?.quantity > 1) {
        const temp = this.product.price * this.product.quantity;
        

        return temp - (temp * 0.25)
      }

      return this.product?.price ?? 0;
    }
    // product(){
    //   return JSON.parse(localStorage.getItem('product'))
    // }
  },
  created(){
       emailjs.init('FvTvghX64N2H7swm9');
   },
    mounted() { 
      document.title = 'Перфектния подарък за деца само за 24.99 лв.'
        this.emitter.on("toggle-sidebar", (product) => {
            document.getElementById('shopping-cart').style.right = 0;
            this.isActive = true;
            localStorage.setItem('product',JSON.stringify(product))
            this.product = JSON.parse(localStorage.getItem('product'));
            document.getElementsByTagName('body')[0].classList.add('stop-scrolling')
        });
  },
  methods:{
    sendOrder(){
      try {
            emailjs.send('service_uue3n9e', 'template_q8niw3q',
             {
              product: this.product.title,
              name: this.name,
              phone: this.phone,
              city: this.city,
              adress: this.adress,
              quantity: this.product.quantity,
            })
            this.isOrderComplete = true;
            
          } catch(error) {
            console.log({error})
          }
    },
    addQuantitiy(){
      this.product.quantity += 1;
    },
    decreaseQuanity(){
      this.product.quantity -= 1;
    },
    closeMOdal(){
        document.getElementById('shopping-cart').style.right = this.isMobile ? '-100vw'  : '-40vw';
        this.isActive = false;
        document.getElementsByTagName('body')[0].classList.remove('stop-scrolling')
    }
  }
}
</script>

<style>
.close-button{
  font-size: 40px;
    text-align: left;
    position: absolute;
    left: 10px;
    cursor: pointer;
}
.close-button:hover{
  color:#f2c119;
}
.shopping-cart{
    position: fixed;
    top: 0;
    background: white;
    right: -40vw;
    width: 40vw;
    height: 100vh;
    transition: 0.5s ease;
    z-index: 1000;
    overflow: scroll;
}
.stop-scrolling {
  height: 100%;
  overflow: hidden;
}
.add-btn{
  padding: 10px;
    background: green;
    color: white;
    font-weight: bold;
    border-radius: 7px;
    cursor: pointer;
    width: 62%;
    margin-bottom: 10px;
}
.order-input{
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #f4ad43;
    border-radius: 10px;
}
@media (max-width: 768px) {
  .shopping-cart{
    right: -100vw;
    width: 100vw;
  }
}
</style>