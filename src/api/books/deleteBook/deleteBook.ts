import utils from "../../../utils";

const deleteBook = async (bookId: string): Promise<void> => {
  await utils.apiSubmit({
    path: `books/${bookId}`,
    init: { method: "DELETE" },
  });
};

export default deleteBook;
