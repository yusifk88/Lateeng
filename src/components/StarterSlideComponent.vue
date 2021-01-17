<template>
<ion-page>
    <ion-content>
    <ion-slides
                :options="slideOptions"
                pager="true"

            >
            <ion-slide>
                <ion-grid >
                    <ion-col size="12">

                 <ion-img
                    src="/assets/img/bank.svg"
                ></ion-img>

                    </ion-col>
                    <ion-col>
                <h1>Welcome to LaTeeng</h1>
                <p>
                    Your ultimate platform for public fundraising and group contributions...
                </p>

                    </ion-col>

                </ion-grid>
               


            </ion-slide>

            <ion-slide>
                <ion-grid>
                    <ion-row>
                    <ion-col size="12">

                 <ion-img
                    src="/assets/img/rocket.svg"
                ></ion-img>

                    </ion-col>
                        <ion-col>
                            <h1>Private Contributions</h1>
                            <p>
                                Create a goal and invite your group members to contribute, 
                                track all activities on your wallet, make group contributions easy and transarent

                            </p>
                        </ion-col>

                    </ion-row>
                </ion-grid>
            </ion-slide>




                <ion-slide>
                <ion-grid>
                    <ion-row>
                    <ion-col size="12">

                 <ion-img
                    src="/assets/img/workit5.svg"
                ></ion-img>

                    </ion-col>
                        <ion-col size="12">
                            <h1>Fundraising Made Easy</h1>
                            <p>
                                Share your goal with the world, get help from arround the globe to achive it.

                            </p>
                        </ion-col>
                        <ion-col>
                            <ion-button @click="() => $router.push('/register')" expand="block" size="large" shape="round" color="tertiary">Get Started</ion-button>

                        </ion-col>

                    </ion-row>
                </ion-grid>
            </ion-slide>
            </ion-slides>
            </ion-content>
            </ion-page>
</template>

<script>
import {IonSlides,IonSlide,IonImg,IonButton,IonGrid,IonCol,IonRow,IonPage,IonContent} from "@ionic/vue";
export default {
    components:{
        IonImg,
        IonSlides,
        IonSlide,
        IonButton,
        IonGrid,
        IonRow,
        IonCol,
        IonPage,
        IonContent,

    },
     
     computed:{
       
        slideOptions(){
            return {
                 initialSlide: 0,
                speed: 400
            }
        }
    },
    
    
}
</script>

<style>
     ion-slides {
      height: 100%;
    }
    
</style>