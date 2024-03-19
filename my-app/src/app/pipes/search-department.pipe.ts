import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../model/department';

@Pipe({
  name: 'searchDepartment',
  standalone: true
})
export class SearchDepartmentPipe implements PipeTransform {

  transform(department: Department[], query: string): Department[] {
    if(department.length<1 || query == "" || query == undefined) return department;
    return department.filter((d)=>{
      return d.deptName!.toLowerCase().includes(query.toLowerCase());
    });
    
  }

}

