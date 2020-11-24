import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import MovieList from '../../pages/MovieList';


describe('Movie List Page', () => {
    it('should be able to list movies', () => {
        const { getByPlaceholderText, getByText } = render(<MovieList />);

        const searchInput = getByPlaceholderText('Search Movies');
        const buttonSubmitElement = getByText('Search');

        fireEvent.change(searchInput, { target: { value: 'Movie' } });
        fireEvent.click(buttonSubmitElement);

        fireEvent.change(searchInput, { target: { value: '' } });
        fireEvent.click(buttonSubmitElement, { value: 'Movie', page: 0 });
    })
})