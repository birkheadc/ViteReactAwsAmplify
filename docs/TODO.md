# TODO

- Set up branches on Amplify -- right now every branch points to Development branch of backend
- Create a more dynamic method of mocking api for storybook
- Create a framework for forms, then create register and login forms

  - Can probably combine a lot of the form elements into one custom element that includes them all...
  - Need to incorporate i18n into zod errors, looks like that can be done with FieldError.type as the key
  - Create a TestForm that utilizes many/all features of the framework and explains them
    - Client Side validation
      - Have some fields that are validated client side and can't be submitted unless correct
    - Server Side validation
      - Have a `SecretCode` field that the client does not know, but the server will respond with an error telling the client what the value must be after submitting
        - Use this as an oppurtunity to get server error messages working (with translations), and get the client correctly parsing those errors
    - Password and Repeat Password fields that must be equal
    - Complex Inputs
      - Don't have to create any complex inputs atm, but in the future complex input creation should be done via this form.
      - This form can thus also act as a library of inputs

- Translate aria labels

- Add a toast when unable to fetch books

  - Maybe color the error box beneath the table as well

- useRefreshToast fails to launch a toast at all if it tries to launch a toast just as the previous toast is expiring
  - Maybe a problem with the package...

- Update npm packages

- Create some kind of system for forcing a user to update their data when it is incomplete (display name must be chosen, etc)

  - Modal or reroute to profile page form? Hmm...

- Fix table columns misalignment, right align numbers

- In development, get a 404 for some reason on first page load...