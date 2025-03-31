import React, { useState } from "react";
import { Truck, Package, MapPin, Clock, Shield } from "lucide-react";
import { Button } from "@/components/shadcn/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/shadcn/dialog";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/shadcn/card";

import {
  Users,
  BarChart2,
  CheckCircle,
  ChevronRight,
  Ship,
  Bell,
  BarChart,
} from "lucide-react";

export default function TrackPortSystem() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Shipment tracking features
  const trackingFeatures = [
    {
      icon: Package,
      color: "text-blue-600 dark:text-blue-400",
      title: "Real-Time Tracking",
      description: "Live updates from port to final destination",
      details: [
        "GPS-enabled location tracking",
        "Automated checkpoint updates",
        "Estimated time of arrival",
      ],
    },
    {
      icon: MapPin,
      color: "text-green-600 dark:text-green-400",
      title: "Port Operations",
      description: "Efficient cargo handling at ports",
      details: [
        "Dock assignment system",
        "Cargo scanning integration",
        "Customs clearance status",
      ],
    },
    {
      icon: Users,
      color: "text-amber-600 dark:text-amber-400",
      title: "Driver Management",
      description: "Optimized fleet coordination",
      details: [
        "Driver assignment system",
        "Route optimization",
        "Vehicle maintenance tracking",
      ],
    },
    {
      icon: BarChart2,
      color: "text-purple-600 dark:text-purple-400",
      title: "Analytics Dashboard",
      description: "Business intelligence for logistics",
      details: [
        "Delivery performance metrics",
        "Port throughput analysis",
        "Revenue reporting",
      ],
    },
  ];

  // System benefits
  const systemBenefits = [
    {
      icon: Clock,
      title: "Faster Clearances",
      description: "Reduce port processing time by 50%",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Shield,
      title: "Secure Chain",
      description: "Tamper-proof shipment records",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: Truck,
      title: "On-Time Delivery",
      description: "98% successful delivery rate",
      color: "text-amber-600 dark:text-amber-400",
    },
    {
      icon: Package,
      title: "Damage Reduction",
      description: "60% fewer cargo incidents",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  // Modules for different users
  const systemModules = [
    {
      icon: MapPin,
      title: "Port Operator",
      description: "Cargo receiving and dispatching",
      color: "bg-blue-100 dark:bg-blue-900",
    },
    {
      icon: Truck,
      title: "Driver App",
      description: "Mobile delivery tracking",
      color: "bg-green-100 dark:bg-green-900",
    },
    {
      icon: Users,
      title: "Customer Portal",
      description: "Real-time shipment visibility",
      color: "bg-amber-100 dark:bg-amber-900",
    },
    {
      icon: BarChart2,
      title: "Manager Console",
      description: "Operations monitoring",
      color: "bg-purple-100 dark:bg-purple-900",
    },
  ];

  // Features data
  const features = [
    {
      title: "Real-Time Tracking",
      description:
        "Monitor shipments as they move through each checkpoint with live updates",
      icon: <MapPin className="h-6 w-6" />,
    },
    {
      title: "Port Receival Scanner",
      description:
        "Efficiently scan and process shipments as they enter the port",
      icon: <Ship className="h-6 w-6" />,
    },
    {
      title: "Driver Check-In System",
      description: "Update location and delivery status via our mobile app",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "Customer Portal",
      description:
        "Give your customers visibility into their shipment's journey",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Instant Notifications",
      description: "Get alerted at each stage of the shipping process",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Analytics Dashboard",
      description:
        "Gain insights into performance metrics and identify bottlenecks",
      icon: <BarChart className="h-6 w-6" />,
    },
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Logistics Manager, Global Shipping Co.",
      content:
        "This system has transformed how we manage port operations. Real-time updates have reduced our customer service calls by 70%.",
    },
    {
      name: "Ahmed Hassan",
      role: "Fleet Manager, East Africa Transporters",
      content:
        "Our drivers love the mobile app! It's incredibly easy to update delivery status and has improved our operational efficiency.",
    },
    {
      name: "Maria Rodriguez",
      role: "Supply Chain Director, Med Supplies Inc.",
      content:
        "The transparency this platform provides has been game-changing for our medical supply chain. We can now predict delivery times with remarkable accuracy.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="pt-20 pb-24 px-4 md:pt-32 md:pb-40 bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Track
              <span className="text-blue-600 dark:text-blue-400">Port</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
              End-to-end shipment visibility from port arrival to final
              delivery. Real-time tracking for ports, drivers, and customers.
            </p>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600"
              >
                Request Demo
                <ChevronRight className="ml-2" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                How It Works
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0">
            <div className="relative bg-white dark:bg-slate-800 rounded-xl shadow-xl p-6 overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Ship className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium">SHP20240331-001</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Mombasa Port
                      </p>
                    </div>
                  </div>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs px-3 py-1 rounded-full">
                    Received
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Truck className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    <div>
                      <p className="font-medium">SHP20240331-002</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        En Route to Nairobi
                      </p>
                    </div>
                  </div>
                  <span className="bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-xs px-3 py-1 rounded-full">
                    In Transit
                  </span>
                </div>

                <div className="flex justify-between items-center p-4 border border-slate-200 dark:border-slate-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Package className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    <div>
                      <p className="font-medium">SHP20240331-003</p>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Delivered to Customer
                      </p>
                    </div>
                  </div>
                  <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-3 py-1 rounded-full">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-blue-600 dark:text-blue-400">
                Operational
              </span>{" "}
              Advantages
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Designed by logistics experts to streamline port operations and
              last-mile delivery
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemBenefits.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div
                  className={`p-3 rounded-full w-fit mb-4 bg-${feature.color}/10`}
                >
                  <feature.icon size={32} className={feature.color} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proven Operational Results*/}
      <div className="conta iner bg-gray-100 dark:bg-gray-800 mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Proven{" "}
            <span className="text-blue-600 dark:text-blue-400">
              Operational Results
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Measurable improvements for port and logistics operations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              50%
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Faster Port Processing
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Reduced cargo dwell time at ports
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              98%
            </div>
            <h3 className="text-xl font-semibold mb-4">On-Time Deliveries</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Meeting customer delivery windows
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">
              40%
            </div>
            <h3 className="text-xl font-semibold mb-4">
              Reduced Operational Costs
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Through optimized routes and resource allocation
            </p>
          </div>
        </div>
      </div>

      {/* Features Section
      <section id="features" className="py-20 px-4 bg-white dark:bg-slate-800">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Our shipment tracking system offers everything you need to monitor
              and manage your logistics efficiently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Comprehensive Tracking Features */}
      <div className="bg-white dark:bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Comprehensive{" "}
              <span className="text-blue-600 dark:text-blue-400">Tracking</span>{" "}
              Features
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              All the tools you need for efficient shipment management
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trackingFeatures.map((feature, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 group border-gray-200 dark:border-gray-700"
              >
                <CardHeader>
                  <div
                    className={`p-3 rounded-full w-fit mb-4 bg-${feature.color}/10`}
                  >
                    <feature.icon
                      size={32}
                      className={`${feature.color} group-hover:scale-110 transition-transform`}
                    />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2 text-xs text-gray-500 dark:text-gray-300">
                    {feature.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle size={14} className="mr-2 text-blue-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* User Modules */}
      <div className="conta iner mx-auto bg-gray-100 dark:bg-gray-800  p-8">
        <div className="bg- md:p-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            Role-Specific{" "}
            <span className="text-blue-600 dark:text-blue-400">Interfaces</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {systemModules.map((module, index) => (
              <div
                key={index}
                className={`${module.color} p-6 rounded-lg shadow-md`}
              >
                <module.icon
                  size={40}
                  className="text-gray-800 dark:text-gray-200 mb-4"
                />
                <h3 className="font-bold mb-2 text-gray-800 dark:text-gray-200">
                  {module.title}
                </h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {module.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-20 px-4 bg-white dark:bg-slate-900"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our system streamlines the shipment tracking process from port
            arrival to final delivery.
          </p>
        </div>

        <div className="relative">
          {/* Timeline */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-blue-200 dark:bg-blue-900 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-24 relative">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-4">Port Receives Cargo</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Port officer marks shipments as "Received at Port" and the
                  system timestamps this event. Customers are automatically
                  notified that their shipment has arrived at the port.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-blue-600 dark:bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <div className="md:w-1/2 md:pl-16 hidden md:block">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <Ship className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-2" />
                  <p className="font-medium">
                    Status Updated: Received at Port
                  </p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    03/31/2025 • 08:45 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 hidden md:block">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 md:float-right">
                  <Truck className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-2" />
                  <p className="font-medium">Driver Assigned: John D.</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Route: Mombasa → Nairobi
                  </p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-blue-600 dark:bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <div className="md:w-1/2 md:pl-16">
                <h3 className="text-2xl font-bold mb-4">
                  Warehouse/Transit Update
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Manager assigns a driver and route, updating the status to "In
                  Transit to [Location]". The driver sees the assigned shipment
                  on their dashboard ready for delivery.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 md:text-right">
                <h3 className="text-2xl font-bold mb-4">
                  Driver Delivery Updates
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Drivers provide real-time updates: "Departed Warehouse",
                  "Reached Checkpoint X". Optional GPS tracking shows the exact
                  location and estimated arrival time.
                </p>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-blue-600 dark:bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <div className="md:w-1/2 md:pl-16 hidden md:block">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
                  <MapPin className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                  <p className="font-medium">Checkpoint Reached: Voi</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    03/31/2025 • 02:30 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-16 mb-8 md:mb-0 hidden md:block">
                <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 md:float-right">
                  <CheckCircle className="h-10 w-10 text-green-600 dark:text-green-400 mb-2" />
                  <p className="font-medium">Status Updated: Delivered</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Customer Confirmation Received
                  </p>
                </div>
              </div>
              <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 z-10 bg-blue-600 dark:bg-blue-500 text-white h-12 w-12 rounded-full flex items-center justify-center font-bold">
                4
              </div>
              <div className="md:w-1/2 md:pl-16">
                <h3 className="text-2xl font-bold mb-4">Final Delivery</h3>
                <p className="text-slate-600 dark:text-slate-300">
                  Driver marks the shipment as "Delivered to Customer" and the
                  customer confirms receipt. The system archives the completed
                  shipment for future reference and reporting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 bg-gray-100 dark:bg-slate-800"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Don't just take our word for it. See what logistics professionals
              have to say about our system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
              >
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="mb-2">
                    <p className="text-slate-600 dark:text-slate-300 italic">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CardHeader>
                <CardFooter>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-4 bg-white dark:bg-slate-900"
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Choose the plan that fits your business needs. All plans include
              core tracking features.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic Plan */}
            <Card className="border border-slate-200 dark:border-slate-700 shadow-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$299</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Up to 500 shipments/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Real-time tracking</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Customer notifications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>3 user accounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Email support</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
                >
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Pro Plan */}
            <Card className="border-2 border-blue-600 dark:border-blue-400 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Professional</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$699</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Up to 2,000 shipments/month</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Real-time tracking + GPS</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>SMS + Email notifications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>10 user accounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Basic analytics dashboard</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Choose Plan
                </Button>
              </CardFooter>
            </Card>

            {/* Enterprise Plan */}
            <Card className="border border-slate-200 dark:border-slate-700 shadow-sm">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$1499</span>
                  <span className="text-slate-500 dark:text-slate-400">
                    /month
                  </span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Unlimited shipments</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Advanced GPS + Route planning</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Custom notifications</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Unlimited user accounts</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>24/7 Dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>Advanced analytics + Reports</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span>API access</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  variant="outline"
                  className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
                >
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Implementation */}
      {/* <div className="bg-white dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Simple{" "}
              <span className="text-blue-600 dark:text-blue-400">
                Implementation
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Get started quickly with minimal disruption
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                Step 1
              </div>
              <h3 className="text-xl font-semibold mb-3">Port Integration</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Port system connectivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Cargo scanning setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Dock team training</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
                Step 2
              </div>
              <h3 className="text-xl font-semibold mb-3">Fleet Onboarding</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Driver app installation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Vehicle tracking setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Route planning training</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-gray-100 dark:bg-gray-700 p-6 rounded-lg">
              <div className="text-2xl font-bold text-amber-600 dark:text-amber-400 mb-2">
                Step 3
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Access</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Client portal setup</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Notification preferences</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={16} className="mr-2 mt-1 text-blue-500" />
                  <span>Delivery confirmation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      {/* CTA Section */}
      <div className="con tainer bg-gray-100 dark:bg-gray-800 mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-600 dark:to-teal-600 rounded-2xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Logistics?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto">
            TrackPort delivers real-time visibility from port to customer
            doorstep, reducing costs and improving reliability.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Schedule Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={() => setIsModalOpen(true)}
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Request TrackPort Demo
            </DialogTitle>
          </DialogHeader>
          <DialogDescription className="text-gray-600 dark:text-gray-400">
            Complete this form to schedule a personalized demonstration of our
            shipment tracking system.
          </DialogDescription>
          <div className="grid gap-4 py-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Company Name
              </label>
              <input
                type="text"
                placeholder="Your Logistics Company"
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="contact@company.com"
                className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Operation Type
              </label>
              <select className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700">
                <option>Select operation</option>
                <option>Port Authority</option>
                <option>Shipping Company</option>
                <option>Logistics Provider</option>
                <option>Retail Distribution</option>
                <option>Other</option>
              </select>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-4">
              Request Demo
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

const LandingPage = () => {


  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-200">








      {/* Footer */}
    </div>
  );
};
