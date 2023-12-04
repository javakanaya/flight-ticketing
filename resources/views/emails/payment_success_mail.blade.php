<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PAYMENT SUCCESS</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            text-align: center;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h3 {
            color: #3498db;
            margin-bottom: 10px;
        }

        h4 {
            color: #333;
            margin-bottom: 20px;
        }

        p {
            color: #555;
            margin-bottom: 20px;
        }

        .success-message {
            color: #2ecc71;
            font-weight: bold;
        }

        .redirect-button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #3498db;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <h3>Your Payment Confirmation</h3>
        <h4>Dear {{ $data['user_name'] }},</h4>

        <p class="success-message">Your payment was successful!</p>

        <p>Thank you for choosing our services. If you have any questions, feel free to contact us.</p>

        <!-- Display Transaction ID for tracking -->
        <p class="success-message">Transaction ID: {{ $data['transaction_id'] }}</p>


        <!-- Button to redirect to booking details -->
        <a href="{{ $data['app_url'] }}/profile/bookings/{{ $data['transaction_id'] }}" class="redirect-button">View
            Booking Details</a>
    </div>
</body>

</html>
