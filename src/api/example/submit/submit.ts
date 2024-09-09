import { ExampleFormSchema } from "../../../components/pages/FormPage/ExampleForm/ExampleForm.schema";
import utils from "../../../utils";

const submit = async (data: ExampleFormSchema): Promise<void> => {
  await utils.apiSubmit({
    path: "example",
    init: {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export default submit;
