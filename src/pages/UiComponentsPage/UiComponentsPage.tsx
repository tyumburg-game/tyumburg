import { FC } from "react";
import Button from "../../components/Button/Button";
import "./UiComponentsPage.css";
import Input from "components/Input/Input";
import ValidationMessage from "components/Input/ValidationMessage/ValidationMessage";

const UiComponentsPage: FC = () => {
  return (
    <div className="grid">
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
      <div className="inputs-grid">
        <div>Default input</div>
        <Input onChange={() => {}} value="input" />
        <div>Labeled input</div>
        <Input onChange={() => {}} value="input" label="First Name" />
        <div>Invalid input</div>
        <Input
          onChange={() => {}}
          value="input"
          label="First Name"
          mode="error"
          comment={<ValidationMessage>invalid</ValidationMessage>}
        />
      </div>
    </div>
  );
};

export default UiComponentsPage;
