/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen } from "@testing-library/react";
import React from "react";
import { unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Header from "../Header";

// !This is deprecated, and react-testing-library implements it by default.
// let container: any = null;
// beforeEach(() => {
//   // Set up a Dom element as the render target
//   container = document.createElement("div");
//   document.body.appendChild(container);
// });

// afterEach(() => {
//   // Cleanup on existing code texting
//   unmountComponentAtNode(container);
//   container.remove();
//   container = null;
// });

describe("The menu on the nav bar", () => {
  it("contains the navigational links", () => {
    act(() => {
      render(<Header />);
    });

    // Test about link
    const aboutLink = screen.queryAllByRole("link", {
      name: /About/i,
    });
    expect(aboutLink[0]).toHaveAttribute("href", "#about");
    expect(aboutLink[1]).toHaveAttribute("href", "#about");
    // screen.debug(aboutLink);

    // Test work link
    const workLink = screen.queryAllByRole("link", {
      name: /Work/i,
    });
    expect(workLink[0]).toHaveAttribute("href", "#work");
    expect(workLink[1]).toHaveAttribute("href", "#work");
    // screen.debug(workLink);

    // Test contact link
    const contactLink = screen.queryAllByRole("link", {
      name: /Contact/i,
    });
    expect(contactLink[0]).toHaveAttribute("href", "#contact");
    expect(contactLink[1]).toHaveAttribute("href", "#contact");
    // screen.debug(contactLink);
  });
});
