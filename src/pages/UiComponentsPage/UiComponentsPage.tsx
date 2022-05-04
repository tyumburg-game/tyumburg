import { FC } from "react";
import Button from "../../components/Button/Button";
import "./UiComponentsPage.css";

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
          <Button mode="secondary" classNames="parent-class-name">
            Secondary
          </Button>
        </div>
        <div>
          <Button
            mode="dangerous"
            classNames={["parent-class-name-one", "parent-class-name-two"]}
          >
            Dangerous
          </Button>
        </div>
      </div>
    </>
  );
};

export default UiComponentsPage;
