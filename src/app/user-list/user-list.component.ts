import { Component, OnInit } from '@angular/core'
import { ToastrService } from 'ngx-toastr'
import { first } from 'rxjs/operators'
import { User } from '../core/models/user'
import { UserService } from '../core/services/user.service'
import swal from 'sweetalert2'
import { Router } from '@angular/router'
@Component({
  selector: ' ',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  formateData = {
    page: 1,
    limit: 350,
    search: '',
    phonenumber: '',
  }
  users: User[]
  p: number = 1
  filterData: User
  searchText: any
  searchNumber: number
  
  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.getUserList()
  }

  getUserList() {
    this.userService
      .getUserList(this.formateData)
      .pipe(first())
      .subscribe((res) => {
        this.users = res.data
      })
  }

  deleteUser(id: any) {
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-warning',
      },
      buttonsStyling: true,
    })
    swalWithBootstrapButtons
      .fire({
        showCloseButton: true,
        title: ' Delete Record',
        text: 'Are you sure you want to delete this record ?',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Cancel',
        reverseButtons: false,
      })
      .then((result) => {
        if (result.value) {
          const user = this.users.find((x) => x._id === id)
          user.isDeleting = true
          this.userService
            .deleteUserData(id)
            .pipe(first())
            .subscribe((res: any) => {
              if (res.status == 200) {
                this.toastrService.success(res.message, 'Success!')
                this.users = this.users.filter((x) => x._id !== id)
              } else {
                this.toastrService.error(res.message, 'Error!')
              }
            })
          return
        }
      })
  }

  edit(id: any) {
    this.filterData = this.users.find((x) => x._id === id)
    let obj = {
      _id: this.filterData._id,
      name: this.filterData.name,
      gender: this.filterData.gender,
      phone_number: this.filterData.phone_number,
      email: this.filterData.email,
    }
    let data = JSON.stringify(obj)
    console.log(data, 'Data')
    this.router.navigateByUrl('/edit/' + data)
  }
}
