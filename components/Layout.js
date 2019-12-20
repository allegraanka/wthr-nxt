import Header from './Header';

const layoutStyle = {
    padding: 20,
    margin: 20
}

const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

export default Layout;