import { Helmet } from "react-helmet";
import Heading from "../sections/orderPages/Heading";

export default function Order() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Heading />
    </>
  );
}
