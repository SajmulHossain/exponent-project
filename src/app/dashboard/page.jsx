import { currentRole, currentUser } from "@/lib/auth";
import AdminDashboard from "./role/AdminDashboard";
import UserDashboard from "./role/UserDashboard";

export default async function Page() {
  const user = await currentUser();
  const role = await currentRole();

  if(role === 'ADMIN') {
    return <AdminDashboard user={user} />
  } else {
    return <UserDashboard user={user} />
  }
}
