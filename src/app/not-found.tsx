import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-12rem)] flex-col">
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="relative flex max-w-2xl flex-col items-center text-center">
          <h1 className="from-primary/30 to-secondary/10 absolute -top-40 left-1/2 -translate-x-1/2 bg-linear-to-b mask-[linear-gradient(to_bottom,black,black_20%,transparent_80%)] bg-clip-text font-mono text-[200px] font-semibold tracking-tighter text-transparent uppercase [-webkit-text-stroke:3px_hsl(var(--primary)/0.6)]">
            404
          </h1>
          <h2 className="text-foreground mb-2 text-4xl font-semibold tracking-tight">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 font-medium tracking-tight text-balance">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>
          <div className="mt-4 mb-8 w-full">
            <Image
              src="/images/pablo.jpg"
              alt="Pablo Escobar meme"
              width={996}
              height={600}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/">
              <Button variant="outline" className="cursor-pointer gap-2">
                <Home className="h-4 w-4" />
                Go to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
