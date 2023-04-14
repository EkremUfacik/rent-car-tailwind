import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";
import CarsNav from "../components/CarsNav";
import useCarCalls from "../hooks/useCarCalls";
import { useSelector } from "react-redux";

const Cars = () => {
  const { startDate, endDate, diffDays } = useSelector((state) => state.rent);
  const navigate = useNavigate();
  const { getCars } = useCarCalls();

  // const { sd, ed, diffDays } = state ? state : [];
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (diffDays) {
      const sd = new Date(startDate).toLocaleDateString("en-CA");
      const ed = new Date(endDate).toLocaleDateString("en-CA");
      getCars(sd, ed, setCars);
    } else {
      navigate("/");
      alert("Select Date!");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <CarsNav />
      <div className="p-4 flex flex-wrap justify-center gap-2 py-10 min-h-screen">
        {cars.map((car, index) => (
          <CarCard key={index} car={car} diffDays={diffDays} />
        ))}
      </div>
    </div>
  );
};

export default Cars;
