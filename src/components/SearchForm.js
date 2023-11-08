import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../actions/loginActions";
import Button from "./Button";
import InputGroup from "./InputGroup";

function SearchForm() {
  const dispatch = useDispatch();
  const { searchValue } = useSelector((reduxData) => reduxData.loginReducer);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search value:", searchValue);
  };
  return (
    <form className="flex items-end gap-4" onSubmit={handleSearch}>
      <InputGroup
        value={searchValue}
        onChange={(e) => dispatch(setSearchValue(e.target.value))}
        label="Nhập nội dung cần tìm"
        placeholder="Tên người dùng, số điện thoại hoặc email"
        className="w-[558px]"
      />
      <Button type="submit">Tìm</Button>
    </form>
  );
}

export default SearchForm;
