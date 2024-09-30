"use client";
import Welcome from "./homeSection/Welcome";
import { CreateData } from "./routesSection/calendare/CreateData";

const HomePage = () => {
  console.log("createData", CreateData({ locale: "en-US" }));

  return (
    <div>
      <Welcome />
    </div>
  );
};

export default HomePage;
