import { useRouter } from 'next/router';
import Layout from '../components/Layout';

const Content = () => {
    const router = useRouter();

    return(
        <>
            <h1>{router.query.title}</h1>
            <p>this is the content of the page.</p>
        </>
    );
}

const Page = () => {
    return(
        <Layout>
            <Content />
        </Layout>
    );
};

export default Page;