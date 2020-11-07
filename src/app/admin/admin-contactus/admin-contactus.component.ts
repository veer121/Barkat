import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-contactus',
  templateUrl: './admin-contactus.component.html',
  styleUrls: ['./admin-contactus.component.scss']
})
export class AdminContactusComponent implements OnInit {

  constructor(public userService: UserService) { }

  columnHeadings = ['S.No.', 'Name', 'Email', 'Subject', 'Status'];
  statusOptions= ['NEW', 'CHECKED']

  obj = [];

  ngOnInit(): void {

    this.userService.getContactUs().subscribe(res => {
      console.log(res)
      for (const e in res) {
        if (this.checkDuplicate(res[e]['id'])) {
          this.obj.push(res[e]);
        }
      }

    })


  }

  openDialog = false;
  message = '';

  checkDuplicate(res) {
    var flag = true;
    for (const e in this.obj) {
      if (this.obj[e]['id'] == res)
        flag = false
    }

    return flag;
  }

  dialogControler(e) {
    this.message = e.message
    this.openDialog = !this.openDialog
  }

  update(value, i, type){
    this.userService.updateValue(status)
    console.log(status);
    this.obj[status]=value;
    
  }

}
