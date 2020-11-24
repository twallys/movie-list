import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import notFoundImg from '../../assets/not-found.png';

import { MovieItem, MovieDescription, MovieCast, Poster } from './styles'

interface MovieDetailsParams {
    id: string;
}

const MovieDetails: React.FC = () => {
    const { params } = useRouteMatch<MovieDetailsParams>();

    return (
        <>
            <PageHeader />

            <MovieItem>
                <MovieDescription>
                    <Link to={'/'} >
                        <AiOutlineArrowLeft size={20} />
                    </Link>

                    <p className='minimumInfo'>{params.id} 86 min - 2014 - +16</p>

                    <h1 className='title'>Titulo do Filme</h1>

                    <h3>ibm 7.3</h3>

                    <h3 className='plotLabel'>Plot</h3>
                    <p className='plot'>Descricao bla vbla bla Descricao bla vbla bla Descricao bla vbla
                    bla Descricao bla vbla bla Descricao bla vbla bla Descricao bla
                    vbla bla Descricao bla vbla bla
                    </p>

                    <MovieCast>
                        <div>
                            <h3 className='castLabel'>cast</h3>
                            <p className='cast'>Descricao bla vbla bla Descricao bla vbla bla Descricao bla vbla
                            bla Descricao bla vbla bla Descricao bla vbla bla Descricao bla
                            vbla bla Descricao bla vbla bla
                        </p>
                        </div>
                        <div>
                            <h3 className='castLabel'>genre</h3>
                            <p className='cast'>Descricao bla vbla bla Descricao bla vbla bla Descricao bla vbla
                            bla Descricao bla vbla bla Descricao bla vbla bla Descricao bla
                            vbla bla Descricao bla vbla bla
                        </p>
                        </div>
                        <div>
                            <h3 className='castLabel'>director</h3>
                            <p className='cast'>Descricao bla vbla bla Descricao bla vbla bla Descricao bla vbla
                            bla Descricao bla vbla bla Descricao bla vbla bla Descricao bla
                            vbla bla Descricao bla vbla bla
                        </p>
                        </div>
                    </MovieCast>
                </MovieDescription>
                <Poster>
                    <img src={notFoundImg}  alt='poster'/>
                </Poster>
            </MovieItem>
        </>
    );
}

export default MovieDetails;