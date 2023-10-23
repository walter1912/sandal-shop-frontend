"use client";
import { Tune } from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React, { useState } from "react";
import FilterSearch from "~/modules/global-components/Filter";
import TypeSearch from "./TypeSearch";
import { productsRequest } from "~/services/products/productsRequest";
import { useAppDispatch, useAppSelector } from "~/lib/store/hook";

function NavSearch({ setCurrentProduct }: { setCurrentProduct: Function }) {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products);
  const [typed, setType] = useState<{ type: string; value: string }[]>([]);
  const [sortType, setAge] = useState("");
  const [isFilling, setFilling] = useState<boolean>(false);

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  async function handleFilter() {
    console.log("sortType, typed", sortType, typed);
    let productNames = await productsRequest.filterByOptions(
      {
        data: typed,
        sortOption: sortType,
        // isOr: false
      },
      dispatch
    );
    setCurrentProduct(productNames);
    setFilling(true);
  }
  function cancelFill() {
    setCurrentProduct(products.all);
    setType([]);
    setAge("");
    setFilling(false);
  }
  return (
    <div>
      <h2
        className="flex-row-center"
        style={{ justifyContent: "space-between" }}
      >
        <>
          Bộ lọc
          <Tune />
        </>
        <FormControl style={{ width: "150px" }}>
          <InputLabel id="sortType">Sắp xếp</InputLabel>
          <Select
            labelId="sortType"
            id="demo-simple-select"
            value={sortType}
            label="Sắp xếp"
            onChange={handleChange}
          >
            <MenuItem value={"costLowToHigh"}>Giá tăng dần</MenuItem>
            <MenuItem value={"costHighToLow"}>Giá giảm dần</MenuItem>
            <MenuItem value={"updatedAtNewest"}>Mới nhất</MenuItem>
          </Select>
        </FormControl>
      </h2>
      <Box>
        {typed.length > 0 ? (
          <>
            {typed.map((item: any, index: number) => (
              <Chip
                color="primary"
                key={index}
                label={item.value}
                variant="outlined"
                onDelete={() => {
                  setType((pre: any[]) =>
                    pre.filter((t: any, ind: number) => ind !== index)
                  );
                }}
              />
            ))}
            {isFilling ? (
              <Button onClick={cancelFill} color="success">
                Hủy lọc
              </Button>
            ) : (
              <Button onClick={handleFilter}>Lọc</Button>
            )}
          </>
        ) : (
          <></>
        )}
      </Box>
      <FilterSearch
        title="Danh mục"
        children={
          <TypeSearch
            setType={setType}
            typed={typed}
            data={[
              { type: "style", value: "tong" },
              { type: "style", value: "2 quai" },
              { type: "style", value: "3 quai" },
            ]}
          />
        }
      />
      <FilterSearch
        title="Màu sắc"
        children={
          <TypeSearch
            setType={setType}
            typed={typed}
            data={[
              { type: "color", value: "Đỏ" },
              { type: "color", value: "Trắng" },
              { type: "color", value: "Đen" },
            ]}
          />
        }
      />
    </div>
  );
}

export default NavSearch;
