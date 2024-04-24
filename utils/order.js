const axios = require('axios');

const postorder = async (easycomData) => {
    const ZOHO_BOOK_ACCESS_TOKEN = await generateAuthToken();
    console.log("ZohoBookToken", ZOHO_BOOK_ACCESS_TOKEN);

    const config = {
        method: 'post',
        url: 'https://www.zohoapis.in/books/v3/invoices?organization_id=60019077540',
        headers: {
            'Authorization': `Zoho-oauthtoken ${ZOHO_BOOK_ACCESS_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: easycomData
    };

    try {
        return await axios(config);
    } catch (error) {
        console.log('Error in postorder function:', error);
        // throw error;
    }
}


exports.postorder = async (invoice) => {
    console.log("easyecom invoice : ", invoice);
}