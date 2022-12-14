import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './pages/cart/Cart';
import Checkout from './pages/checkout/Checkout';
import Detail from './pages/detail/Detail';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Register from './pages/register/Register,';
import Shop from './pages/shop/Shop';
import { ToastContainer } from 'react-toastify';

//CSS
import './App.css';
import './css/custom.css';
import './css/Global-Style.css';
import 'react-toastify/dist/ReactToastify.css';
import Chat from './pages/chat/Chat';
import Navbar from './pages/home/components/Navbar';
import Footer from './pages/home/components/Footer';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/detail/:id" element={<Detail />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</BrowserRouter>

			<Chat />

			{/*  ToastContainer  */}
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default App;
