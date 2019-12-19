// import from next.js link api for client-side navigation
import Link from 'next/link';
import Layout from '../components/Layout';

const PostLink = props => (
    <li>
        <Link href="/p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

const Index = () => (
    <div>
        <Layout>
            <h1>wthr-next</h1>
            <p>wthr-nxt tagline</p>
            <span>if you'd like to know more, read </span>
            <Link href='/about'>
                <a>about us</a>
            </Link>
            <ul>
                <PostLink id='postone'></PostLink>
                <PostLink id='posttwo'></PostLink>
                <PostLink id='postthree'></PostLink>
            </ul>
        </Layout>
    </div>
);

export default Index;