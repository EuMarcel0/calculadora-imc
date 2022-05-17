import styled from 'styled-components';

export const Container = styled.div`
   max-width: 978px;
   margin: 40px auto;

   :root{
    --black: #353535;
    --white: #F5F5F5;
    }

   .logoArea img{
       width: 150px;
   }

   .mainArea{
       display: flex;
       gap: 80px;
       margin-top: 40px;
   }
   .leftSide{
    flex: 1;
    padding: 10px;
   }
   .leftSide h1{
       color: #353535;
       font-size: 25px;
    }
    .leftSide p{
        color: #999;
        line-height: 25px;
        margin-bottom: 40px;
    }
    .leftSide input{
        width: 100%;
        background-color: transparent;
        padding: 10px 2px; 
        margin-bottom: 30px;
        border-bottom: 1px solid #999;

        &::placeholder{
            color: #a2a2a2;
        }
        &:disabled{
            opacity: 0.4;
        }
    }
    .leftSide button{
        background-color: #227c9d;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        padding: 10px 20px;
        width: 100%;
        margin-top: 10px;
        cursor: pointer;
        transition: all 0.2s linear;
        &:hover{
            opacity: .8;
        }
        &:disabled{
            opacity: .4;
        }
    }
`;

export const RightArea = styled.div`
    flex: 1;

    .rightSide{
        display: flex;
        flex: 1;
        width: 100%;
        height: 100%;
        padding: 10px;
   }
   .gridArea{
       flex: 1;
       display: grid;
       grid-template-columns: repeat(2, 1fr);
       gap: 20px;
   }

   .rightSide .rightBig{
       width: 100%;
       height: 100%;
       position: relative;
   }
   .leftArrow{
       background-color: #227c9d;
       width: 70px;
       height: 70px;
       border-radius: 50%;
       display: flex;
       justify-content: center;
       align-items: center;
       position: absolute;
       left: -35px;
       top: 168px;
       cursor: pointer;
       transition: all 0.1s linear;
        &:hover {
            width: 65px;
            height: 65px;
        }
   }
   .leftArrow img{
       width: 27px;
   }
`;