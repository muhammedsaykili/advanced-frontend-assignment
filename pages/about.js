import Form from "../components/Form";
import Counter from "../components/Counter";
import FormComponent from "../components/FormComponent";
import HoverComponent from "../components/HoverComponent";
import ItemList from "../components/ItemList";
import ToggleComponent from "../components/ToggleComponent";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <Form />
      <Counter />
      <FormComponent />
      <HoverComponent />
      <ItemList />
      <ToggleComponent />
    </div>
  );
}
