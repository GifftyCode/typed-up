import { useRef } from "react";

import Button from "./UI/Button2";
import Form, { FormHandle } from "./UI/Form";
import Input from "./UI/InputRef";
import { useTimersContext } from "../store/timers-context";

export default function AddTimer() {
  const form = useRef<FormHandle>(null);

  const { addTimer } = useTimersContext();

  function handleSaveTimer(data: unknown) {
    const extractedData = data as { name: string; duration: string };
    addTimer({ name: extractedData.name, duration: +extractedData.duration });
    form.current?.clear();
  }

  return (
    <Form ref={form} onSave={handleSaveTimer} id="add-timer">
      <Input type="text" label="Name" id="name" />
      <Input type="text" label="Duration" id="duration" />

      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  );
}
