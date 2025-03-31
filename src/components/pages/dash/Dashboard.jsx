import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  AlertCircle,
  MapPin,
  BarChart2,
  Calendar,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/shadcn/card";
import { Progress } from "@/components/shadcn/progress";
import { Button } from "@/components/shadcn/button";

export default function Dashboard() {
  // Sample data - replace with your actual data
  const shipmentStats = {
    total: 142,
    delivered: 98,
    inTransit: 32,
    delayed: 8,
    returned: 4,
  };

  const recentShipments = [
    {
      id: "SH-78945",
      status: "Delivered",
      location: "Nairobi",
      date: "2023-11-15",
    },
    {
      id: "SH-78946",
      status: "In Transit",
      location: "Mombasa",
      date: "2023-11-14",
    },
    {
      id: "SH-78947",
      status: "Delayed",
      location: "Kisumu",
      date: "2023-11-13",
    },
    {
      id: "SH-78948",
      status: "Processing",
      location: "Nakuru",
      date: "2023-11-12",
    },
  ];

  const statusTrends = [
    { month: "Sep", delivered: 45, delayed: 5 },
    { month: "Oct", delivered: 78, delayed: 7 },
    { month: "Nov", delivered: 98, delayed: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="grid gap-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Shipment Analytics Dashboard</h1>
          <div className="flex gap-2">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Last 30 Days
            </Button>
            <Button>Export Report</Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Shipments
              </CardTitle>
              <Package className="h-4 w-4 text-gray-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{shipmentStats.total}</div>
              <p className="text-xs text-gray-500">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Delivered</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {shipmentStats.delivered}
              </div>
              <p className="text-xs text-gray-500">
                <ArrowUp className="inline h-3 w-3 text-green-500" /> 8% from
                last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">In Transit</CardTitle>
              <Truck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {shipmentStats.inTransit}
              </div>
              <p className="text-xs text-gray-500">
                <ArrowDown className="inline h-3 w-3 text-red-500" /> 3% from
                last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Delayed</CardTitle>
              <Clock className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{shipmentStats.delayed}</div>
              <p className="text-xs text-gray-500">
                <ArrowUp className="inline h-3 w-3 text-red-500" /> 2% from last
                month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Returned</CardTitle>
              <AlertCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{shipmentStats.returned}</div>
              <p className="text-xs text-gray-500">
                <ArrowDown className="inline h-3 w-3 text-green-500" /> 1% from
                last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Delivery Performance */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" />
                Delivery Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                {/* Replace with your chart component */}
                <div className="flex items-end h-full gap-2 pt-8">
                  {statusTrends.map((trend) => (
                    <div
                      key={trend.month}
                      className="flex-1 flex flex-col bg-green-700 items-center"
                    >
                      <div className="flex gap-1  h-full items-end">
                        <div
                          className="w-6 bg-green-500 rounded-t-sm"
                          style={{ height: `${(trend.delivered / 100) * 70}%` }}
                        />
                        <div
                          className="w-6 bg-amber-500 rounded-t-sm"
                          style={{ height: `${(trend.delayed / 100) * 70}%` }}
                        />
                      </div>
                      <span className="text-xs mt-2">{trend.month}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-center gap-4 mt-4">
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
                    <span className="text-xs">Delivered</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-3 h-3 bg-amber-500 rounded-sm"></div>
                    <span className="text-xs">Delayed</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Status Overview */}
          <Card>
            <CardHeader>
              <CardTitle>Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Delivered</span>
                    <span className="text-sm">
                      {Math.round(
                        (shipmentStats.delivered / shipmentStats.total) * 100
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={
                      (shipmentStats.delivered / shipmentStats.total) * 100
                    }
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">In Transit</span>
                    <span className="text-sm">
                      {Math.round(
                        (shipmentStats.inTransit / shipmentStats.total) * 100
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={
                      (shipmentStats.inTransit / shipmentStats.total) * 100
                    }
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Delayed</span>
                    <span className="text-sm">
                      {Math.round(
                        (shipmentStats.delayed / shipmentStats.total) * 100
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={(shipmentStats.delayed / shipmentStats.total) * 100}
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Returned</span>
                    <span className="text-sm">
                      {Math.round(
                        (shipmentStats.returned / shipmentStats.total) * 100
                      )}
                      %
                    </span>
                  </div>
                  <Progress
                    value={(shipmentStats.returned / shipmentStats.total) * 100}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Shipments */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Shipments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Shipment ID
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Location
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {recentShipments.map((shipment) => (
                    <tr key={shipment.id}>
                      <td className="px-4 py-3 whitespace-nowrap text-sm font-medium">
                        {shipment.id}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            shipment.status === "Delivered"
                              ? "bg-green-100 text-green-800"
                              : shipment.status === "In Transit"
                              ? "bg-blue-100 text-blue-800"
                              : shipment.status === "Delayed"
                              ? "bg-amber-100 text-amber-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {shipment.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {shipment.location}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        {shipment.date}
                      </td>
                      <td className="px-4 py-3 whitespace-nowrap text-sm">
                        <Button variant="ghost" size="sm">
                          View Details
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
