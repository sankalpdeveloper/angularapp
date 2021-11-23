import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { UserService } from '../core/services/user.service'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: any = {}
  submitted = false
  id: any

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  Submit() {
    this.submitted = true
    this.userService.createUser(this.users).subscribe((res) => {
      if (res.status == 200) {
        this.toastrService.success(res.message, 'Success !')
        this.router.navigateByUrl('/login')
      } else {
        this.toastrService.error(res.message, 'Error !')
      }
    })
  }
}
