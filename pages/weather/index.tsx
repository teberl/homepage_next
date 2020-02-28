import { NextPage } from "next";
import Layout from "../../components/Layout";

const About: NextPage = () => (
  <Layout>
    <div className="w-64 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
      <div className="font-bold flex flex-col text-gray-900">
        <span className="uppercase">Today</span>
        <span className="font-normal text-gray-700 text-sm">July 29</span>
      </div>
      <div className="w-32 h-32 flex items-center justify-center">
        <span
          className="w-20 h-20"
          style={{
            backgroundImage: 'url("/weather_partly_cloud.svg")',
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <p className="text-gray-700 mb-2">Partly cloud</p>
      <div className="text-3xl font-bold text-gray-900 mb-6">
        32º<span className="font-normal text-gray-700 mx-1">/</span>20º
      </div>
      <div className="text-sm flex justify-between w-full">
        <div className="flex items-center text-gray-700 px-2">
          <span
            className="mr-2 h-4 w-4"
            style={{
              backgroundImage: 'url("/weather_drop.svg")',
              backgroundRepeat: "no-repeat"
            }}
          />
          100 l/m<sup>2</sup>
        </div>
        <div className="flex items-center text-gray-700 px-2">
          <span
            className="mr-2 h-4 w-4"
            style={{
              backgroundImage: 'url("/weather_wind_speed.svg")',
              backgroundRepeat: "no-repeat"
            }}
          />
          20 km/h
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
