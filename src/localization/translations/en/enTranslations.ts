import ITranslations from "../translationsInterface";

const enTranslations: ITranslations = {
  components: {
    nav: {
      PrimaryNav: {
        CoreLinks: {
          home: "home",
          about: "about",
          contact: "contact",
          books: "books",
        },
        SessionLinks: {
          login: "login",
          register: "register",
        },
        leftPanelTitle: "navigation",
        rightPanelTitle: "profile",
      },
    },
    pages: {
      BooksPage: {
        BooksDisplay: {
          title: "title",
          author: "author",
          pages: "pages",
        },
      },
    },
    common: {
      NoMoreData: {
        noMoreData: "nothing more to load",
      },
    },
  },
};

export default enTranslations;
