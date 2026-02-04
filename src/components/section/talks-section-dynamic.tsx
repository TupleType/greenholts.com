"use client";

import dynamic from "next/dynamic";

const TalksSectionDynamic = dynamic(() => import("./talks-section"), {
  ssr: false,
  loading: () => (
    <div className="flex min-h-[400px] items-center justify-center">
      <div className="text-muted-foreground">Loading talks...</div>
    </div>
  ),
});

export default TalksSectionDynamic;
