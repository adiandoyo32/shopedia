import Address from "./Address";
import ShippingMethod from "./ShippingMethod";

export default interface Order {
    shippingAddress?: Address;
    shippingMethod?: ShippingMethod;
    totalPayment: number;
}