import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from '../services/orders.service';
import Swal from 'sweetalert2';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
@Component({
  selector: 'app-orders-view',
  templateUrl: './orders-view.component.html',
  styleUrls: ['./orders-view.component.css'],
})
export class OrdersViewComponent implements OnInit {
  orderForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;
  edited: boolean = false;

  dataSource!: MatTableDataSource<any>;               //Table Array model
  displayedColumns!: string[];                        //Table Columns Array model
  odersData:any = [];                                  //Paying Bills Data
  @ViewChild(MatPaginator) paginator!: MatPaginator;  //Search mat table with pagination
  @ViewChild(MatSort) sort!: MatSort;                 //Search mat table with sorting
  editData: any = {};
  initialValues:any
  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private orderServ: OrdersService,
    private loginService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.orderForm = this.formBuilder.group({
      onumber: ['', Validators.required],
      oduedate: ['', Validators.required],
      cname: ['', Validators.required],
      caddress: ['', Validators.required],
      phone: ['', Validators.required],
      total: ['', Validators.required],
    });
    this.ordersDetails();
    this.initialValues = this.orderForm.value;
  }

  get f() {
    return this.orderForm.controls;
  }
  //Search Datewise Data //
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ordersDetails(){
    this.orderServ.getOderDetails().subscribe((res: any) => {
      this.displayedColumns = ['id', 'onumber', 'oduedate', 'cname', 'caddress', 'phone', 'total', 'edit', 'delete'];
      this.odersData = res;
      console.log(this.odersData);
      this.dataSource = new MatTableDataSource(this.odersData);
      // this.dataSource.filterPredicate =  (data: any, filterValue: string) => { return data.emp_cat_nm === filterValue;};
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(res);
    }, (error:any) => {
      console.log(error);
    })
  }

  addOrders(ordersModel: any) {
    this.edited =  false;
    this.modalService.open(ordersModel, { size: 'lg', centered: true });
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.orderForm.value);

    if (this.orderForm.invalid) {
      return;
    } else {

      if (this.edited) {
        var editData = this.orderForm.value;
        editData.id = this.editData.id;
        this.orderServ.orderFormSubmitEdit(editData).subscribe((res:any) => {
          this.edited =  false;
          console.log(res);
          this.ordersDetails();
          this.modalDismiss();
        }, (error:any) => {
          console.log(error);
        })
      }else{

        this.orderServ.orderFormSubmit(this.orderForm.value).subscribe((res:any) => {
          this.ordersDetails();
          this.modalDismiss();
          console.log(res);
        }, (error:any) => {
          console.log(error);
        })
      }



    }
  }

  editOrders( ordersModel:any, data: any){
    this.edited = true;
    this.editData = data;
    this.orderForm.patchValue({
      onumber: data.onumber,
      oduedate: data.oduedate,
      cname: data.cname,
      caddress: data.caddress,
      phone: data.phone,
      total: data.total
    });
    // this.orderForm.setValue(data)
    this.modalService.open(ordersModel, { size: 'lg', centered: true });
  }
  // Modal Dissmiss Function

modalDismiss() {
  this.submitted =false;
  this.orderForm.reset(this.initialValues);
  this.modalService.dismissAll()
}

deleteOrders(index:any) {
  Swal.fire({
    title: 'Are you sure to Delete User?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result:any) => {
    if (result.isConfirmed) {

      this.deleteUser(index);
    }
  })
}

deleteUser(index:any) {
  this.orderServ.deleteOrder(index).subscribe(
    (res:any) => {
      this.ordersDetails();
    },
    (error: any) => {
    });

}



logout() {
    this.loginService.logout();
}

}
