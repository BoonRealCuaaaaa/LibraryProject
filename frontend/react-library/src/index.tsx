import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
   "pk_test_51PVlM7HsHECx8se0x3Hz1omwZPjy4i9PCCZFCt1CmzBm4uWtxwtILdHZqkezkeM0D09SPw0FgMXhKSK0clNPSQTB00MTNEStDI"
);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
   <BrowserRouter>
      <Elements stripe={stripePromise}>
         <App />
      </Elements>
   </BrowserRouter>
);
