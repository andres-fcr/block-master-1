import styled from "styled-components";

export const Card = styled.li`
list-style:none;
font-style: 1.5rem;
text-align:center;
:hover {
    opacity: 0.8;
}
`
export const ImgCard = styled.img`
border-radius: 15px;
background-color: #0F0E17;
`
export const ListCard = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, 200px);
gap: 40px;
padding: 40px;
justify-content: center;
`
export const Titulo = styled.h1`
padding: 40px 40px 0px 100px;
color: white
`