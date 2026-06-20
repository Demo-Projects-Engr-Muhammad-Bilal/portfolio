import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Project } from "@/lib/types";

interface ProjectNotFoundProps {
  projectId: string;
  allProjects: Project[];
}

/**
 * Extracted verbatim from the inline 404 branch in app/projects/[id]/page.tsx.
 */
export default function ProjectNotFound({ projectId, allProjects }: ProjectNotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center gap-6 bg-background px-4">
      <h1 className="text-[40px] font-extrabold text-primary">Hooo! Project Not Found 🚨</h1>
      <div className="bg-surface-container-high p-6 rounded-2xl text-left max-w-lg w-full border border-error/20">
        <p className="text-secondary text-[16px] mb-4">
          Aapne jis URL par click kiya uski ID: <br />
          <strong className="text-on-surface text-[20px] bg-white px-2 py-1 rounded">{projectId}</strong>
        </p>
        <p className="font-bold text-primary-container mb-2">Lekin apki data file mein yeh IDs mojood hain:</p>
        <ul className="list-disc pl-5 mb-4 space-y-1 text-secondary">
          {allProjects.map((p) => (
            <li key={p.id}>{p.id}</li>
          ))}
        </ul>
      </div>
      <Link href="/projects">
        <Button className="bg-primary-container text-white px-8 rounded-full h-12">
          <ArrowLeft className="w-4 h-4 mr-2" /> Go Back to Projects
        </Button>
      </Link>
    </div>
  );
}
