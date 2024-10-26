import { FaPhoneAlt } from "react-icons/fa";
import { BiEnvelope } from "react-icons/bi";
import * as Yup from "yup"; // Importing Yup for form validation
import { useFormik } from "formik";
import axios from "axios";

export default function Contact() {
  // Validation schema using Yup
  const mySchema = Yup.object({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email format"),
    phone: Yup.string().required("Phone number is required"), // Make sure to add phone validation
    name: Yup.string().required("Name is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
    },
    validationSchema: mySchema, // Validation schema
    onSubmit: (values, { resetForm }) => {
      console.log("Form Data:", values); // Log the form data
      contactForm(values); // Handle form submission
      resetForm(); // Clear the input fields
      alert("Submission successful!"); // Alert on successful submission
    },
  });

  async function contactForm(values) {
    // Adjust the object to match the expected API format
    const formattedValues = {
      email: values.email,
      phone: values.phone,
      name: values.name,
    };

    try {
      const response = await axios.post(
        "http://upskilling-egypt.com:3000/contact",
        formattedValues
      );
      console.log("API Response:", response.data);
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  }

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-center hello poppins-regular text-blue-600 font-bold mt-3 mb-3 relative">
          <div className="border1 borders text-center"></div>
          <div className="border2 borders text-center"></div>
          <div className="border3 borders text-center"></div>
          <div className="border4 borders text-center"></div>
          Contact us
        </h1>
      </div>
      <div className="flex flex-wrap justify-center mx-4 overflow-x-hidden">
        <div className="w-full sm:w-1/2 p-2">
          <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
            <div className="mb-5">
              <input
                type="text"
                id="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                onBlur={formik.handleBlur}
                className={`bg border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  formik.errors.name && formik.touched.name
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Name"
                required
              />
              {formik.errors.name && formik.touched.name && (
                <div className="text-red-500 text-sm">{formik.errors.name}</div>
              )}
            </div>
            <div className="mb-5">
              <input
                type="email"
                id="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                className={`bg border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Email"
                required
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500 text-sm">
                  {formik.errors.email}
                </div>
              )}
            </div>
            <div className="mb-5">
              <input
                type="text"
                id="phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                className={`bg border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${
                  formik.errors.phone && formik.touched.phone
                    ? "border-red-500"
                    : ""
                }`}
                placeholder="Phone"
                required
              />
              {formik.errors.phone && formik.touched.phone && (
                <div className="text-red-500 text-sm">
                  {formik.errors.phone}
                </div>
              )}
            </div>
            <button
              type="submit"
              className="hover:text-white hover:bg-blue-700 border-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full sm:w-1/2 p-2 flex flex-col items-center sm:items-start">
          {/* First email block */}
          <div className="flex items-center justify-center sm:justify-start mb-2">
            <BiEnvelope
              className="envelope-icon"
              size={30}
              style={{
                color: "white",
                backgroundColor: "blue",
                borderRadius: "4px",
              }}
            />
            <p className="ml-2">
              upskillingeg1<span className="underline">@gmail.com</span>
            </p>
          </div>

          {/* Second email block */}
          <div className="flex items-center justify-center sm:justify-start">
            <FaPhoneAlt
              className="envelope-icon"
              size={30}
              style={{
                color: "white",
                backgroundColor: "blue",
                borderRadius: "4px",
                padding: "5px",
              }}
            />
            <p className="ml-2">+201223489520</p>
          </div>
        </div>
      </div>
    </>
  );
}
