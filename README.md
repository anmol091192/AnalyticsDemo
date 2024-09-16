# Analytics Demo Project

## Deployed on render

https://analyticsdemo.onrender.com/

## Setup on Local Machine

### Step 1: Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/analytics-demo-project.git
```

### Step 2: Install Dependencies and Build the Frontend

Navigate to the project directory and run the following command to install all dependencies and build the React app:

```bash
npm install && npm run build
```

### Step 3: Start the Node.js Server

Open a new terminal in the project directory and start the backend server:

```bash
node server.js
```

### Step 4: Start the React App (Frontend Server)

In the initial terminal, start the React development server:

```bash
npm start
```

The app should now be running, and you can access it in your browser at `http://localhost:3000`.

## Folder Structure

The app's frontend is organized into the following folder structure:

- **src**
  - **components**
    - **DateRangePicker**
    - **NavBar**
    - **Toggle**
  - **pages**
    - **Analytics**
    - **Dashboard**
    - **Home**
    - **Portfolio**
  - `App.js`
  - `AppContext.js` 
- `server.js`

**Components Folder**: Contains all the shared components to be used across different pages.

**Pages Folder**: Contains individual pages. Each page folder includes a `components` subfolder for components specific to that page.

## Features and Usage

### ChartJS

This app uses **ChartJS** to render various charts, providing a dynamic visual representation of the data.

### State Management

**Context API** is used for state management across the app. This allows the data to be synchronized across all pages. For example, changing the dates in the `DateRangePicker` will update the data in all relevant charts.

### Table Component

Table component is created which has basic sorting functionality

### Home Page

The Home page allows users to search through the analytics data. Currently, only the following dataset is available for search. In a production environment, the data would be queried from a database:

```json
[
  { "id": 1, "category": "Revenue", "name": "Product Sales", "value": 12000 },
  { "id": 2, "category": "Revenue", "name": "Service Revenue", "value": 5000 },
  { "id": 3, "category": "Revenue", "name": "Other Income", "value": 3000 },
  { "id": 4, "category": "Expenses", "name": "COGS", "value": 6000 },
  { "id": 5, "category": "Expenses", "name": "Marketing", "value": 2000 },
  { "id": 6, "category": "Expenses", "name": "R&D", "value": 1500 },
  { "id": 7, "category": "Expenses", "name": "General & Administrative", "value": 2500 }
]
```

## Future Improvements

- **Lazy Loading for Chart Data**: Retrieve chart data on demand rather than loading everything during the initial load. This would improve the performance of the website.
- **Role-Based Content Visibility**: Use tabs on the analytics page to show and hide sections depending on the user who is logged in, enhancing user experience and security.

