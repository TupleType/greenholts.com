import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { TagFilter } from "@/components/blog/tag-filter";
import React from "react";

const mockPush = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: mockPush }),
  usePathname: () => "/blog",
}));

// Drawer uses motion animations that don't work in jsdom
vi.mock("@/components/ui/drawer", () => ({
  Drawer: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DrawerTrigger: ({
    children,
    ariaLabel,
  }: {
    children: React.ReactNode;
    ariaLabel?: string;
  }) => <button aria-label={ariaLabel}>{children}</button>,
  DrawerContent: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DrawerHeader: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
  DrawerBody: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));

const tags = ["All", "Security", "DevOps"];

beforeEach(() => {
  mockPush.mockClear();
});

describe("TagFilter", () => {
  it("navigates with tag param when a non-All tag is clicked", async () => {
    render(<TagFilter tags={tags} selectedTag="All" />);
    // Desktop filter renders the first occurrence
    await userEvent.click(screen.getAllByText("Security")[0]);
    expect(mockPush).toHaveBeenCalledWith("/blog?tag=Security");
  });

  it("navigates without tag param when All is clicked", async () => {
    render(<TagFilter tags={tags} selectedTag="Security" />);
    await userEvent.click(screen.getAllByText("All")[0]);
    expect(mockPush).toHaveBeenCalledWith("/blog");
  });

  it("highlights the selected tag", () => {
    render(<TagFilter tags={tags} selectedTag="Security" />);
    const securityButtons = screen.getAllByText("Security");
    // The desktop button for the selected tag should have the active class
    expect(securityButtons[0].closest("button")).toHaveClass("bg-blue-accent");
  });
});
