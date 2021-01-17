<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar  slot="bottom">
        <ion-tab-button tab="goals"  href="/tabs/goals">
          <ion-icon :icon="gift" />
          <ion-label>Goals</ion-label>
        </ion-tab-button>
          
        <ion-tab-button tab="search" href="/tabs/search">
          <ion-icon :icon="search" />
          <ion-label>Search</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="explore" href="/tabs/explore">
          <ion-icon :icon="apps" />
          <ion-label>Explore</ion-label>
        </ion-tab-button>
        
        <ion-tab-button  tab="notifications" href="/tabs/notifications">
          <ion-icon :icon="notifications" />
          <ion-label>Notifications</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage } from '@ionic/vue';
import { gift, apps, cog,search, notifications } from 'ionicons/icons';

export default {
  name: 'Tabs',
  components: { IonLabel, IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      gift, 
      apps, 
      cog,
      search,
      notifications
    }
  }
}
</script>