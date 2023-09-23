export const name_validation = {
    name: 'name',
    label: 'Name',
    type: 'text',
    id: 'name',
    placeholder: 'write your name ...',
    validation: {
      required: {
        value: true,
        message: 'Name is required!',
      },
      maxLength: {
        value: 30,
        message: '30 characters max!',
      },
    },
  }