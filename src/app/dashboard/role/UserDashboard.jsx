import { Separator } from "@/components/ui/separator";
import { currentUser } from "@/lib/auth";

const UserDashboard = async () => {
  const user = await currentUser();
  return (
    <section>
      <h2 className="font-bold text-2xl">Quizzes</h2>
      <Separator />
      

    </section>
  );
};

export default UserDashboard;
