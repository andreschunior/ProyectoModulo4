import IProduct from "../IProducts";

interface IOrder {
    id:number;
    status:string;
    date:Date
    products:IProduct[]
}

export default IOrder