import { ListMusic, Users, GraduationCap } from "lucide-react";

export const NAV_ITEMS = [
  { href: "/", label: "My repertoires", icon: ListMusic },
  { href: "/community", label: "Community", icon: Users },
  { href: "/learn", label: "Learn", icon: GraduationCap },
] as const;