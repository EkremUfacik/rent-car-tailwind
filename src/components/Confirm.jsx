import React from "react";

const Confirm = ({ handleReservation, setOpen }) => {
  return (
    <div
      className="fixed top-0 left-0 bottom-0 right-0 bg-[rgba(0,0,0,0.5)]"
      onClick={() => setOpen(false)}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-xl shodow-lg flex flex-col gap-4 justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold">
          Rezervasyonunuz oluşturulacak.
        </h3>
        <p className="text-lg font-bold"> Emin misiniz ?</p>
        <div className="flex gap-6">
          <button
            className="bg-slate-600 text-white px-6 py-1 rounded-xl hover:bg-slate-700 transition-all"
            onClick={handleReservation}
          >
            Evet
          </button>
          <button
            className="bg-primary text-white px-6 py-1 rounded-xl hover:bg-red-700 transition-all"
            onClick={() => setOpen(false)}
          >
            Hayır
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
