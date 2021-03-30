import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Contact from "..";

afterEach(cleanup);
//checking component renders and creating snapshot test
describe("Contact component", () => {
    //baseline test
    it("renders", () => {
        render(<Contact />);
    });
    //snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<Contact />);
        expect(asFragment()).toMatchSnapshot();
    });
});
//checks h1 tag renders
describe("Contact Me is visible", () => {
    it("Inserts text into h1", () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId("h1tag")).toHaveTextContent("Contact me");
    });
});
//check to make sure submit button renders
describe("Sumbit button is visible", () => {
    it("Submit inserted into button", () => {
        const { getByTestId } = render(<Contact />);
        expect(getByTestId("submit")).toHaveTextContent("Submit")
    });
});
