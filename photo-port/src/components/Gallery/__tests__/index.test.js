import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Gallery from '..'
//mock category for photo description and name in gallery
//to be used to check if component renders and props are passed
const portrait = { name: "portraits", description: "Portraits of people in my life" };

afterEach(cleanup)

describe('Gallery is rendering', () => {
    //checks component renders with props
    it('renders', () => {
        render(<Gallery
            currentCategory={portrait}
        />);
    });
    //creates a snapshot and makes sure component matches snapshot every time test runs
    it("gallery matches snapshot", () => {
        const { asFragment } = render(<Gallery
            currentCategory={portrait}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
    //checks h1 tag is rendering correctly
    it('renders', () => {
        const { getByTestId } = render(<Gallery 
            currentCategory={portrait} 
        />);
        expect(getByTestId('h1tag')).toHaveTextContent('Portraits')
    });
});