"use client";
import { Tune } from "@mui/icons-material";
import { Box, Chip, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React, { useState } from "react";
import FilterSearch from "~/modules/global-components/Filter";
import TypeSearch from "./TypeSearch";

function NavSearch() {
  const [typed, setType] = useState<any[]>([]);
  const [sortType, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <div>
      <h2 className="flex-row-center"
      style={{justifyContent:'space-between'}}
      >
        <>
        Bộ lọc
        <Tune />
        </>
        <FormControl style={{width:'150px'}}>
        <InputLabel id="sortType">Sắp xếp</InputLabel>
        <Select
          labelId="sortType"
          id="demo-simple-select"
          value={sortType}
          label="Sắp xếp"
          onChange={handleChange}
        >
          <MenuItem value={10}>Giá tăng dần</MenuItem>
          <MenuItem value={20}>Giá giảm dần</MenuItem>
          <MenuItem value={30}>Mới nhất</MenuItem>
        </Select>
      </FormControl>
      </h2>
      <Box>
        {typed.map((type: string, index: number) => (
          <Chip
            color="primary"
            key={index}
            label={type}
            variant="outlined"
            onDelete={() => {
              setType((pre: any[]) =>
                pre.filter((t: string, ind: number) => ind !== index)
              );
            }}
          />
        ))}
      </Box>
      <FilterSearch
        title="Danh mục"
        children={
          <TypeSearch
            setType={setType}
            data={["Dép tông", "Dép 2 quai", "Dép 3 quai"]}
          />
        }
      />
      <FilterSearch
        title="Màu sắc"
        children={
          <TypeSearch
            setType={setType}
            data={["Đỏ", "Trắng", "Đen", "Xanh dương"]}
          />
        }
      />
      <FilterSearch
        title="Size"
        children={
          <TypeSearch setType={setType} data={["29", "30", "31", "32"]} />
        }
      />
    </div>
  );
}

export default NavSearch;
