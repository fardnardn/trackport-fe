import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

// Email validation helper
const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

// Initial demo users
const initialUsers = [
  {
    id: 1,
    name: "Admin User",
    email: "admin@trackport.com",
    password: "Admin@123",
    role: "admin",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=admin@trackport.com",
    permissions: ["manage_all", "view_dashboard", "manage_users"],
    lastLogin: null,
  },
  {
    id: 2,
    name: "Manager User",
    email: "manager@trackport.com",
    password: "Manager@123",
    role: "manager",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=manager@trackport.com",
    permissions: ["view_reports", "manage_shipments", "view_dashboard"],
    lastLogin: null,
  },
  {
    id: 3,
    name: "Driver User",
    email: "driver@trackport.com",
    password: "Driver@123",
    role: "driver",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=driver@trackport.com",
    permissions: ["view_assignments", "update_status"],
    lastLogin: null,
  },
  {
    id: 4,
    name: "Staff User",
    email: "staff@trackport.com",
    password: "Staff@123",
    role: "staff",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=staff@trackport.com",
    permissions: ["create_shipments", "update_status"],
    lastLogin: null,
  },
  {
    id: 5,
    name: "Customer User",
    email: "customer@trackport.com",
    password: "Customer@123",
    role: "customer",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=customer@trackport.com",
    permissions: ["track_shipments", "view_history"],
    lastLogin: null,
  },
  {
    id: 6,
    name: "Admin User 6",
    email: "admin6@trackport.com",
    password: "Admin@123",
    role: "admin",
    status: "active",
    avatar: "https://i.pravatar.cc/150?u=admin@trackport.com",
    permissions: ["manage_all", "view_dashboard", "manage_users"],
    lastLogin: null,
  },
];


export const useUserStore = create(
  persist(
    (set, get) => ({
      users: initialUsers,
      user: null,
      darkMode: false,
      loggedIn: false, // Added loggedIn state

      // Register new user with validation
      register: async (userData) => {
        const { users } = get();

        // Validate email format
        if (!validateEmail(userData.email)) {
          toast.error("Please enter a valid email address");
          throw new Error("Invalid email format");
        }

        // Check if email already exists
        const emailExists = users.some((u) => u.email === userData.email);
        if (emailExists) {
          toast.error("Email already registered");
          throw new Error("Email already exists");
        }

        // Validate password strength
        if (userData.password.length < 8) {
          toast.error("Password must be at least 8 characters");
          throw new Error("Weak password");
        }

        const newUser = {
          ...userData,
          id: Date.now(),
          avatar: `https://i.pravatar.cc/150?u=${userData.email}`,
          permissions: getDefaultPermissions(userData.role),
          lastLogin: null,
        };

        set({ users: [...users, newUser] });
        toast.success("Registration successful!");
        return newUser;
      },

      // Login with email availability and password check
      login: async (credentials, navigate) => {
        const { users } = get();

        // Find user by email
        const founduser = users.find((u) => u.email === credentials.email);

        if (!founduser) {
          toast.error("Email not found");
          return { success: false, error: "Email not found" };
        }

        // Check password
        if (founduser.password !== credentials.password) {
          toast.error("Incorrect password");
          return { success: false, error: "Incorrect password" };
        }

        const updatedUser = {
          ...founduser,
          lastLogin: new Date().toISOString(),
        };

        // Update users array
        const updatedUsers = users.map((u) =>
          u.id === founduser.id ? updatedUser : u
        );

        set({
          user: updatedUser,
          users: updatedUsers,
          loggedIn: true, // Set loggedIn to true
        });
        console.log("User logged in:", updatedUser);

        toast.success(`Welcome back, ${founduser.name}!`);
        if (navigate) navigate("/dashboard");
        return { success: true, user: updatedUser };
      },

      // Logout
      logOut: (navigate) => {
        set({ user: null, loggedIn: false }); // Set loggedIn to false
        toast.success("Logged out successfully");
        if (navigate) navigate("/login");
      },

      // Update user profile with validation
      updateProfile: (updatedData) => {
        const { user, users } = get();
        if (!user) {
          toast.error("Not authenticated");
          return { success: false, error: "Not authenticated" };
        }

        // Validate email if changed
        if (updatedData.email && updatedData.email !== user.email) {
          if (!validateEmail(updatedData.email)) {
            toast.error("Invalid email format");
            return { success: false, error: "Invalid email" };
          }

          const emailExists = users.some(
            (u) => u.email === updatedData.email && u.id !== user.id
          );

          if (emailExists) {
            toast.error("Email already in use");
            return { success: false, error: "Email exists" };
          }
        }

        // Validate password if changed
        if (updatedData.password && updatedData.password.length < 8) {
          toast.error("Password must be at least 8 characters");
          return { success: false, error: "Weak password" };
        }

        const updatedUser = { ...user, ...updatedData };
        const updatedUsers = users.map((u) =>
          u.id === user.id ? updatedUser : u
        );

        set({
          user: updatedUser,
          users: updatedUsers,
        });

        toast.success("Profile updated!");
        return { success: true, user: updatedUser };
      },

      // Toggle dark mode
      toggleDarkMode: () => {
        set((state) => ({ darkMode: !state.darkMode }));
        // toast.success("Theme updated", {
        //   duration: 2000,
        //   position: "bottom-left",
        // });
      },
    }),
    {
      name: "trackport-auth",
      partialize: (state) => ({
        users: state.users,
        user: state.user,
        darkMode: state.darkMode,
        loggedIn: state.loggedIn, 
      }),
    }
  )
);

// Helper function for default permissions
function getDefaultPermissions(role) {
  const permissions = {
    admin: ["manage_all", "view_dashboard", "manage_users"],
    manager: ["view_reports", "manage_shipments", "view_dashboard"],
    driver: ["view_assignments", "update_status"],
    staff: ["create_shipments", "update_status"],
    customer: ["track_shipments", "view_history"],
  };
  return permissions[role] || [];
}
