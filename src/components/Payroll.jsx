import React, { useState } from "react";

const SalaryForm = () => {
  const [formData, setFormData] = useState({
    bankName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
    panNumber: "",
    uan: "",
    esicNumber: "",
    basicSalary: "",
    houseRentAllowance: "",
    dearnessAllowance: "",
    conveyanceAllowance: "",
    medicalAllowance: "",
    specialAllowance: "",
    incentives: "",
    overtimePay: "",
    otherAllowances: "",
    pf: "",
    pt: "",
    esi: "",
    tds: "",
    loan: "",
    otherDeductions: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payroll submitted (demo only)");
    setFormData({
      bankName: "",
      accountHolderName: "",
      accountNumber: "",
      ifscCode: "",
      panNumber: "",
      uan: "",
      esicNumber: "",
      basicSalary: "",
      houseRentAllowance: "",
      dearnessAllowance: "",
      conveyanceAllowance: "",
      medicalAllowance: "",
      specialAllowance: "",
      incentives: "",
      overtimePay: "",
      otherAllowances: "",
      pf: "",
      pt: "",
      esi: "",
      tds: "",
      loan: "",
      otherDeductions: "",
    });
  };

  const grossEarnings =
    Number(formData.basicSalary) +
    Number(formData.houseRentAllowance) +
    Number(formData.dearnessAllowance) +
    Number(formData.conveyanceAllowance) +
    Number(formData.medicalAllowance) +
    Number(formData.specialAllowance) +
    Number(formData.incentives) +
    Number(formData.overtimePay) +
    Number(formData.otherAllowances);

  const totalDeductions =
    Number(formData.pf) +
    Number(formData.pt) +
    Number(formData.esi) +
    Number(formData.tds) +
    Number(formData.loan) +
    Number(formData.otherDeductions);

  const netSalary = grossEarnings - totalDeductions;

  return (
    <div className="w-full h-screen min-h-screen flex items-stretch justify-stretch bg-gray-100">
      <div className="w-full h-full bg-white shadow-lg rounded-none flex flex-col justify-start p-8 overflow-y-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-blue-700">
          Salary Entry Form
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-8 w-full"
          style={{ maxWidth: "1600px", margin: "0 auto" }}
        >
          {/* Bank Details */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b pb-2">
              🏦 Bank Details
            </h3>
            <input name="bankName" value={formData.bankName} onChange={handleChange} placeholder="Bank Name" className="border p-3 rounded w-full" />
            <input name="accountHolderName" value={formData.accountHolderName} onChange={handleChange} placeholder="Account Holder Name" className="border p-3 rounded w-full" />
            <input name="accountNumber" value={formData.accountNumber} onChange={handleChange} placeholder="Account Number" className="border p-3 rounded w-full" />
            <input name="ifscCode" value={formData.ifscCode} onChange={handleChange} placeholder="IFSC Code" className="border p-3 rounded w-full" />
            <input name="panNumber" value={formData.panNumber} onChange={handleChange} placeholder="PAN Number" className="border p-3 rounded w-full" />
            <input name="uan" value={formData.uan} onChange={handleChange} placeholder="UAN (Optional)" className="border p-3 rounded w-full" />
            <input name="esicNumber" value={formData.esicNumber} onChange={handleChange} placeholder="ESIC Number (Optional)" className="border p-3 rounded w-full" />
          </div>

          {/* Earnings */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b pb-2">
              💰 Earnings
            </h3>
            <input name="basicSalary" value={formData.basicSalary} onChange={handleChange} placeholder="Basic Salary" type="number" className="border p-3 rounded w-full" />
            <input name="houseRentAllowance" value={formData.houseRentAllowance} onChange={handleChange} placeholder="HRA" type="number" className="border p-3 rounded w-full" />
            <input name="dearnessAllowance" value={formData.dearnessAllowance} onChange={handleChange} placeholder="DA" type="number" className="border p-3 rounded w-full" />
            <input name="conveyanceAllowance" value={formData.conveyanceAllowance} onChange={handleChange} placeholder="Conveyance Allowance" type="number" className="border p-3 rounded w-full" />
            <input name="medicalAllowance" value={formData.medicalAllowance} onChange={handleChange} placeholder="Medical Allowance" type="number" className="border p-3 rounded w-full" />
            <input name="specialAllowance" value={formData.specialAllowance} onChange={handleChange} placeholder="Special Allowance" type="number" className="border p-3 rounded w-full" />
            <input name="incentives" value={formData.incentives} onChange={handleChange} placeholder="Incentives / Bonus" type="number" className="border p-3 rounded w-full" />
            <input name="overtimePay" value={formData.overtimePay} onChange={handleChange} placeholder="Overtime Pay" type="number" className="border p-3 rounded w-full" />
            <input name="otherAllowances" value={formData.otherAllowances} onChange={handleChange} placeholder="Other Allowances" type="number" className="border p-3 rounded w-full" />
          </div>

          {/* Deductions */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-2 border-b pb-2">
              🧾 Deductions
            </h3>
            <input name="pf" value={formData.pf} onChange={handleChange} placeholder="Provident Fund (PF)" type="number" className="border p-3 rounded w-full" />
            <input name="pt" value={formData.pt} onChange={handleChange} placeholder="Professional Tax (PT)" type="number" className="border p-3 rounded w-full" />
            <input name="esi" value={formData.esi} onChange={handleChange} placeholder="Employee State Insurance (ESI)" type="number" className="border p-3 rounded w-full" />
            <input name="tds" value={formData.tds} onChange={handleChange} placeholder="Income Tax (TDS)" type="number" className="border p-3 rounded w-full" />
            <input name="loan" value={formData.loan} onChange={handleChange} placeholder="Loan Deductions" type="number" className="border p-3 rounded w-full" />
            <input name="otherDeductions" value={formData.otherDeductions} onChange={handleChange} placeholder="Other Deductions" type="number" className="border p-3 rounded w-full" />
          </div>

          {/* Salary Summary */}
          <div className="col-span-1 md:col-span-3 mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="p-6 bg-green-100 rounded text-center">
              <p className="text-green-700 font-semibold">Gross Earnings</p>
              <p className="text-2xl font-bold">₹ {grossEarnings.toFixed(2)}</p>
            </div>
            <div className="p-6 bg-red-100 rounded text-center">
              <p className="text-red-700 font-semibold">Total Deductions</p>
              <p className="text-2xl font-bold">₹ {totalDeductions.toFixed(2)}</p>
            </div>
            <div className="p-6 bg-blue-100 rounded text-center">
              <p className="text-blue-700 font-semibold">Net Salary</p>
              <p className="text-2xl font-bold">₹ {netSalary.toFixed(2)}</p>
            </div>
          </div>

          <button
            type="submit"
            className="col-span-1 md:col-span-3 bg-blue-600 text-white p-4 rounded hover:bg-blue-700 mt-8 text-lg font-semibold"
          >
            Save Salary
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalaryForm;