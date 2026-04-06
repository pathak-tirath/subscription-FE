import { ISubscription } from "../_utils/types";

export const mockSubscriptions:ISubscription[] = [
    {
        serviceName:"Netflix",
        price: 15.99,
        billingCycle: "Monthly",
        category: "Entertainment",
        nextBillingDate: "2024-07-01",
        status: "Active",
    },
    {
        serviceName:"JioHotstar",
        price: 9.99,
        billingCycle: "Monthly",
        category: "Entertainment",
        nextBillingDate: "2024-07-05",
        status: "Active",
    }
]