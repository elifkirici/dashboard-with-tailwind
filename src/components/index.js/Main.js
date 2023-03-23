import React from "react";

function Main() {
  return (
    <>
      <div className="left-[100px] w-11/12  relative grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10 ">
            <div className="article bg-white drop-shadow-3xl ">
              <div class="flex justify-around items-center h-20">
                <div>
                  <p className="text-xs text-gray font-semibold">Cost</p>
                  <span className="font-bold text-xs">100002,25</span>
                </div>

                <div>iç</div>
              </div>
            </div>

            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around items-center h-20">
                <div>
                  <p className="text-xs text-gray font-semibold">TOTAL SALES</p>
                  <span className="font-bold text-xs">100046,63</span>
                </div>

                <div>iç</div>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around items-center h-20">
                <div>
                  <p className="text-xs text-gray font-semibold">
                    PRODUCTION CONSUMTION
                  </p>
                  <span className="font-bold text-xs">29.4%</span>
                </div>

                <div>iç</div>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around items-center h-20">
                <div>
                  <p className="text-xs text-gray font-semibold">
                    CARBON EMISSION
                  </p>
                  <span className="font-bold text-xs">583 ton</span>
                </div>

                <div>iç</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around">
                <div>iç</div>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around">
                <div>iç</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mt-10">
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center flex-col pl-5 h-20">
                <p className="text-gray">ELECTRICTY</p>

                <span className="font-semibold text-sm">418.7 kWh</span>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center flex-col pl-5 h-20">
                <p className="text-gray">NATURAL GAS</p>

                <span className="font-semibold text-sm">418.7 kWh</span>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center flex-col pl-5 h-20">
                <p className="text-gray">P</p>

                <span className="font-semibold text-sm">418.7 kWh</span>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center flex-col pl-5 h-20">
                <p className="text-gray">SOLAR POWER</p>

                <span className="font-semibold text-sm">418.7 kWh</span>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center flex-col pl-5 h-20">
                <p className="text-gray">WATER</p>

                <span className="font-semibold text-sm">418.7 kWh</span>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center flex-col pl-5 h-20">
                <div className="text-gray">WIND</div>

                <span className="font-semibold text-sm">418.7 kWh</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-center">
                <div>WIND</div>

                <span>418.7 kWh</span>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around">
                <div>iç</div>

                <div>iç</div>
              </div>
            </div>
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around">
                <div>iç</div>

                <div>iç</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 mt-10 ">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
            <div className="article bg-white drop-shadow-3xl">
              <div class="flex justify-around h-10 items-center">
                <p>Day</p>
                <p>Week</p>
                <p>Month</p>
                <p>Year</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
