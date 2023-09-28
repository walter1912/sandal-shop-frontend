'use client'
import { useState } from "react";
import { Box, Pagination } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import usePagination from "~/lib/hooks/usePagination";

const CustomPagination = ({ data, per_page, component, componentProps }: {
    data: any,
    per_page: number,
    component: React.ElementType,
    componentProps?: object
}) => {
  const [page, setPage] = useState(1);
  const Component = component;
  const count = Math.ceil(data.length / per_page);
  const _data = usePagination(data, per_page);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    _data.jump(p);
  };
  return (
    <Box p="5" component={"div"} style={{display:"flex", flexDirection:"column", alignItems:"center" }}>
      <Grid pt="3" spacing={2} container>
        {_data.currentData().map((item, index) => {
          return <Component data={item} key={index} {...componentProps} />;
        })}
      </Grid>

      <Pagination
        count={count}
        size="large"
        page={page}
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
      />
    </Box>
  );
};

export default CustomPagination;
