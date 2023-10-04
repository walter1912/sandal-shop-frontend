export const Grid2NavbarListStyles = {
  paddingRight: "40px",
  "& .navbar-item": {
    padding: "40px",
    marginBottom: "20px",
  },
  "& .navbar-item--bg": {
    backgroundColor: "var(--color-bg)",
  },
  "& .navbar-item--border": {
    border: "1px solid var(--black-second)",
  },
};

export const BoxNavbarItemCalcCostStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  "& .calc-cost": {
    width: "100%",
    maxWidth: "400px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "0.5px solid var(--orange)",
    marginBottom: "20px",
    marginTop: "10px",
  },
};
