import React, { useState } from "react";
import { ProductSelection } from "./components/product-selection";
import { CarouselProvider, Slide, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./App.css";
import { InputSlide } from "./components/input";
import { Results } from "./components/results";
import { SELECTIONS_OBJECT } from "./constants";
import { Feedback } from "./components/feedback";

function App() {
  const [selections, setSelections] = useState<string[]>([]);
  //I used it to calculate the main total
  const [inputs, setInputs] = useState<Record<string, any>>({
    question1: 0,
    question2: 0,
    question3: 0,
  });
  //I used it for input view purpose
  const [rawInputs, setRawInputs] = useState<Record<string, any>>({
    question1: "0",
    question2: "0",
    question3: "0",
  });

  const onSetRawInputs = (id: string, value: string) => {
    setRawInputs({ ...rawInputs, ["question".concat(id)]: value });
  };

  const onSaveQuestionsValue = (value: string, id: string) => {
    setInputs({
      ...inputs,
      ["question".concat(id)]: parseFloat(value),
    });
  };

  const onRestart = () => {
    setSelections([]);
    setInputs({
      question1: 0,
      question2: 0,
      question3: 0,
    });
    setRawInputs({
      question1: "0",
      question2: "0",
      question3: "0",
    });
  };

  const {
    identifyRequirements,
    quotation,
    findProducts,
    raiseOrder,
    authoriseSale,
    payProvider,
    deliverProduct,
    invoiceCheck,
    placeOrder,
  } = SELECTIONS_OBJECT;

  const supplierAndProduct =
    (identifyRequirements.estimate + quotation.estimate) *
    parseFloat(inputs.question2 ?? "0");
  const quotationOrderProcess =
    (findProducts.estimate +
      raiseOrder.estimate +
      authoriseSale.estimate +
      payProvider.estimate) *
    parseFloat(inputs.question2 ?? "0");
  const expediting =
    deliverProduct.estimate * parseFloat(inputs.question1 ?? "0");
  const processingInvoice =
    invoiceCheck.estimate * parseFloat(inputs.question2 ?? "0");
  const payingSuppliers =
    placeOrder.estimate * parseFloat(inputs.question3 ?? "0");

  const total =
    supplierAndProduct +
    quotationOrderProcess +
    expediting +
    processingInvoice +
    payingSuppliers;

  const results = {
    supplierAndProduct,
    quotationOrderProcess,
    expediting,
    processingInvoice,
    payingSuppliers,
    total,
  };

  return (
    <div className="App">
      <div className="App-overlay -flex -flex-center -flex-col">
        <div className="-header -w-80">CALCULATING YOUR TOTAL COSTS</div>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={6}
          isIntrinsicHeight
          visibleSlides={1}
          dragEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <ProductSelection
                values={selections}
                setSelections={setSelections}
              />
            </Slide>
            <Slide index={1}>
              <InputSlide
                value={rawInputs.question1}
                setValue={(value) => onSetRawInputs("1", value)}
                index={0}
                total={3}
                question={
                  "What is your approximate annual Spend on industrial items?"
                }
                onValueChange={(value: string) =>
                  onSaveQuestionsValue(value, "1")
                }
              />
            </Slide>
            <Slide index={2}>
              <InputSlide
                value={rawInputs.question2}
                setValue={(value) => onSetRawInputs("2", value)}
                index={1}
                total={3}
                question={
                  "Approximately how many unique purchase orders are raised per annum for these items?"
                }
                onValueChange={(value: string) =>
                  onSaveQuestionsValue(value, "2")
                }
              />
            </Slide>
            <Slide index={3}>
              <InputSlide
                value={rawInputs.question3}
                setValue={(value) => onSetRawInputs("3", value)}
                index={2}
                total={3}
                question={
                  "Approximately how many suppliers are you using for industrial supplies?"
                }
                onValueChange={(value: string) =>
                  onSaveQuestionsValue(value, "3")
                }
              />
            </Slide>
            <Slide index={4}>
              <Results results={results} />
            </Slide>
            <Slide index={5}>
              <Feedback restart={onRestart} />
            </Slide>
          </Slider>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default App;
