import { Separator } from "@/components/ui/separator";
import JobCard from "../component/JobCard";

const page = () => {
  const jobs = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "This designation is only for dedicated developer",
    },
  ];
  return (
    <section>
      <h2>My Submissions</h2>
      <Separator />

      <div className="mt-6">
        {jobs.map((job) => (
          <JobCard key={job.id} data={job} />
        ))}
      </div>
    </section>
  );
};

export default page;
