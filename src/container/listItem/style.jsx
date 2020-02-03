import styled from 'styled-components';

export const TileContainer = styled.div`
    width:100%;
    background-color:green;
`;
export const Tile = styled.div`
    background-color:yellow;
    display:flex;
    justify-content:space-between;
    align-item:center;
   .TileTextAlign{
       display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .ImageHolder{
        background-color:red;
        width:100px;
        height:100px;
        margin:4px;
    }
    .placeholder{
        height: 50px;
        width: 50px;
    }
    
`;