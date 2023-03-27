<template>
    <section style="font-family: 'Raleway', sans-serif;">
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
        <header>
            <h1 class="header-text">Новият и иновативен начин за улесние на работата в кухнята!</h1>
            <img src="../../assets/images/5066001d-e58a-4e13-905c-ba4309326460.__CR0,0,1940,1200_PT0_SX970_V1___.jpg"/>
            <button @click="toggleSidebar()" style="display: block;margin: 0 auto;margin-top: 50px;" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
        </header>
        <section class="description">
            <img src="../../assets/images/центрофуга.png" style="border-radius: 10px" alt="">
            <div>
                <ul class="pens-description">
                        <li class="options"> <i style="font-size: 30px;margin-right: 6px;color: 
                        font;" class="fa fa-check-circle-o" aria-hidden="true"></i>Използвайте нашата центрофуга Spino, за да отцедите и изплакнете храната си!</li>
                        <li class="options"><i style="font-size: 30px;margin-right: 6px;color: 
                        font;" class="fa fa-check-circle-o" aria-hidden="true"></i>Центрофугата Spino се вмества идеално във мивката и няма нужда да мокрите други съдове и плотове!</li>
                        <li class="options"><i style="font-size: 30px;margin-right: 6px;color: 
                        font;" class="fa fa-check-circle-o" aria-hidden="true"></i>С оглед на пестенето на място и лесното съхранение дръжката може да се вкара вътре в гевгира, което позволява той да се подрежда в купи и да не пречи. Заключете дръжката, за да използвате Spino като цедка!</li>
                        <li class="options"><i style="font-size: 30px;margin-right: 6px;color: 
                        font;" class="fa fa-check-circle-o" aria-hidden="true"></i>Силиконовото краче се задържа здраво при въртене на най-високите обороти, дори и на мокра мивка! Spino е проектирана така, че да задържа храната вътре. Просто натиснете надолу дръжката за бързо спиране на спирачката. Тя е подходяща и за миене в съдомиялна машина!</li>
                    </ul>
                    <button @click="toggleSidebar()" style="display: block;margin: 0 auto;margin-top: 50px;" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
            </div>
        </section>
        <section style="margin-top: 40px;">
            <h2 style="font-weight: bold; font-size: 30px;">КАК РАБОТИ?</h2>
            <p style="font-size: 20px;">Бързо и лесно изцедете храната си за отрицателно време!</p>
            <div class="how-to-use">
                <div>
                    <p style="font-size: 20px;">Поставяте храната в Spino и разтягате дръжката за завъртане</p>
                    <img src="../../assets/images/SS-1.jpg" class="how-to-use-image" alt="">
                </div>
                <div>
                    <p style="font-size: 20px;">Завъртете центрофуга чрез натискане на дръжката</p>
                    <img src="../../assets/images/SS-2.jpg" class="how-to-use-image" alt="">
                </div>
                <div>
                    <p style="font-size: 20px;">Сгъвате дръжката и прибирате на удобно за вас място</p>
                    <img src="../../assets/images/SS-3.jpg" class="how-to-use-image" alt="">
                </div>
            </div>
            <button @click="toggleSidebar()" style="display: block;margin: 0 auto;margin-top: 50px;" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
        </section>
        <section style="background: #b7e449;margin-top: 40px;padding: 30px;">
            <h2 style="font-weight: bold; font-size: 30px; color: white;">Често задавани въпроси</h2>
            <div class="faq">
                <button class="collapsible">Може ли да работи с вряла вода, например за отцеждане на паста?</button>
                <div class="content" >
                <p style="font-size: 20px;padding: 20px;">Абсолютно! Spinо е центрофуга за салати и уред за отцеждане в едно! Предназначен е за отцеждане на вашата храна!</p>
                </div>
                <button class="collapsible">Какъв е обемът на кошничката?</button>
                <div class="content" >
                <p style="font-size: 20px;padding: 20px;">Кошницата Spinо е с вместимост 2.8 литра!</p>
                </div>
                <button class="collapsible">Може ли дръжката да се отваря, за да се почисти отвътре?</button>
                <div class="content" >
                <p style="font-size: 20px;padding: 20px;">Не, дръжката на Spinо не е проектирана да се отваря, но цялата Spinо е проектирана да се мие в съдомиялна машина за лесно почистване.</p>
                </div>
                <button class="collapsible">Пръска ли водата по плота, когато го въртите в мивката?</button>
                <div class="content" >
                <p style="font-size: 20px;padding: 20px;">Не, aко го използвате в мивката и го завъртите правилно, върху плота не се пръсква вода.</p>
                </div>
            </div>
            <button @click="toggleSidebar()" style="display: block;margin: 0 auto;margin-top: 50px;" class="gf_button"> ИСКАМ ДА ПОРЪЧАМ!</button>
        </section>
        <section style="padding: 20px">
            <p style="font-size: 35px; font-weight: bold;line-height: 32px;">Поради ограничени количества цената на нашия Spino е намалена с 30%</p>
            <p style="font-size: 30px; font-weight: bold;line-height: 32px;">Цена: <span style="text-decoration: line-through">44лв</span> <span>34 лв</span></p>
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
         this.emitter.emit("toggle-sidebar", {title: 'Иновативна центрофуга - Spino', quantity: 1, price: 34, image: 'центрофуга.png'});
    }
    }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@200&display=swap');

  .header-text{
    margin-top: 60px;
    font-family: 'Raleway', sans-serif;
    font-size: 40px;
    color: #55a5b8;
    font-weight: bold;
  }
  .description{
    background: #8bc9d8;
    display: flex;
    justify-content: space-evenly;
    color: white;
    font-weight: bold;
    padding: 63px;
    margin-top: 30px;
    gap: 100px;
  }

  .how-to-use{
    display: flex;
    gap: 30px;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
  }

  .options{
    display: flex;
    gap: 10px;
  }
  .collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 20px;
}

.active, .collapsible:hover {
  background-color: #555;
}

.collapsible:after {
  content: '\002B';
  color: white;
  font-weight: bold;
  float: right;
  margin-left: 5px;
}

.active:after {
  content: "\2212";
}

.content {
  padding: 0 18px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
  background-color: #f1f1f1;
  font-size: 20px;
}

  .how-to-use-image{
    width: 300px;
    height: 266px;
    margin-top: 20px;
  }
  .faq{
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .header-text{
        margin-top: 90px;
    }
    .description{
        flex-direction: column;
        padding: 13px;
    }
    .how-to-use{
        flex-direction: column;
    }
    .faq{
        width: 100%;
    }
  }
</style>