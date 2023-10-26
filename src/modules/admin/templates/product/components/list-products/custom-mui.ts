'use client'
import styled from "@emotion/styled";
import { GridActionsCellItem } from "@mui/x-data-grid";

export const GridActionsCellItemStyled = styled(GridActionsCellItem)(({ theme }) => ({
    "& .MuiSvgIcon-root": {
      color: "var(--color-main)"
    }
  }));