import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Container } from 'react-bootstrap';
import "./InvoicePage.css";
import logoImg from "../assets/images/brand/voitix-logo.png";
import { fontMetropolisNormal } from "../assets/css/fonts/Metropolis/Metropolis-Regular-normal.js";
import { fontMetropolisBold } from "../assets/css/fonts/Metropolis/Metropolis-Bold-bold.js";
import { fontLatoNormal} from "../assets/css/fonts/Lato/Lato-Regular-normal.js";
import { fontLatoBold} from "../assets/css/fonts/Lato/Lato-Black-bold.js";
import { fontRobotoNormal} from "../assets/css/fonts/Roboto/Roboto-Regular-normal.js";
import { fontRobotoBold} from "../assets/css/fonts/Roboto/Roboto-Black-bold.js";

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

        doc.setFont("Lato","bold",);
        

        let lineHeight = 5
        let yPosition = 20

        doc.setFontSize(20);
        doc.text('Company Name', 10, yPosition);
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
        doc.setFontSize(12);
        doc.text('Bill To:', 10, yPosition += lineHeight + 5);
        doc.setFontSize(10);
        doc.text('Customer Name', 10, yPosition += lineHeight);
        doc.text('Customer Address Line 1', 10, yPosition += lineHeight);
        doc.text('Customer Address Line 2', 10, yPosition += lineHeight);
        doc.text('Customer City, State, ZIP', 10, yPosition += lineHeight);

        // Add Contact Person Information
        doc.text('Contact Person:', 10, yPosition += lineHeight + 5);

        doc.text('Contact Name', 10, yPosition += lineHeight);
        doc.text('Contact Phone: (555) 555-5555', 10, yPosition += lineHeight);
        doc.text('Contact Email: contact@example.com', 10, yPosition += lineHeight);

        // Add Invoice Title/Subject
        doc.setFontSize(12);
        // doc.text('This HTML source will be used as a reference with the Autotable.html property.This HTML source will be used as a reference with the Autotable.html property.', 10, 115);
        const titleLines = doc.splitTextToSize('This HTML source will be used as a reference with the Autotable.html property.This HTML source will be used as a reference with the Autotable.html property.', 200);
        titleLines.forEach((line) => {
            doc.text(line, 10, yPosition += lineHeight + 3);

            // yPosition += lineHeight;
            //  lineHeight;

        });
        // Add Items Table
        doc.autoTable({
            startY: 150,
            head: [['Item', 'Description', 'Quantity', 'Price', 'Total']],
            body: [
                ['Item 1', 'Description of item 1ttttttttttttttttttttttttttttttttttttt', 1, '100.00', '100.00'],
                ['Item 2', 'Description of item 2', 2, '50.00', '100.00'],
                // Add more items as needed
            ],
        });

        // Add Summation Section
        doc.text('Subtotal:', 140, doc.previousAutoTable.finalY + 10);
        doc.text('200.00', 180, doc.previousAutoTable.finalY + 10);
        doc.text('Tax (10%):', 140, doc.previousAutoTable.finalY + 15);
        doc.text('20.00', 180, doc.previousAutoTable.finalY + 15);
        doc.setFontSize(12);
        doc.text('Total:', 140, doc.previousAutoTable.finalY + 25);
        doc.text('220.00', 180, doc.previousAutoTable.finalY + 25);

        // Add Notes and Terms and Conditions
        doc.setFontSize(10);
        doc.text('Notes:', 20, doc.previousAutoTable.finalY + 40);
        doc.text('Thank you for your business.', 20, doc.previousAutoTable.finalY + 45);
        doc.text('Terms and Conditions:', 20, doc.previousAutoTable.finalY + 55);
        doc.text('Payment due within 30 days.', 20, doc.previousAutoTable.finalY + 60);

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
