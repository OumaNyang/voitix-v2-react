import React, { useState } from "react";
import jsPDF from "jspdf";
import "./InvoicePage.css";
import { Container } from "react-bootstrap";
import { fontRobotoNormal } from "../assets/css/fonts/Roboto/Roboto-Regular-normal.js";

const CreateInvoicePage = () => {
  const [items, setItems] = useState([
    { itemserial: "", description: "", brandmodel: "", quantity: 1.0, uom: "", price: 0.00 }
  ]);

  const [netTotal, setNetTotal] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [logo, setLogo] = useState(null);
  const [taxRate, setTaxRate] = useState(16);
  const [taxAmount, setTaxAmount] = useState(0);
  const [taxStatus, setTaxStatus] = useState("AddTax");

  const [formData, setFormData] = useState({
    createDocument: "INVOICE",
    taxAmount: 0,
    validity: 30,
    businessName: "",
    businessAddress: "",
    taxName: "Value Added Tax [VAT]",
    currency: "KES",
    customerName: "",
    customerAddress: "",
    deliveryAddress: "",
    invoiceDate: "",
    dueDate: "",
    purchaseOrderNumber: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
 
  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);
    calculateTotal(newItems, taxRate, taxStatus);
  };

  const addItem = () => {
    setItems([...items, { itemserial: "", description: "", brandmodel: "", quantity: 1.00, uom: "", price: 0.00 }]);
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    calculateTotal(newItems, taxRate, taxStatus);
  };

  const handleTaxStatusChange = (event) => {
    const status = event.target.value;
    setTaxStatus(status);
    calculateTotal(items, taxRate, status);
  };

  const calculateTotal = (items, taxRate, taxStatus) => {
    const subtotal = items.reduce((acc, item) => acc + item.quantity * item.price, 0);
    setSubTotal(subtotal);

    let taxAmount = 0;
    let netTotal = 0;

    switch (taxStatus) {
      case "AddTax":
        taxAmount = (subtotal * taxRate) / 100;
        netTotal = subtotal + taxAmount;
        break;
      case "TaxInclusive":
        netTotal = subtotal;
        taxAmount = (subtotal * taxRate) / (100 + taxRate);
        break;
      case "NoTax":
        taxAmount = 0;
        netTotal = subtotal;
        break;
      default:
        break;
    }

    setTaxAmount(taxAmount);
    setNetTotal(netTotal);
  };

  const handleLogoUpload = (event) => {
    setLogo(URL.createObjectURL(event.target.files[0]));
  };

  const handleTaxRateChange = (event) => {
    const rate = parseFloat(event.target.value);
    setTaxRate(rate);
    calculateTotal(items, rate, taxStatus);
  };

  const validateNumberInput = (event) => {
    const { value, selectionStart, selectionEnd } = event.target;
    if (
      (event.key >= '0' && event.key <= '9') ||
      event.key === '.' ||
      event.key === 'Backspace' ||
      event.key === 'Delete' ||
      event.key === 'ArrowLeft' ||
      event.key === 'ArrowRight'
    ) {
      const newValue = value.slice(0, selectionStart) + event.key + value.slice(selectionEnd);
      const decimalIndex = newValue.indexOf('.');
      if (decimalIndex !== -1 && newValue.slice(decimalIndex + 1).length > 2) {
        event.preventDefault();
      }
    } else {
      event.preventDefault();
    }
  };

  const handlePaste = (event) => {
    const pasteData = event.clipboardData.getData('text');
    const sanitizedData = pasteData.replace(/[^0-9.]/g, '');
    const [integerPart, decimalPart] = sanitizedData.split('.');
    const truncatedDecimalPart = decimalPart ? decimalPart.slice(0, 2) : '';
    const cleanedData = [integerPart, truncatedDecimalPart].filter(Boolean).join('.');
    event.preventDefault();
    const { target } = event;
    const { selectionStart, selectionEnd } = target;
    const newValue = target.value.slice(0, selectionStart) + cleanedData + target.value.slice(selectionEnd);
    target.value = newValue;
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.addFileToVFS("Roboto-Regular-normal.ttf", fontRobotoNormal);
    doc.addFont("Roboto-Regular-normal.ttf", "Roboto", "normal");
    doc.addFont("Roboto-Regular-normal.ttf", "Roboto", "bold");
    doc.setFont("Roboto");

    if (logo) {
      const imgData = logo;
      doc.addImage(imgData, "JPEG", 8, 5, 35, 25);
    }

 
 
    if (logo) {
      const imgData = logo;
      doc.addImage(imgData, "JPEG", 8, 5, 35, 25);
    }

   
    doc.setFont("Roboto", "bold");
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(11);
    doc.setTextColor(0, 0, 0);

    

    doc.setFontSize(30);
    doc.setTextColor(255, 0, 0);  
    doc.text(formData.createDocument, 200, 15, { align: 'right' });
    
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); 
    doc.text('Ref Number :'+ formData.purchaseOrderNumber, 200, 24, { align: 'right' });
    doc.text((formData.createDocument) + ' Date :' + formData.invoiceDate, 200, 31, { align: 'right' });
    doc.text('Validity: '+ formData.validity, 200, 38, { align: 'right' });
    doc.text('Due Date :' + formData.dueDate, 200, 45, { align: 'right' });
  
 

 


// Set up y-position for the next section
let yPosition = 55;
const columnWidth = 60;
const col1X = 8;
const col2X = col1X + columnWidth + 5;
const col3X = col2X + columnWidth + 5;
const headerHeight = 8;
const headerTextYOffset = 7;

// Draw gray background for headers and set up column headers
doc.setFillColor('#fef'); // Gray background color

// Customer Information header
doc.rect(col1X, yPosition, columnWidth, headerHeight, 'F');
doc.setFont("Roboto", "bold");
doc.setFontSize(11);
doc.setTextColor(0, 0, 0);
doc.text('CUSTOMER INFORMATION', col1X, yPosition + headerTextYOffset);
doc.setFillColor('#fef'); // Gray background color

// Contact Person header
doc.rect(col2X, yPosition, columnWidth, headerHeight, 'F');
doc.text('CONTACT PERSON', col2X, yPosition + headerTextYOffset);

doc.setFillColor('#fef'); // Gray background color

// Delivery Address header
doc.rect(col3X, yPosition, columnWidth, headerHeight, 'F');
doc.text('DELIVERY ADDRESS', col3X, yPosition + headerTextYOffset);

// Set up for details below headers
yPosition += headerHeight + 3; // Move yPosition below the headers
const lineHeight = 5; // Adjust line height as needed

doc.setFont("Roboto", "normal");
doc.setFontSize(9);

// Draw a table structure by using rect for columns
const drawColumnText = (textLines, xPos, yStart) => {
  let yOffset = yStart;
  textLines.forEach((line) => {
    doc.text(line, xPos, yOffset);
    yOffset += lineHeight;
  });
};

// Customer Information
const customerNameLines = doc.splitTextToSize(formData.customerName, columnWidth);
drawColumnText(customerNameLines, col1X, yPosition);
const customerAddressLines = doc.splitTextToSize(formData.customerAddress, columnWidth);
drawColumnText(customerAddressLines, col1X, yPosition + customerNameLines.length * lineHeight);

// Contact Person
const contactPersonLines = doc.splitTextToSize('Paul Pogba General', columnWidth);
drawColumnText(contactPersonLines, col2X, yPosition);
const contactPersonContactLines = doc.splitTextToSize('pogba@gmail.com, 0725678908', columnWidth);
drawColumnText(contactPersonContactLines, col2X, yPosition + contactPersonLines.length * lineHeight);

// Delivery Address
const deliveryAddressLines = doc.splitTextToSize(formData.deliveryAddress, columnWidth);
drawColumnText(deliveryAddressLines, col3X, yPosition);

// Move yPosition to the end of the last column
const maxHeight = Math.max(
  customerNameLines.length + customerAddressLines.length,
  contactPersonLines.length + contactPersonContactLines.length,
  deliveryAddressLines.length
) * lineHeight;
yPosition += maxHeight + 10;

// Subject
doc.setFont("Roboto", "bold");
doc.setFontSize(11);
doc.text('SUBJECT', 8, yPosition);
doc.setFont("Roboto", "normal");
doc.text(formData.subjectTitle, 8, yPosition + lineHeight);












    // Define table starting coordinates and dimensions
    const tableStartY = 110;
    const tableWidth = 190;
    const colWidths = [10, 40, 50, 20, 20, 20, 30]; // Adjust column widths as needed
    const rowHeight = 10;

    // Draw table header with background
    doc.setFillColor(200, 200, 200); // Set a light gray background
    doc.rect(10, tableStartY, tableWidth, rowHeight, 'F'); // Draw filled rectangle

    // Add table headers
    const headers = ["Serial", "Description", "Brand/Model", "Qty", "UOM", "Unit Price", "Total"];
    let currentX = 10;
    doc.setFontSize(9);
    doc.setTextColor(0, 0, 0); // Set text color to black
    headers.forEach((header, index) => {
      doc.text(header, currentX + colWidths[index] / 2, tableStartY + 6, { align: 'center' }); // Center-align header text
      currentX += colWidths[index];
    });

    // Draw borders for header row
    doc.setDrawColor(0, 0, 0); // Set border color to black
    doc.rect(10, tableStartY, tableWidth, rowHeight); // Border around header row

    // Add items with borders and text wrapping
    let y = tableStartY + rowHeight;
    items.forEach((item, index) => {
      const itemData = [
        item.itemserial,
        doc.splitTextToSize(item.description, colWidths[1] - 2), // Wrap description text
        item.brandmodel,
        item.quantity.toString(),
        item.uom,
        parseFloat(item.price).toFixed(2),
        (parseFloat(item.price) * item.quantity).toFixed(2)
      ];

      let maxLines = 1;
      currentX = 10;
      itemData.forEach((data, colIndex) => {
        const lineData = Array.isArray(data) ? data : [data];
        maxLines = Math.max(maxLines, lineData.length);
        lineData.forEach((line, lineIndex) => {
          doc.text(line, currentX + colWidths[colIndex] / 2, y + 4 + lineIndex * (rowHeight / 2), { align: 'center' });
        });
        currentX += colWidths[colIndex];
      });

      // Draw borders for each row
      const rowLines = maxLines * (rowHeight / 2);
      doc.rect(10, y - rowHeight / 2, tableWidth, rowLines); // Border around item row

      y += rowLines;
    });

    // Add totals and other information with borders
    const summaryStartY = y + 10;
    const summaryData = [
      { label: `Subtotal: ${formData.currency}`, value: subTotal.toFixed(2) },
      ...(taxStatus !== "NoTax" ? [{ label: `${formData.taxName} (${taxRate}%): ${formData.currency}`, value: taxAmount.toFixed(2) }] : []),
      { label: `Total: ${formData.currency}`, value: netTotal.toFixed(2) },
    ];

    summaryData.forEach((summary, index) => {
      doc.text(summary.label, 140, summaryStartY + index * rowHeight, { align: 'right' });
      doc.text(summary.value, 190, summaryStartY + index * rowHeight, { align: 'right' });

      doc.line(140, summaryStartY + index * rowHeight - rowHeight / 2, 190, summaryStartY + index * rowHeight - rowHeight / 2); // Horizontal border
      doc.line(140, summaryStartY + (index + 1) * rowHeight - rowHeight / 2, 190, summaryStartY + (index + 1) * rowHeight - rowHeight / 2); // Bottom border
    });

    doc.line(140, summaryStartY - rowHeight / 2, 140, summaryStartY + summaryData.length * rowHeight - rowHeight / 2); // Left border
    doc.line(190, summaryStartY - rowHeight / 2, 190, summaryStartY + summaryData.length * rowHeight - rowHeight / 2); // Right border

    // Save the PDF
    // const fileName = `${createDocument.toLowerCase().replace(/\s/g, "_")}_${Date.now()}.pdf`;
    // doc.save(fileName);
    // Generate the PDF and open it in a new tab
    const pdfData = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfData);
    window.open(pdfUrl);
  };
  return (
    <section>
      <Container className="invoice-page" >

        <div className="row mt-5 py-5">
          <div className="col-md-2">
            < div>
              <div className="mt-2">
                <label>Document</label>
                <select
                  className="form-select form-select-sm create-document"
                  name="createDocument" // Add the name attribute here
                  onChange={handleInputChange}
                  value={formData.createDocument}
                >
                  <option value="INVOICE">INVOICE</option>
                  <option value="PROFORMA INVOICE">PROFORMA INVOICE</option>
                  <option value="QUOTATION">QUOTATION</option>
                  <option value="DELIVERY NOTE">DELIVERY NOTE</option>
                  <option value="PURCHASE ORDER">PURCHASE ORDER</option>
                </select>
              </div>

              <div className="mt-2">
                <label>Currency</label>
                <select
                  className="form-select form-select-sm currency-selector"
                  name="currency"
                  onChange={handleInputChange}
                  value={formData.currency}
                >
                  <option value="KES">KES</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              <div className="mt-2">
                <label>Tax Name</label>

                <input
                  type="text"
                  name="taxName"
                  className="form-control form-control-sm"
                  placeholder="Tax Name"
                  value={formData.taxName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mt-2">
                <label>Tax Rate</label>

                <input
                  type="text"
                  className="form-control form-control-sm"
                  placeholder="Rate [Percentage]"
                  value={taxRate}
                  onChange={handleTaxRateChange}
                  onKeyDown={validateNumberInput}
                  onPaste={handlePaste}
                />
              </div>
              <div className="mt-3 justify-content-end">

                <button className="btn btn-sm btn-outline-danger rounded-pill me-3 " onClick={generatePDF}>
                  Download
                </button>
                <button className="btn  btn-sm btn-outline-success rounded-pill " onClick={generatePDF}>
                  Create
                </button>
              </div>
            </div>

          </div>
          <div className="col-md-10">
            <div className="">
              <div className="  row invoice-header">
                <div className="col-md-2">
                  <div className="logo-upload">
                    <input
                      type="file"
                      onChange={handleLogoUpload}
                      style={{ display: "none" }}
                      id="logo-upload"
                    />
                    <label htmlFor="logo-upload">
                      {logo ? (
                        <img src={logo} alt="Logo" style={{ maxWidth: "100%" }} />
                      ) : (
                        "Click here to upload your logo"
                      )}
                    </label>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="business-details">
                    <textarea
                      rows="2"
                      name="businessName"
                      className="form-control form-control-sm mb-2"
                      placeholder="Business Name"
                      value={formData.businessName}
                      onChange={handleInputChange}
                    />
                    <textarea
                      rows="3"
                      name="businessAddress"
                      className="form-control form-control-sm mb-2"
                      placeholder="Business Address"
                      value={formData.businessAddress}
                      onChange={handleInputChange}

                    />
                  </div>
                </div>
                <div className="col-md-2"></div>

                <div className="col-md-3">
                  <div className="invoice-number">
                    <h2 className="text-center fw-bold">{formData.createDocument}</h2>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      placeholder="Reference Number" />
                  </div>
                </div>
              </div>

              <div className="row invoice-info">
                <div className="col-md-4">

                  <textarea
                    rows="2"
                    name="customerName"
                    className="form-control form-control-sm mb-2"
                    placeholder="Customer Name"
                    onChange={handleInputChange}
                    value={formData.customerName}

                  />
                  <textarea
                    rows="3"
                    name="customerAddress"
                    className="form-control form-control-sm mb-2"
                    placeholder="Customer Address"
                    onChange={handleInputChange}
                    value={formData.customerAddress}
                  />
                </div>
                <div className="col-md-4">
                  <textarea
                    rows="3"
                    name="deliveryAddress"
                    className="form-control form-control-sm mb-2"
                    placeholder="Delivery Address"
                    onChange={handleInputChange}
                    value={formData.deliveryAddress}
                  />
                </div>

                <div className="col-md-3">
                  <div >

                    <label>Invoice Date</label>
                    <input
                      type="date"
                      name="invoiceDate"
                      className="form-control form-control-sm"
                      placeholder="Invoice Date"
                      value={formData.invoiceDate}
                      onChange={handleInputChange}
                    />
                  </div>
                  <label>Validity(Days)</label>
                  <input

                    list="validityOptions"

                    className="form-control form-control-sm"

                    type="text"
                    name="validity"
                    placeholder="Select or type "
                    value={formData.validity}
                    onChange={handleInputChange}
                    onKeyDown={validateNumberInput}
                    onPaste={handlePaste}
                  />
                  <datalist id="validityOptions">
                    <option value="7">7</option>
                    <option value="14">14</option>
                    <option value="30">30</option>
                    <option value="60">60</option>
                    <option value="90">90</option>
                    <option value="120">120</option>
                  </datalist>

                  <div>

                    <label>Invoice Due</label>

                    <input
                      type="date"
                      className="form-control form-control-sm"
                      placeholder="Due Date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleInputChange}
                    />
                  </div>


                </div>
                <div className="col-md-7  mt-4">
                  <input
                    type="text"
                    name="subjectTitle"
                    className="form-control form-control-sm"
                    placeholder="Subject /Title "
                    value={formData.subjectTitle}
                    onChange={handleInputChange}
                  />

                </div>
                <div className="col-md-3 mt-1">
                  <label> Purchase Order #</label>

                  <input
                    type="text"
                    name="purchaseOrderNumber"
                    className="form-control form-control-sm"
                    placeholder="Purchase Order Number #"
                    value={formData.purchaseOrderNumber}
                    onChange={handleInputChange} />
                </div>
              </div>
              <hr></hr>
              <div className="row">
                <div className="col-12 line-items">

                  <table>
                    <thead>
                      <tr className="text-center">
                        <th width="2%">#</th>
                        <th width="10%">Serial Number#</th>
                        <th width="40%">Description</th>
                        <th width="10%">Brand/Model</th>
                        <th width="8%">Quantity</th>
                        <th width="10%">UoM</th>
                        <th width="8%">Unit Price</th>
                        <th width="12%">Total</th>
                        <th width="3%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {items.map((item, index) => (
                        <tr key={index} className="itemRow" >
                          <td>{index + 1}</td>
                          <td>
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              name="itemserial"
                              value={item.itemserial}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              name="description"
                              placeholder="Enter Service or Item Description"
                              value={item.description}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              name="brandmodel"
                              value={item.brandmodel}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                          </td>
                          <td>
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              name="quantity"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(index, e)}
                              onKeyDown={validateNumberInput}
                              onPaste={handlePaste}
                            />
                          </td>
                          <td>

                            <input
                              className="form-control form-control-sm"
                              list="uomOptions"
                              type="text"
                              name="uom"
                              placeholder="Select or type "
                              value={item.uom}
                              onChange={(e) => handleItemChange(index, e)}
                            />
                            <datalist id="uomOptions">
                              <option value="Pieces">Pieces</option>
                              <option value="Kg">Kg</option>
                              <option value="Boxes">Boxes</option>
                              <option value="Metres">Metres</option>
                              <option value="People">People</option>
                            </datalist>
                          </td>
                          <td>
                            <input
                              className="form-control form-control-sm"
                              type="text"
                              name="price"
                              value={item.price}
                              onChange={(e) => handleItemChange(index, e)}
                              onKeyDown={validateNumberInput}
                              onPaste={handlePaste} />
                          </td>
                          <td>
                            {formData.currency} {(item.quantity * item.price).toFixed(2)}
                          </td>
                          <td className="remove-item">
                            <button className="icon-btn"> <i onClick={() => removeItem(index)} className="bi bi-trash-fill text-danger" ></i> </button>
                          </td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="9">
                          <button className="btn btn-outline-primary btn-sm rounded-5" onClick={addItem}>
                            <i className="bi bi-plus-circle"></i> Add Line
                          </button>

                        </td>
                      </tr>
                      <tr className="summaryRow">
                        <td colSpan="2" />
                        <td colSpan="3" className="text-end" >Sub Total</td>
                        <td colSpan="3" > {formData.currency} {subTotal.toFixed(2)}</td>
                        <td colSpan="1" />
                      </tr>
                      <tr className="summaryRow">
                        <td colSpan="2" />
                        <td colSpan="3" className="text-end" >{formData.taxName}</td>
                        <td colSpan="2"> {formData.currency} {taxAmount.toFixed(2)}</td>
                        <td colSpan="1">
                          <select
                            className="form-select form-select-sm "
                            onChange={handleTaxStatusChange}
                            value={taxStatus}
                          >
                            <option value="AddTax">Add Tax </option>
                            <option value="TaxInclusive"> Tax Inclusive</option>
                            <option value="NoTax">No Tax </option>
                          </select>
                        </td>

                        <td colSpan="1" >
                          <button className="icon-btn "> <i className="bi bi-x-circle  text-danger" > </i> </button>
                        </td>

                      </tr>
                      <tr className="summaryRow">
                        <td colSpan="2" />
                        <td colSpan="3" className="text-end" >Net Total</td>
                        <td colSpan="3" >

                          {formData.currency} {netTotal.toFixed(2)} </td>
                        <td colSpan="1" />

                      </tr>

                    </tbody>
                  </table>
                </div>

                <div className="col-md-6 mt-5">
                  <label>Terms & Conditions</label>
                  <textarea
                    rows="3"
                    name="termsConditions"
                    className="form-control form-control-sm mb-2"
                    placeholder="Terms & Conditions"
                  />
                </div>

                <div className="col-md-6 mt-5">
                  <label>Notes</label>
                  <textarea
                    rows="3"
                    name="notes"
                    className="form-control form-control-sm mb-2"
                    placeholder="Notes"
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CreateInvoicePage;
