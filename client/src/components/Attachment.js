// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

// import { createUploadData, uploadFile } from "../helper/requests";

export default function Attachment({ attach, description, name }) {
  // const [file, setFile] = useState(null);

  // const formData = useSelector((store) => store.kyc.formData);

  // const handleChange = (event) => {
  //   setFile(event.target.files[0]);
  // };

  // useEffect(() => {
  //   if (!file) {
  //     return;
  //   }

  //   let fileInfo = createUploadData(formData, file, name);

  //   uploadFile(fileInfo);
  // }, [file, formData, name]);

  return (
    <div className="mb-3">
      <input
        type="file"
        className="form-control"
        name={name}
        accept="image/png, image/jpeg"
        // onChange={handleChange}
      />
    </div>
  );
}
