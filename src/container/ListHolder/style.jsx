import styled from 'styled-components';
 

export const MainPage =styled.div`

.MainHeading{
    font-size:24px;
    padding:10px;
}
.AlignButton{    
    width: 300px;
    margin: 0 1026px;
    @media(max-width: 700px) {
        display: none;
    }
`;
export const MainPageFlex=styled.div`
    display:flex;
    @media(max-width: 700px) {
        display: block;
    }
`;
export const ListHolderForm = styled.div`
    height:100%
    width:500px;
.WebButton{
    margin:10px;
    padding:10px;
    border:none;
    background-color: transparent;
    border-radius:4px;
    }
.WebButton:hover{
    color:white;
    background-color:#4848af;
    cursor:pointer;
    }
`;
export const Options = styled.div`
    width: 20%;
    @media(max-width: 700px) {
        width: 100%;
    }
    ul{
        list-style:none;           
        text-align: left;     
    }
    li{
        padding:10px;
    }
    .no-mobile-display {
        @media(max-width: 700px) {
            display: none
        }
    }
    .border-all {
        @media(max-width: 700px) {
            border: 1px solid grey;
            padding: 3px 10px;
            background-color:whitesmoke;            
            border-radius: 6px;        
        }
    }
    .DropDown {
        display: none;
        @media(max-width: 700px) {
            display:  block;
        }
    }
    .FirstList{
        @media(max-width:700px){
            display:flex;
            justify-content: space-around;
            align-items: center;
        }
    }
    .ButtonStyle{
        display:none;
        @media(max-width:700px){ 
        display:block;
        background-color:#3c98f9;
        margin-left: 130px;

    }
    
`;
export const AlignFlex = styled.div`
    display:flex;
    flex-wrap: wrap;
`; 

export const MainHeading=styled.div`
    display:none;
    @media(max-width:700px){ 
        display:block;
        text-align: left;
`;
