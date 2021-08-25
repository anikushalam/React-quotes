import { useEffect } from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router-dom";

import { addQuote } from "../lib/api";
import useHttp from "../hooks/use-http";
const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (quoteData) => {
    sendRequest(quoteData);
    //to goto the another page or redirect or back page
    // history.push("/quotes");
  };
  return (
    <QuoteForm isLoading={status === "pending"} onAddQuote={addQuoteHandler} />
  );
};

export default NewQuote;
