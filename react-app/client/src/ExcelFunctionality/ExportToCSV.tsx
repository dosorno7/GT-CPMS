import React from "react";
import { Button } from '@mui/material';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";

type Props = {
  csvData: Object[];
  fileName: string;
  chooseRows: Object[];
};

export const ExportCSV: React.FC<Props> = ({ csvData, fileName, chooseRows }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const newData = [];
  if (chooseRows.length > 0) {
    for(let i = 0; i < chooseRows.length; i++) {
      newData.push(csvData[Number(chooseRows[i]) - 1]);
    }
    csvData = newData;
  }

  const exportToCSV = (csvData: Object[], fileName: string) => {
    console.log(csvData)
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };

    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });

    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <Button variant="contained" onClick={() => exportToCSV(csvData, fileName)}>
      Export to Excel
    </Button>
  );
};