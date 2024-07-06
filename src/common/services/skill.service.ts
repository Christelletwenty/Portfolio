import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable, shareReplay } from "rxjs";
import { Skills } from "../models/skills";

@Injectable({
    providedIn: 'root'
})

export class SkillService {

    private httpClient = inject(HttpClient);

    public getSkills(): Observable<Skills[]> {
        // return this.httpClient.get<Skills[]>('http://localhost:8081/skills');
        return this.httpClient.get<Skills[]>('assets/skills.json')
            .pipe(
                // Sert a créer du cache sur l'appel au serveur
                shareReplay({refCount: true, bufferSize: 1})
            );
    }
}