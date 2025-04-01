import React, { useState } from "react";
import { useUserStore } from "../../../store/useUserStore";
import { toast } from "sonner";
import {
  Eye,
  EyeOff,
  Mail,
  Key,
  User,
  Truck,
  Shield,
  Briefcase,
  Package,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { SideImg } from "./Reset";
import LoginImg from "../../../assets/images/auth/Login.png";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Label } from "@/components/shadcn/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/select";
import {
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/shadcn/alert";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [devModeUserType, setDevModeUserType] = useState("admin");
  const navigate = useNavigate();
  const { user, loggedIn, login } = useUserStore();

  const validateForm = () => {
    const newErrors = { email: "", password: "" };
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        setLoading(true);
        setServerError("");
        const res = await login(formData, navigate);
      } catch (error) {
        console.error("Caught error is", error.response?.data);
        setServerError(error.response?.data?.detail);
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fix the errors in the form.", 2);
    }
  };

  const handleDummyLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setServerError("");

      // Updated dummy credentials for shipment system
      const credentials = {
        admin: {
          email: "admin@trackport.com",
          password: "Admin@n123",
          role: "admin",
        },
        manager: {
          email: "manager@shipment.com",
          password: "Manager@123",
          role: "manager",
        },
        driver: {
          email: "driver@shipment.com",
          password: "Driver@123",
          role: "driver",
        },
        staff: {
          email: "staff@shipment.com",
          password: "Staff@123",
          role: "staff",
        },
        customer: {
          email: "customer@shipment.com",
          password: "Customer@123",
          role: "customer",
        },
      };

      const dummyCredentials = credentials[devModeUserType];

      const res = await login(dummyCredentials, navigate);
      if (res.success) {
        console.log(res);

      }if (res.error) {
        setServerError(res.error);

       
      } else {
        console.log(res);
      }
    } catch (error) {
      console.error("Dummy login failed:", error);
      setServerError(error.response?.data?.detail || "Failed to login.");
      toast.error("Dummy login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="min-h-screen font-[sans-serif]w-full border-0 grid lg:grid-cols-2 items-center overflow-hidden  sm:px-4 lg:px-20 mx-auto">
      {/* <div className=""> */}
      <CardContent className="p-6  w-full max-w-2xl mx-auto ">
        <form onSubmit={handleSubmit} noValidate>
          <div className="">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="text-gray-800 text-4xl font-extrabold">
                track<span className="text-rose-600">po</span>rt
              </CardTitle>
              <CardTitle className="text-gray-800 text-2xl">
                Shipment Management System
              </CardTitle>
              {loggedIn && (
                <CardDescription className="text-green-600">
                  Logged in as {user.name + " - " + user.email}
                </CardDescription>
              )}
            </CardHeader>
          </div>

          {serverError && (
            <Alert variant="destructive" className="mb-4">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{serverError}</AlertDescription>
            </Alert>
          )}

          {/* Email Input */}
          <div className="space-y-2 my-4">
            <Label htmlFor="email">Email Address</Label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email"
                className={`${
                  errors.email
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                } pl-10`}
              />
              <Mail className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="space-y-2 mb-4">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                placeholder="***********"
                className={`${
                  errors.password
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                } pl-10 pr-10`}
              />
              <Key className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-5 w-5 text-gray-400" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between my-8">
            <div className="flex items-center space-x-2">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 shrink-0 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <Label
                htmlFor="remember-me"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Remember me
              </Label>
            </div>
            <Link
              to=""
              className="text-blue-600 font-semibold text-sm hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Dev Mode Section */}
          {/* <div className="mb-6 space-y-2">
            <Label>Quick Role Access</Label>
            <div className="flex gap-2">
              <Select
                // value={devModeUserType}
                onValueChange={setDevModeUserType}
                variant="devM de"
              >
                <SelectTrigger variant="devMode" className="w-[150px]">
                  <SelectValue
                    placeholder={devModeUserType || "Select user type"}
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      Admin
                    </div>
                  </SelectItem>
                  <SelectItem value="manager">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Manager
                    </div>
                  </SelectItem>
                  <SelectItem value="driver">
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Driver
                    </div>
                  </SelectItem>
                  <SelectItem value="staff">
                    <div className="flex items-center gap-2">
                      <Package className="h-4 w-4" />
                      Staff
                    </div>
                  </SelectItem>
                  <SelectItem value="customer">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Customer
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button
                className="h-10 flex-1"
                variant="devMode"
                loading={loading}
                onClick={(e) => handleDummyLogin(e)}
              >
                Quick Login
              </Button>
            </div>
            <p className="text-xs text-gray-500">
              Use this to quickly test different user roles
            </p>
          </div> */}

          {/* Login Button */}
          <Button
              type="submit"
              className="w-full"
              variant="default"
              loading={loading}
            >
              Login
            </Button>

          {/* Register Link */}
          <p className="text-sm mt-4 text-gray-600 text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap"
            >
              Register Here
            </Link>
          </p>
        </form>
      </CardContent>

      {/* Left Side - Image */}
      <SideImg height="fu ll" img={LoginImg} className="hidden lg:block" />
      {/* </div> */}
    </div>
  );
}
