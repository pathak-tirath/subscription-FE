'use client'
import { ISubscription } from '@/app/_utils/types'
import { mockSubscriptions } from '@/app/json/mockData'
import Table from '@/app/tables/table'
import {
  createColumnHelper,
} from '@tanstack/react-table'
const RecentSubs = () => {

  const columnHelper = createColumnHelper<ISubscription>()

  const columns = [
  columnHelper.accessor('serviceName', {
    cell: (info) => info.getValue(),
    header: () => <span>Service Name</span>,
  
  }),
  columnHelper.accessor('category', {
    cell: (info) => <i>{info.getValue()}</i>,
    header: () => <span>Category</span>,
    
  }),
  columnHelper.accessor('status', {
    header: () => 'Status',
    cell: (info) => info.renderValue(),
    
  }),
  columnHelper.accessor('billingCycle', {
    header: () => 'Billing Cycle',
    cell: (info) => info.renderValue(),
    
  }),
  columnHelper.accessor('price', {
    header: () => 'Price',
    cell: (info) => info.renderValue(),
    
  }),
  columnHelper.accessor('nextBillingDate', {
    header: () => 'Next Billing Date',
    cell: (info) => info.renderValue(),
    
  }),
 
]
  return (
    <>
    <Table columns={columns} data={mockSubscriptions} />
    </>
  )
}

export default RecentSubs