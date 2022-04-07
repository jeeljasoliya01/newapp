import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private childBehaviousData = new BehaviorSubject<string>('');
    childData = this.childBehaviousData.asObservable();

    private childBehaviousData1 = new BehaviorSubject<string>('');
    childData1 = this.childBehaviousData1.asObservable();

    private childBehaviousData2 = new BehaviorSubject<string>('');
    childData2 = this.childBehaviousData2.asObservable();

    private childBehaviousData3 = new BehaviorSubject<string>('');
    childData3 = this.childBehaviousData3.asObservable();

    private parentBehaviousData = new BehaviorSubject<string>("");
    parentData = this.parentBehaviousData.asObservable();

    updateChild(messchildBehaviousDataage: string) {
        this.childBehaviousData.next(messchildBehaviousDataage)
    }
    
    updateChild1(messchildBehaviousDataage: string) {
        this.childBehaviousData1.next(messchildBehaviousDataage)
    }

    updateChild2(messchildBehaviousDataage: string) {
        this.childBehaviousData2.next(messchildBehaviousDataage)
    }

    updateChild3(messchildBehaviousDataage: string) {
        this.childBehaviousData3.next(messchildBehaviousDataage)
    }

    updateParent(messchildBehaviousDataage: string) {
        this.parentBehaviousData.next(messchildBehaviousDataage)
    }
    

}