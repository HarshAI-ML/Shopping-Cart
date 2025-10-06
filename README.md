# Shopping-Cart

Simple Shopping Cart application using React , javascript . css and nodejs for backend

## Features

- Product listing and details
- Add to cart and checkout
- Backend API for products and orders

## Tech Stack

- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Data:** Hardcoded JSON (no database)

## Setup

1. Clone this repository:
   git clone https://github.com/HarshAI-ML/Shopping-Cart.git

2. open new terminal ,go to Server folder , install dependencies and Start the backend server
   cd Server
   npm i
   node server.js

3. open another new terminal , go to Client Folder , install dependencies and run the frontend
   cd Client
   npm run dev

On your localhost you would see your frontend and Backend running

**How to run test cases** 
Run client tests (Vitest)
- cd Client
- npm i
- npm run test

Run Server tests
- cd Server
- npm i
- npm run test

**Assumptions made**
- Prices are in INR , no multi-currency
- Network targets are fixed: http://localhost:5000 for API; CORS enabled for local dev.
- No CDN for images, they are directly loaded from data(JSON)
- Products have defined features - id ,image ,  description , price
- No need to render Id in frontend, mostly used for backend check
- No validation made at any point.

 **Design choices** 
 - I have used Client server model , as they could be well scalable in future and makes the code modular, lossely coupled  and loosely coupled.
 - Created Pages folder , so that the components which are worked upon in that page can be combined , and only a single and clean render could be made in App.jsx , keeping the file clean
 - Kept DATA , JSON file in backend , as normally is ..
 - As multiple components made changes to a particular variable like total_price , i have used Context API so that another component can work with the same .
 - As Application is simple and not complex , i thought to go ahead with smoke tests rather than individual unit or regression tests

 **Video**
 https://www.loom.com/share/3280615e94f744b1a15dea7a51ebb401?sid=eeec8fb7-d91a-4e9c-8f5d-d895a2171fe4

 
 

**Screenshots**
<img width="1909" height="974" alt="Screenshot 2025-10-06 162228" src="https://github.com/user-attachments/assets/24465aef-f412-4781-a4cc-84577f9ef0a5" />

<img width="1911" height="946" alt="Screenshot 2025-10-06 162820" src="https://github.com/user-attachments/assets/5e4cd6fb-8b69-4e9d-a26d-96d227959681" />

<img width="1916" height="548" alt="Screenshot 2025-10-06 162731" src="https://github.com/user-attachments/assets/dacbcc79-b27e-41dd-864b-ff3c386e5517" />







**Folder Structure for reference**

<img width="275" height="691" alt="image" src="https://github.com/user-attachments/assets/a21fb378-83ed-4aad-bb8e-2846c4c8e364" />

