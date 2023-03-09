import { Component, Input } from "@angular/core";
import { Employee } from "../types/EmployeeType";


@Component({
    selector: "app-table",
    templateUrl: "./table.component.html"
})
export class TableComponent {
    @Input() employee : Employee[]
    
}