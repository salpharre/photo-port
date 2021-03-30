import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Nav from "..";

//categories array to check it renders correctly in nav
const categories = [
    {
        name: "commercial",
        description:
            "Photos of grocery stores, food trucks, and other commercial projects",
    },
    { name: "portraits", description: "Portraits of people in my life" },
    { name: "food", description: "Delicious delicacies" },
    {
        name: "landscape",
        description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    },
];

//mock functions, these are taking the place of props for the nav component
//mocks the prop to see if props are called
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const moctSetContactSelected = jest.fn();

//global function from Jest
afterEach(cleanup);

//declares component we're testing
describe("Nav component", () => {
    //baseline test
    it("renders", () => {
        render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetCurrentCategory}
        />);
    });
    //snapshot test
    it("matches snapshot", () => {
        const { asFragment } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetCurrentCategory}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});

//testing visibility of emoji while testing accessability, the existance of the aria-label
describe("emoji is visible", () => {
    it("inserts emoji into the h2", () => {
        //arrange
        // we're choosing getByLabelText from testing-library, and bringing it in via desctructuring
        const { getByLabelText } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetCurrentCategory}
        />);
        //assert
        expect(getByLabelText("camera")).toHaveTextContent("📷");
    });
});

//testing that nav links are visible
describe("links are visible", () => {
    it("inserts text into the links", () => {
        //arrange
        const { getByTestId } = render(<Nav 
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetCurrentCategory}
        />);
        //assert
        expect(getByTestId("link")).toHaveTextContent("Oh Snap!");
        expect(getByTestId("about")).toHaveTextContent("About me");
    });
});