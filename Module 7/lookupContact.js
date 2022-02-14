import { LightningElement,wire, api } from 'lwc';
import apexSearch from '@salesforce/apex/accountClass.Search';
import getContacts from '@salesforce/apex/contactClass.getContacts';
export default class LookupContact extends LightningElement {
    searchTerm = '';
    @api recordId;
    selectedAccount; selected;contacts;
    @wire(apexSearch, { searchTerm: '$searchTerm' }) accounts;
    handleSearch(event) {
        this.recordId = null;
        this.searchTerm = event.target.value;
    }
    handleReset(){
        searchTerm = '';
        this.recordId = null;
    }
    handleSelect1(event){
        // console.log(contacts);
        console.log('a',event.detail);
        this.recordId = event.detail;
        console.log('a',this.recordId);
        this.selectedAccount = this.accounts.data.find(account => account.Id === event.detail);
        // console.log((contacts) == true ? 'values fetched' : 'Values not Fetched');
        getContacts({ accId: event.detail })
          .then(result => {
            console.log('Result', result);
            this.contacts = result;
          })
          .catch(error => {
            console.error('Error:', error);
        });
        console.log(this.contacts);
    }
}