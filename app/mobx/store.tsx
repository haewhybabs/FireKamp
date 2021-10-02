import { action, observable,makeObservable } from "mobx";
import { createContext } from "react";
import { status } from "../constants/const_string";
class AppStore {
    generalStore =[
    ]
    constructor() {
        makeObservable(this, {
            generalStore:observable,
            updateStatus:action,
            handleCancel:action
        })
    }
    updateStatus(id:Number,newStatus:string){
        if(this.generalStore.length>0){
            let index= this.generalStore.findIndex((item)=>item.id===id);
            if(this.generalStore[index].status===status.uncompleted && newStatus===status.uncompleted){
                this.generalStore=this.generalStore.filter((item)=>item.id!=id);
                return;
            }
            this.generalStore[index].status=newStatus;
        }
    }
    handleCancel(useStatus){
        if(useStatus===status.uploading){
            let index= this.generalStore.findIndex((item)=>item.status===status.uploading);
            console.log('in',index)
            if(index>=0){
                this.generalStore[index].status=status.uncompleted;
            }
            
        }
        if(useStatus===status.nextUp){
            let items = this.generalStore.filter((item)=>item.status===status.nextUp).map((item,index)=>{
                let getIndex= this.generalStore.findIndex((data)=>data.id===item.id);
                this.generalStore[getIndex].status=status.uncompleted;
            })

        }
    }
    
}
export const MainItems = new AppStore();