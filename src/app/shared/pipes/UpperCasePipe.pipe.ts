import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "upperCasePipe",
  standalone: true, //component hoạt động độc lập
})
export class upperCasePipe implements PipeTransform{
  //xây dựng pipe chuyển đổi định dạng giá tiền
  transform(value: string) {
    return value.toUpperCase();
  }
}
