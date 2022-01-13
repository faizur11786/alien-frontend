import { Header, Footer, CopyRight } from '../components';

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
			<CopyRight />
		</>
	);
};

export default Layout;
