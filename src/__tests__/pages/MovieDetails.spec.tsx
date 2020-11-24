import React from 'react';
import { render } from '@testing-library/react'
import MovieDetails from '../../pages/MovieDetails/'

jest.mock('react-router-dom', () => {
    return {
        useLocation: jest.fn()
    }
})

describe('Movie Details Page', () => {
    it('should be able to consult a movie and show it', () => {
        const { debug } = render(<MovieDetails />);

        debug();
    })
})