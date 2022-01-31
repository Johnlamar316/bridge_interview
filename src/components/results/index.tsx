import { ButtonBack, ButtonNext } from "pure-react-carousel";
import "./results.css";
import { formatNumber } from "../../utils";
import React from "react";
import { get } from "lodash";

interface ResultsProps {
  results: Record<string, any>;
}
export const Results = (props: ResultsProps) => {
  const { results } = props;

  const totals = {
    supplierAndProduct: {
      label: "Supplier & Product",
      value: get(results, "supplierAndProduct", 0),
    },
    quotationOrderProcess: {
      label: "Quotation to order process",
      value: get(results, "quotationOrderProcess", 0),
    },
    expediting: {
      label: "Expediting & receiving orders",
      value: get(results, "expediting", 0),
    },
    processingInvoice: {
      label: "Processing invoices",
      value: get(results, "processingInvoice", 0),
    },
    payingSuppliers: {
      label: "Paying suppliers",
      value: get(results, "payingSuppliers", 0),
    },
  };

  return (
    <div className={"-flex -w-100 -flex-center -flex-col -result-slide"}>
      <div
        className="-flex -h-100 -flex-between"
        style={{ width: "80vw", gap: 32 }}
      >
        <div className="-flex -flex-col -result-message -w-50">
          <p>
            By utilising the Bridge Sales Enablement Agency calculator
            organisations can simplify the processes associated with indirect
            procurement and unlock significant typical savings of up to 60% of
            process costs.
          </p>
          <p>
            Based on what you have told us about your process we can estimate
            that the following costs are being insured within your procurement
            processes.
          </p>
          <div className="-w-100 -flex">
            <ButtonBack className="-continue -flex -flex-between -flex-center">
              <div className="-flex -flex-between -flex-center -w-100">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    transform={"rotate(180)"}
                  >
                    {/*<defs>*/}
                    {/*  <style>.a{fill:#fff;}.b{fill:#db2f20;}</style>*/}
                    {/*</defs>*/}
                    <g transform="translate(-575 298) rotate(-90)">
                      <circle
                        className="a"
                        cx="14"
                        cy="14"
                        r="14"
                        fill={"var(--white)"}
                        transform="translate(298 603) rotate(180)"
                      />
                      <path
                        className="b"
                        d="M5,0l5,8H0Z"
                        fill={"var(--red)"}
                        transform="translate(289 594) rotate(180)"
                      />
                    </g>
                  </svg>
                </div>
                <span>Go back</span>
              </div>
            </ButtonBack>
          </div>
        </div>
        <div className="-flex -flex-col -result-totals -w-50">
          {Object.values(totals).map((value) => {
            return (
              <div
                key={value.label}
                className="-total-item -flex -flex-a-center -flex-between"
              >
                <span className="-total-item-title">{value.label}</span>
                <span className="-total-item-value">
                  £ {formatNumber(value.value.toFixed(2))}
                </span>
              </div>
            );
          })}
          <div className="-total-item -total -flex -flex-a-center -flex-between">
            <span className="-total-item-title">
              Total Process Costs (year)
            </span>
            <span className="-total-item-value -total">
              £ {formatNumber(get(results, "total", 0).toFixed(2))}
            </span>
          </div>
          <div className="-w-100 -h-100 -flex">
            <ButtonNext className="-send-report -btn -flex -flex-between -flex-center">
              <div className="-flex -flex-between -flex-center -w-100">
                <span>Send me this report</span>
              </div>
            </ButtonNext>
          </div>
        </div>
      </div>
    </div>
  );
};
