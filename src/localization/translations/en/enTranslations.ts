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
          toast: "toast",
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
      ToastPage: {
        ToastTestButtons: {
          message:
            "Press the buttons below to try out what various toasts look like.",
          info: {
            message: "Here is some information in an `Info` toast!",
            button: "info",
          },
          success: {
            message: "Congratulations! Your `Success` toast has arrived!",
            button: "success",
          },
          warning: {
            message: "Watch out! `Warning` toast coming through!",
            button: "warning",
          },
          error: {
            message: "Oh no! This is what an `Error` toast looks like!",
            button: "error",
          },
          default: {
            message: "This is the `Default` type of toast.",
            button: "default",
          },
          explanation:
            "Notice that the toast refreshes if you press it before the previous one disappears, rather than a new one stacking up. This is because the buttons use a custom `useRefreshToast` hook, where any toast that shares an ID with a currently visible toast will replace it.The next group of buttons don't use this system, so try them as well!",
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
