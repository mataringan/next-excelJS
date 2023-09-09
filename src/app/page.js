"use client";

import axios from "axios";
import ExcelJS from "exceljs";

export default function Home() {
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );
            console.log(response.data);
            const data = response.data;

            if (data) {
                // create workbook excel
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet("Data");

                // add data to worksheet
                worksheet.columns = [
                    { header: "Kolom1", key: "kolom1", width: 15 },
                    { header: "Kolom2", key: "kolom2", width: 15 },
                ];

                data.forEach((item) => {
                    worksheet.addRow({
                        kolom1: item.name,
                        kolom2: item.email,
                    });
                });

                // save workbook excel

                const buffer = await workbook.xlsx.writeBuffer();
                const blob = new Blob([buffer], {
                    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ",
                });
                const url = window.URL.createObjectURL(blob);

                // create link for download excel file
                const a = document.createElement("a");
                a.href = url;
                a.download = "data.xlsx";
                a.click();
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <button onClick={fetchData}>Generate Excel</button>
        </div>
    );
}
