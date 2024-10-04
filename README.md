# Email Service

## Overview
This service provides an API to send emails for the following purposes:
- OTP for forgot password
- OTP for email verification
- Notifications

The OTP emails are sent synchronously, while notification emails are queued in RabbitMQ and processed in the background.

## Features
- **OTP for Forgot Password**: Sends a One-Time Password (OTP) to the user’s email for password reset.
- **OTP for Email Verification**: Sends an OTP to the user’s email for account verification.
- **Notifications**: Sends notification emails asynchronously using RabbitMQ for background processing.

## Architecture
- **RabbitMQ**: Notification emails are added to a RabbitMQ queue to be processed in the background.
- **Synchronous OTP Emails**: OTP emails are sent immediately without using the queue.

## API Endpoints
1. **Forgot Password OTP**
    - Endpoint: `/send/otp`
    - Method: `POST`
    - Description: Sends an OTP to the user’s email for password reset with predefined template.

2. **Email Verification OTP**
    - Endpoint: `/send/emailVerification`
    - Method: `POST`
    - Description: Sends an OTP to the user’s email for account verification.

3. **Send Notification**
    - Endpoint: `/send/notification`
    - Method: `POST`
    - Description: Queues a notification email to be sent in the background.

## Request Body Format

## All request require a api key which is in headers 
    'Authorization : Api_key'

- ### Forgot Password OTP
    ```json
    {
        "company":"Name of your Company",
        "otp" : 1111,
        "recipient":"abc@gmail.com"
    }
    ```

- ### Email Verification OTP
    ```json
    {
         "company":"Name of your company",
         "otp" : 7002,
         "recipient":"abc@gmail.com"
    }
    ```

- ### Send Notification
    ```json
    {
        "company":"Name of Company",
        "notificationTitle":"Title Of Notification",
        "notificationBody" : "Main body of notification content.",
        "recipientName":"Abc",
        "recipient":"abc2110@gmail.com"
    }
    ```

## RabbitMQ Integration
- **Queue Name**: `notificationQueue`
- Notification emails are pushed to this queue and processed by a background worker to ensure that non-urgent emails do not block the system.

## Setup & Installation
1. Clone the repository.
2. Install dependencies:
    ```bash
    npm install
    ```
3. Set environment variables for RabbitMQ and email service credentials.
4. Run the application:
    ```bash
    npm start
    ```

