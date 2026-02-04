import { DATA } from "@/data/resume";

export default function Logo() {
  return (
    <div className="flex items-center gap-1 text-xl font-bold">
      <span className="text-blue-accent font-bold">{DATA.name}</span>
    </div>
  );
}
