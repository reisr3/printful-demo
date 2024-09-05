# Printful API Integration

This project is a Node.js application that integrates with the Printful API to create and manage orders for print-on-demand products. It demonstrates how to authenticate with the API, create orders, and handle the order lifecycle.

## Features

- Authentication with Printful API using an access key
- Creating and submitting orders
- Handling order confirmation and checkout
- Error handling for API requests

## Prerequisites

- Node.js (v14 or later recommended)
- npm (comes with Node.js)
- A Printful account and API access key

## Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the project root and add your Printful API access key:

```
PRINTFUL_ACCESS_KEY=your_access_key_here
```

4. Add the following environment variables to your `.env` file for the shipping address:

```
SHIPPING_ADDRESS_NAME=John Doe
SHIPPING_ADDRESS_STREET=123 Main St
SHIPPING_ADDRESS_CITY=Anytown
SHIPPING_ADDRESS_STATE=CA
SHIPPING_ADDRESS_COUNTRY=US
SHIPPING_ADDRESS_ZIP=12345
IMAGE_URL=https://example.com/your-image.jpg
```

## Usage

To run the application:

```bash
node src/app.ts
```

This will execute the `createAndCheckoutPrintfulOrder` function, which creates an order with Printful, confirms it, and completes the checkout process.

## Code Structure

The main functionality is contained in the `src/app.ts` file. This file includes:
- Environment configuration
- API setup
- Order creation function
- Order confirmation and checkout process
- Error handling

## Customization

To customize the order, modify the `orderPayload` object in the `createAndCheckoutPrintfulOrder` function. You can change the recipient details, add or modify items, and adjust quantities as needed.

## Error Handling

The application includes basic error handling. If an error occurs during the order process, it will be logged to the console with details about the error response or message.

## Security Notes

- Never commit your `.env` file or expose your API key publicly.
- Use environment variables for sensitive information.
- Consider implementing rate limiting and additional error handling for production use.

## Further Development

- Implement more Printful API endpoints as needed.
- Add a user interface for order management.
- Integrate with an e-commerce platform for automated order processing.

## Resources

- [Printful API Documentation](https://developers.printful.com/docs/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Axios Documentation](https://axios-http.com/docs/intro)

For more detailed information about the Printful API and available endpoints, refer to the official Printful API documentation.
