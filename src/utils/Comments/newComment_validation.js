export const Comment_Content = {
    name: 'Comment_Content',
    type: 'text',
    id: 'Comment_Content',
    label: 'Comment Content',
    placeholder: 'Your Comment ...',
    validation: {
      required: {
        value: true,
        message: 'Comment Content is required!',
      },
      maxLength: {
        value: 50,
        message: '50 characters max!',
      },
    },
  }