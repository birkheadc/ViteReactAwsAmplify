export default interface ITranslations {
  components: {
    nav: {
      PrimaryNav: {
        leftPanelTitle: string;
        rightPanelTitle: string;
        CoreLinks: {
          home: string;
          about: string;
          contact: string;
          books: string;
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
    };
  };
}
