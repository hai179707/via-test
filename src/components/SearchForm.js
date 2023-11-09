import { FastField, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import InputField from "./InputField";

function SearchForm() {
  const handleSearch = (value) => {
    console.log("Search value:", value.searchValue);
  };

  const validationSchema = Yup.object().shape({
    search: Yup.string().required("Hãy nhập thứ bạn tìm kiếm ở đây"),
  });

  return (
    <Formik
      initialValues={{ search: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSearch}
    >
      {() => (
        <Form className="flex items-end gap-4">
          <FastField
            name="search"
            component={InputField}
            label="Nhập nội dung cần tìm"
            placeholder="Tên người dùng, số điện thoại hoặc email"
            className="w-[558px]" 
          />
          <Button type="submit">Tìm</Button>
        </Form>
      )}
    </Formik>
  );
}

export default SearchForm;
