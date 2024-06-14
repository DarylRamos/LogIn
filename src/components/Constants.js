const BACKGROUND = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "386px",
  height: "520px",
  background: "#F0F0F0",
  border: "1px solid #000000",
  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
};

const FONT = {
  fontFamily: "Inter",
  fontSize: "14px",
  lineHeight: "28px",
}

const FORM = {
  display: "flex", 
  flexDirection: "column", 
  width: "300px",
}

const GREETING = { 
  alignSelf: "flex-start",
  padding: "15px 0px",
  marginLeft: "45px"
}

const INPUT = {
  boxSizing: "border-box",
  background: "#FFFFFF",
  border: "1px solid #E2E1E5",
  borderRadius: "5px",
  height: "48px",
  padding: "0px 10px",
}

// const PASSWORD_DIV = {
//   boxSizing: "border-box",
//   background: "#FFFFFF",
//   border: "1px solid #E2E1E5",
//   borderRadius: "5px",
//   height: "48px",
//   padding: "0px 10px",
// }

const ERROR = {
  display: "flex",
  color: "#F90000",
}


const SUBMIT = {
  color: "#FFFFFF",
  height: "48px",
  padding: "0px 20px",
  background: "#5E5BFF",
  border: "1px solid #5E5BFF",
  borderRadius: "5px",
}

const LOGOUT = {
  color: "#FFFFFF",
  height: "48px",
  padding: "0px 20px",
  background: "#FF0000",
  border: "1px solid #FF0000",
  borderRadius: "5px",
}

const REMOVE_BORDER = {
  border: "none", 
  outline: "none", 
  width: "100%"
}

export default {BACKGROUND, FONT, FORM, GREETING, INPUT, ERROR, SUBMIT, LOGOUT, REMOVE_BORDER};