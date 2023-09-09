# Generate Excel from API Data - Next.JS

This is a simple Next.js application that fetches data from an API and generates an Excel file using the data.

## Prerequisites

Before running the application, make sure you have the following dependencies installed:

-   Node.js
-   npm (Node Package Manager)

## Installation

1. Clone this repository to your local machine:

```bash
git clone https://github.com/mataringan/next-excelJS
```

## Installation

2. Change to the project directory:

```bash
cd next-excelJS
```

3. Install the project dependencies:

```bash
npm install
```

## Usage

1. Start the Next.js development server:

```bash
npm run dev
```

2. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000).

3. Click the "Generate Excel" button to fetch data from the API and generate an Excel file.

4. The Excel file will be downloaded automatically with the name "data.xlsx."

## Configuration

You can customize the API endpoint and Excel column headers in the `pages/index.js` file:

````javascript
const response = await axios.get("https://jsonplaceholder.typicode.com/users");

// ...

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

// ...
```next-excelJS

Modify the `axios.get` URL and the `worksheet.columns` and `worksheet.addRow` sections according to your API and data structure.

````
