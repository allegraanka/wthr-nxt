// import Layout from '../components/Layout';
// import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

function Index({wthr_obj}) {
  return <div>wthr currently:{wthr_obj}</div>
}

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.darksky.net/forecast/0e17dfdfdee5ff8839c6ffead1cf1b74/37.8267,-122.4233');
  const data = await res.json();
  console.log(data);
  return {wthr_obj: JSON.stringify(data.currently)};
};

export default Index;