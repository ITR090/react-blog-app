export const password_validation = {
    name: 'password',
    label: 'Password',
    type: 'password',
    id: 'password',
    placeholder: 'type password ...',
    validation: {
      required: {
        value: true,
        message: 'Password is required!',
      },
      minLength: {
        value: 6,
        message: 'min 6 characters!',
      },
    },
  }