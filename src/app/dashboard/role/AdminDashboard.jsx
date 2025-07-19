import { Separator } from "@/components/ui/separator";
import JobPostForm from "../component/JobPostForm";

const AdminDashboard = ({ user }) => {
  return (
    <section>
        <h2 className="font-bold text-2xl">Post a Job Designation</h2>
        <Separator />

        <JobPostForm />
    </section>
  );
};

export default AdminDashboard;
