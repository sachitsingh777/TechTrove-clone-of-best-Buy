import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useLocation } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import Productscard from "../Components/Productscard";
import { getData } from "../Redux/productReducer/action";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
const H4 = styled.h3`
  font-size: 20px;
  font-weight: 800;
`;
const H6 = styled.h3`
  font-size: 17px;
  font-weight: 600;
`;

// export const Container = styled.div`
//   background-color: #fed9ff;
//   width: 20%;
//   overflow-y: scroll
//   text-align: center;
//   height: "100px";
//   overflowY: "scroll"
//   padding: 20px;
// `;
//GET /posts?title=json-server&author=typicode
const Productspage = () => {
  const data = useSelector((store) => store.productreducer.products);
  const dispatch = useDispatch();

  const [seacrchparams, setSearchparams] = useSearchParams();
  const initialfilter = seacrchparams.getAll("brand");
  const [filter, setFilter] = useState(initialfilter || []);
  const initialfilterrate = seacrchparams.getAll("rate");
  const [rating, setRating] = useState(initialfilterrate || []);
  const initialfiltercategory = seacrchparams.getAll("category");
  const [category, setCategory] = useState(initialfiltercategory || []);
  const [sort, setSort] = useState("");
  const [reset, setReset] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const location = useLocation();

  const getLength = async () => {
    const data = await axios.get(
      "https://beautiful-calf-wear.cyclic.app/products"
    );
    setTotal(data.data.length);
    // console.log("fgghhjh", data.data.length);
  };
  // console.log("sggggg", total);

  const First = () => {
    setPage(1);
  };
  const handlepage = (value) => {
    let newpage = page + value;
    setPage(newpage);
  };
  const Last = () => {
    setPage(Math.ceil(total / 5));
  };

  const handleAsc = () => {
    setSort("asc");
    setReset("_");
  };
  const handleDesc = () => {
    setSort("desc");
    // console.log(sort);
    setReset("_");
  };
  console.log(sort);
  const SORT = () => {
    return (
      //       GET /posts?_sort=views&_order=asc
      // GET /posts/1/comments?_sort=votes&_order=asc
      <Menu>
        {({ isOpen }) => (
          <>
            <MenuButton isActive={isOpen} as={Button} rightIcon={">"}>
              {/* {isOpen ? "Close" : "Open"} */}
              Sorting By price
            </MenuButton>
            <MenuList>
              <MenuItem onClick={handleAsc} on>
                Low to High
              </MenuItem>
              <MenuItem onClick={handleDesc}>Hight to Low</MenuItem>
              <MenuItem onClick={() => setReset("")}>Reset</MenuItem>
            </MenuList>
          </>
        )}
      </Menu>
    );
  };
  const handleChange = (e) => {
    let newfilter = [...filter];
    const value = e.target.value;
    if (newfilter.includes(value)) {
      newfilter = newfilter.filter((el) => el !== value);
    } else {
      newfilter.push(value);
    }
    setFilter(newfilter);
  };

  const handleChangerate = (e) => {
    let filterrate = [...rating];
    const value = e.target.value;

    if (filterrate.includes(value)) {
      filterrate = filterrate.filter((el) => el !== value);
    } else {
      filterrate.push(value);
    }
    setRating(filterrate);
  };
  const handleChangecategory = (e) => {
    let filtercategory = [...category];
    const value = e.target.value;

    if (filtercategory.includes(value)) {
      filtercategory = filtercategory.filter((el) => el !== value);
    } else {
      filtercategory.push(value);
    }
    setCategory(filtercategory);
  };
  const obj = {
    params: {
      brand: seacrchparams.getAll("brand"),
      rate: seacrchparams.getAll("rate"),
      category: seacrchparams.getAll("category"),
    },
  };

  //changing url by setting useparams

  useEffect(() => {
    let params = {
      brand: filter,
      rate: rating,
      category: category,
    };
    getLength();
    setSearchparams(params);
    dispatch(getData);
  }, [filter, rating, category, sort, page]);

  //filterby getting use params
  useEffect(() => {
    dispatch(getData(obj, sort, reset, page));
  }, [location.search, sort, reset, page]);

  console.log(obj);
  return (
    <>
      <div
        style={{
          display: "flex",
          height: "auto",
          gap: "2%",
          paddingLeft: "2%",
        }}
      >
        <div
          style={{
            height: "500px",
            width: "20%",
            overflowY: "scroll",
          }}
        >
          <H4>Filtering products</H4>
          <H6>Filter by Brand</H6>
          <input
            type="checkbox"
            value={"Amazon"}
            onChange={handleChange}
            checked={filter.includes("Amazon")}
          />

          <label htmlFor=""> Amazon</label>
          <br />
          <input
            type="checkbox"
            value={"iphone"}
            onChange={handleChange}
            checked={filter.includes("iphone")}
          />
          {/* hp,acer,Samsung,google,sony,DJI */}
          <label htmlFor=""> iphone</label>
          <br />
          <input
            type="checkbox"
            value={"hp"}
            onChange={handleChange}
            checked={filter.includes("hp")}
          />
          <label htmlFor=""> HP laptops</label>
          <br />
          <input
            type="checkbox"
            value={"acer"}
            onChange={handleChange}
            checked={filter.includes("acer")}
          />

          <label htmlFor=""> Acer</label>
          <br />

          <input
            type="checkbox"
            value={"sony"}
            onChange={handleChange}
            checked={filter.includes("sony")}
          />

          <label htmlFor=""> Sony</label>
          <br />
          <input
            type="checkbox"
            value={"google"}
            onChange={handleChange}
            checked={filter.includes("google")}
          />
          <label htmlFor=""> Google</label>
          <br />
          <input
            type="checkbox"
            value={"sonos"}
            onChange={handleChange}
            checked={filter.includes("sonos")}
          />
          <label htmlFor=""> Sonos</label>
          <br />
          <input
            type="checkbox"
            value={"toshiba"}
            onChange={handleChange}
            checked={filter.includes("toshiba")}
          />
          <label htmlFor=""> Toshiba</label>
          <br />
          <hr />
          <H6>Filter by Rating</H6>
          <input
            type="checkbox"
            value={"⭐⭐⭐⭐⭐"}
            onChange={handleChangerate}
            checked={rating.includes("⭐⭐⭐⭐⭐")}
          />
          <label htmlFor=""> ⭐⭐⭐⭐⭐</label>
          <br />
          <input
            type="checkbox"
            value={"⭐⭐⭐⭐"}
            onChange={handleChangerate}
            checked={rating.includes("⭐⭐⭐⭐")}
          />
          <label htmlFor=""> ⭐⭐⭐⭐</label>
          <br />
          <input
            type="checkbox"
            value={"⭐⭐⭐"}
            onChange={handleChangerate}
            checked={rating.includes("⭐⭐⭐")}
          />
          <label htmlFor=""> ⭐⭐⭐</label>
          <br />
          <input
            type="checkbox"
            value={"⭐⭐"}
            onChange={handleChangerate}
            checked={rating.includes("⭐⭐")}
          />
          <label htmlFor=""> ⭐⭐</label>
          <br />
          <input
            type="checkbox"
            value={"⭐"}
            onChange={handleChangerate}
            checked={rating.includes("⭐")}
          />
          <label htmlFor=""> ⭐</label>
          <br />

          <hr />
          <H6>Filter by Category</H6>
          {/* TV,phone,electronic,laptop, */}
          <input
            type="checkbox"
            value={"laptop"}
            onChange={handleChangecategory}
            checked={category.includes("laptop")}
          />
          {/* hp,acer,Samsung,google,sony,DJI */}
          <label htmlFor=""> laptop</label>
          <br />
          <input
            type="checkbox"
            value={"phone"}
            onChange={handleChangecategory}
            checked={category.includes("phone")}
          />
          {/* hp,acer,Samsung,google,sony,DJI */}
          <label htmlFor=""> Mobiles</label>
          <br />

          <input
            type="checkbox"
            value={"TV"}
            onChange={handleChangecategory}
            checked={category.includes("TV")}
          />
          <label htmlFor=""> Telivisons</label>
          <br />
          <input
            type="checkbox"
            value={"electronic"}
            onChange={handleChangecategory}
            checked={category.includes("electronic")}
          />
          <label htmlFor=""> Other Gadgets</label>
          <br />
        </div>
        <div
          style={{
            height: "auto",
            width: "78%",
          }}
        >
          <div>
            <SORT />
          </div>
          {data === undefined ? (
            <h1 style={{ color: "red" }}> Loading Error</h1>
          ) : (
            data.map((el, ind) => {
              return <Productscard key={el.id} {...el} />;
            })
          )}
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          padding: "20px",
        }}
      >
        <Button
          fontSize={"15px"}
          px={7}
          py={5}
          bg={"blue"}
          color={"white"}
          _hover={{ backgroundColor: "grey", color: "black" }}
          onClick={First}
          isDisabled={page == 1}
        >
          First
        </Button>
        <Button
          fontSize={"15px"}
          px={7}
          py={5}
          bg={"blue"}
          color={"white"}
          _hover={{ backgroundColor: "grey", color: "black" }}
          onClick={() => handlepage(-1)}
          isDisabled={page === 1}
        >
          Prev
        </Button>
        <Button fontSize={"15px"} px={7} py={5} bg={"blue"} color={"white"}>
          {page}
        </Button>
        <Button
          _hover={{ backgroundColor: "grey", color: "black" }}
          fontSize={"15px"}
          px={7}
          py={5}
          bg={"blue"}
          color={"white"}
          onClick={() => handlepage(1)}
          isDisabled={page == Math.ceil(total / 5)}
        >
          Next
        </Button>
        <Button
          _hover={{ backgroundColor: "grey", color: "black" }}
          fontSize={"15px"}
          px={7}
          py={5}
          bg={"blue"}
          color={"white"}
          onClick={Last}
          isDisabled={page == Math.ceil(total / 5)}
        >
          Last
        </Button>
      </div>
    </>
  );
};

export default Productspage;
