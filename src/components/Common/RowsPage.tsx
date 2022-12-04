import KeyboardArrowLeftOutlinedIcon from "@mui/icons-material/KeyboardArrowLeftOutlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const RowsPage = () => {
  const [valuePage, setValuePage] = useState<number>(10);
  const [valueTopPage, setValueTopPage] = useState<number>(1);
  const [valueBottomPage, setValueBottomPage] = useState<number>(valuePage);

  const handlePrevPage = () => {
    if (valueTopPage <= 1) {
      setValueTopPage(1);
      setValueBottomPage(valueBottomPage);
    } else {
      setValueTopPage(valueTopPage - valuePage);
      setValueBottomPage(valueBottomPage - valuePage);
    }
  };

  const handleNextPage = () => {
    if (valueBottomPage >= 50) {
      setValueTopPage(valueTopPage);
      setValueBottomPage(50);
    } else {
      setValueTopPage(valueTopPage + valuePage);
      setValueBottomPage(valueBottomPage + valuePage);
    }
  };

  useEffect(() => {
    if (valuePage == 25) {
      setValueTopPage(26);
      setValueBottomPage(50);
    } else if (valuePage == 50) {
      setValueTopPage(1);
      setValueBottomPage(50);
    } else {
      setValueTopPage(1);
      setValueBottomPage(valuePage);
    }
  }, [valuePage]);

  return (
    <div className="w-full h-16 flex justify-end items-center gap-4 mr-8">
      <span>Rows per page:</span>
      <FormControl fullWidth style={{ width: "66px" }}>
        <Select
          sx={{
            "& .MuiSelect-select .notranslate::after": "placeholder"
              ? {
                  content: `"${"Select Role"}"`,
                  opacity: 0.6,
                  fontWeight: 400,
                }
              : {},
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={10}
          onChange={(e: any) => setValuePage(e.target.value)}
          style={{
            width: "66px",
            height: "32px",
            borderRadius: "8px",
          }}
        >
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={25}>25</MenuItem>
          <MenuItem value={50}>50</MenuItem>
        </Select>
      </FormControl>
      <span>
        {valueTopPage}-{valueBottomPage} of 50
      </span>
      <div className="flex justify-between items-center gap-2 pr-4">
        <span
          className={
            valueTopPage > 1
              ? "cursor-pointer hover:bg-gray-200 rounded-full"
              : "cursor-not-allowed" + " "
          }
        >
          <KeyboardArrowLeftOutlinedIcon
            onClick={handlePrevPage}
            style={{ opacity: valueTopPage > 1 ? "1" : "0.3" }}
          />
        </span>
        <span
          className={
            valueBottomPage < 50
              ? "cursor-pointer hover:bg-gray-200 rounded-full"
              : "cursor-not-allowed"
          }
        >
          <KeyboardArrowRightOutlinedIcon
            onClick={handleNextPage}
            style={{ opacity: valueBottomPage < 50 ? "1" : "0.3" }}
          />
        </span>
      </div>
    </div>
  );
};

export default RowsPage;
