import { BookFormSchema } from "../../../components/pages/BooksPage/BookForm/BookForm.schema";
import utils from "../../../utils";

const create = async (book: BookFormSchema): Promise<void> => {
  await utils.apiSubmit({
    path: "books",
    init: {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        "Content-Type": "application/json",
      },
    },
  });
};

export default create;
