import { HttpClient } from "@angular/common/http";
import {Injectable} from "@angular/core"
import { Observable } from "rxjs";
import { Employee } from "../types/EmployeeType";


@Injectable({
    providedIn: 'root'
})

export class EmployeeService{
    constructor(private http: HttpClient){
    }

    getAll() : Observable<Employee[]> {
        return this.http.get<Employee[]>("https://localhost:7221/Employee")
    }
}