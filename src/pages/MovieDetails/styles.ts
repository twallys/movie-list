import styled from 'styled-components';
import { shade } from 'polished';

export const MovieItem = styled.div`
    
    color: #fff;
    max-width: 1100px;
    margin: 0 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    svg{
        color: #ddd;
        margin-bottom: 20px;

        &:hover{
            color: ${shade(0.6, '#fff')};
        }
    }
`;

export const MovieDescription = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    .minimumInfo{
        margin-top: 10px;
        color: #999;
    }

    .title{
        margin-top: 10px;
        font-size: 4em;
    }

    .plotLabel{
        margin-top: 40px;
        font-size: 1.1em;
        color: #666;
    }

    .plot{
        margin-top: 10px;
        font-size: 1.1em;
    }
`;

export const MovieCast = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 40px;

    .castLabel{
        color: #666;
        font-size: 1.1em;
    }

    .cast{
        margin-top: 10px;
    }
`;

export const Poster = styled.div`
    margin-left: 100px;
    margin-top: 40px;

    img{
        width: 400px;
        height: 550px;
    }

    
`;