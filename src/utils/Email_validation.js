export const email_validation = {
    name: 'email',
    label: 'Email address',
    type: 'email',
    id: 'email',
    placeholder: 'write a random email address',
    validation: {
      required: {
        value: true,
        message: 'Email is required!',
      },
      pattern: {
        value:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Email not valid!',
      },
    },
  }