"use client";
import { FormControl, Tooltip } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonOutlined } from "~/modules/global-styles/custom-mui";

function ChooseAddress({
  stylesSelect,
  setAddress,
}: {
  stylesSelect: any;
  setAddress: Function;
}) {
  const [cityChoosed, setCityChoosed] = useState<string>("");
  const [districtChoosed, setDistrictChoosed] = useState<string>("");
  const [wardChoosed, setWardChoosed] = useState<string>("");
  const [dataCity, setDataCity] = useState<any[]>([]); // State to store fetched data
  const [dataDistrict, setDataDistrict] = useState<any[]>([]); // State to store fetched data
  const [dataWard, setDataWard] = useState<any[]>([]); // State to store fetched data

  async function fetchData(api: string, select: string) {
    try {
      const response = await axios.get(api);
      switch (select) {
        case "city": {
          setDataCity(response.data);
          break;
        }
        case "district": {
          setDataDistrict(response.data.districts);
          break;
        }
        case "ward": {
          setDataWard(response.data.wards);
          break;
        }
      }
      console.log("response.data: ", response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  const host = "https://provinces.open-api.vn/api/";
  useEffect(() => {
    fetchData(host, "city"); // Call the API and store the data
  }, []); // The empty dependency array means this effect runs once on component mount
  useEffect(() => {
    // host = https://provinces.open-api.vn/api/p/{cityChoosed.id}?depth=2

    let newHost = `${host}p/${cityChoosed}?depth=2`;
    if (cityChoosed !== "") fetchData(newHost, "district");
  }, [cityChoosed]);
  useEffect(() => {
    // host = https://provinces.open-api.vn/api/d/{districtChoosed.id}?depth=2

    let newHost = `${host}d/${districtChoosed}?depth=2`;
    if (districtChoosed !== "") fetchData(newHost, "ward");
  }, [districtChoosed]);

  // phần check xem tỉnh/ huyện nào được chọn
  function handleChange(select: string) {
    let element: HTMLSelectElement = document.getElementById(
      select
    ) as HTMLSelectElement;
    const selectedOption = element.options[element.selectedIndex]; // Lấy phần tử option đã chọn

    // Lấy giá trị của thuộc tính data-id
    const dataId = selectedOption.getAttribute("data-id");
    switch (select) {
      case "city": {
        setCityChoosed(String(dataId));
        break;
      }
      case "district": {
        setDistrictChoosed(String(dataId));
        break;
      }
      case "ward": {
        setWardChoosed(String(dataId));
        break;
      }
    }
  }

  const renderOptions = (array: object[], select: string) => {
    const row = array.map((element: any) => (
      <option key={element?.code} value={element?.name} data-id={element.code}>
        {element.name}
      </option>
    ));
    let placeholder = "Chọn";
    switch (select) {
      case "city": {
        placeholder += " tỉnh/thành";
        break;
      }
      case "district": {
        placeholder += " quận/huyện";
        break;
      }
      case "ward": {
        placeholder += " phường/xã";
        break;
      }
    }
    return (
      <select
        id={select}
        onChange={(e) => handleChange(select)}
        style={{
          ...stylesSelect,
          width: "100%",
        }}
        defaultValue={placeholder}
      >
        <option key={0} value="" defaultChecked>
          {placeholder}
        </option>
        {row}
      </select>
    );
  };

  function handleSaveAddress() {
    let detailAddressEle: any = document.getElementById("detailAddress");
    let address =
      detailAddressEle.value +
      ", " +
      dataWard.find((ward) => ward.code == wardChoosed)?.name +
      ", " +
      dataDistrict.find((district) => district.code == districtChoosed)?.name +
      ", " +
      dataCity.find((city) => city.code == cityChoosed)?.name;
    setAddress(address);
  }
  return (
    <div
      className="navbar-item navbar-item--bg"
      style={{ marginBottom: "40px" }}
    >
      <h4>Địa chỉ nhận hàng</h4>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Grid2 container spacing={1}>
          <Grid2 xs={12} md={4}>
            {renderOptions(dataCity, "city")}
          </Grid2>
          <Grid2 xs={12} md={4}>
            {renderOptions(dataDistrict, "district")}
          </Grid2>
          <Grid2 xs={12} md={4}>
            {renderOptions(dataWard, "ward")}
          </Grid2>
        </Grid2>
        <Tooltip title="Mô tả chi tiết số nhà, đường hoặc xóm">
          <input
            style={{
              width: "100%",
              height: stylesSelect.height ?? "40px",
              paddingLeft: stylesSelect.paddingLeft,
              marginTop: "10px",
            }}
            placeholder="Địa chỉ chi tiết"
            id="detailAddress"
          />
        </Tooltip>
        <ButtonOutlined
          onClick={handleSaveAddress}
          sx={{
            marginTop: "20px",
            ...stylesSelect,
          }}
        >
          Lưu địa chỉ
        </ButtonOutlined>
      </div>
    </div>
  );
}

export default ChooseAddress;
