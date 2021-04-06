import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Modal from '..';

afterEach(cleanup);

const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 4
};

const mockToggleModal = jest.fn();
//checking modal renders and creating a snapshot test to compare to 
describe('Modal is rendering', () => {
    //baseline test
    it('renders', () => {
        render(<Modal
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
        />);
    });
    //snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Modal
            currentPhoto={currentPhoto}
            onClose={mockToggleModal}
        />);
        expect(asFragment()).toMatchSnapshot();
    });
});
//testing click event fires
describe('Click Event', () => {
    it('calls onClose handler', () => {
        //arrange: render modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
        //act: simulate click event
        fireEvent.click(getByText('Close this modal'));
        //assert: expected matcher
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})