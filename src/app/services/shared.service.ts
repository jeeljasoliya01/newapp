import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharedService {
    private childBehaviousData = new BehaviorSubject<string>('');
    childData = this.childBehaviousData.asObservable();

    private parentBehaviousData = new BehaviorSubject<string>("");
    parentData = this.parentBehaviousData.asObservable();


    updateChild(messchildBehaviousDataage: string) {
        this.childBehaviousData.next(messchildBehaviousDataage)
    }

    updateParent(messchildBehaviousDataage: string) {
        this.parentBehaviousData.next(messchildBehaviousDataage)
    }

}