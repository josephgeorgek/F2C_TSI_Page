import React from "react";

import { Text } from "components";

type ApplyCardTwoHeaderProps = Omit<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "usertitle"
> &
  Partial<{ usertitle: string }>;

const ApplyCardTwoHeader: React.FC<ApplyCardTwoHeaderProps> = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-between max-w-[1440px] md:px-10 sm:px-5 px-[156px] py-8 w-full">
          <div className="flex flex-col items-center justify-start w-auto">
            <div className="flex flex-col items-center justify-start w-auto">
              <div className="flex flex-col items-start justify-start w-auto">
                <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                  <Text
                    className="text-blue_gray-800 text-xl w-auto"
                    size="txtOpenSansBold20Bluegray800"
                  >
                    {props?.usertitle}
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ApplyCardTwoHeader.defaultProps = {
  usertitle: "Make this OCBC Business Credit Card yours",
};

export default ApplyCardTwoHeader;
