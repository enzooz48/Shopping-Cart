import { useEffect, useState } from 'react';
import Banner from './components/Banner';
import Categories from './components/Categories';
import Loading from './components/Loading';
import Other from './components/Other';
import Products from './components/Products';

function Home() {
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const timeOut = setTimeout(() => {
			setLoading(false);
		}, 2000);

		return () => {
			clearTimeout(timeOut);
		};
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<div className="page-holder">
					<div className="header bg-white">
						<div className="container">
							<Banner />
							<Categories />
							<Products />
							<Other />
						</div>
					</div>
				</div>
			)}
		</>
	);
}

export default Home;
