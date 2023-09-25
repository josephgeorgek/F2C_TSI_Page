import React from "react";

import { Button } from "components";

const DesktopPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100_03 flex flex-col font-opensans items-center justify-start mx-auto pb-[84px] w-full">
        <div className="flex flex-col md:gap-10 gap-[735px] justify-start w-full">
          <div className="bg-white-A700 h-[145px] w-full"></div>
          <div className="flex flex-row gap-[17px] items-center justify-end md:ml-[0] ml-[1078px] md:px-5 w-[19%] md:w-full">
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="border border-blue_gray-800 border-solid cursor-pointer font-semibold min-w-[124px] text-center text-lg"
                shape="round"
                color="white_A700"
                variant="fill"
              >
                Back
              </Button>
            </div>
            <div className="flex flex-col items-start justify-start w-auto">
              <Button
                className="cursor-pointer font-semibold min-w-[124px] text-center text-lg"
                shape="round"
                color="blue_gray_700_blue_gray_600_01"
              >
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopPage;
