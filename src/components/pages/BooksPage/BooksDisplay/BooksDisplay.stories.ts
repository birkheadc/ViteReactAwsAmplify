import { Meta, StoryObj } from "@storybook/react";
import BooksDisplay from "./BooksDisplay";
import { Paginated } from "@/types/paginated/paginated";
import { Book } from "@/types/book/book";
import { fn } from "@storybook/test";

const queryFnMock = async (
  paginationToken?: string,
): Promise<Paginated<Book>> => {
  await new Promise((res) => {
    setTimeout(res, 1000);
  });

  const startIndex = parseInt(paginationToken ?? "0");

  const books: Book[] = [];
  for (let i = 0; i < 10; i++) {
    const index = i + startIndex;
    const id = index.toString().padStart(4, "0");
    books.push({
      id: id,
      title: `Test Book ${id}`,
      author: `Test Author ${id}`,
      pages: index * 17,
    });
  }

  return {
    values: books,
    paginationToken: (startIndex + 10).toString(),
  };
};

const meta: Meta<typeof BooksDisplay> = {
  title: "Components/Pages/BooksPage/BooksDisplay",
  component: BooksDisplay,
  args: {
    queryFn: fn().mockImplementation(queryFnMock),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const LargeScreen: Story = {};

export const SmallScreen: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobileVertical",
    },
  },
};
