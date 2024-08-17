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
          form: "form",
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
      FormPage: {
        ExampleForm: {
          displayName: {
            label: "display name",
            description: "the name other users will recognize you by",
          },
          password: {
            label: "password",
            description: "keep it secret, keep it safe",
          },
          secretCode: {
            label: "secret code",
            description:
              "the server will tell you what to put here after you submit once",
          },
          passwordConfirm: {
            label: "confirm password",
            description:
              "this has to perfectly match the previous password field",
          },
        },
      },
    },
    common: {
      NoMoreData: {
        noMoreData: "nothing more to load",
      },
    },
    form: {
      SubmitButton: {
        submit: "submit",
      },
    },
  },
};

export default enTranslations;
