import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Md360 } from "react-icons/md";
import {
  BsFillPeopleFill,
  BsCalendar3,
  BsFillFuelPumpFill,
  BsFillPersonVcardFill,
  BsFillCreditCard2BackFill,
} from "react-icons/bs";
import { SiStopstalk } from "react-icons/si";
import { GiGearStickPattern } from "react-icons/gi";
import { FaRoad, FaCar } from "react-icons/fa";
import { RiNavigationFill } from "react-icons/ri";
import { FcCalendar } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useCarCalls from "../hooks/useCarCalls";
import Confirm from "./Confirm";

const CarCard = ({ car }) => {
  const {
    startDate,
    endDate,
    startTime,
    endTime,
    diffDays,
    pickupCity,
    returnCity,
  } = useSelector((state) => state.rent);

  const { postReservation } = useCarCalls();

  const { firstName, lastName } = useSelector((state) => state.auth);

  const [isFlipped, setIsFlipped] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  // console.log(startDate.toLocaleDateString("tr-TR"));
  // console.log(startTime.getHours());
  // console.log(endTime.getHours());

  const handleReservation = () => {
    const sd = new Date(startDate).toLocaleDateString("en-CA");
    const ed = new Date(endDate).toLocaleDateString("en-CA");
    postReservation(car.id, sd, ed);
    navigate("/myreservations");
  };

  return (
    <div className="flex gap-4 flex-col lg:flex-row">
      <div className="flex-1 lg:min-w-[30rem]">
        <ReactCardFlip isFlipped={isFlipped}>
          <div className="border-2 mx-auto p-8 leading-8 aspect-square max-w-3xl max-h-[40rem]">
            <div className="flex justify-between">
              <div>
                <p className="text-secondary text-sm font-bold mb-4">
                  EKONOMİK
                </p>
                <p className="font-bold text-xl">{`${car?.brand} ${car?.model}`}</p>
                <p className="font-semibold text-lg mt-2">{car?.year}</p>
              </div>
              <div className="text-end">
                <p
                  className="text-secondary text-sm font-bold flex items-center gap-2 mb-4 cursor-pointer"
                  onClick={() => setIsFlipped((prev) => !prev)}
                >
                  <Md360 /> Tüm Özellikler
                </p>
                <div className="font-medium text-sm leading-8">
                  <p>Dizel/Benzin</p>
                  <p>{car?.gear === "m" ? "Manuel" : "Otomatik"}</p>
                  <p>1000 Km</p>
                </div>
              </div>
            </div>
            <div className="aspect-video flex items-center mt-10">
              <img src={car?.image} alt="car" className="" />
            </div>
          </div>

          <div className="border-2 p-6 mx-auto leading-8 aspect-square max-w-3xl max-h-[40rem] ">
            <div className="flex justify-between border-b-2 mb-4">
              <div>
                <p className="text-secondary text-sm font-bold mb-4">
                  EKONOMİK
                </p>
                <p className="font-bold text-xl pb-4">{`${car?.brand} ${car?.model}`}</p>
              </div>
              <div className="">
                <p
                  className="text-secondary text-sm font-bold flex items-center gap-2 mb-4 cursor-pointer"
                  onClick={() => setIsFlipped((prev) => !prev)}
                >
                  <Md360 /> Geri Dön
                </p>
              </div>
            </div>

            <div className="flex justify-around leading-10">
              <div className="flex-1">
                <h5 className="font-bold">Araç Özellikleri</h5>
                <div className="flex items-center gap-2">
                  <BsFillPeopleFill size={20} />
                  <p>5 Yetişkin</p>
                </div>
                <div className="flex items-center gap-2">
                  <SiStopstalk size={20} />
                  <p>ABS</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillFuelPumpFill size={20} />
                  <p>Dizel/Benzin</p>
                </div>
                <div className="flex items-center gap-2">
                  <GiGearStickPattern size={20} />
                  <p>{car?.gear === "m" ? "Manuel" : "Otomatik"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <FaCar size={20} />
                  <p>{car?.year} Model</p>
                </div>
              </div>
              <div className="border-l-2 h-80 pl-4 flex-1">
                <h5 className="font-bold">Kiralama Koşulları</h5>
                <div className="flex items-center gap-2">
                  <FaRoad size={20} />
                  <p>1000 Km</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsCalendar3 size={20} />
                  <p>21 Yaş ve Üstü</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillPersonVcardFill size={20} />
                  <p>Ehliyet Yaşı 1 ve Üzeri</p>
                </div>
                <div className="flex items-center gap-2">
                  <BsFillCreditCard2BackFill size={20} />
                  <p>1 Kredi Kartı</p>
                </div>
              </div>
            </div>
          </div>
        </ReactCardFlip>
      </div>
      <div className="flex-1">
        <div className="px-8 max-w-xl max-h-[40rem] leading-8 mx-auto">
          <p className="text-center text-xl font-semibold pb-4">
            Rezervasyon Detayları
          </p>
          <div className="flex justify-between px-4 mb-4">
            <p className="text-lg font-semibold text-gray-600">Kiralayan :</p>
            <p className="font-bold text-lg">{`${firstName} ${lastName}`}</p>
          </div>

          <div className="flex justify-around my-6">
            <div className="w-32">
              <RiNavigationFill
                size={24}
                className="text-red-800 rotate-90 shadow-inner shadow-red-800 rounded-full"
              />
              <p className="text-gray-400 font-semibold">ALIŞ NOKTASI</p>
              <p className="font-bold text-xl">{pickupCity.toUpperCase()}</p>
            </div>
            <div className="w-32">
              <RiNavigationFill
                size={24}
                className="text-red-800 rotate-180 shadow-inner shadow-red-800 rounded-full"
              />
              <p className="text-gray-400 font-semibold">TESLİM NOKTASI</p>
              <p className="font-bold text-xl">{returnCity.toUpperCase()}</p>
            </div>
          </div>
          <div className="flex justify-around ">
            <div className="w-32">
              <FcCalendar size={24} />
              <p className="text-gray-400 font-semibold">ALIŞ TARİHİ</p>
              <p className="font-bold text-xl">
                {new Date(startDate).toLocaleDateString("tr-TR")}{" "}
                {new Date(startTime)?.getHours()}:00
              </p>
            </div>
            <div className="w-32">
              <FcCalendar size={24} />
              <p className="text-gray-400 font-semibold">TESLİM TARİHİ</p>
              <p className="font-bold text-xl">
                {new Date(endDate).toLocaleDateString("tr-TR")}{" "}
                {new Date(endTime).getHours()}:00
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 font-semibold text-xl mt-8">
            <div className="flex justify-between items-center ">
              <p className="text-lg font-semibold text-gray-500">
                Günlük Kiralama Ücreti :
              </p>
              <p className="">{car?.rent_per_day} TL</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold text-gray-500">
                Toplam Kiralanacak Gün :
              </p>
              <p className="">{diffDays} Gün</p>
            </div>
            <div className="flex justify-between items-center ">
              <p className="text-lg font-semibold text-gray-500">
                Toplam Kiralama Ücreti :
              </p>
              <p className="">{car?.rent_per_day * diffDays} TL</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <button
              className="bg-secondary text-white ml-0 mx-auto mt-3 py-2 px-4 rounded-full  font-semibold hover:bg-red-600 transition"
              onClick={() => setOpen(true)}
            >
              Rezervasyon Oluştur
            </button>
          </div>
          {open && (
            <Confirm handleReservation={handleReservation} setOpen={setOpen} />
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;
