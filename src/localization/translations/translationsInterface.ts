export default interface ITranslations {
  contexts: {
    SessionContext: {
      loginFailed: string;
      loginSucceeded: string;
      logoutSucceeded: string;
      automaticLoginFailed: string;
      working: string;
      loggingIn: string;
      loggingOut: string;
    };
    MeContext: {
      loggingIn: string;
    };
  };
  components: {
    form: {
      errorCode: {
        loginFailed: string;
        registrationFailed: string;
      };
      status: {
        "400": string;
      };
      validationErrors: {
        min: string;
        max: string;
        passwordMatch: string;
        unexpected: string;
        equal: string;
        notEqual: string;
        required: string;
        email: string;
        needsUppercase: string;
        needsLowercase: string;
        needsNumber: string;
        needsSymbol: string;
      };
      SubmitButton: {
        submit: string;
      };
      StandardForm: {
        invalid: string;
      };
    };
    nav: {
      PrimaryNav: {
        leftPanelTitle: string;
        rightPanelTitle: string;
        CoreLinks: {
          home: string;
          about: string;
          contact: string;
          books: string;
          form: string;
          toast: string;
        };
        SessionLinks: {
          LoggedInLinks: {
            logout: string;
            profile: string;
          };
          LoggedOutLinks: {
            login: string;
            register: string;
          };
        };
      };
    };
    pages: {
      ProfilePage: {
        UpdateProfileForm: {
          title: string;
          description: string;
          displayName: {
            label: string;
            description: string;
          };
          email: {
            label: string;
            description: string;
          };
          roles: {
            label: string;
            description: string;
          };
        };
      };
      ToastPage: {
        ToastTestButtons: {
          message: string;
          explanation: string;
          info: {
            message: string;
            button: string;
          };
          success: {
            message: string;
            button: string;
          };
          warning: {
            message: string;
            button: string;
          };
          error: {
            message: string;
            button: string;
          };
          default: {
            message: string;
            button: string;
          };
        };
      };
      BooksPage: {
        BooksDisplay: {
          title: string;
          author: string;
          pages: string;
        };
      };
      FormPage: {
        ExampleForm: {
          title: string;
          description: string;
          displayName: {
            label: string;
            description: string;
          };
          password: {
            label: string;
            description: string;
          };
          passwordConfirm: {
            label: string;
            description: string;
          };
          secretCode: {
            label: string;
            description: string;
          };
        };
      };
    };
    common: {
      NoMoreData: {
        noMoreData: string;
      };
    };
  };
}
