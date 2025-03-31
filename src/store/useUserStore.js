import { create } from "zustand";
import { persist } from "zustand/middleware";
import { toast } from "sonner";

export const useUserStore = create(
  persist(
    (set, get) => ({
      user: null,
      loggedIn: false,
      darkMode: false,

      // Simple login function that just sets the user
      login: async (credentials) => {
        // Enrich the user data with some basic demo info
        const user = {
          ...credentials,
          id: `${credentials.role}-${Date.now()}`,
          name:
            credentials.role.charAt(0).toUpperCase() +
            credentials.role.slice(1),
          avatar: `https://i.pravatar.cc/150?u=${credentials.email}`,
          permissions: getDefaultPermissions(credentials.role),
          lastLogin: new Date().toISOString(),
        };

        set({ user, loggedIn: true });
        // toast.success(`Logged in as ${user.role}`);
        return { data: { user } };
      },

      // Simple logout
      logOut: async (navigate) => {
        toast.success("Logged out");
        set({ user: null, loggedIn: false });
        navigate("/login")
      },

      // Toggle dark mode
      toggleDarkMode: () => {
        toast.success("Dark mode toggled!", {
          duration: 500,
          position: "bottom-left",
        });
        set((state) => {
          const newMode = !state.darkMode;
          localStorage.setItem("darkMode", JSON.stringify(newMode));
          return { darkMode: newMode };
        });
      },
    }),
    {
      name: "shipment-demo-auth",
    }
  )
);

// Helper function to set basic permissions per role
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
