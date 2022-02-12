import { LightningElement } from 'lwc';

export default class SameAsCurrentAddress extends LightningElement {
    zipCodeP;landmarkP;address2P;address1P;landmark;zipCode;address2;address1;
    sameAsCurrent = false;

    sameAsCurrentChanged(event){
        this.sameAsCurrent = (this.sameAsCurrent == true) ? false : true;
        if(this.sameAsCurrent){
            this.zipCodeP   = this.zipCode;
            this.landmarkP  = this.landmark;
            this.address2P  = this.address2;
            this.address1P  = this.address1;
        }else{
            this.zipCodeP   = '';
            this.landmarkP  = '';
            this.address2P  = '';
            this.address1P  = '';
        }
    }
    zipCodeChange(event){
        this.zipCode = event.target.value;
    }
    landmarkChange(event){
        this.landmark = event.target.value;
    }
    address2Change(event){
        this.address2 = event.target.value;
    }
    address1Change(event){
        this.address1 = event.target.value;
    }

}