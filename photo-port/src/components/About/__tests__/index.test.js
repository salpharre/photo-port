import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../index";
//global function from Jest
afterEach(cleanup);
//declares component we're testing
describe("About component", () => {
    //First Test
    it("renders", () => {
        render(<About />);
    });
    //Second Test
    it("matches snapshot DOM node structure", () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    });
});

