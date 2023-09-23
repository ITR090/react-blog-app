export const Post_Title = {
    name: 'Post_Title',
    label: 'Post Title',
    type: 'text',
    id: 'Post_Title',
    placeholder: 'Post Title ...',
    validation: {
      required: {
        value: true,
        message: 'Post Title is required!',
      },
      maxLength: {
        value: 30,
        message: '30 characters max!',
      },
    },
  }


  export const Post_Content = {
    name: 'Post_Content',
    multiline: true,
    label: 'Post Content',
    id: 'Post_Content',
    placeholder: 'Post Content ...',
    validation: {
      required: {
        value: true,
        message: 'Post Content is required!',
      },
      maxLength: {
        value: 800,
        message: '800 characters max!',
      },
    },
  }


  


  export const Post_File = {
    name: 'file',
    label: 'Post Header Image',
    type: 'file',
    id: 'file',
    validation: {
      required: {
        value: true,
        message: 'Post file is required!',
      }
    },
  }