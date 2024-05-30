import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { Skills } from "../models/skills";

@Injectable({
    providedIn: 'root'
})

export class SkillService {

    private httpClient = inject(HttpClient);

    public getSkills(): Observable<Skills[]> {
        return this.httpClient.get<Skills[]>('http://localhost:8081/skills');
    }
}