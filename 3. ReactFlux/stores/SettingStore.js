import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class SettingStore extends EventEmitter{
    constructor(){
        super();
        this.settings={
            showAll:true
        }
    }
    toggleShowAll(){
        this.settings.showAll=!this.settings.showAll;
        this.emit("change");
    }

    getAll(){
        return this.settings;
    }

    handleActions(action){
        switch(action.type){
            case "TOGGLE_SHOWALL":{
                this.toggleShowAll();
            }
        }
    }
}

const settingStore=new SettingStore;
dispatcher.register(settingStore.handleActions.bind(settingStore));
export default settingStore;