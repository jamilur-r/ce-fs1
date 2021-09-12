# CS FS - 1

A basic react table component. This project holds 2 table component.
one for easy implementation with just api passed as parameter to fetch data and display on its own
another one is for implementation with state management where you fetch data seperately and pass it as props

## Table Type - 1

### implementation

```jsx
<Table
  title="Users"
  url="https://jsonplaceholder.typicode.com/users"
  filter_param="name"
/>
```

### Props

| name         | prop type | isRequired | desciption                   |
|--------------|-----------|------------|------------------------------|
| title        | string    | true       | table title                  |
| url          | string    | true       | api url                      |
| filter_param | string    | true       | field name for second filter |

### Use case

When you have full controll over the api or no state management is needed.

## Table Type - 2

### Implementation

```jsx
<TableWithData
  title="Posts"
  data={data}
  page={page}
  limit={limit}
  next={handleNext}
  prev={handlePrev}
  updateLimit={updateLimit}
  filter_param="title"
/>
```

### Props 

| name         | prop type | isRequired | desciption                                |
|--------------|-----------|------------|-------------------------------------------|
| title        | string    | true       | table title                               |
| url          | string    | true       | api url                                   |
| filter_param | string    | true       | field name for second filter              |
| page         | number    | true       | page number                               |
| limit        | number    | true       | data row limit                            |
| next         | function  | true       | handler for fetching next set of data     |
| prev         | function  | true       | handler for fetching previous set of data |
| updateLimit  | function  | true       | update data row limit                     |


### Use case

when you have implemented state management and have data at hand or your are working with 
api where you have less control to edit. 


## Starting the project 

### Folder structure - 

- src 
---component
------table-with-data.jsx
------table.jsx
---index.css
---root.jsx
---index.js

start with 

```bash
yarn start
```
or 

```bash
npm run start
```

Build with 

```bash
yarn build
```
or 

```bash
npm run build
```

