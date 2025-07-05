# 📚 Pustika — Used Book Marketplace

**Pustika** is a fully functional **online marketplace** where users can **buy and sell used books**. This project was originally built to learn **Next.js**, but it evolved into a real-world full-stack application with advanced features such as authentication, cloud image uploads, messaging between users, and complete CRUD functionality.

> 🧠 _Built from scratch — no templates, no boilerplate — just pure full-stack learning with the goal of shipping a complete product._

🔗 **Repository:** [github.com/anishrajpandey/pustika](https://github.com/anishrajpandey/pustika)  
🚀 **Live Demo:** *Coming soon / Add Vercel link here if deployed*

---

## 🚀 Features

- 🧑‍💼 **User Authentication** (Sign Up / Log In / Log Out)
- 📚 **List Your Books for Sale** with title, price, condition, and description
- 🖼️ **Upload Book & Profile Images** using **Cloudinary**
- ✏️ **Edit/Delete Listings** at any time
- 📨 **Contact Seller** — buyers can notify sellers of purchase interest
- 🧾 **View All Listings** with filtering by category or condition
- 📦 **User Dashboard** to manage listings and profile
- 🌐 **Responsive UI** with Tailwind CSS
- 🔐 Backend built with Node.js and secure password hashing
- 💬 Fully custom messaging logic — no third-party tools for core features


---

## 🧰 Tech Stack

| Layer       | Tech Stack                                         |
|-------------|----------------------------------------------------|
| 🧠 Frontend  | React, Tailwind CSS, Next.js                      |
| ⚙️ Backend   | Node.js, Next.js API Routes                        |
| 🗃️ Database  | MongoDB (via Mongoose)                             |
| ☁️ Cloud     | Cloudinary for image uploads                      |
| 🔐 Auth      | Custom authentication (no Firebase/Auth0)          |
| 🎨 Styling   | Tailwind CSS                                       |
| 🚀 Hosting   | Vercel (Frontend + API), MongoDB Atlas, Cloudinary |

---

## 📸 Screenshots


### 📍 Home Page
<img width="1466" alt="Screenshot 2025-07-05 at 3 52 27 PM" src="https://github.com/user-attachments/assets/b1f367f3-af5a-49d6-a742-626f76f062e8" />

### 📘 Book Listing
<img width="1469" alt="Screenshot 2025-07-05 at 3 53 25 PM" src="https://github.com/user-attachments/assets/4649f182-b4cb-4c1e-a993-77b08aeaf07e" />



### 👤 Dashboard

<img width="736" alt="Screenshot 2025-07-05 at 3 55 14 PM" src="https://github.com/user-attachments/assets/d8703ca7-c91e-4ab9-a9d3-4eb969bc0578" />

---

## 🏗️ Project Structure

<pre lang="markdown"><code>```bash pustika/ ├── components/ # Reusable React components ├── lib/ # Cloudinary config, helper functions ├── models/ # Mongoose schemas for users, books, etc. ├── pages/ # Next.js pages (with API routes) │ ├── api/ # Backend API routes (auth, books, etc.) │ ├── auth/ # Login/Register pages │ ├── dashboard/ # User dashboard │ ├── index.js # Home page ├── public/ # Static assets ├── styles/ # Global CSS / Tailwind config ├── utils/ # Middleware, DB config ├── .env.local # Environment variables ├── next.config.js └── README.md ```</code></pre>



---

## 🧠 Key Learning Outcomes

- ✅ Full-stack product development using **Next.js**
- ✅ Built a custom **auth system** without relying on third-party tools
- ✅ Used **Mongoose** for MongoDB schema design & querying
- ✅ Integrated **Cloudinary** for smooth image handling
- ✅ Developed a real-world UX for buyers & sellers
- ✅ Solidified React + Tailwind component workflows
- ✅ Created scalable backend routes with custom logic

---

## 🧪 Getting Started (Local Setup)

### 1. Clone the Repository

git clone https://github.com/anishrajpandey/pustika.git
cd pustika



npm install

MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret

npm run dev
2. Install Dependencies
bash
Copy
Edit
npm install
3. Set Up Environment Variables
Create a .env.local file in the root folder and add the following:

env
Copy
Edit
MONGODB_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
4. Run the App
bash
Copy
Edit
npm run dev
Visit http://localhost:3000 to view it in your browser.

🛠️ Potential Improvements
 Add real-time buyer-seller chat system

 Implement search functionality

 Add pagination and filtering UX for large listings

 Add admin dashboard for moderation and insights

 Use Next.js App Router (v13+) for better routing and performance

 Add SEO optimizations and structured metadata

 Email verification & password reset flow

🤝 Contributing
While this was a solo learning project, you're welcome to fork it or build on top of it.

Made with 💻 and 📚 by Anish Raj Pandey



