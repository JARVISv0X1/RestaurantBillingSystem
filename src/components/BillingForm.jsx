import React, { useState } from "react";
import dish from "../dish";
import ItemLists from "./ItemLists";

export default function BillingForm({ ...prop }) {
  let billingObject = {
    totalSigret: "0",
    totalWiskey: "0",
    totalRum: "0",
    totalGin: "0",
  };

  let [totalBill, setTotalBill] = useState(0);

  function addItem(event) {
    let name = event.target.name;
    let value = event.target.value;
    if (value < 0) {
      alert("Value should not be less than 0.");
      return;
    } else {
      if (name === "Sigrets") {
        billingObject.totalSigret = event.target.value;
      } else if (name === "Wisky") {
        billingObject.totalWiskey = event.target.value;
      } else if (name === "Rum") {
        billingObject.totalRum = event.target.value;
      } else if (name === "Gin") {
        billingObject.totalGin = event.target.value;
      }
    }

    console.log("total sigrets: " + billingObject.totalSigret);
  }

  function calculateTotalBill({ billingObject }, dish) {
    //  billingObject = JSON.parse(billingObject);
    let total = 0;
    dish.map((items) => {
      if (items.dishName === "Sigrets") {
        total = total + billingObject.totalSigret * items.pricePerItem;
      } else if (items.dishName === "Wisky") {
        total = total + billingObject.totalWiskey * items.pricePerItem;
      } else if (items.dishName === "Rum") {
        total = total + billingObject.totalRum * items.pricePerItem;
      } else if (items.dishName === "Gin") {
        total = total + billingObject.totalGin * items.pricePerItem;
      }
      return setTotalBill(total);
    });

    console.log("TotalBill: " + totalBill);
  }
  // useEffect(() => {
  //   console.log("TotalBill: " + totalBill);
  // }, [totalBill]);
  return (
    <>
      <table {...prop}>
        <thead>
          <tr>
            <th className="w-25">ID</th>
            <th className="w-25">Dish Name</th>
            <th className="w-25">Dish Price</th>
            <th className="w-25">Handle</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {dish.map((dishItems) => {
        return (
          <>
            <table className="table">
              <tbody>
                <ItemLists
                  dName={dishItems.dishName}
                  dPrice={dishItems.pricePerItem}
                  dId={dishItems.id}
                  key={dishItems.id}
                  onChangeValue={addItem}
                ></ItemLists>
              </tbody>
            </table>
          </>
        );
      })}
      <div className="container d-flex align-items-sm-center">
        <button
          onClick={() => calculateTotalBill({ billingObject }, dish)}
          className="btn btn-primary mx-auto"
        >
          Generate Bill
        </button>
      </div>
      <div className="container d-flex align-items-sm-center">
        <h3 className="mx-auto mt-3">Total bill : {totalBill}</h3>
      </div>
    </>
  );
}
