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
      LoginPage: {
        LoginForm: {
          title: "Login",
          description: "Please enter your credentials.",
          emailAddress: {
            label: "email address",
          },
          password: {
            label: "password",
          },
        },
      },
      RegisterPage: {
        RegisterForm: {
          title: "Register",
          description: "Enter your credentials to register an account.",
          emailAddress: {
            label: "email address",
          },
          password: {
            label: "password",
          },
          passwordConfirm: {
            label: "confirm password",
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
      StandardForm: {
        invalid: "There were some problems with the form.",
      },
      validationErrors: {
        min: "Must be at least {{n}} characters.",
        max: "Must be at most {{n}} characters.",
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
    UserContext: {
      failed_to_fetch_user:
        "Something went wrong while logging in. Please try again.",
    },
  },
};

export default enTranslations;
