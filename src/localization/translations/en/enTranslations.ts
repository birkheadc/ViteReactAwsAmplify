import ITranslations from "@/localization/translations/translationsInterface";

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
  },
};

export default enTranslations;
