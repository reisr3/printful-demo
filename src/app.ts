import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const API_URL = 'https://api.printful.com';
const API_ACCESS_KEY = process.env.PRINTFUL_ACCESS_KEY;

// Function to create a Printful order and complete checkout
async function createAndCheckoutPrintfulOrder() {
  try {
    console.log('Creating order...');

    const orderPayload = {
      recipient: {
        name: process.env.SHIPPING_ADDRESS_NAME,
        address1: process.env.SHIPPING_ADDRESS_STREET,
        city: process.env.SHIPPING_ADDRESS_CITY,
        state_code: process.env.SHIPPING_ADDRESS_STATE,
        country_code: process.env.SHIPPING_ADDRESS_COUNTRY,
        zip: process.env.SHIPPING_ADDRESS_ZIP,
      },
      items: [
        {
          variant_id: 4011,
          quantity: 1,
          files: [
            {
              url: process.env.IMAGE_URL,
            },
          ],
        },
      ],
    };

    // Create the order
    const orderResponse = await axios.post(`${API_URL}/orders`, orderPayload, {
      headers: {
        Authorization: `Bearer ${API_ACCESS_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log('Order created successfully:', orderResponse.data);

    const orderId = orderResponse.data.result.id;

    console.log('Proceeding to confirm order...');

    await axios.post(
      `${API_URL}/orders/${orderId}/confirm`,
      {},
      {
        headers: {
          Authorization: `Bearer ${API_ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Order confirmed. Completing checkout...');

    const checkoutResponse = await axios.post(
      `${API_URL}/orders/${orderId}/payments/checkouts`,
      {
        payment_method: 'default',
      },
      {
        headers: {
          Authorization: `Bearer ${API_ACCESS_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    console.log('Checkout completed successfully:', checkoutResponse.data);
  } catch (error: any) {
    console.error(
      'Error in order process:',
      error?.response ? error.response.data : error.message
    );
  }
}

// Usage
createAndCheckoutPrintfulOrder();
