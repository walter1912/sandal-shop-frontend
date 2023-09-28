"use client";
import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";

function TypeSearch({ setType, data }: { setType: Function; data: any[] }) {
  return (
    <FormGroup>
      {data.map((item, index) => (
        <FormControlLabel
          key={index}
          control={
            <Checkbox
              value={item}
              onChange={(e) => {
                if (e.target.checked) {
                  setType((pre: any[]) => {
                    if (!pre.includes(e.target.value)) {
                      return [...pre, e.target.value];
                    }
                    return pre;
                  });
                } else {
                  setType((pre: any[]) => {
                    if (pre.includes(e.target.value)) {
                      return pre.filter((t) => t !== e.target.value);
                    }
                    return pre;
                  });
                }
              }}
            />
          }
          label={item}
        />
      ))}
    </FormGroup>
  );
}

export default TypeSearch;
