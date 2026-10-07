import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectNotFoundProps {
  projectId: string;
  allProjects: Project[];
}

export default function ProjectNotFound({ projectId, allProjects }: ProjectNotFoundProps) {
  return (
    <div className="clay-page flex min-h-screen flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="font-display text-[40px] font-semibold text-primary">Hooo! Project Not Found 🚨</h1>
      <div className="clay w-full max-w-lg rounded-[32px] p-6 text-left md:p-8">
        <p className="mb-4 text-[16px] text-secondary">
          Aapne jis URL par click kiya uski ID: <br />
          <strong className="clay-inset mt-2 inline-block rounded-[14px] px-3 py-1 text-[20px] text-on-surface">{projectId}</strong>
        </p>
        <p className="mb-2 font-bold text-primary">Lekin apki data file mein yeh IDs mojood hain:</p>
        <ul className="mb-4 list-disc space-y-1 pl-5 text-secondary">
          {allProjects.map((p) => (
            <li key={p.id}>{p.id}</li>
          ))}
        </ul>
      </div>
      <Link href="/projects">
        <Button size="lg" className="px-8">
          <ArrowLeft className="mr-2 size-4" /> Go Back to Projects
        </Button>
      </Link>
    </div>
  );
}
