import React, { useState } from "react";

import { ActionButton } from "../styles/global.stc";
import {
  TableHeader,
  Wrap,
  TableSTC,
  TableFooter,
  TableFilter,
} from "../styles/table.stc";
const TableWithData = ({
  data,
  title,
  updateAction,
  deleteAction,
  next,
  prev,
  updateLimit,
  page,
  limit,
}) => {
  // store search query here
  const [query, setQuery] = useState("");

  // Filter data if query value is available
  const filtered =
    data !== null && query.length > 0
      ? data.filter((i) => i.id === parseInt(query))
      : data;

  /* rendering table header from
    fetched data. data key extracted here to 
    to build table header dynamically

    returns table head element
  */
  const renderTableHeader = (data) => {
    return (
      <tr>
        {Object.keys(data[0]).map((h, k) => (
          <th key={k}>{h}</th>
        ))}
        <th className="sr-only">Update</th>
        <th className="sr-only">Delete</th>
      </tr>
    );
  };

  /* rendering table body from
    fetched data. data value extracted here to 
    to build table body dynamically
    
    returns table row element
  */
  const renderTableBody = (data, k) => {
    return (
      <tr key={k}>
        {Object.values(data).map((item, key) => (
          <td key={key}>
            {typeof item === "object" ? (
              Object.entries(item).map(([key, val]) =>
                typeof val === "object" ? (
                  ""
                ) : (
                  <p key={key}>
                    <span>{key}</span> {val}
                  </p>
                )
              )
            ) : (
              <p>{item.toString().substring(0, 50)}</p>
            )}
          </td>
        ))}
        <td>
          <ActionButton onClick={updateAction}>Update</ActionButton>
        </td>
        <td>
          <ActionButton onClick={deleteAction}>Delete</ActionButton>
        </td>
      </tr>
    );
  };

  return (
    <Wrap>
      <TableHeader>
        <h3>{title}</h3>
        <TableFilter>
          <input
            type="number"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search By Id"
          />
        </TableFilter>
      </TableHeader>
      {data && data.length > 0 ? (
        <TableSTC cellPadding={0} cellSpacing={0}>
          <thead>{renderTableHeader(data)}</thead>
          <tbody>
            {filtered.length > 0 ? (
              filtered.map((item, key) => renderTableBody(item, key))
            ) : (
              <tr>
                <td>
                  <h4>No Result</h4>
                </td>
              </tr>
            )}
          </tbody>
        </TableSTC>
      ) : (
        <h3>
          {data
            ? data.length === 0
              ? "No More"
              : "Something went wrong"
            : "Loading"}
        </h3>
      )}
      <TableFooter>
        <h3>On Page {page}</h3>
        <div className="btns">
          {page > 1 ? (
            <ActionButton onClick={() => prev()}>PREVIOUS</ActionButton>
          ) : (
            ""
          )}
          {filtered && filtered.length < limit ? (
            ""
          ) : (
            <ActionButton onClick={() => next()}>NEXT</ActionButton>
          )}
          {filtered && filtered.length < limit ? (
            ""
          ) : (
            <select value={limit} onChange={(e) => updateLimit(e.target.value)}>
              <option value="15">15</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          )}
        </div>
      </TableFooter>
    </Wrap>
  );
};

export default TableWithData;
