export const desc_validation = {
    name: 'description',
    label: 'Description',
    multiline: true,
    id: 'description',
    placeholder: 'write description ...',
    validation: {
      required: {
        value: true,
        message: 'Description is required!',
      },
      maxLength: {
        value: 50,
        message: '50 characters max!',
      },
    },
  }
  