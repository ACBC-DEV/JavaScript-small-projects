"use client";
import { useState } from "react";
export default function FormTip() {
  const [billAmount, setBillAmount] = useState<number | null>(null);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [tipAmount, setTipAmount] = useState<number | null>(null);
  const calculateTip = () => {
    if (!billAmount || !tipPercentage) return;
    const result = billAmount * (tipPercentage / 100);
    setTipAmount(result);
  };
  const cleanForm = () => {
    setBillAmount(null);
    setTipPercentage(0);
    setTipAmount(null);
  };
  return (
    <div className="border bg-card text-card-foreground shadow-sm w-full max-w-lg rounded-lg">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          Tip Calculator
        </h3>
        <p className="text-sm text-muted-foreground">
          Calculate your tips easily
        </p>
        <div className="mt-1">
          <button
            className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border  bg-background hover:bg-accent hover:text-accent-foreground h-10 px-2  text-xs"
            onClick={cleanForm}
          >
            Clear
          </button>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="billAmount"
          >
            Bill Amount
          </label>
          <input
            value={billAmount || ""}
            onChange={(e) => setBillAmount(Number(e.target.value))}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            id="billAmount"
            placeholder="Enter the bill amount"
            type="number"
          />
        </div>
        <div className="space-y-2">
          <label
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor="tipPercentage"
          >
            Tip Percentage
          </label>
          <select
            value={tipPercentage || ""}
            onChange={(e) => setTipPercentage(Number(e.target.value))}
            role="combobox"
            aria-controls="radix-:r1v:"
            aria-expanded="false"
            aria-autocomplete="none"
            dir="ltr"
            data-state="closed"
            data-placeholder=""
            className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled selected>
              Select the tip percentage
            </option>
            {[...Array(6)].map((_, i) => (
              <option key={i} value={(i + 1) * 5}>
                {(i + 1) * 5}%
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={calculateTip}
          className="inline-flex bg-[#19191c] hover:opacity-80 text-white hover:cursor-pointer items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
        >
          Calculate Tip
        </button>
        {tipAmount && (
          <div className="p-4 bg-gray-100  rounded-md">
            <h2 className="text-lg font-medium">
              Tip Amount:{Math.round(tipAmount)}
            </h2>
          </div>
        )}
      </div>
    </div>
  );
}
