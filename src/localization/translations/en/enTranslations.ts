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
          LoggedInLinks: {
            logout: "logout",
            profile: "profile",
          },
          LoggedOutLinks: {
            login: "login",
            register: "register",
          },
        },
        leftPanelTitle: "navigation",
        rightPanelTitle: "profile",
      },
    },
    pages: {
      ProfilePage: {
        UpdateProfileForm: {
          title: "update profile",
          description: "update your profile information here",
          displayName: {
            label: "display name",
            description:
              "the name other users will recognize you by. it cannot be `colby`, because that is my name!",
          },
          email: {
            label: "email address",
            description:
              "your email address is used for logging in. it cannot be changed.",
          },
          roles: {
            label: "roles",
            description:
              "the roles you have been assigned. they cannot be changed.",
          },
        },
      },
      BooksPage: {
        BooksDisplay: {
          title: "title",
          author: "author",
          pages: "pages",
          BookTableRow: {
            DeleteBookButton: {
              ConfirmDeleteBookModal: {
                message: "Are you sure you want to delete this book?",
                cancelButtonText: "cancel",
                confirmButtonText: "delete",
              },
            },
          },
        },
        CreateBookWidget: {
          createBook: "create new book",
        },
        BookForm: {
          title: "book form",
          description: {
            create: "create a new book",
            edit: "edit a book",
          },
          fields: {
            title: {
              label: "title",
              description: "the title of the book",
            },
            author: {
              label: "author",
              description: "the author of the book",
            },
            pages: {
              label: "pages",
              description: "the number of pages in the book",
            },
          },
        },
      },
      FormPage: {
        ExampleForm: {
          displayName: {
            label: "display name",
            description:
              "the name other users will recognize you by. it cannot be `colby`, because that is my name!",
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
          title: "example form",
          description:
            "This form can be used for developing and testing the form framework, to check how style changes affect forms, or as a general demo. I try to incorporate all new inputs into the form as well, so it can also be used as a library of form components.",
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
      RoleInput: {
        RoleInputButton: {
          noRoles: "no special roles",
          plusNMore: " +{{n}} more",
        },
        RoleInputModal: {
          cancel: "cancel",
          save: "save",
        },
      },
      StandardForm: {
        invalid: "There were some problems with the form.",
      },
      validationErrors: {
        passwordMatch: "Password does not match.",
        unexpected: "An unexpected error occurred: {{e}}",
        equal: "Must be '{{v}}'.",
        notEqual: "Must not be '{{v}}'.",
        required: "Required.",
        email: "Must be a valid email address.",
        needsUppercase: "Must contain an uppercase letter.",
        needsLowercase: "Must contain a lowercase letter.",
        needsNumber: "Must contain a number.",
        needsSymbol:
          "Must contain one of the following symbols: ^ $ * . [ ] { } ( ) ? - \" ! @ # % & / \\ , > < ' : ; | _ ~ ` + = ",
        invalid_type: {
          number: "Must be a number.",
          integer: "Must be a whole number.",
        },
        too_small: {
          number: {
            inclusive: "Must be at least {{n}}.",
            exclusive: "Must be greater than {{n}}.",
          },
          string: {
            inclusive: "Must be at least {{n}} characters.",
            exclusive: "Must be longer than {{n}} characters.",
          },
        },
        too_big: {
          number: {
            inclusive: "Must be at most {{n}}.",
            exclusive: "Must be less than {{n}}.",
          },
          string: {
            inclusive: "Must be at most {{n}} characters.",
            exclusive: "Must be shorter than {{n}} characters.",
          },
        },
      },
      status: {
        400: "There were one or more problems with your request.",
      },
      errorCode: {
        loginFailed: "Failed to login with these credentials.",
        registrationFailed:
          "Failed to register an account with these credentials.",
      },
    },
  },
  contexts: {
    SessionContext: {
      loginFailed: "Something went wrong while logging in.",
      loginSucceeded: "Logged in successfully.",
      logoutSucceeded: "Logged out successfully.",
      automaticLoginFailed:
        "Something went wrong while automatically logging you in.",
      working: "Working...",
      loggingIn: "Logging in...",
      loggingOut: "Logging out...",
    },
    MeContext: {
      loggingIn: "Logging in...",
    },
  },
  types: {
    user: {
      UserRole: {
        0: {
          name: "Super Admin",
          description:
            "Allows the user to perform all actions. Cannot be added or removed.",
        },
        1: {
          name: "Admin",
          description: "Allows the user to perform most actions.",
        },
      },
    },
  },
};

export default enTranslations;
