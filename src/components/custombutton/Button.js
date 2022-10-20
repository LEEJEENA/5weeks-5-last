import styled, { css } from "styled-components";

const Button = (props) => {
  return (
    <STButton {...props} disabled={props.disabled} sizeStyle={props.sizeStyle} custom={props.custom}>
      {props.children}
    </STButton>
  );
}

const STButton = styled.button`
  cursor: pointer;
  font-family: "Noto Sans KR", sans-serif;

  ${({ size }) => {
      switch (size) {
        case "s":
          return css`
          width: 70px;
          height: 40px;
          border-radius: 20px;
          color: #fff;
          background-color: #008080;
          border: 2px solid #008080;
          text-align: center;
    `;
      
        case "m":
          return css`
          border-radius: 20px;
          width: 100px;
          height: 50px;
          background-color: #008080;
          border: 2px solid #008080;
          margin-right: 10px;
          color: #fff;
    `;
      
      case "md":
        return css`
        border-radius: 10px;
        width: 150px;
        height: 50px;
        color: #fff;
        background-color: #008080;
        border: 2px solid #008080;
        font-weight: 700px;
        align-items: center;
        justify-content: center;
        display: flex;
        margin: auto;
        `;
    
      case "l":
        return css`
        width: 200px;
        height: 120px;
        color: #008080;
        font-size: x-large;
        background-color: transparent;
        border: 3px solid #008080;
      `;

      default:
      return css`
        text-align: center;
      `;
      }
    }
  }

  ${({ custom }) => {
      switch (custom) {
        case "e":
          return css`
          color: #fff;
    `;
      
        case "h":
          return css`
          height: 37px;
    `;
      
        case "fontl":
          return css`
          font-size: large;
          `;
      
        case "fontxl":
          return css`
          font-size: x-large;
        `;

        case "flex":
          return css`
          flex-direction: row;
        `;

        case "margin":
          return css`
          margin: 30px auto;
        `;

        default:
        return css`
          border: 0;
      `;
      }
    }
  }


`;

  

export default Button;