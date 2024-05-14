<template>
    <section>
      <div style="position: fixed;top: 0;width: 100vw;z-index: 100;" class="header_top d_none1">
                 <div class="container" style="max-width: unset;">
                    <div class="promo-header">
                       <div class="">
                          <ul class="conta_icon ">
                             <li><a href="#" class="mobile-font-size"><img src="../../assets/images/call.png" alt="#"/>Бърза поръчка на: 0879277894</a> </li>
                          </ul>
                       </div>
                       <p style="font-size: 20px;" class="mobile-font-size">При поръчки над 1 брой получавате БЕЗПЛАТНА доставка и 20% намаление</p>
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
              <section class="flex first-section">
                  <div class="wd-60">
                      <h1 style="color: rgb(8, 83, 149);width: 70%;margin: 0 auto;">Играчката, която най-накрая успява да забавлява децата и да ви осигури свободно време!</h1>
                      <img src="../../assets/images/Elegant_-_GIF_480x480.webp" alt="">
                      <ul class="pens-description">
                          <li> <i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Рисунките плават във вода!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Лесно за ползване и наслада!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Превръща всяка рисунка в татуировка!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Ангажираща дейност!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Безопасен за използване от деца!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Играчка, която забавлява децата!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;color: green;" class="fa fa-check-circle-o" aria-hidden="true"></i>Дава Ви свободно време като родители!</li>
                      </ul>
                  </div>
                  <div class="wd-50">
                      <h1 style="font-style: italic;color: rgb(8, 83, 149);">"Къде е било това нещо цял живот?"</h1>
                      <img src="../../assets/images/Magic_Painting_Pens_By_MommysMagic.co_website_official_retailer_of_Floating_Drawing_Pens_600x600.webp" alt=""/>
                      <p style="font-size: 20px">Оставете децата да се насладят на различни цветове и възможности за невероятни рисунки! 
                      Децата ви ще прекарат много време в игра с нашите флумастери, докато вие вършите работа. 
                      Няма да чувате повече думите,
                      "Мамо, татко, скучно ми е!"</p>
                      <button @click="toggleSidebar()" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
                  </div>
              </section>
              <section style="background: #3c91e0d6!important; padding: 35px 0">
                  <h1 style="font-weight: bold; color: white">КАК РАБОТИ?</h1>
                  <hr style="height: 5px;background: white;width: 85%;">
                  <p style="color: white;font-size: 20px;font-weight: bold;width: 50%;margin: 0 auto;">Всичко става бързо и лесно в 3 стъпки!
                  (не е необходима специална вода!)
                  Готови сте за Игра!</p>
                  <div style="display: flex;align-items: baseline;margin-top: 30px;gap:10px">
                      <div style="width: 33%">
                          <h2 style="font-weight: bold;color: white;">Стъпка 1</h2>
                          <img src="../../assets/images/HowToUse1.png" alt="">
                          <p style="font-weight: bold;color: white;">Нарисувайте на гърба на вълшебната лъжица
                          * Уверете се, че лъжицата е суха, преди да започнете да рисувате.</p>
                      </div>
                      <div style="width: 33%">
                          <h2 style="font-weight: bold;color: white;">Стъпка 2</h2>
                          <img src="../../assets/images/HowToUse2.png" alt="">
                          <p style="font-weight: bold;color: white;">Изчакайте рисунката върху лъжицата да изсъхне, след това прехвърлете БАВНО в дълбока чиния пълна с вода и се наслаждавайте!</p>
                      </div>
                      <div style="width: 33%">
                          <h2 style="font-weight: bold;color: white;">Стъпка 3</h2>
                          <img src="../../assets/images/HowToUse3.png" alt="">
                          <p style="font-weight: bold;color: white;">Гледайте как децата ви си играят часове наред!</p>
                      </div>
                  </div>
                  <button @click="toggleSidebar()" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
              </section>
              <section class="flex" style="background: #fbf4e9!important; justify-content: space-evenly;padding: 35px 0">
                  <div>
                      <h2 style="font-size: 25px;font-weight: bold;">ЗАЩО ТРЯБВА ДА ГО ИМАТЕ?</h2>
                      <img src="../../assets/images/Magic_Painting_Pens_2_480x480.webp" alt="">
                  </div>
                  <div>
                      <ul style="width: 100%;" class="pens-description">
                          <li> <i style="font-size: 30px;margin-right: 6px;" class="fa fa-check-circle-o" aria-hidden="true"></i>Флумастерите са нови и иновативни!</li>
                          <li> <i style="font-size: 30px;margin-right: 6px;" class="fa fa-check-circle-o" aria-hidden="true"></i>В комплетка влизат 11 боря флумастери и лъжичка!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;" class="fa fa-check-circle-o" aria-hidden="true"></i>Рисунките плават!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;" class="fa fa-check-circle-o" aria-hidden="true"></i>Подходящо за деца от 2 години нагоре!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;" class="fa fa-check-circle-o" aria-hidden="true"></i>Може да ги превърнтете в татуировка!</li>
                          <li><i style="font-size: 30px;margin-right: 6px;" class="fa fa-check-circle-o" aria-hidden="true"></i>Бърза доставка (1-2 дни)!</li>
                      </ul> 
                      <p class="risk-free-text">Пробвайте за <span style="color: rgb(232, 78, 7)">60 дни</span> без риск!Гаранция за връщане на парите</p>
                      <button @click="toggleSidebar()" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
                  </div>
              </section>
              <section style="background: #b7e449;margin-top: 40px;padding: 30px;">
              <h2 style="font-weight: bold; font-size: 30px; color: white;">Често задавани въпроси</h2>
              <div class="faq">
                  <button class="collapsible">Как се прехвърля от водата върху кожата?</button>
                  <div class="content" >
                  <p style="font-size: 20px;padding: 20px;">Изрежете празно парче хартия, поставете хартията върху рисунката и я оставете да се прехвърли върху хартията! След това го залепете на ръката си за забавен ефект на временна татуировка! Децата ще се радват на това!</p>
                  </div>
                  <button class="collapsible">За каква възраст е подходящ този продукт?</button>
                  <div class="content" >
                  <p style="font-size: 20px;padding: 20px;">Нашите магически флумастери са подходящи за деца на възраст над 2 години. Децата просто обичат да рисуват върху всичко! Така че, ако им подарите нашите магически флумастери, те ще бъдат толкова развълнувани да ги изпробват!</p>
                  </div>
                  <button class="collapsible">Какъв вид вода ми е необходима?</button>
                  <div class="content" >
                  <p style="font-size: 20px;padding: 20px;">Можете да използвате абсолютно всякаква вода! Препоръчваме вода със стайна температура от обикновена чешмяна вода.</p>
                  </div>
                  <button class="collapsible">Какви чинии/чаши мога да използвам?</button>
                  <div class="content" >
                  <p style="font-size: 20px;padding: 20px;">Препоръчваме ви да използвате наистина дълбока и широка купа (а не чиния) у дома или просто да се насладите на нея във ваната заедно с малчуганите! Просто се уверете, че лъжичките са сухи, преди да рисувате върху тях.</p>
                  </div>
              </div>
              <button @click="toggleSidebar()" style="display: block;margin: 0 auto;margin-top: 50px;" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
          </section>
          <section style="padding: 20px">
              <p style="font-size: 35px; font-weight: bold;line-height: 32px;">Поради ограничени количества цената на нашите флумастери е намалена с 50%</p>
              <p style="font-size: 30px; font-weight: bold;line-height: 32px;">Цена: <span style="text-decoration: line-through">56 лв</span> <span>27.99 лв</span></p>
          </section>
              <section>
                  <h1 style="font-size: 35px;color: #f2c119;font-weight: bold;">Защо да ни се доверите:</h1>
                  <h2>Поръчвайки сега вие не поемате никакъв риск, защото сме толкова сигурни, че ще харесате нашия продукт, че предлагаме 100% гаранция за връщане на парите. Ако по някаква причина не сте напълно удовлетворени от покупката си, просто ни уведомете в рамките на 60 дни и ние ще ви възстановим цялата сума.</h2>
                  <img src="../../assets/images/kachestvo_.jpg" alt="">
  
                      <!-- three_box section -->
                  <div class="three_box" style="    margin-bottom: 80px;">
                      <div class="container">
                          <div class="row">
                          <div class="col-md-4">
                              <div class="gift_box">
                                  <i><img src="../../assets/images/icon_mony.png"></i>
                                  <span>100% Гаранция за връщане на пари</span>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="gift_box">
                                  <i class="fa fa-check-circle-o" style="font-size: 50px;color: #f2c119" aria-hidden="true"></i>
                                  <span>60 дни период за връщане - без риск</span>
                              </div>
                          </div>
                          <div class="col-md-4">
                              <div class="gift_box">
                                  <i class="fa fa-truck" style="font-size: 50px;color: #f2c119" aria-hidden="true"></i>
                                  <span>Бърза доставка (1-2 дни)</span>
                              </div>
                          </div>
                          </div>
                      </div>
                  </div>
              </section>
    </section>
  </template>
  
  <script>
  export default {
      created(){
          window.fbq('track', 'ViewContent')
      },
      mounted(){
          var coll = document.getElementsByClassName("collapsible");
          var i;
          
          for (i = 0; i < coll.length; i++) {
              coll[i].addEventListener("click", function() {
                  this.classList.toggle("active");
                  var content = this.nextElementSibling;
                  if (content.style.maxHeight){
                      content.style.maxHeight = null;
                  } else {
                      content.style.maxHeight = content.scrollHeight + 20 + "px";
                  } 
              });
          }
      },
      methods:{
          toggleSidebar() {
          window.fbq('track', 'AddToCart')
           this.emitter.emit("toggle-sidebar", {title: 'Книга "Младият програмист"', quantity: 1, price: 27.99, image: 'Pens-thumbnail.png'});
      }
      }
  }
  </script>
  