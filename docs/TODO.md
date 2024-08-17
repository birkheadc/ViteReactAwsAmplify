# TODO

- Set up branches on Amplify -- right now every branch points to Development branch of backend
- Create a more dynamic method of mocking api for storybook
- Wrap ApiContext in a useApi hook like useTheme
- Create a framework for forms, then create register and login forms
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
- Toast system
  - Will probably need to be done before forms submition
