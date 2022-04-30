import { FC } from "react";
import Button from "../../components/Button/Button";
import "./UiComponentsPage.css";

const UiComponentsPage: FC = () => {
  return (
    <>
      <div className="buttons-grid">
        <div>
          <Button mode={"primary"}>Primary</Button>
        </div>
        <div>
          <Button mode={"primary"} intention={"dangerous"}>
            Primary dangerous
          </Button>
        </div>
        <div>
          <Button mode={"secondary"}>Secondary</Button>
        </div>
        <div>
          <Button mode={"secondary"} intention={"dangerous"}>
            Secondary dangerous
          </Button>
        </div>
      </div>
    </>
  );
};

export default UiComponentsPage;
