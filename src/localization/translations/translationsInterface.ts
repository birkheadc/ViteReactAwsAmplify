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
        TestForm: {
          displayName: {
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
