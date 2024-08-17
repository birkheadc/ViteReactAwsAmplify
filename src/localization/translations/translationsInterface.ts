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
        };
        SessionLinks: {
          login: string;
          register: string;
        };
      };
    };
    pages: {
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
