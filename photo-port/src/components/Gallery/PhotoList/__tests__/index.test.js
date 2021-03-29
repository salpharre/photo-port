import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '../'

const portraits = "portraits";

afterEach(cleanup)

describe('PhotoList is rendering', () => {
  it('renders', () => {
    render(<PhotoList 
        categoryName={portraits}
    />);
  });

  it('renders', () => {
    const { asFragment } = render(<PhotoList 
        categoryName={portraits}
    />)
    expect(asFragment()).toMatchSnapshot()
  });
});

//check images are rendering/visilbe
// describe('images are visible', () => {
//     it('')
// });
