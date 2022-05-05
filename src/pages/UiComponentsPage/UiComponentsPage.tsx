import {FC} from "react";
import Button from "../../components/Button/Button";
import "./UiComponentsPage.css";
import Input, {TypesInput} from "../../components/Input/Input";

const UiComponentsPage: FC = () => {
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
        <div>
          <Input
            type={TypesInput.Text}
            mode="secondary"
            value=""
            placeholder="Test placeholder"
            onChange={(event) => { console.log("change Input", event.target.value) }}
            onBlur={(event) => { console.log("blur Input", event) }}
            onFocus={(event) => { console.log("focus Input", event) }}
            />
        </div>
      </div>
    </>
  );
};

export default UiComponentsPage;
