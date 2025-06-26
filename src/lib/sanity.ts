import { createClient } from "next-sanity";
const options = {
  dataset: process.env.REACT_APP_SANITY_DATASET_NAME,
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === "production",
  apiVersion: "2023-01-01",
};
export default createClient(options);
