import React from "react";
import "./button.scss";
import PropTypes from "prop-types";

//Lưu ý: hàm onClick se co 3 truong hop truyen gia tri
// TH1: ham da duoc dinh nghia o ngoai
      // + neu ham dinh nghĩa đó cần có tham số thì trong onClick = {(đôi số) => ham(đối số)}
      // + neu ham đinh nghĩa đó không cần tham số thì trong onClick = {callback}
// TH2: ham chưa được định nghĩa ở ngoài
      // + bắc buộc phải dùng ()=>{nối dung cần thực thực hiện}

const Button = (props) => {
  const {onClick}  = props;
  return (
    <button
      className={`btn ${props.className}`}
      onClick={onClick ? onClick : null}
    >
      {props.children}
    </button>
  );
};


export const OutlineButton = (props) => {
  const {onClick} = props
    return (
      <Button
        className={`btn-outline ${props.className}`}
        onClick={onClick ? onClick : null}
      >
        {props.children}
      </Button>
    );
  };


Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
