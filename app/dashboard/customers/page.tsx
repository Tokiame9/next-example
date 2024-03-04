import { fetchLatestInvoices, fetchRevenue } from "@/app/lib/data"
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";


export default async function  Page(){
    const revenue= await fetchRevenue();
    const latestInvoices= await fetchLatestInvoices()
    return <div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <RevenueChart revenue={revenue}  />
        <LatestInvoices latestInvoices={latestInvoices} />
      </div>
    </div>
}