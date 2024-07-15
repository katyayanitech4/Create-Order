const axios = require('axios');

const salesPersons = {
    'uqqo2': 'sales1',
    'bkze3': 'sales2',
    'qgzz4': 'sales3',
    'nqjg5': 'sales4',
    'ydju6': 'sales5',
    'wumj7': 'sales6',
    'ymrh8': 'sales7',
    'yfer9': 'sales8',
    'kscs0': 'sales9',
    'jvxe1': 'sales10',
    'sssk2': 'ksk11',
    'mgsq3': 'sales12',
    'kxwo4': 'sales13',
    'dzyp5': 'sales14',
    'ezgh6': 'sales15',
    'qtqw7': 'sales16',
    'aoos8': 'sales17',
    'egmy9': 'sales18',
    'jylo0': 'sales19',
    'njsi1': 'sales20',
    'mxmd2': 'sales21',
    'emsa3': 'sales22',
    'pvpt4': 'sales23',
    'sefv5': 'sales24',
    'uaji6': 'sales25',
    'znoi7': 'sales26',
    'beap8': 'sales27',
    'vtob9': 'sales28',
    'yqrz0': 'sales29',
    'tskm1': 'sales30',
    'vjby2': 'sales31',
    'voik3': 'sales32',
    'syzf4': 'sales33',
    'pray5': 'sales34',
    'qfis6': 'sales35',
    'vhbw7': 'sales36',
    'wtwd8': 'sales37',
    'czgh9': 'sales38',
    'eanw0': 'sales39',
    'xpyw1': 'sales40',
    'rblj2': 'sales41',
    'zoxw3': 'ksk44',
    'webm4': 'sales45',
    'lghb5': 'sales46',
    'ocfz6': 'sales47',
    'zmyc7': 'sales48',
    'eyjp8': 'sales49',
    'bnmv9': 'sales50',
    'irhj0': 'sales51',
    'bzmh1': 'sales52',
    'yxhr2': 'sales53',
    'zoov3': 'ksk55',
    'cigd4': 'sales56',
    'npre5': 'sales57',
    'eftn6': 'sales58',
    'onzb7': 'sales59',
    'dbpl8': 'sales60',
    'kafs9': 'sales61',
    'qihf0': 'sales62',
    'guuu1': 'sales63',
    'juya2': 'sales64',
    'qtbt3': 'ksk66',
    'pkdn4': 'sales67',
    'dcmq5': 'sales68',
    'ekls6': 'sales69',
    'dbkg7': 'sales70',
    'ioaj8': 'sales71',
    'ykur9': 'sales72',
    'hcit0': 'sales73',
    'adam1': 'sales74',
    'qokt2': 'sales75',
    'mirj3': 'ksk77',
    'bazs4': 'sales78',
    'lhaq5': 'sales79',
    'zuvn6': 'sales80',
    'kaov7': 'sales81',
    'qroq8': 'sales82',
    'puea9': 'sales83',
    'gdpc0': 'sales84',
    'bijy1': 'sales85',
    'nczi2': 'sales86',
    'matd3': 'sales87',
    'ykge4': 'ksk88',
    'juuw5': 'sales89',
    'estf6': 'sales90',
    'wjuo7': 'sales91',
    'klxa8': 'sales92',
    'ngyz9': 'sales93',
    'jvxs0': 'sales94',
    'ydpa1': 'sales95',
    'koro2': 'sales96',
    'wjak3': 'sales97',
    'yscs4': 'sales98',
    'quau5': 'ksk99',
    'fycm6': 'sales100',
    'rsek7': 'sales101',
    'svlt8': 'sales102',
    'qjfn9': 'sales103',
    'dsmm0': 'sales104',
    'ircn1': 'sales105'
}

const salesAccounts = {
    "Agribegri Sales": "1155413000009230527",
    "Agrociaa Sales": "1155413000060100017",
    "Amazon Australia": "1155413000010254387",
    "Amazon Canada": "1155413000010221121",
    "Amazon France": "1155413000010221125",
    "Amazon India Sales": "1155413000009433763",
    "Amazon Italy": "1155413000065841288",
    "Amazon Japan": "1155413000010221129",
    "Amazon Mexico": "1155413000010221133",
    "Amazon Netherlands": "1155413000010221137",
    "Amazon Saudi Arabia": "1155413000005827253",
    "Amazon Singapore": "1155413000005827257",
    "Amazon Spain": "1155413000077342078",
    "Amazon Sweden": "1155413000010221145",
    "Amazon UAE": "1155413000005837898",
    "Amazon UK": "1155413000005827265",
    "Amazon USA": "1155413000010221117",
    "Badikheti Sales": "1155413000065257955",
    "BharatAgri": "1155413000077328119",
    "Bighaat Sales": "1155413000010066291",
    "GGV Canada": "1155413000010221169",
    "GGV UAE": "1155413000010221173",
    "GGV USA": "1155413000071930430",
    "In-house Sales": "1155413000000000486",
    "Industry Buying Sales": "1155413000055259001",
    "JioMart": "1155413000077342084",
    "Website Sales": "1155413000010057958",
    "New Website (KSK)": "1155413000010057962",
    "Meesho Sales": "1155413000075607071",
    "Moglix Sales": "1155413000061392038",
    "Plantlane Sales": "1155413000014011730",
    "Shopclues Sales": "1155413000077328107",
    "Snapdeal Sales": "1155413000076851690",
    "Other's Sales": "1155413000000000486"
}

const platformTags = {
    "KO Website": "1155413000012339214",
    "Agribegri": "1155413000012339222",
    "Amazon Saudi Arabia": "1155413000012339230",
    "Amazon Japan": "1155413000012339238",
    "GGV UAE": "1155413000012339246",
    "Amazon France": "1155413000019461798",
    "Amazon Belgium": "1155413000019461810",
    "Agrociaa": "1155413000060100009",
    "Snapdeal": "1155413000075418068",
    "JioMart": "1155413000077342092",
    "New Website (KSK)": "1155413000012339216",
    "Amazon UAE": "1155413000012339224",
    "Amazon Canada": "1155413000012339232",
    "Amazon Sweden": "1155413000012339240",
    "Amazon Ireland": "1155413000019461802",
    "E Kisani Store": "1155413000041144149",
    "Moglix": "1155413000061392032",
    "Meesho": "1155413000075588011",
    "Plantlane": "1155413000078593336",
    "Other's Sales": "1155413000012339212",
    "Bighaat": "1155413000012339220",
    "Amazon USA": "1155413000012339228",
    "Amazon Mexico": "1155413000012339236",
    "GGV Canada": "1155413000012339244",
    "GEM": "1155413000019437395",
    "Amazon Netherlands": "1155413000019461806",
    "Industry Buying": "1155413000055264011",
    "GGV USA": "1155413000072130681",
    "Bharat Agri": "1155413000077328129",
    "Amazon India": "1155413000012339218",
    "Amazon UK": "1155413000012339226",
    "Amazon Singapore": "1155413000012339234",
    "Amazon Australia": "1155413000012339242",
    "E Kisani Zone": "1155413000016137185",
    "Amazon Italy": "1155413000019461804",
    "Amazon Spain": "1155413000051187046",
    "Badikheti": "1155413000065257961",
    "Shopclues": "1155413000077328117",
    "Kisan Shop": "1155413000078765023"
}

const marketPlaces = {
    "Shopify13": "GGV Canada",
    "Woocommerce": "Website Sales",
    "Shopify": "New Website (KSK)",
    "Katyayani": "Other's Sales",
    "Amazon.in": "Amazon India",
    "Offline": "Other's Sales",
    "Shopify2": "Bighaat",
    "Shopify14": "GGV USA",
    "Amazon.ca": "Amazon Canada",
    "Amazon.ae": "Amazon UAE",
    "Amazon.co.uk": "Amazon UK",
    "Amazon.com": "Amazon USA",
    "Amazon.co.jp": "Amazon Japan",
    "Jio mart": "JioMart"
}

const salesSectorTags = {
    "Others": "1155413000016023096",
    "Web": "1155413000009542011",
    "Export": "1155413000000000638",
    "Ecommerce": "1155413000009542009"
}

const salesSector = {
    "Shopify13": "Ecommerce",
    "Woocommerce": "Web",
    "Shopify": "Web",
    "Katyayani": "Others",
    "Amazon.in": "Ecommerce",
    "Offline": "Others",
    "Shopify2": "Ecommerce"
}

const termsOfPayment = {
    "COD": "Cash on Delivery",
    "PrePaid": "Prepaid",
}

// const spreadsheetId = '1lRV3PCgeqhjX0CT3mcGA357_Bk4OeOshG1f0nRXdqSo';

// const addRowOnSheet = async (rows) => {
//     const ResponsesSheetId = "1y2mD-cM10CcZSaKmjPFHrmFIwLdsOgYquifqpHg9uz8";
//     const doc = new GoogleSpreadsheet(ResponsesSheetId);

//     const CREDENTIALS = JSON.parse(fs.readFileSync('frieght-421909-3bf3d7b3e26d.json'));
//     await doc.useServiceAccountAuth({
//         client_email: CREDENTIALS.client_email,
//         private_key: CREDENTIALS.private_key
//     });
//     await doc.loadInfo();

//     let sheet = doc.sheetsByIndex[0];

//     for (let index = 0; index < rows.length; index++) {
//         const row = rows[index];
//         await sheet.addRow(row);
//     }
// }



// const uploadFreightChargesToSheet = async (orderId) => {
//     const url = `https://apiv2.shiprocket.in/v1/external/orders?search=${orderId}`;
//     const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjM0MDIwMDgsInNvdXJjZSI6InNyLWF1dGgtaW50IiwiZXhwIjoxNzE0ODkxNTE5LCJqdGkiOiJCOU9ySERXeUM0d0M4TWRoIiwiaWF0IjoxNzE0MDI3NTE5LCJpc3MiOiJodHRwczovL3NyLWF1dGguc2hpcHJvY2tldC5pbi9hdXRob3JpemUvdXNlciIsIm5iZiI6MTcxNDAyNzUxOSwiY2lkIjoyNTMyOTksInRjIjozNjAsInZlcmJvc2UiOmZhbHNlLCJ2ZW5kb3JfaWQiOjAsInZlbmRvcl9jb2RlIjoid29vY29tbWVyY2UifQ.X0uOCUBWgyILNRJuiuZVcdgj5ZFisGxyuBb5PXOcr-0';
//     try {
//         const response = await axios.get(url, {
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         });

//         const data = response.data.data[0];
//         console.log("Shiprocket data :  ", data);

//         const orderId = data.channel_order_id;
//         const date = data.channel_created_at;
//         const productName = data.products[0].name;
//         const orderValue = data.total;
//         const paymentMode = data.payment_method;
//         const awb = data.shipments[0].awb;
//         const weight = data.shipments[0].weight;
//         const courierName = data.shipments[0].courier;
//         const freightCharge = data.awb_data.charges.freight_charges;
//         const freightChargePercentage = ((freightCharge / orderValue) * 100).toFixed(2);

//         console.log("Order ID:", orderId);
//         console.log("Date:", date);
//         console.log("Product Name:", productName);
//         console.log("Order Value:", orderValue);
//         console.log("Payment Mode:", paymentMode);
//         console.log("AWB:", awb);
//         console.log("Weight:", weight);
//         console.log("Courier Name:", courierName);
//         console.log("Freight Charge:", freightCharge);
//         console.log("Freight Charge %:", freightChargePercentage);

//         const auth = new google.auth.GoogleAuth({
//             keyFile: 'frieght-421909-3bf3d7b3e26d.json',
//             scopes: ['https://www.googleapis.com/auth/spreadsheets']
//         });
//         const sheets = google.sheets({ version: 'v4', auth });
//         const values = [
//             [orderId, date, productName, orderValue, paymentMode, awb, weight, courierName, freightCharge, freightChargePercentage]
//         ];

//         const resource = {
//             values: values
//         };

//         const range = 'Sheet1!A2:J2';
//         const result = await sheets.spreadsheets.values.append({
//             spreadsheetId: "1y2mD-cM10CcZSaKmjPFHrmFIwLdsOgYquifqpHg9uz8",
//             range: range,
//             valueInputOption: 'USER_ENTERED',
//             resource: resource
//         });

//         console.log(`${result.data.updates.updatedCells} cells appended.`);

//         // addRowOnSheet([{
//         //     "Order ID": orderId,
//         //     "Date": date,
//         //     "Product Name": productName,
//         //     "Order Value": orderValue,
//         //     "Payment Mode": paymentMode, "AWB": awb, "Weight": weight, "Courier Name": courierName, "Frieght Charge": freightCharge,
//         //     "% Frieght Charge": freightChargePercentage,
//         // }]);

//         return response;
//     } catch (error) {
//         console.error("Error:", error.response ? error.response.data : error.message);
//         throw error;
//     }
// };

const generateAuthToken = async () => {
    try {
        const response = await axios.get(
            "https://script.google.com/macros/s/AKfycbz4HwSNCuMV-s1Bz9-G-37E1tHp7bxQ35ICns48cXgwd6mdgE4KqIT8LDuxjMr7w7Gzww/exec"
        );
        return response.data.trim();
    } catch (error) {
        console.log("Error generating auth token:", error.message);
    }
};

const createCustomer = async (customerData) => {
    try {
        const ZOHO_BOOK_ACCESS_TOKEN = await generateAuthToken();
        const response = await axios.post(
            'https://www.zohoapis.in/books/v3/contacts/?organization_id=60019077540',
            customerData,
            {
                headers: {
                    Authorization: `Zoho-oauthtoken ${ZOHO_BOOK_ACCESS_TOKEN}`,
                    'Content-Type': 'application/json'
                },
            }
        );
        return response.data.contact.contact_id;
    } catch (error) {
        console.log("Error creating customer:", error.message);

    }
};

const getCustomerId = async (phoneNumber, invoice) => {
    const ZOHO_BOOK_ACCESS_TOKEN = await generateAuthToken();
    console.log("ZohoBookToken", ZOHO_BOOK_ACCESS_TOKEN);

    const phoneFormats = [
        phoneNumber.replace('+', '%2B'),
        `91${phoneNumber}`,
        `%2B91${phoneNumber}`,
        `%2B91 ${phoneNumber}`,
    ];

    for (const format of phoneFormats) {
        try {
            const response = await axios.get(`https://www.zohoapis.in/books/v3/contacts/?organization_id=60019077540&phone=${format}`, {
                headers: {
                    Authorization: `Zoho-oauthtoken ${ZOHO_BOOK_ACCESS_TOKEN}`,
                },
            });
            const contactId = response.data.contacts?.[0]?.contact_id;
            if (contactId) return contactId;
        } catch (error) {
            console.log("Error getting customer ID:", error.message);
        }
    }

    const newCustomerData = {
        contact_name: invoice.customer_name,
        phone: invoice.contact_num,
        mobile: invoice.contact_num,
        billing_address: {
            attention: invoice.customer_name,
            address: invoice.billing_address_1,
            street2: invoice.billing_address_2,
            state_code: invoice.billing_state_code,
            city: invoice.billing_city,
            state: invoice.billing_state,
            zip: invoice.billing_pin_code,
            country: invoice.billing_country,
            phone: invoice.contact_num,
        },
        contact_persons: [
            {
                first_name: invoice.customer_name,
                phone: invoice.contact_num,
                mobile: invoice.contact_num,
            }
        ],
    };

    return await createCustomer(newCustomerData);
};

const postInvoiceToBooks = async (easycomData) => {
    try {
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

        const response = await axios(config);
        const invoice_id = response.data.invoice.invoice_id;

        const statusUpdateConfig = {
            method: 'post',
            url: `https://www.zohoapis.in/books/v3/invoices/${invoice_id}/status/sent?organization_id=60019077540`,
            headers: {
                'Authorization': `Zoho-oauthtoken ${ZOHO_BOOK_ACCESS_TOKEN}`,
                'Content-Type': 'application/json'
            }
        };

        const statusUpdateResponse = await axios(statusUpdateConfig);

        return statusUpdateResponse;
    } catch (error) {
        console.log('Error in postInvoiceToBooks function:', error);
    }
}

const getItemIdFromSKU = async (sku) => {
    try {
        const ZOHO_BOOK_ACCESS_TOKEN = await generateAuthToken();
        const response = await axios.get(
            `https://www.zohoapis.in/books/v3/items?organization_id=60019077540&sku=${sku}`,
            {
                headers: {
                    Authorization: `Zoho-oauthtoken ${ZOHO_BOOK_ACCESS_TOKEN}`,
                },
            }
        );

        const itemId = response.data.items[0].item_id;
        return itemId;
    } catch (error) {
        console.log("Error getting item ID:", error);
    
    }
};

exports.postordercreate = async (invoice) => {
    console.log("easyecom invoice : ", invoice);
    console.log("SheetOrderId", invoice[0].reference_code);
    const customerId = await getCustomerId(invoice[0].contact_num , invoice[0]);
    console.log(invoice[0].order_items);
    console.log("Salesperson Id ", invoice[0].reference_code.split("/")[1]);
    console.log("easyecom order history", invoice[0].easyecom_order_history);

    console.log(`custom_fields: ${JSON.stringify(invoice[0]?.order_items[0]?.custom_fields)}`);

    const customFields = invoice[0]?.order_items?.[0]?.custom_fields || [];
    const termsOfDelivery = customFields.length > 0 ? customFields.find(field => field.field_name === "Terms of Delivery") || { field_value: null } : null;
    
    // const customFields = invoice[0].order_items[0].custom_fields; 
    // const termsOfDelivery = customFields.find(field => field.field_name === "Terms of Delivery");
    // console.log(`Terms of Delivery field_value: ${termsOfDelivery.field_value}`);

     const referenceCode = invoice[0].marketplace === 'Woocommerce' 
    ? 'KO-'+invoice[0].reference_code 
    : invoice[0].reference_code;

    try {
        const easycomData = {
            "customer_id": customerId,
            invoice_number: referenceCode,
        reference_number: referenceCode || null,
            "line_items": [],
            "salesperson_name": salesPersons[invoice[0].reference_code.split("/")[1]] || "",
            "is_inclusive_tax": true,
            "date": new Date(invoice[0].order_date).toISOString().split('T')[0],
            "place_of_supply": invoice[0].state_code,
            "custom_fields": [
                {
                    "field_id": "1155413000002568031",
                    "customfield_id": "1155413000002568031",
                    "show_in_store": false,
                    "show_in_portal": false,
                    "is_active": true,
                    "index": 1,
                    "label": "Marketplace",
                    "show_on_pdf": true,
                    "edit_on_portal": false,
                    "edit_on_store": false,
                    "api_name": "cf_sales_account",
                    "show_in_all_pdf": true,
                    "selected_option_id": "1155413000002568033",
                    "value_formatted": marketPlaces[invoice[0].marketplace] || invoice[0].marketPlaces,
                    "search_entity": "invoice",
                    "data_type": "dropdown",
                    "placeholder": "cf_sales_account",
                    "value": marketPlaces[invoice[0].marketplace] || "",
                    "is_dependent_field": false
                },
                {
                    "field_id": "1155413000001759107",
                    "customfield_id": "1155413000001759107",
                    "show_in_store": false,
                    "show_in_portal": false,
                    "is_active": true,
                    "index": 1,
                    "label": "Terms of Payment",
                    "show_on_pdf": true,
                    "edit_on_portal": false,
                    "edit_on_store": false,
                    "api_name": "cf_terms_of_payment",
                    "show_in_all_pdf": true,
                    "value_formatted": termsOfPayment[invoice[0].payment_mode],
                    "search_entity": "invoice",
                    "data_type": "multiselect",
                    "placeholder": "cf_terms_of_payment",
                    "value": [
                        termsOfPayment[invoice[0].payment_mode]
                    ],
                    "is_dependent_field": false
                },
                {
                    "field_id": "1155413000001759115",
                    "customfield_id": "1155413000001759115",
                    "show_in_store": false,
                    "show_in_portal": false,
                    "is_active": true,
                    "index": 2,
                    "label": "Payment to be Collected (If COD)",
                    "show_on_pdf": true,
                    "edit_on_portal": false,
                    "edit_on_store": false,
                    "api_name": "cf_payment_to_be_collected_if_",
                    "show_in_all_pdf": true,
                    "value_formatted": invoice[0].payment_mode == "COD" ? invoice[0].collectable_amount : "0",
                    "search_entity": "invoice",
                    "data_type": "string",
                    "placeholder": "cf_payment_to_be_collected_if_",
                    "value": invoice[0].payment_mode == "COD" ? invoice[0].collectable_amount : "0",
                    "is_dependent_field": false
                },
                {
                    "field_id": "1155413000014100001",
                    "customfield_id": "1155413000014100001",
                    "show_in_store": false,
                    "show_in_portal": false,
                    "is_active": true,
                    "index": 5,
                    "label": "Order Date",
                    "show_on_pdf": true,
                    "edit_on_portal": false,
                    "edit_on_store": false,
                    "api_name": "cf_order_date",
                    "show_in_all_pdf": true,
                    "value_formatted": "20/04/2024",
                    "search_entity": "invoice",
                    "data_type": "date",
                    "placeholder": "cf_order_date",
                    "value": new Date(invoice[0].order_date).toISOString().split('T')[0],
                    "is_dependent_field": false
                },
            ]
        };

         if (customFields.length > 0) {
            easycomData.custom_fields.push({
                field_id: "1155413000001759099",
                customfield_id: "1155413000001759099",
                show_in_store: false,
                show_in_portal: false,
                is_active: true,
                index: 1,
                label: "Terms of Delivery",
                show_on_pdf: true,
                edit_on_portal: false,
                edit_on_store: false,
                api_name: "cf_terms_of_delivery",
                show_in_all_pdf: true,
                value_formatted: termsOfDelivery.field_value || null,
                search_entity: "invoice",
                data_type: "string",
                placeholder: "cf_terms_of_delivery",
                value: termsOfDelivery.field_value || null,
                is_dependent_field: false
            });
        }
        
        for (const item of invoice[0].order_items) {
            const itemId = await getItemIdFromSKU(item.sku);
            easycomData.line_items.push({
                item_id: itemId, quantity: item.suborder_quantity, rate: (item.selling_price / item.suborder_quantity), tags: [
                    {
                        "tag_option_id": salesSectorTags[salesSector[invoice[0].marketplace]],
                        "is_tag_mandatory": false,
                        "tag_name": "Sales Sector",
                        "tag_id": "1155413000000000638",
                        "tag_option_name": salesSector[invoice[0].marketplace] || invoice[0].marketPlaces,
                    },
                    {
                        "tag_option_id": platformTags[marketPlaces[invoice[0].marketplace]],
                        "is_tag_mandatory": false,
                        "tag_name": "Platform",
                        "tag_id": "1155413000000000640",
                        "tag_option_name": marketPlaces[invoice[0].marketplace] || invoice[0].marketPlaces,
                    }
                ], "account_id": salesAccounts[marketPlaces[invoice[0].marketplace]] || salesAccounts['In-house Sales'],
            });
        }

        console.log(easycomData);

        const response = await postInvoiceToBooks(easycomData);
        setTimeout(async () => {
            await uploadFreightChargesToSheet(invoice[0].reference_code);
        }, 30000);
        console.log('easyecom invoice posted to Zoho books successfully:', response.data);
    } catch (error) {
        console.log('Error posting easyecom invoice to Zoho books:', error.response ? error.response.data : error);
    }
}
