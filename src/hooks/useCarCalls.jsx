import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toastError, toastSuccess } from "../helper/toastify";
import { fetchEnd, fetchStart } from "../features/rentSlice";

const useCarCalls = () => {
  const BASE_URL = "https://kamil01.pythonanywhere.com/";
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const getCars = async (sd, ed, setCars) => {
    try {
      dispatch(fetchStart());
      const { data } = await axios(`${BASE_URL}api/car/?start=${sd}&end=${ed}`);
      const availableCars = data.filter((car) => car.is_available);
      setCars(availableCars);
      dispatch(fetchEnd());
    } catch (error) {
      console.log(error);
      dispatch(fetchEnd());
    }
  };

  const getCarDetail = async (id, sd, ed, setCarDetail) => {
    try {
      dispatch(fetchStart());
      const { data } = await axios(
        `${BASE_URL}api/car/${id}/?start=${sd}&end=${ed}`
      );
      setCarDetail(data);
      dispatch(fetchEnd());
    } catch (error) {
      console.log(error);
      dispatch(fetchEnd());
    }
  };
  const postReservation = async (id, sd, ed) => {
    try {
      const { data } = await axios.post(
        `${BASE_URL}api/reservation/`,
        {
          car_id: id,
          start_date: sd,
          end_date: ed,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );
      console.log(data);
      toastSuccess("Rezervasyon Oluşturuldu.");
    } catch (error) {
      console.log(error);
      toastError("Hata Oluştu.");
    }
  };

  const getReservation = async (setReservation) => {
    try {
      const { data } = await axios(`${BASE_URL}api/reservation/`, {
        headers: {
          Authorization: `Token ${token}`,
        },
      });
      console.log(data);
      setReservation(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getCars, getCarDetail, postReservation, getReservation };
};

export default useCarCalls;
