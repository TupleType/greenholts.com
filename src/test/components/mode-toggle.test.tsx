import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ModeToggle } from "@/components/mode-toggle";

const mockSetTheme = vi.fn();
let mockTheme = "light";

vi.mock("next-themes", () => ({
  useTheme: () => ({ theme: mockTheme, setTheme: mockSetTheme }),
}));

beforeEach(() => {
  mockSetTheme.mockClear();
});

describe("ModeToggle", () => {
  it("calls setTheme with dark when current theme is light", async () => {
    mockTheme = "light";
    render(<ModeToggle />);
    await userEvent.click(
      screen.getByRole("button", { name: /toggle theme/i }),
    );
    expect(mockSetTheme).toHaveBeenCalledWith("dark");
  });

  it("calls setTheme with light when current theme is dark", async () => {
    mockTheme = "dark";
    render(<ModeToggle />);
    await userEvent.click(
      screen.getByRole("button", { name: /toggle theme/i }),
    );
    expect(mockSetTheme).toHaveBeenCalledWith("light");
  });
});
