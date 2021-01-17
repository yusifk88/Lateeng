<template>
    <ion-page>
        <ion-content>
            <ion-grid>
                <ion-row>
                    <ion-col size="12" class="ion-text-center ion-padding ion-padding-top">
                        <h1>SignUp</h1>
                        <p>Create your LaTeeng Account</p>
                    </ion-col>
                    <ion-col style="12" class="ion-padding">
                        <ion-item>
                            <ion-label position="stacked">First Name</ion-label>

                            <ion-input placeholder="John" pattern="text" inputmode="text" :autofocus="true">

                            </ion-input>
                        </ion-item>


                         <ion-item>
                            <ion-label position="stacked">Last Name</ion-label>

                            <ion-input placeholder="Doe" pattern="text" inputmode="text" >

                            </ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Account type</ion-label>

                            <ion-select :interface-options="sheetOptions" interface="action-sheet" value="personal" ok-text="Okay" cancel-text="Dismiss">
                                <ion-select-option value="personal">Personal</ion-select-option>
                                <ion-select-option value="organization">Organization</ion-select-option>

                            </ion-select>

                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Phone Number</ion-label>

                            <ion-input placeholder="020xxxxxxx" pattern="tel" inputmode="tel" >

                            </ion-input>
                        </ion-item>

                        <ion-item>
                            <ion-label position="stacked">Password</ion-label>

                            <ion-input placeholder="" pattern="password" inputmode="password" type="password" >

                            </ion-input>
                        </ion-item>


                        <ion-item>
                            <ion-label position="stacked">Confirm Password</ion-label>

                            <ion-input placeholder="" pattern="password" inputmode="password" type="password" >

                            </ion-input>
                        </ion-item>
                    </ion-col>
                    <ion-col size="12">
                        <ion-button color="tertiary" size="large" shape="round" expand="block">Register Now</ion-button>
                        <p>
                          Already have an account ? <a href="#" color="tertiary">Log In</a>
                        </p>
                    </ion-col>
                </ion-row>

            </ion-grid>
          


        </ion-content>
    </ion-page>
    
</template>
<script>
import {IonPage, IonContent, IonGrid, IonRow, IonCol, IonItem, IonSelect, IonSelectOption,IonInput, IonLabel} from "@ionic/vue";
export default {
    components:{
        IonPage,
        IonContent,
        IonGrid,
        IonRow,
        IonCol,
        IonItem,
        IonSelect,
        IonSelectOption,
        IonInput,
        IonLabel
       
    },
    computed:{
        sheetOptions(){
            return{
                header:"Account Type"
            }
        }
    }
    
}
</script>