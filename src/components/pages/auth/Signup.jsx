import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useNavigate, Link } from "react-router-dom";
import { useUserStore } from "@/store/useUserStore";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/shadcn/form";
import { Input } from "@/components/shadcn/input";
import { CardHeader, CardTitle } from "@/components/shadcn/card";
import { Label } from "@/components/shadcn/label";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/radio-group";
import { Button } from "@/components/shadcn/button";
import { Eye, EyeOff, UserCircle, Mail, KeyRound } from "lucide-react";
import { SideImg } from "./Reset";

// Define the form schema using Zod
const formSchema = z
  .object({
    role: z.enum(["Customer", "Manager", "Driver", "Staff", "Admin"]),
    name: z.string().min(1, "Please input a name"),
    email: z.string().email("Please enter a valid email"),
    // role: z.string().optional(),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function Signup() {
  const navigate = useNavigate();
  const { register,loggedIn } = useUserStore();
  const [userType, setUserType] = useState("Customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      role: "Customer",
      name: "",
      email: "",
      // role: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values) => {
    try {
      const userData = {
        ...values,
        role: values.role.toLowerCase(), // Convert role 
      };

      const response = await register(userData);
      // console.log(response);

      if (response.error) {
        toast.error(response.error);
        return;
      } else {
        setTimeout(() => navigate("/login"), 2000);
        console.log(response);
      }

    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 items-center gap-4 rounded-md overflow-hidden mx-auto p-5">
      {/* Left Side - Form */}
      <div className="w-full p-8">
        <div className="my-9">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="text-gray-800 text-4xl font-extrabold">
              track<span className="text-rose-600">po</span>rt
            </CardTitle>
            <CardTitle className="text-gray-800 text-2xl">
              Create Your Account
            </CardTitle>
            {loggedIn && (
              <CardDescription className="text-green-600">
                Logged in as {user.name + " - " + user.email}
              </CardDescription>
            )}
          </CardHeader>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            {/* Account Type */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Account Type</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={(value) => {
                        field.onChange(value);
                        // setUserType(value);
                      }}
                      defaultValue={field.value}
                      className="flex gap-4"
                    >
                      {["Customer", "Admin", "Manager", "Driver", "Staff"].map(
                        (role) => (
                          <div
                            key={role}
                            className="flex items-center space-x-2"
                          >
                            <RadioGroupItem value={role} id={role} />
                            <label htmlFor={role}>{role}</label>
                          </div>
                        )
                      )}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <UserCircle className="text-emerald-700 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        placeholder="Enter your Name"
                        className="pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        placeholder="Enter your email address"
                        className="pl-10"
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <KeyRound className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        type={showPassword ? "text" : "password"}
                        placeholder="Create your password"
                        className="pl-10"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-800"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Confirm Password */}
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <KeyRound className="text-emerald-800 absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5" />
                      <Input
                        {...field}
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10"
                      />
                      <button
                        type="button"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-emerald-800"
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between my-8">
              <Link
                to=""
                className="text-blue-600 font-semibold text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              variant="default"
              type="submit"
              className="w-full"
            >
              Create Account
            </Button>
            <p className="text-gray-600 mt-1">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 font-semibold">
                Login
              </Link>
            </p>
          </form>
        </Form>
      </div>

      {/* Right Side - Image */}
      <SideImg height="full" />
    </div>
  );
}
