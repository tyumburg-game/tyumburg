import {FC, useState} from "react";
import Button from "../../components/Button/Button";
import "./UiComponentsPage.css";
import Input, {TypesInput, Event} from "../../components/Input/Input";

const UiComponentsPage: FC = () => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event: Event) => {
    console.log("change Input", event && event.target && event.target.value || "")
    setInputValue(event.target.value)

  }

  return (
    <>
      <div className="buttons-grid">
        <div>
          <Button
            mode="primary"
            onClick={(event) => console.log("click", event)}
          >
            Primary
          </Button>
        </div>
        <div>
          <Button
            mode="secondary"
            classNames="parent-class-name"
            onClick={(event) => console.log("click", event)}
          >
            Secondary
          </Button>
        </div>
        <div>
          <Button
            mode="dangerous"
            classNames={["parent-class-name-one", "parent-class-name-two"]}
            onClick={(event) => console.log("click", event)}
          >
            Dangerous
          </Button>
        </div>
      </div>
      <br/>
      <div>
        <Input
          type={TypesInput.Text}
          mode="secondary"
          value={inputValue}
          placeholder="Test placeholder"
          onChange={handleChange}
          onBlur={(event) => { console.log("blur Input", event) }}
          onFocus={(event) => { console.log("focus Input", event) }}
        />
      </div>
    </>
  );
};

export default UiComponentsPage;
