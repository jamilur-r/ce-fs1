import { render, screen } from "@testing-library/react";
import { useState } from "react";
import Table from "./table";
import TableWithData from "./table-with-data";

test("Render Table", () => {
  render(
    <Table
      title="TEST"
      url="https://jsonplaceholder.typicode.com/users"
      filter_param="email"
    />
  );
});

test("Render Table with Data", () => {
  const data = [
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
  ];
  render(
    <TableWithData
      title="TEST"
      data={data}
      filter_param="email"
      page={0}
      limit={0}
      next={null}
      prev={null}
      updateLimit={null}
    />
  );
});

test("Table header", () => {
  const data = [
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
  ];
  render(
    <TableWithData
      title="TEST"
      data={data}
      filter_param="email"
      page={0}
      limit={0}
      next={null}
      prev={null}
      updateLimit={null}
    />
  );
  expect(document.querySelector("th")).toBeTruthy();
});

test("Table body", () => {
  const data = [
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
    {
      name: "dfs",
      email: "sahf@gmail.com",
      pass: "asfcdj",
    },
  ];
  render(
    <TableWithData
      title="TEST"
      data={data}
      filter_param="email"
      page={0}
      limit={0}
      next={null}
      prev={null}
      updateLimit={null}
    />
  );
  expect(document.querySelector("td")).toBeTruthy();
});

test("Table header from url", async () => {
  render(
    <Table
      title="TEST"
      url="https://jsonplaceholder.typicode.com/users"
      filter_param="email"
    />
  );
  await setTimeout(() => {
    expect(document.querySelector("th")).toBeTruthy();
  }, 5000);
});

test("Table body from url", async () => {
  render(
    <Table
      title="TEST"
      url="https://jsonplaceholder.typicode.com/users"
      filter_param="email"
    />
  );
  await setTimeout(() => {
    expect(document.querySelector("td")).toBeTruthy();
  }, 5000);
});
