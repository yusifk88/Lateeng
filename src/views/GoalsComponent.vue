<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Goals</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, modalController } from '@ionic/vue';
import StarterComponent from "@/components/StarterComponent.vue";

export default  {
  name: 'Tab1',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data(){
    return{
      starter:true

    }
  },


   methods:{


     async GetStarted(){
      const starter = await modalController.create({
      component:StarterComponent,
      backdropDismiss:false

    });
    return starter.present();

      }

  },
  mounted(){
    this.GetStarted();
  
  }
}
</script>