import { Pipe, PipeTransform } from '@angular/core';
import { Department } from '../model/department';

@Pipe({
  name: 'sortDepartment',
  standalone: true
})
export class SortDepartmentPipe implements PipeTransform {

  transform(department: Department[], sortBy: string = 'deptName'): Department[] {

    if (department.length < 0) return department;

    
        department.sort((d1,d2) => {
          if (d1.deptName != undefined && d2.deptName 
            != undefined) {
            if (d1.deptName > d2.deptName) return 1;
            else
              if (d1.deptName < d2.deptName) return -1;
          }
          return 0; 

        });
      
    return department;
  }


}
