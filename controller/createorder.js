const { postordercreate } = require("../utils/order.js");
const processingOrders = new Set();


let orderQueue = []; 
let isProcessing = false; 

exports.postorder = (req, res) => {
    const easyecomData = req.body;

    console.log(`Easyecom Data : ${easyecomData}`);
    orderQueue.push({ easyecomData, res });

    processQueue();
};

const processQueue = async () => {
    if (isProcessing || orderQueue.length === 0) {
        return;
    }

    isProcessing = true;

    while (orderQueue.length > 0) {
        const { easyecomData, res } = orderQueue.shift();
        const referenceCode = easyecomData[0].reference_code;

        if (processingOrders.has(referenceCode)) {
            console.log(`Order with reference code ${referenceCode} is already being processed.`);
            res.status(429).send('Order is already being processed');
            continue;
        }

        processingOrders.add(referenceCode);

        try {
            console.log(`Easyecom Order Data : ${easyecomData}`);
            await postordercreate(easyecomData);
            res.status(200).send('order created successfully');
        } catch (error) {
            console.log('Error processing webhook request for easyecom:', error);
            res.status(200).send('Error processing webhook request for easyecom');
        } finally {
            processingOrders.delete(referenceCode);
        }
    }

    isProcessing = false;
};


// exports.postorder = async (req, res) => {
//     const easyecomData = req.body;
//     const referenceCode = easyecomData[0].reference_code;

//     if (processingOrders.has(referenceCode)) {
//         console.log(`Order with reference code ${referenceCode} is already being processed.`);
//         return res.status(429).send('Order is already being processed');
//     }

//     processingOrders.add(referenceCode);

//     try {
//         console.log(`Easyecom Order Data : ${easyecomData}`);
//         await postordercreate(easyecomData);
//         res.status(200).send('order created successfully');
//     } catch (error) {
//         console.log('Error processing webhook request for easyecom:', error);
//         res.status(500).send('Error processing webhook request for easyecom');
//     } finally {
//         processingOrders.delete(referenceCode);
//     }
// };
