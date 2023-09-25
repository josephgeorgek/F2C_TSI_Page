import React from "react";

import { Button, Img, Line, List, SelectBox, Text } from "components";
import BCCLandingCardHolderColumnFive from "components/BCCLandingCardHolderColumnFive";
import BCCLandingCardHolderColumnsignal from "components/BCCLandingCardHolderColumnsignal";

const headerdropdownaOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const BCCLandingCardHolderPage: React.FC = () => {
  return (
    <>
      <div className="bg-gray-100_01 font-opensans h-[1489px] mx-auto relative w-full">
        <div className="absolute bg-white-A700 bottom-[0] flex flex-col inset-x-[0] items-center justify-end mx-auto w-full">
          <div className="bg-gray-50 flex flex-col items-center justify-start pb-60 w-full">
            <Img
              className="h-[1454px] sm:h-auto object-cover md:w-full"
              src="images/img_background.png"
              alt="background"
            />
          </div>
        </div>
        <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
          <div className="h-[345px] md:px-5 relative w-full">
            <BCCLandingCardHolderColumnsignal className="flex flex-col items-center justify-start mb-[-1px] mx-auto w-full z-[1]" />
            <div className="h-[267px] mt-auto mx-auto w-full">
              <BCCLandingCardHolderColumnFive
                className="flex flex-col gap-4 items-center justify-start mb-[-27px] mx-auto w-auto md:w-full z-[1]"
                goodmorningpatrOne={
                  <Text className="text-blue_gray-800 text-xs w-auto">
                    <span className="text-blue_gray-800 font-opensans text-left font-normal">
                      Good morning,{" "}
                    </span>
                    <span className="text-blue_gray-800 font-opensans text-left font-bold">
                      PATRICK TAN
                    </span>
                  </Text>
                }
              />
              <div className="flex flex-row md:gap-10 items-center justify-between max-w-[1440px] mt-auto mx-auto pb-8 pt-[59px] md:px-10 sm:px-5 px-[156px] w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <div className="flex flex-col items-center justify-start w-auto">
                    <div className="flex flex-col items-start justify-start w-auto">
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-800 text-xl w-auto"
                          size="txtOpenSansBold20Bluegray800"
                        >
                          Business Credit Card
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-auto">
                  <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                    <SelectBox
                      className="font-semibold text-base text-right w-full"
                      placeholderClassName="text-blue_gray-800"
                      indicator={
                        <Img
                          className="h-6 w-6"
                          src="images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="headerdropdowna"
                      options={headerdropdownaOptionsList}
                      isSearchable={false}
                      placeholder="Patrick Tan"
                      shape="round"
                      color="white_A700_7f"
                      size="xs"
                      variant="fill"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line className="bg-blue_gray-100 h-px w-full" />
          <div className="flex flex-col items-start justify-start p-[49px] md:px-10 sm:px-5 w-full">
            <div className="flex flex-col gap-10 items-start justify-start mb-1.5 md:ml-[0] ml-[107px] w-auto md:w-full">
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[699px] w-full">
                <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtOpenSansSemiBold16Bluegray400"
                  >
                    Card no.
                  </Text>
                  <div className="flex flex-row gap-2 items-center justify-start w-auto">
                    <Text
                      className="text-blue_gray-800 text-xl w-auto"
                      size="txtOpenSansBold20Bluegray800"
                    >
                      5588 6088 1234 8888
                    </Text>
                    <Text
                      className="bg-blue_gray-100_7f justify-center pt-1 px-2 rounded-lg text-blue_gray-800 text-sm w-auto"
                      size="txtOpenSansSemiBold14"
                    >
                      Copy
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-full">
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtOpenSansSemiBold16Bluegray400"
                  >
                    Expiry date
                  </Text>
                  <div className="flex flex-col items-end justify-start w-full">
                    <Text
                      className="text-blue_gray-800 text-xl w-auto"
                      size="txtOpenSansBold20Bluegray800"
                    >
                      08/25
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-full">
                    <Text
                      className="text-base text-blue_gray-600"
                      size="txtOpenSansSemiBold16Bluegray600"
                    >
                      CVV
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start mt-1 md:pr-10 pr-20 sm:pr-5 w-full">
                    <Text
                      className="text-blue_gray-800 text-xl"
                      size="txtOpenSansBold20Bluegray800"
                    >
                      •••
                    </Text>
                    <Text
                      className="bg-blue_gray-100_7f justify-center mb-0.5 px-2 py-0.5 rounded-lg text-blue_gray-800 text-sm w-auto"
                      size="txtOpenSansSemiBold14"
                    >
                      Show
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex md:flex-col flex-row gap-4 items-start justify-start max-w-[699px] w-full">
                <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtOpenSansSemiBold16Bluegray400"
                  >
                    Amount due
                  </Text>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <div className="flex flex-row gap-1 items-end justify-start w-auto">
                      <Text
                        className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                        size="txtOpenSansBold24"
                      >
                        <span className="text-blue_gray-800 font-opensans text-left text-xl font-bold">
                          8,000
                        </span>
                        <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                          .00
                        </span>
                      </Text>
                      <div className="flex flex-col items-start justify-start w-auto">
                        <Text
                          className="text-blue_gray-400 text-sm uppercase w-auto"
                          size="txtOpenSansBold14"
                        >
                          SGD
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-full">
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtOpenSansSemiBold16Bluegray400"
                  >
                    Min. payment
                  </Text>
                  <div className="flex flex-row gap-1 items-end justify-start w-full">
                    <Text
                      className="text-blue_gray-800 text-xl w-auto"
                      size="txtOpenSansBold20Bluegray800"
                    >
                      <span className="text-blue_gray-800 font-opensans text-left font-bold">
                        1,000
                      </span>
                      <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                        .00
                      </span>
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-400 text-sm uppercase w-auto"
                        size="txtOpenSansBold14"
                      >
                        SGD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col items-center justify-start w-[24%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-0.5 pt-0.5 w-full">
                    <Text
                      className="text-base text-blue_gray-600"
                      size="txtOpenSansSemiBold16Bluegray600"
                    >
                      Payment due date
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start mt-1 w-full">
                    <div className="flex flex-col items-end justify-start w-[120px]">
                      <Text
                        className="text-blue_gray-800 text-xl w-auto"
                        size="txtOpenSansBold20Bluegray800"
                      >
                        25 Aug 2022
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-4 grid md:grid-cols-1 grid-cols-2 justify-start max-w-[699px] w-full"
                orientation="horizontal"
              >
                <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtOpenSansSemiBold16Bluegray400"
                  >
                    Credit limit
                  </Text>
                  <div className="flex flex-row gap-1 items-end justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                      size="txtOpenSansBold24"
                    >
                      <span className="text-blue_gray-800 font-opensans text-left text-xl font-bold">
                        50,000
                      </span>
                      <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                        .00
                      </span>
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-400 text-sm uppercase w-auto"
                        size="txtOpenSansBold14"
                      >
                        SGD
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1 items-start justify-start md:pr-10 sm:pr-5 pr-[79px] w-[304px]">
                  <Text
                    className="text-base text-blue_gray-400 w-full"
                    size="txtOpenSansSemiBold16Bluegray400"
                  >
                    Current card spend
                  </Text>
                  <div className="flex flex-row gap-1 items-end justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-blue_gray-800 sm:text-xl w-auto"
                      size="txtOpenSansBold24"
                    >
                      <span className="text-blue_gray-800 font-opensans text-left text-xl font-bold">
                        10,000
                      </span>
                      <span className="text-blue_gray-800 font-opensans text-left text-base font-bold">
                        .00
                      </span>
                    </Text>
                    <div className="flex flex-col items-start justify-start w-auto">
                      <Text
                        className="text-blue_gray-400 text-sm uppercase w-auto"
                        size="txtOpenSansBold14"
                      >
                        SGD
                      </Text>
                    </div>
                  </div>
                </div>
              </List>
            </div>
          </div>
        </div>
        <footer className="absolute bg-white-A700 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto pt-10 md:px-5 px-[156px] rounded-tl-[24px] rounded-tr-[24px] w-full">
          <div className="flex flex-col gap-[25px] items-center justify-center w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <div className="flex flex-col items-start justify-start pr-1.5 py-1.5 w-full">
                <div className="flex flex-col items-center justify-start w-auto">
                  <Text
                    className="text-blue_gray-800 text-xl w-auto"
                    size="txtOpenSansBold20Bluegray800"
                  >
                    Transaction history
                  </Text>
                </div>
              </div>
              <div className="md:h-[1876px] sm:h-[566px] h-[597px] relative w-full">
                <div className="absolute bg-white-A700 border border-gray-300 border-solid flex flex-col inset-x-[0] items-start justify-start mx-auto p-4 rounded-[12px] top-[0] w-full">
                  <Button
                    className="border border-gray-300 border-solid cursor-pointer flex items-center justify-center mb-[494px] min-w-[222px] mt-1 rounded-lg"
                    rightIcon={
                      <Img
                        className="h-6 ml-2"
                        src="images/img_arrowdown.svg"
                        alt="arrow_down"
                      />
                    }
                    color="white_A700_b2"
                    size="xs"
                    variant="fill"
                  >
                    <div className="font-semibold text-base text-left">
                      Unbilled transactions
                    </div>
                  </Button>
                </div>
                <ul className="absolute bottom-[0] flex flex-col inset-x-[0] items-center justify-start mx-auto w-auto md:w-full common-column-list">
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-blue_gray-300 text-xs uppercase w-auto"
                              size="txtOpenSansSemiBold12"
                            >
                              Transaction Date
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-blue_gray-300 text-xs uppercase w-auto"
                              size="txtOpenSansSemiBold12"
                            >
                              Description
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-blue_gray-300 text-right text-xs uppercase w-auto"
                              size="txtOpenSansSemiBold12"
                            >
                              Transaction Amount (SGD)
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              CREDIT CARD BILL PAYMENT
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-right text-teal-400 w-auto"
                              size="txtOpenSansBold16"
                            >
                              10,000.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              THINKIFIC.COM VAN
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-blue_gray-900 text-right w-auto"
                              size="txtOpenSansBold16Bluegray900"
                            >
                              - 500.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              CREDIT CARD BILL PAYMENT
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-right text-teal-400 w-auto"
                              size="txtOpenSansBold16"
                            >
                              10,000.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              CREDIT CARD BILL PAYMENT
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-right text-teal-400 w-auto"
                              size="txtOpenSansBold16"
                            >
                              10,000.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              CREDIT CARD BILL PAYMENT
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-right text-teal-400 w-auto"
                              size="txtOpenSansBold16"
                            >
                              10,000.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              THINKIFIC.COM VAN
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-blue_gray-900 text-right w-auto"
                              size="txtOpenSansBold16Bluegray900"
                            >
                              - 500.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              THINKIFIC.COM VAN
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-blue_gray-900 text-right w-auto"
                              size="txtOpenSansBold16Bluegray900"
                            >
                              - 500.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:">
                      <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start md:w-full">
                        <div className="flex flex-col gap-[19px] items-start justify-start w-auto">
                          <div className="flex flex-col items-start justify-start p-4 w-[152px]">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              18 Aug 2022
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[19px] items-start justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-start p-4 w-[472px] sm:w-full">
                            <Text
                              className="text-base text-blue_gray-800 w-auto"
                              size="txtOpenSansSemiBold16"
                            >
                              THINKIFIC.COM VAN
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                        <div className="flex flex-col gap-[19px] items-end justify-start w-auto sm:w-full">
                          <div className="flex flex-col items-start justify-end pl-2 pr-4 py-4 w-auto">
                            <Text
                              className="text-base text-blue_gray-900 text-right w-auto"
                              size="txtOpenSansBold16Bluegray900"
                            >
                              - 500.00
                            </Text>
                          </div>
                          <Line className="bg-gray-300 h-px w-full" />
                        </div>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex sm:flex-col flex-row md:gap-10 items-center justify-between max-w-[1128px] py-6 w-full">
              <Text
                className="text-blue_gray-800 text-sm w-auto"
                size="txtOpenSansRegular14Bluegray800"
              >
                © JG. All Rights Reserved.
              </Text>
              <Text
                className="text-blue_gray-800 text-sm w-auto"
                size="txtOpenSansRegular14Bluegray800"
              >
                Conditions of Access | Security & Privacy
              </Text>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BCCLandingCardHolderPage;
