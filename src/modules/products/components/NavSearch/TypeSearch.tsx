"use client";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";

function TypeSearch({
  setType,
  data,
  typed,
}: {
  setType: Function;
  data: any[];
  typed: any[];
}) {
  const [isChecked, setCheck] = useState<number[]>([]);
  return (
    <FormGroup>
      {data.map((item, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              value={item.value}
              checked={
                typed.filter((type) => type.value === item.value).length > 0
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setType((prev: any[]) => {
                    let pre = [...prev];
                    if (!pre.includes(item)) {
                      return [...pre, item];
                    }
                    return pre;
                  });
                } else {
                  setType((prev: any[]) => {
                    let pre = [...prev];
                    if (
                      pre.filter((type) => type.value === item.value).length > 0
                    ) {
                      return pre.filter((t) => t.value !== item.value);
                    }
                    return pre;
                  });
                }
              }}
            />
          }
          label={item.value}
        />
      ))}
    </FormGroup>
  );
}

export default TypeSearch;
