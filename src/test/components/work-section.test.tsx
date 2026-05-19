import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import WorkSection from "@/components/section/work-section";
import React from "react";

vi.mock("next/image", () => ({
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

vi.mock("@/data/resume", () => ({
  DATA: {
    work: [
      {
        company: "Acme Corp",
        href: "https://acme.com",
        title: "Software Engineer",
        logoUrl: "/acme.svg",
        logoWidth: 50,
        logoHeight: 50,
        start: "January 2020",
        end: "December 2022",
        description: "Built amazing products at Acme.",
      },
      {
        company: "Beta Inc",
        href: "https://beta.com",
        title: "Senior Engineer",
        logoUrl: "/beta.svg",
        logoWidth: 50,
        logoHeight: 50,
        start: "January 2023",
        description: "Currently working on great things.",
      },
    ],
  },
}));

describe("WorkSection", () => {
  it("renders all work entries", () => {
    render(<WorkSection />);
    expect(screen.getByText("Acme Corp")).toBeInTheDocument();
    expect(screen.getByText("Beta Inc")).toBeInTheDocument();
  });

  it("all entries are collapsed by default", () => {
    render(<WorkSection />);
    const triggers = screen.getAllByRole("button");
    for (const trigger of triggers) {
      expect(trigger).toHaveAttribute("aria-expanded", "false");
    }
  });

  it("expands an entry when its trigger is clicked", async () => {
    render(<WorkSection />);
    const trigger = screen.getByRole("button", { name: /acme corp/i });
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("Built amazing products at Acme.")).toBeVisible();
  });

  it("collapses an expanded entry when clicked again", async () => {
    render(<WorkSection />);
    const trigger = screen.getByRole("button", { name: /acme corp/i });
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    await userEvent.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("only one entry is expanded at a time", async () => {
    render(<WorkSection />);
    const acmeTrigger = screen.getByRole("button", { name: /acme corp/i });
    const betaTrigger = screen.getByRole("button", { name: /beta inc/i });

    await userEvent.click(acmeTrigger);
    expect(acmeTrigger).toHaveAttribute("aria-expanded", "true");

    await userEvent.click(betaTrigger);
    expect(acmeTrigger).toHaveAttribute("aria-expanded", "false");
    expect(betaTrigger).toHaveAttribute("aria-expanded", "true");
  });

  it("shows job title and date range for each entry", () => {
    render(<WorkSection />);
    expect(screen.getByText("Software Engineer")).toBeInTheDocument();
    expect(screen.getByText("Senior Engineer")).toBeInTheDocument();
    expect(
      screen.getByText("January 2020 - December 2022"),
    ).toBeInTheDocument();
    expect(screen.getByText("January 2023 - Present")).toBeInTheDocument();
  });
});
