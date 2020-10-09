import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.scss']
})
export class AdminFooterComponent implements OnInit {

  constructor(public userService: UserService) { }

  ngOnInit(): void {
  }

  footer = new FormGroup({
    address: new FormControl('')
  });

  update() {
    this.userService.updateFooter({ address: this.footer.get('address') }).then(res => {
      console.log(res)
    })
  }

}
