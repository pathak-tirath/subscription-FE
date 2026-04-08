
import { ISubscription, IUpcomingPayments } from "../_utils/types";

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

const todayDate = new Date()
export const mockUpcomingPayments: IUpcomingPayments[] = [
    {
        icon:"https://img.icons8.com/?size=100&id=GJ1x26ZmfZ96&format=png&color=000000",
        title:"Netflix",
        category:"Entertainment",
        duration:"Monthly",
        price:199,
        nextBillingDate: new Date(todayDate.setDate(todayDate.getDate() + 1))
    },
      {
        icon:"https://img.icons8.com/?size=100&id=xdKTa7OeCNaE&format=png&color=000000",
        title:"Hotstar",
        category:"Entertainment",
        duration:"Monthly",
        price:299,
        nextBillingDate: new Date(todayDate.setDate(todayDate.getDate() + 1))
    }
]