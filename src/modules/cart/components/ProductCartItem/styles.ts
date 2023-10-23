export const BoxLayoutStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "10px",
    position: "relative",
    borderBottom: "1px solid var(--color-hover)",
    "& .handle_ProductCart": {
      position: "absolute",
      right: 0,
      top: "10px",
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    "& .main-infor": {
      marginLeft: "20px",
      "& .des": {
        textTransform: "uppercase",
        color: "var(--black-second)",
      },
      "& .price": {
        color: "var(--orange)",
        fontSize: "20px",
      },
    },
  }

  export const BoxFrameSetQuantityStyle = {
    margin: "20px 20px 20px 0",
    "& div": {
      cursor: "pointer",
      border: "1px solid var(--color-hover)",
      color: "var(--orange)",
      borderRadius: "4px",
      padding: "6px 10px",
      fontSize: "20px",
    },
  }