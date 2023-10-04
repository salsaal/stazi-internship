import { useEffect, useState } from "react";
import "./App.css";
import { data } from "./data.js";
import Navbar from "./components/navbar/navbar";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
  Link,
  redirect,
  useParams,
} from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Carcard from "./components/carCard/carcard";
import { PaginationItem } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Cards = ({
  search,
  startIndex,
  setstartIndex,
  stopIndex,
  setstopIndex,
}) => {
  console.log(params.id);
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (isNaN(params.id)) {
      navigate("/page/1");
    } else {
      console.log("hi");
      if (parseInt(params.id) > 10) {
        navigate(`/page/10`);
      }
    }
  }, []);
  setstartIndex((params.id - 1) * 6);
  setstopIndex(params.id * 6);
  const localData = data.slice(startIndex, stopIndex);
  console.log(
    localData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  return (
    <div className="cards">
      {localData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      ).length > 0 ? (
        <>
          {localData
            .filter((item) =>
              item.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((item, id) => (
              <Carcard car={item} key={id} />
            ))}
        </>
      ) : (
        <h1
          style={{
            height: "70vh",
            gridColumnStart: 1,
            gridColumnEnd: 12,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Cars
        </h1>
      )}
    </div>
  );
};

function App() {
  const [search, setSearch] = useState("");
  const [startIndex, setstartIndex] = useState();
  const [stopIndex, setstopIndex] = useState();

  const navigate = useNavigate();
  return (
    <div className="App">
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route
          path="/page/:id"
          element={
            <Cards
              search={search}
              startIndex={startIndex}
              setstartIndex={setstartIndex}
              stopIndex={stopIndex}
              setstopIndex={setstopIndex}
            />
          }
        ></Route>
        <Route path="*" element={<Navigate to={`/page/1`}></Navigate>}></Route>
      </Routes>
      <div className="bottom">
        <p>
          {startIndex + 1 + "-" + stopIndex} out of {data.length}
        </p>
        <Stack spacing={2}>
          <Pagination
            onChange={(e, v) => {
              return navigate(`/page/${v}`);
            }}
            count={10}
            variant="outlined"
            shape="rounded"
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </div>
  );
}

export default App;
