const { postordercreate } = require("../utils/order.js");

exports.postorder = async (req, res) => {
    try {
        const easyecomData = req.body;
        await postordercreate(easyecomData);
        return res.status(200).send('order created successfully');
    } catch (error) {
        console.log('Error processing webhook request for easyecom:', error);
        return res.status(500).send('Error processing webhook request for easyecom');
    }
}