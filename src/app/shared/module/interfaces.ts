export interface CountryAndCallingCodeReq{
    data: [
        {
            country: string;
            callingCode: string;
            digitsAfterCode: number;
        }
    ]
}
export interface SearchCountryReq{
    name:string
}
export class Sender {
  name!: string;
  street!: string;
  city!: string;
  code!: string;
  country!: string;
  transportBudget!: string;
  phone!: string;
}

export class Receiver {
  name!: string;
  street!: string;
  city!: string;
  code!: string;
  country!: string;
  phone!: string;
  email!: string;
}

export class Specifications {
  quantityTotal!: string;
  weightTotal!: string;
  goodsType!: string;
  stackable!: string;
  priority!: string;
  valueTotal!: string;
  description!: string;
  quantity!: string[];
  width!: string[];
  length!: string[];
  height!: string[];
}

export class DueDate {
  date!: string;
  note!: string;
}

export class QuotationRequest {
  senderReq!: Sender;
  receiverReq!: Receiver;
  specificationsReqs!: Specifications;
  dueDateReq!: DueDate;
}
export class QuestionReq{
    name!:string;
    number!:string;
    email!:string;
    message!:string;
}
export class MessageQuestionReq{
  name!:string;
  subject!:string;
  email!:string;
  message!:string;
}
export class RequestACallReq{
  phone!:string;
}