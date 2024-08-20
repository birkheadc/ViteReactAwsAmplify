export default interface ITranslations {
  components: {
    form: {
      SubmitButton: {
        submit: string;
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
          login: string;
          register: string;
        };
      };
    };
    pages: {
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
