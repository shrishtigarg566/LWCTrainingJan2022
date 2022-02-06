import { LightningElement,api} from 'lwc';
import {ShowToastEvent}from 'lightning/platformShowToastEvent';
/*import CONTACT_OBJECT from '@salesforce/schema/Contact';*/
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity';
import name_field from '@salesforce/schema/Opportunity.Name';
import stage_name from '@salesforce/schema/Opportunity.StageName';
import close_date from '@salesforce/schema/Opportunity.CloseDate';
import ACCOUNT_NAME from '@salesforce/schema/Contact.AccountId';

/*import name_field from '@salesforce/schema/Account.Name';*/

export default class QuickCreate extends LightningElement {
    @api recodId;
    /*@api objectApiNAme;*/
    /*objectApiNAme = CONTACT_OBJECT;*/
    objectApiNAme = OPPORTUNITY_OBJECT;
    fields=[ACCOUNT_NAME, name_field, close_date, stage_name];
    handleSuccess(event){
        const ev=new ShowToastEvent({
            "title":"Account Created",
            "variant":"success"
        });
        this.dispatchEvent(ev);
    }
    handlereset(){
        const inputfields=this.template.querySelector(
            'lightning-input-field'
        );
        if(inputfields){
            inputfields.forEach(fields=>{
                fields.reset();
            });
        }

    }
    
    get disableButton(){
        return !(this.options && this.options.data && this.options.data.length);
    }
}