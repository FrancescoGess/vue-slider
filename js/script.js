// const { createApp } = Vue

//   createApp({
//     data() {
//       return {  
//         autoScroll: null,
//         currentImg: 0,
        
//         slides: [
        
//                 {
//                     image: 'img/01.webp',
//                     title: 'Marvel\'s Spiderman Miles Morale',
//                     text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
//                 }, {
//                     image: 'img/02.webp',
//                     title: 'Ratchet & Clank: Rift Apart',
//                     text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
//                 }, {
//                     image: 'img/03.webp',
//                     title: 'Fortnite',
//                     text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
//                 }, {
//                     image: 'img/04.webp',
//                     title: 'Stray',
//                     text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
//                 }, {
//                     image: 'img/05.webp',
//                     title: "Marvel's Avengers",
//                     text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
//                 }

//         ]
//   }
// },
//          //setInterval
//         //  created(){
//         //   this.activeInterval()
//       },
//          //funzioni di partenza immagini(next,prev)

//      methods: {
//          prevImg(){

//              this.currentImg--

//                  if (this.currentImg < 0 ){
//                      this.currentImg = this.slides.length - 1;
//                      }
//          },
//          nextImg(){
//              this.currentImg++

//              if(this.currentImg > this.slides.length - 1){
//                  this.currentImg = 0
//              }
//          }
//      },
    
// );
// app.mount('#app')


const { createApp } = Vue

createApp({
  data() {
    return {
        autoScroll: null,
        currentImg: 0,
        
        slides: [
        
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }

        ]
      
    }
  }, methods: {
    prevImg(){
        if ( this.currentImg <=0) {
            this.currentImg = this.slides.length - 1
        } else {
            this.currentImg--
        }
    }, nextImg(){
        if (this.currentImg >= this.slides.length - 1)
            this.currentImg = 0
        else{
            this.currentImg++
        }
  }, currentImg(index){
    this.currentImg = index
  },

        //creo funzione di cambio immagine con SetInterval

        created(){
            this.autoScroll()
        },
        autoScroll(){
            this.autoScroll = setInterval((){
                this.nextImg();
        }, 3000)
  }
}).mount('#app')