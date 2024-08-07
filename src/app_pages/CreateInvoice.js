import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Container } from 'react-bootstrap';
import "./InvoicePage.css";
import logoImg from "../assets/images/brand/voitix-logo.png";
import { fontMetropolisNormal } from "../assets/css/fonts/Metropolis/Metropolis-Regular-normal.js";
import { fontMetropolisBold } from "../assets/css/fonts/Metropolis/Metropolis-Bold-bold.js";
import { fontLatoNormal } from "../assets/css/fonts/Lato/Lato-Regular-normal.js";
import { fontLatoBold } from "../assets/css/fonts/Lato/Lato-Black-bold.js";
import { fontRobotoNormal } from "../assets/css/fonts/Roboto/Roboto-Regular-normal.js";
import { fontRobotoBold } from "../assets/css/fonts/Roboto/Roboto-Black-bold.js";

const CreateInvoice = () => {

    const pdfRef = useRef();

    // sed -i '1s/^\xEF\xBB\xBF//' src/app_pages/Metropolis-Regular-normal.js
    // src/app_pages/Metropolis-Regular-normal.js
    const generatePDF = () => {
        const doc = new jsPDF();

        doc.addFileToVFS("Metropolis-Regular-normal.ttf", fontMetropolisNormal);
        doc.addFont("Metropolis-Regular-normal.ttf", "Metropolis", "normal");

        doc.addFileToVFS("Metropolis-Bold-bold.ttf", fontMetropolisBold);
        doc.addFont("Metropolis-Bold-bold.ttf", "Metropolis", "bold");

        doc.addFileToVFS("Lato-Regular-normal.ttf", fontLatoNormal);
        doc.addFont("Lato-Regular-normal.ttf", "Lato", "normal");

        doc.addFileToVFS("Lato-Black-bold.ttf", fontLatoBold);
        doc.addFont("Lato-Black-bold.ttf", "Lato", "bold");

        doc.addFileToVFS("Lato-Regular-normal.ttf", fontRobotoNormal);
        doc.addFont("Lato-Regular-normal.ttf", "Roboto", "normal");

        doc.addFileToVFS("Roboto-Black-bold.ttf", fontRobotoBold);
        doc.addFont("Roboto-Black-bold.ttf", "Roboto", "bold");

        doc.setFont("Lato", "normal",);

 // Before adding new content
    let pageHeight= doc.internal.pageSize.height;

 // Before adding new content
 let y = 10    // Height position of new content
 if (y >= pageHeight)
 {
   doc.addPage();
   y = 0 // Restart height position
 }

    // Footer setup
       // Footer setup
       const footer = () => {
        const pageCount = doc.internal.getNumberOfPages();
        doc.setFont('Lato', 'normal');
        doc.setFontSize(10);
        doc.setTextColor( 0, 0, 0);
 
        const pageSize = doc.internal.pageSize;
        const pageHeight = pageSize.height ? pageSize.height : pageSize.getHeight();

        // Draw a line above the footer
        doc.setLineWidth(0.2);
        doc.line(5, pageHeight - 8, pageSize.width - 5, pageHeight - 8);

        // Add page number, right-aligned
        doc.text(`Page ${doc.internal.getCurrentPageInfo().pageNumber} of ${pageCount}`, pageSize.width - 10, pageHeight - 4, { align: 'right' });
    };

        let lineHeight = 5
        let yPosition = 20
        doc.setFont("Metropolis", "bold",);
        doc.setFontSize(20);
        doc.text('Company Name PLC', 10, yPosition);

        doc.setFont("Lato", "normal",);
        doc.setFontSize(10);
        doc.text('Address Line 1', 10, yPosition += lineHeight + 5);
        doc.text('Address Line 2', 10, yPosition += lineHeight);
        doc.text('City, State, ZIP', 10, yPosition += lineHeight);
        doc.text('(555) 555-5555', 10, yPosition += lineHeight);
        doc.text('company@example.com', 10, yPosition += lineHeight);

        // Assuming you have a logo image as a base64 string
        // const logoBase64 = 'data:image/png;base64,...'; // Replace with your logo

        doc.addImage(logoImg, 'PNG', 155, 10, 40, 30);

        // Add Customer Information
        doc.setFont("Lato", "bold",);
        doc.setFontSize(11);
        doc.text('Bill To:', 10, yPosition += lineHeight + 5);

        doc.setFont("Lato", "normal",);
        doc.setFontSize(10);
        doc.text('Customer Name', 10, yPosition += lineHeight);
        doc.text('Customer Address Line 1', 10, yPosition += lineHeight);
        doc.text('Customer Address Line 2', 10, yPosition += lineHeight);
        doc.text('Customer City, State, ZIP', 10, yPosition += lineHeight);

        // Add Contact Person Information
        doc.setFont("Lato", "bold",);
        doc.setFontSize(11);
        doc.text('Contact Person:', 10, yPosition += lineHeight + 5);

        doc.setFont("Lato", "normal",);
        doc.setFontSize(10);
        doc.text('Contact Name', 10, yPosition += lineHeight);
        doc.text('Contact Phone: (555) 555-5555', 10, yPosition += lineHeight);
        doc.text('Contact Email: contact@example.com', 10, yPosition += lineHeight);

        doc.setFont("Lato", "bold",);
        doc.setFontSize(11);
        const titleLines = doc.splitTextToSize('This HTML source will be used as a reference with the Autotable.html property.This HTML source will be used as a reference with the Autotable.html property.', 180);

        titleLines.forEach((line) => {
            doc.text(line, 10, yPosition += lineHeight + 3);
        });
        doc.setFontSize(10);
        // Define a function to wrap text in cells
        const wrap = (text, maxWidth) => {
            return doc.splitTextToSize(text, maxWidth);
        };

        // Add Items Table
        doc.autoTable({
            startY: yPosition += 10,
            head: [
                ['#', 'Serial/Id', 'Description', 'Quantity', 'UoM', 'Unit Price', 'Total']
            ],
            body: [
                ['1', '689GJ', wrap('Description of item 1ttttttttttttttttttttttttttttttttttttt', 75), '3.8', 'Kg', '100.00', '10000.00'],
                ['2', '800UN', wrap('Description of item 2', 75), '2', 'Kg', '80.00', '160.00'],
                ['2', '800UN', wrap('Description of item 2', 75), '2', 'Kg', '80.00', '160.00'],
                ['2', '800UN', wrap('Description of item 2', 75), '2', 'Kg', '80.00', '160.00'],
                ['2', '800UN', wrap('Description of item 2', 75), '2', 'Kg', '80.00', '160.00'],
            // // Add more rows as needed
            ],
            styles: {
                font: "Lato",
                fontSize: 8,
                cellPadding: 1.5,
                overflow: 'linebreak',
                valign: 'middle', 
                halign: 'starleftt', 
            },
            headStyles: {
                fillColor: [255, 226, 204], 
                textColor: [0, 0, 0],  
                fontStyle: 'bold',
                lineWidth: 0.3,
                lineColor: [252, 219, 194], 
            },
            bodyStyles: {
                lineWidth: 0.3,
                lineColor: [252, 219, 194], 
            },
            columnStyles: {
                0: { cellWidth: 8 },  // # column
                1: { cellWidth: 17 }, // Serial/Id column
                2: { cellWidth: 95 }, // Description column
                3: { cellWidth: 15 }, // Qty column
                4: { cellWidth: 20 }, // UoM column
                5: { cellWidth: 20 }, // Price column
                6: { cellWidth: 25 }, // Total column
            },
            margin: { top: 5, right: 10, bottom: 0, left: 5 }, // Ensure margin settings are explicitly defined
           
           
            didDrawPage: function (data) {
                // Adding top margin
                // doc.setDrawColor(255, 255, 255);
                // doc.setFillColor(255, 255, 255);
                // doc.rect(0, 0, doc.internal.pageSize.width, 10, 'F');
                
                // Adding the footer
                footer();
            },
      
        
        });

      
        // Add Summary Table
        doc.autoTable({
          startY: doc.previousAutoTable.finalY -=7  , 
          head: [['', '']], 
          body: [
            ['Subtotal:', '200.00'],
            ['Tax (10%):', '20.00'],
            ['Net Total:', '200.00'],
            ['Amount Paid:', '0.00'],
            ['Balance:', '220.00']
          ],
          theme: 'plain', 
          styles: {
            font: 'Lato',
            fontSize: 10,
            cellPadding: 1.5,
            halign: 'right'  
          },
          bodyStyles: {
            fillColor: [255, 238, 224],  
            textColor: [0, 0, 0], 
             lineWidth: 0.3,
            lineColor: [252, 219, 194], // Black border for header cells
        },
          columnStyles: {
            0: { cellWidth: 40 }, // Label column
            1: { cellWidth: 40 }  // Value column
          },
          margin: { top: 5, right: 10, bottom: 5, left: 125 }, // Ensure margin settings are explicitly defined
           
          didDrawPage: function (data) {
            // Adding the footer for this page
            footer();
        }
      
        });
        

        const paymentsInfo = [
            '1. BANK TRANSFER  ',
            '2. CHEQUE',
            '3. MOBILE MONEY  -PAYBILL NUMBER'
          ];
          const authorizationInfo = [
            'Name',
            'Signature',
            'Stamp:'
          ];
          // Join the list items with newlines for line break
          const paymentsInfoText = paymentsInfo.join('\n \n');
          const authorizationText = authorizationInfo.join('\n \n \n');
          
          // Add Terms and Conditions and Notes Table
          doc.autoTable({
            startY: doc.previousAutoTable.finalY + 5, // Position below summary table
            head: [['PAYMENTS INFORMATION', 'AUTHORIZATION']],
            body: [
              [paymentsInfoText, authorizationText]
            ],
            theme: 'plain', 
            styles: {
              font: 'Lato',
              fontSize: 10,
              cellPadding: 1.5,
              overflow: 'linebreak' // Ensure line breaks within the cell
            },
            headStyles: {
              fillColor: [230, 228, 227],  // Custom background color for header
              textColor: [0, 0, 0], // Text color
              fontStyle: 'bold',
              lineWidth: 0.3,
              lineColor: [212, 212, 212],  // Border color
            },
            bodyStyles: {
              lineWidth: 0.3,
              lineHeight: 10.9,
              lineColor: [212, 212, 212],
         
            },
            columnStyles: {
              0: { cellWidth: 100 }, // Terms and Conditions column
              1: { cellWidth: 100 }  // Notes column
            },
            margin: { top: 5, right: 10, bottom: 5, left: 5 }, // Ensure margin settings are explicitly defined
           
            didDrawPage: function (data) {
                // Adding the footer for this page
                footer();
            }
      
        });
          



   // Define the content as lists
const termsAndConditionsList = [
    '1. Payment due within 30 days.',
    '2. Interest will accrue after 30 days.',
    '3. Goods once sold are not returnable.',
  ];
  
  const notesList = [
    '1. Thank you for your business.',
    '2. Please review the invoice details.',
    '3. Contact us for any discrepancies.'
  ];
  
  // Join the list items with newlines for line break
  const termsAndConditionsText = termsAndConditionsList.join('\n \n');
  const notesText = notesList.join('\n \n');
  
  // Add Terms and Conditions and Notes Table
  doc.autoTable({
    startY: doc.previousAutoTable.finalY + 5, // Position below summary table
    head: [['Terms and Conditions', 'Notes']],
    body: [
      [termsAndConditionsText, notesText]
    ],
    theme: 'plain', 
    styles: {
      font: 'Lato',
      fontSize: 10,
      cellPadding: 1.5,
      overflow: 'linebreak' // Ensure line breaks within the cell
    },
    headStyles: {
      fillColor: [230, 228, 227],  // Custom background color for header
      textColor: [0, 0, 0], // Text color
      fontStyle: 'bold',
      lineWidth: 0.3,
      lineColor: [212, 212, 212],  // Border color
    },
    bodyStyles: {
      lineWidth: 0.3,
      lineHeight: 10.9,
      lineColor: [212, 212, 212],
 
    },
    columnStyles: {
      0: { cellWidth: 100 }, // Terms and Conditions column
      1: { cellWidth: 100 }  // Notes column
    },
    margin: { top: 5, right: 10, bottom: 10, left: 5 } ,// Margins

    didDrawPage: function (data) {
        // Adding the footer for this page
        footer();
    }
  });
  
        // Save the PDF
        // doc.save('invoice.pdf');
        const pdfData = doc.output('blob');
        const pdfUrl = URL.createObjectURL(pdfData);
        window.open(pdfUrl);
    };

    return (
        <section>
            <Container className="invoice-page" >

                <div className="row mt-5 py-5">
                    <div ref={pdfRef}>
                        <h1>Invoice Generator</h1>
                        <button onClick={generatePDF}>Generate Invoice PDF</button>
                    </div>
                </div>
            </Container>
            <div id='previewPdf' className="previewPdf">

            </div>
        </section>

    );
};

export default CreateInvoice;
