import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "./components/table";
import TableWithData from "./components/table-with-data";

const Root = () => {
  // DATA
  const [data, setData] = useState(null);
  // Pagination page number
  const [page, setPage] = useState(1);
  // Number of data to fetch
  const [limit, setLimit] = useState(15);

  useEffect(() => {
    /*
     * Fetching data from api. this part can also be done seperately if
     * sate management applied
     */
    (async () => {
      const fetch_url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`;
      const res = await axios.get(fetch_url);
      setData(res.data);
    })();
  }, [limit, page]);

  const handleNext = () => setPage(page + 1);
  const handlePrev = () => setPage(page - 1);
  const updateLimit = (val) => setLimit(parseInt(val));

  return (
    <div className="container">
      {/* Table info for type 1*/}
      <h2 className="head">Table Type - 1</h2>
      <p className="info">
        This table fetches data from api. The api url and table title is passed
        as <span className="detail">props</span>. The component uses sets{" "}
        <span className="detail">_page</span> and{" "}
        <span className="detail">_limit</span> as query parameter to api url.
        The <span className="detail">Update</span> and{" "}
        <span className="detail">Delete</span> action can also be passed to the
        component as
        <span className="detail">updateAction</span> and{" "}
        <span className="detail"> deleteAction</span> props respectively
        <span className="detail">filter_param</span> (field for secondary
        filter)
      </p>

      {/* table component */}
      <Table
        title="Users"
        url="https://jsonplaceholder.typicode.com/users"
        filter_param="name"
      />
      <Table
        title="Posts"
        url="https://jsonplaceholder.typicode.com/posts"
        filter_param="title"
      />

      {/* table info for type 2 */}
      <h2 className="head">Table Type - 2</h2>
      <p className="info">
        This table renders data passed to it as{" "}
        <span className="detail">props</span>. In this case the table does not
        handle any thing. All data related action must be handled manually. This
        table is built to work with state-management use case. The component's
        required props ar as listed - <span className="detail">title</span>{" "}
        (table title)
        <span className="detail">data</span> (actual data)
        <span className="detail">page</span> (Page number){" "}
        <span className="detail">limit</span> (number of row to show)
        <span className="detail">next</span> (fucntion to get next set of data)
        <span className="detail">prev</span> (fucntion to get previous set of
        data)
        <span className="detail">updateLimit</span> (Update Limit of data to
        show)
        <span className="detail">filter_param</span> (field for secondary
        filter)
      </p>

      <p className="info">
        Optional props are - <span className="detail">updateAction</span> and{" "}
        <span className="detail"> deleteAction</span> props to handle data
        update and delete
      </p>

      {/* table type 2 */}
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
    </div>
  );
};
export default Root;
