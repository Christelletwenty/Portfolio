import { HttpClient } from '@angular/common/http';
import {Injectable, inject} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class SkillService {

    private httpClient = inject(HttpClient);


    getSkills(): Observable<any[]> {
        return this.httpClient.get<any[]>('assets/skills.json');
    }

    getSkill(id:number) {
        return null;
    }
}