import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  OrdersApi: string ='http://localhost:3000/'

  constructor(private http: HttpClient) { }




  orderFormSubmit(orderData:any) {
    return this.http.post<any>(this.OrdersApi + `addorderDetails` , orderData ).pipe(map((res:any) => {
this.sucessAlert('Order Placed Sucessfully')
      return res;
    }, (error:any) => {
      this.errorAlert();
      return error;
    }))
  }

  orderFormSubmitEdit(orderData:any) {
    return this.http.post<any>(this.OrdersApi + `editordersDetails` , orderData ).pipe(map((res:any) => {
this.sucessAlert('Order Edited Sucessfully')
      return res;
    }, (error:any) => {
      this.errorAlert();
      return error;
    }))
  }

  deleteOrder(orderData:any) {
    return this.http.post<any>(this.OrdersApi + `deleteorderDetails` , orderData ).pipe(map((res:any) => {
this.sucessAlert('Order Deleted Sucessfully')
      return res;
    }, (error:any) => {
      this.errorAlert();
      return error;
    }))
  }

  getOderDetails() {
    return this.http.get<any>(this.OrdersApi + `getOrderDetails`  ).pipe(map((res:any) => {
      return res;
    }, (error:any) => {
      this.errorAlert();
      return error;
    }))
  }

  sucessAlert(message: any){
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }


  errorAlert(){
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      timer: 1500
    })
  }
}
