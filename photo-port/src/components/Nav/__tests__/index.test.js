import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

//global function from Jest
afterEach(cleanup);
//declares component we're testing
describe("Nav component", () => {
    //baseline test
    it("renders", () => {
        render(<Nav />);
    });
    //snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    });
});

//testing visibility of emoji while testing accessability, the existance of the aria-label
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        //arrange
        // we're choosing getByLabelText from testing-library, and bringing it in via desctructuring
        const { getByLabelText } = render(<Nav />);
        //assert
        expect(getByLabelText("camera")).toHaveTextContent("📷");
    });
});

//testing that nav links are visible
describe("links are visible", () => {
    it("inserts text into the links", () => {
        //arrange
        const { getByTestId } = render(<Nav />);
        //assert
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About me");
    });
});