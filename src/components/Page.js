import Header from "./Header";
import Form from "./Form";

const Page = () => {
    return (
        <>
            <Header />
            <Form submitSearch={true} />
            <h1>Page</h1>
        </>
    );
}

export default Page;