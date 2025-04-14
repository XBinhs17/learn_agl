import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "currencyPipe",
  standalone: true, //component hoạt động độc lập
})
export class currencyPipe implements PipeTransform{
  //xây dựng pipe chuyển đổi định dạng giá tiền
  transform(value:number) {
    return new Intl.NumberFormat('vi-VN', {style: 'currency', currency: 'VND'}).format(value);
  }
}
