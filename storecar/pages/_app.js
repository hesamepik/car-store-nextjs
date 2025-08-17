import "@/styles/globals.css";
import Layoutss from "@/components/layouts/Layoutss";

export default function App({ Component, pageProps }) {
  return (
    <Layoutss>
      <Component {...pageProps} />
    </Layoutss>
  );
}
