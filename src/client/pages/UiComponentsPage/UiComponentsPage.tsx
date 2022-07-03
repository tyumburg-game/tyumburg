import { useState, useCallback, ChangeEvent } from "react";
import ErrorBoundary from "components/ErrorBoundary/ErrorBoundary";
import Input from "components/Input/Input";
import ValidationMessage from "components/Input/ValidationMessage/ValidationMessage";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import "./UiComponentsPage.css";

export function UiComponentsPage() {
  const [text, setText] = useState<string>("");

  const handleFirstName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    []
  );

  return (
    <ErrorBoundary>
      <div className="grid">
        <div className="modals-grid">
          <Modal>
            <Modal.Header title="Modal Title" />
            <Modal.Content>Content</Modal.Content>
            <Modal.Footer>Footer</Modal.Footer>
          </Modal>
          <div>Dialog</div>
          <Modal fixed={false}>
            <Modal.Header title="Modal Title" />
            <Modal.Content>
              <div className="inputs-grid">
                <div>Default input</div>
                <Input onChange={() => {}} value="input" label="First Name" />
                <div>Invalid input</div>
                <Input
                  onChange={handleFirstName}
                  value={text}
                  label="First Name"
                  mode="error"
                  comment={<ValidationMessage>invalid</ValidationMessage>}
                />
                <div>Type number</div>
                <Input
                  onChange={() => {}}
                  value="3"
                  label="Ages"
                  type="number"
                />
              </div>
            </Modal.Content>
            <Modal.Footer>
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
                    className="parent-class-name"
                    onClick={(event) => console.log("click", event)}
                  >
                    Secondary
                  </Button>
                </div>
                <div>
                  <Button
                    mode="dangerous"
                    className="parent-class-name-one parent-class-name-two"
                    onClick={(event) => console.log("click", event)}
                  >
                    Dangerous
                  </Button>
                </div>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </ErrorBoundary>
  );
}
