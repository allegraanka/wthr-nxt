import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <Layout>
    <h1>wthr currently</h1>
    <ul>
      <li>{props.wthr_obj.time}</li>
      <li>{props.wthr_obj.summary}</li>
      <li>{props.wthr_obj.temperature}</li>
    </ul>
  </Layout>
);

Index.getInitialProps = async ({ req }) => {
  const res = await fetch('https://api.darksky.net/forecast/0e17dfdfdee5ff8839c6ffead1cf1b74/37.8267,-122.4233');
  const data = await res.json();
  console.log(data);
  return {wthr_obj: data.currently};
};

export default Index;