import { Helmet } from "react-helmet";
import Login from "../sections/loginPages/Login";

export default function Order() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        {/* <link rel="canonical" href="http://mysite.com/example" /> */}
      </Helmet>
      <Login />
    </>
  );
}
