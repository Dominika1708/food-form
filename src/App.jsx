import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { FoodForm } from "./components/form.jsx";

function App() {
  const sendRequest = async (values) => {
    try {
      const response = await fetch(
        "https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      const data = await response.json()
      return alert("Request sent successfully!\nresponse data: "+ JSON.stringify(data));
    } catch (err) {
      alert(err.message)
    }
  };

  return (
    <>
      <h1 className="title">FOOD FORM</h1>
      <FoodForm onSubmit={sendRequest}>
        <Button
          variant="outline-light"
          size="lg"
          type="submit"
          disabled={false}
        >
          Submit
        </Button>
      </FoodForm>
    </>
  );
}

export default App;
